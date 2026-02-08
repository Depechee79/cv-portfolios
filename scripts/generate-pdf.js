/**
 * CV PDF Generator with QR Code
 * Usage: node scripts/generate-pdf.js <portfolio> [--url=<portfolio-url>]
 * Example: node scripts/generate-pdf.js mireia --url=https://depechee79.github.io/cv-portfolios/portfolios/mireia/dist/
 *
 * Generates a clean, printable PDF CV from the portfolio's data.json.
 * Includes a circular QR code linking back to the web portfolio.
 *
 * Dependencies: npm install puppeteer qrcode
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Parse arguments
const args = process.argv.slice(2);
const portfolio = args.find(a => !a.startsWith('--'));
const urlArg = args.find(a => a.startsWith('--url='));

if (!portfolio) {
    console.error('Usage: node scripts/generate-pdf.js <portfolio> [--url=<portfolio-url>]');
    process.exit(1);
}

const portfolioDir = path.join(ROOT, 'portfolios', portfolio);
const dataPath = path.join(portfolioDir, 'data.json');

if (!fs.existsSync(dataPath)) {
    console.error(`Data file not found: ${dataPath}`);
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const portfolioUrl = urlArg
    ? urlArg.replace('--url=', '')
    : `https://depechee79.github.io/cv-portfolios/portfolios/${portfolio}/dist/`;

async function generatePDF() {
    let puppeteer, QRCode;

    try {
        puppeteer = require('puppeteer');
    } catch (e) {
        console.error('❌ Missing dependency: puppeteer');
        console.error('   Run: npm install puppeteer');
        process.exit(1);
    }

    try {
        QRCode = require('qrcode');
    } catch (e) {
        console.error('❌ Missing dependency: qrcode');
        console.error('   Run: npm install qrcode');
        process.exit(1);
    }

    console.log(`Generating PDF for: ${portfolio}`);
    console.log(`QR links to: ${portfolioUrl}`);

    // Generate QR code as data URL (circular style achieved via CSS)
    const qrDataUrl = await QRCode.toDataURL(portfolioUrl, {
        width: 200,
        margin: 1,
        color: {
            dark: data.theme === 'medical' ? '#1a4f5a' : '#1C1C1C',
            light: '#ffffff'
        }
    });

    // Photo as base64 (if exists)
    const photoPath = path.join(portfolioDir, 'photo.jpg');
    let photoBase64 = '';
    if (fs.existsSync(photoPath)) {
        const photoBuffer = fs.readFileSync(photoPath);
        photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;
    }

    // Build HTML for PDF (A4 optimized, print-friendly)
    const lang = 'es'; // Default to Spanish for PDF
    const accent = data.theme === 'medical' ? '#1a4f5a' : '#B8956A';

    const experienceHTML = data.experience ? data.experience.items.map(item => `
        <div class="exp-item">
            <div class="exp-date">${item.date[lang]}</div>
            <div class="exp-content">
                <div class="exp-place">${item.place[lang]}</div>
                <div class="exp-role">${item.role[lang]}</div>
                <div class="exp-desc">${item.desc[lang]}</div>
            </div>
        </div>
    `).join('') : '';

    const educationHTML = data.education ? data.education.items.map(item => `
        <div class="edu-item">
            <div class="edu-date">${item.date[lang]}</div>
            <div class="edu-content">
                <div class="edu-school">${item.school[lang]}</div>
                <div class="edu-title">${item.title[lang]}</div>
                ${item.details ? `<div class="edu-details">${item.details[lang]}</div>` : ''}
            </div>
        </div>
    `).join('') : '';

    const skillsHTML = data.skills ? `
        <div class="skills-list">
            ${data.skills.items.map(s => `<span class="skill-tag">${s[lang]}</span>`).join('')}
        </div>
        <div class="languages-list">
            ${data.skills.languages.map(l => `
                <div class="lang-item">
                    <span class="lang-name">${l.name[lang]}</span>
                    <span class="lang-level">${l.level[lang]}</span>
                </div>
            `).join('')}
        </div>
    ` : '';

    const referencesHTML = data.references ? `
        <section class="pdf-section">
            <h2>${data.references.title[lang]}</h2>
            ${data.references.items.map(r => `
                <div class="ref-item">
                    <strong>${r.name}</strong> — ${r.role[lang]}<br>
                    <em>${r.company[lang]}</em>
                </div>
            `).join('')}
            <p class="ref-note">${data.references.note[lang]}</p>
        </section>
    ` : '';

    const pdfHTML = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Lato', sans-serif;
            font-size: 10pt;
            line-height: 1.5;
            color: #333;
            padding: 30px 40px;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid ${accent};
        }

        .header-photo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid ${accent};
        }

        .header-info { flex: 1; }
        .header-info h1 {
            font-size: 20pt;
            color: ${accent};
            margin-bottom: 2px;
        }
        .header-info .subtitle {
            font-size: 11pt;
            font-weight: 300;
            color: #666;
        }

        .header-qr {
            text-align: center;
        }
        .qr-container {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid ${accent};
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
        }
        .qr-container img {
            width: 72px;
            height: 72px;
        }
        .qr-label {
            font-size: 6pt;
            color: #999;
            margin-top: 3px;
        }

        .contact-bar {
            display: flex;
            gap: 20px;
            font-size: 9pt;
            color: #666;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .contact-bar a { color: #666; text-decoration: none; }

        .two-columns {
            display: flex;
            gap: 25px;
        }
        .col-main { flex: 2; }
        .col-side { flex: 1; }

        .pdf-section {
            margin-bottom: 15px;
        }
        .pdf-section h2 {
            font-size: 12pt;
            color: ${accent};
            border-bottom: 1px solid #ddd;
            padding-bottom: 3px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .about-text {
            font-size: 9.5pt;
            color: #555;
            margin-bottom: 10px;
        }

        .exp-item, .edu-item {
            margin-bottom: 10px;
            display: flex;
            gap: 10px;
        }
        .exp-date, .edu-date {
            min-width: 100px;
            font-size: 8pt;
            color: #999;
            font-weight: 700;
        }
        .exp-place, .edu-school { font-weight: 700; font-size: 9.5pt; }
        .exp-role, .edu-title { font-size: 9.5pt; color: ${accent}; }
        .exp-desc, .edu-details { font-size: 8.5pt; color: #666; }

        .skill-tag {
            display: inline-block;
            background: ${accent}15;
            color: ${accent};
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 8.5pt;
            margin: 2px;
        }

        .languages-list { margin-top: 8px; }
        .lang-item {
            display: flex;
            justify-content: space-between;
            font-size: 9pt;
            padding: 2px 0;
            border-bottom: 1px dotted #eee;
        }
        .lang-name { font-weight: 700; }
        .lang-level { color: #888; }

        .ref-item { margin-bottom: 5px; font-size: 9pt; }
        .ref-note { font-size: 8pt; color: #999; font-style: italic; margin-top: 5px; }
    </style>
</head>
<body>

    <div class="header">
        ${photoBase64 ? `<img src="${photoBase64}" class="header-photo" alt="Photo">` : ''}
        <div class="header-info">
            <h1>${data.hero.name}</h1>
            <div class="subtitle">${data.hero.subtitle[lang]}</div>
        </div>
        <div class="header-qr">
            <div class="qr-container">
                <img src="${qrDataUrl}" alt="QR">
            </div>
            <div class="qr-label">Portfolio web</div>
        </div>
    </div>

    <div class="contact-bar">
        <span>📞 ${data.contact.phone}</span>
        <span>✉ ${data.contact.email}</span>
        <span>📍 ${data.contact.location[lang]}</span>
    </div>

    ${data.about ? `
    <section class="pdf-section">
        <h2>${data.about.title[lang]}</h2>
        <p class="about-text">${data.about.desc[lang]}</p>
    </section>
    ` : ''}

    <div class="two-columns">
        <div class="col-main">
            ${data.experience ? `
            <section class="pdf-section">
                <h2>${data.experience.title[lang]}</h2>
                ${experienceHTML}
            </section>
            ` : ''}

            ${data.education ? `
            <section class="pdf-section">
                <h2>${data.education.title[lang]}</h2>
                ${educationHTML}
            </section>
            ` : ''}
        </div>

        <div class="col-side">
            ${data.skills ? `
            <section class="pdf-section">
                <h2>${data.skills.title[lang]}</h2>
                ${skillsHTML}
            </section>
            ` : ''}

            ${referencesHTML}
        </div>
    </div>

</body>
</html>`;

    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(pdfHTML, { waitUntil: 'networkidle0' });

    const outputPath = path.join(portfolioDir, 'dist', `${data.hero.name.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑàèìòùÀÈÌÒÙ ]/g, '').replace(/\s+/g, '-')}-CV.pdf`);

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    });

    await browser.close();

    console.log(`\n✅ PDF generated: ${outputPath}`);
    console.log(`   QR code links to: ${portfolioUrl}`);
}

generatePDF().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
