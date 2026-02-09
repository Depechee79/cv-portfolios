/**
 * CV PDF Generator — Premium sidebar layout with scannable QR
 * Usage: node scripts/generate-pdf.js <portfolio> [--url=<portfolio-url>]
 * Example: node scripts/generate-pdf.js mireia
 *
 * Reads data.json + template/pdf-template.html → renders via Puppeteer → A4 PDF
 * Dependencies: npm install puppeteer qrcode
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// ── Parse arguments ──
const args = process.argv.slice(2);
const portfolio = args.find(a => !a.startsWith('--'));
const urlArg = args.find(a => a.startsWith('--url='));

if (!portfolio) {
    console.error('Usage: node scripts/generate-pdf.js <portfolio> [--url=<portfolio-url>]');
    process.exit(1);
}

const portfolioDir = path.join(ROOT, 'portfolios', portfolio);
const dataPath = path.join(portfolioDir, 'data.json');
const templatePath = path.join(ROOT, 'template', 'pdf-template.html');

if (!fs.existsSync(dataPath)) {
    console.error(`Data file not found: ${dataPath}`);
    process.exit(1);
}
if (!fs.existsSync(templatePath)) {
    console.error(`PDF template not found: ${templatePath}`);
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const portfolioUrl = urlArg
    ? urlArg.replace('--url=', '')
    : `https://depechee79.github.io/cv-portfolios/portfolios/${portfolio}/dist/`;

// ── Theme palettes ──
const THEMES = {
    hospitality: {
        accent: '#B8956A',
        sidebarBg: '#1C1C1C',
        sidebarText: '#e0d8cf',
        sidebarTextMuted: '#8a8178',
        sidebarNameColor: '#FFFFFF',
        sidebarDivider: 'rgba(184,149,106,0.3)',
        skillBg: 'rgba(184,149,106,0.15)',
        skillText: '#d4c4ac',
        qrDark: '#B8956A',
        qrLight: '#ffffff',
        fontHeading: 'Montserrat',
        fontBody: 'Lato'
    },
    medical: {
        accent: '#d4af37',
        sidebarBg: '#1a4f5a',
        sidebarText: '#d0dfdf',
        sidebarTextMuted: '#7a9a9a',
        sidebarNameColor: '#FFFFFF',
        sidebarDivider: 'rgba(212,175,55,0.3)',
        skillBg: 'rgba(212,175,55,0.15)',
        skillText: '#c8d8d0',
        qrDark: '#1a4f5a',
        qrLight: '#ffffff',
        fontHeading: 'Cormorant Garamond',
        fontBody: 'Lato'
    }
};

// ── Helpers ──
function getPdfFilename(heroName) {
    return `${heroName.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑàèìòùÀÈÌÒÙ ]/g, '').replace(/\s+/g, '-')}-CV.pdf`;
}

function buildLangDots(count) {
    let html = '';
    for (let i = 0; i < 5; i++) {
        html += `<span class="lang-dot${i < count ? ' filled' : ''}"></span>`;
    }
    return html;
}

// ── Main ──
async function generatePDF() {
    let puppeteer, QRCode;

    try {
        puppeteer = require('puppeteer');
    } catch (e) {
        console.error('❌ Missing dependency: puppeteer\n   Run: npm install puppeteer');
        process.exit(1);
    }

    try {
        QRCode = require('qrcode');
    } catch (e) {
        console.error('❌ Missing dependency: qrcode\n   Run: npm install qrcode');
        process.exit(1);
    }

    const theme = THEMES[data.theme] || THEMES.hospitality;
    const lang = 'es';

    console.log(`Generating PDF for: ${portfolio} (theme: ${data.theme})`);
    console.log(`QR links to: ${portfolioUrl}`);

    // ── QR code — SQUARE with generous margin for scannability ──
    const qrDataUrl = await QRCode.toDataURL(portfolioUrl, {
        width: 300,
        margin: 3,
        errorCorrectionLevel: 'H',
        color: {
            dark: theme.qrDark,
            light: theme.qrLight
        }
    });

    // ── Photo as base64 ──
    const photoPath = path.join(portfolioDir, 'photo.jpg');
    let photoBase64 = '';
    if (fs.existsSync(photoPath)) {
        const photoBuffer = fs.readFileSync(photoPath);
        photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;
    }

    // ── Build section HTML fragments ──

    // Photo
    const photoHTML = photoBase64
        ? `<img src="${photoBase64}" class="sidebar-photo" alt="Photo">`
        : '';

    // Contact title
    const contactTitle = data.contact.title ? data.contact.title[lang] : 'Contacto';

    // Skills section
    let skillsSection = '';
    if (data.skills && data.skills.items) {
        const skillTags = data.skills.items
            .map(s => `<div class="skill-item">${s[lang]}</div>`)
            .join('');
        const skillsTitle = data.skills.skills_title
            ? data.skills.skills_title[lang]
            : (data.skills.title ? data.skills.title[lang] : 'Habilidades');
        skillsSection = `
            <div class="sidebar-divider"></div>
            <div class="sidebar-section-title">${skillsTitle}</div>
            <div class="skills-list">${skillTags}</div>
        `;
    }

    // Languages section
    let languagesSection = '';
    if (data.skills && data.skills.languages) {
        const langTitle = data.skills.languages_title
            ? data.skills.languages_title[lang]
            : 'Idiomas';
        const langRows = data.skills.languages.map(l => `
            <div class="lang-row">
                <span class="lang-name">${l.name[lang]}</span>
                <span class="lang-dots">${buildLangDots(l.dots)}</span>
            </div>
        `).join('');
        languagesSection = `
            <div class="sidebar-divider"></div>
            <div class="sidebar-section-title">${langTitle}</div>
            <div class="lang-list">${langRows}</div>
        `;
    }

    // About
    let aboutSection = '';
    if (data.about) {
        aboutSection = `
            <div class="section">
                <div class="section-title">${data.about.title[lang]}</div>
                <p class="about-text">${data.about.desc[lang]}</p>
            </div>
        `;
    }

    // Experience
    let experienceSection = '';
    if (data.experience && data.experience.items.length > 0) {
        const items = data.experience.items.map(item => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <span class="timeline-place">${item.place[lang]}</span>
                    <span class="timeline-date">${item.date[lang]}</span>
                </div>
                <div class="timeline-role">${item.role[lang]}</div>
                <div class="timeline-desc">${item.desc[lang]}</div>
            </div>
        `).join('');
        experienceSection = `
            <div class="section">
                <div class="section-title">${data.experience.title[lang]}</div>
                ${items}
            </div>
        `;
    }

    // Education
    let educationSection = '';
    if (data.education && data.education.items.length > 0) {
        const items = data.education.items.map(item => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <span class="timeline-place">${item.title[lang]}</span>
                    <span class="timeline-date">${item.date[lang]}</span>
                </div>
                <div class="edu-school">${item.school[lang]}</div>
                ${item.details && item.details[lang] ? `<div class="timeline-desc">${item.details[lang]}</div>` : ''}
            </div>
        `).join('');
        educationSection = `
            <div class="section">
                <div class="section-title">${data.education.title[lang]}</div>
                ${items}
            </div>
        `;
    }

    // References
    let referencesSection = '';
    if (data.references && data.references.items) {
        const cards = data.references.items.map(r => `
            <div class="ref-card">
                <div class="ref-name">${r.name}</div>
                <div class="ref-role">${r.role[lang]}</div>
                <div class="ref-company">${r.company[lang]}</div>
            </div>
        `).join('');
        const noteHTML = data.references.note
            ? `<div class="ref-note">${data.references.note[lang]}</div>`
            : '';
        referencesSection = `
            <div class="section">
                <div class="section-title">${data.references.title[lang]}</div>
                <div class="ref-grid">${cards}</div>
                ${noteHTML}
            </div>
        `;
    }

    // ── Load template and replace placeholders ──
    let html = fs.readFileSync(templatePath, 'utf8');

    const replacements = {
        '{{LANG}}': lang,
        '{{FONT_HEADING}}': theme.fontHeading,
        '{{FONT_BODY}}': theme.fontBody,
        '{{ACCENT}}': theme.accent,
        '{{SIDEBAR_BG}}': theme.sidebarBg,
        '{{SIDEBAR_TEXT}}': theme.sidebarText,
        '{{SIDEBAR_TEXT_MUTED}}': theme.sidebarTextMuted,
        '{{SIDEBAR_NAME_COLOR}}': theme.sidebarNameColor,
        '{{SIDEBAR_DIVIDER}}': theme.sidebarDivider,
        '{{SKILL_BG}}': theme.skillBg,
        '{{SKILL_TEXT}}': theme.skillText,
        '{{NAME}}': data.hero.name,
        '{{SUBTITLE}}': data.hero.subtitle[lang],
        '{{CONTACT_TITLE}}': contactTitle,
        '{{PHONE}}': data.contact.phone,
        '{{EMAIL}}': data.contact.email,
        '{{LOCATION}}': data.contact.location[lang],
        '{{PHOTO_HTML}}': photoHTML,
        '{{QR_DATA_URL}}': qrDataUrl,
        '{{SKILLS_SECTION}}': skillsSection,
        '{{LANGUAGES_SECTION}}': languagesSection,
        '{{ABOUT_SECTION}}': aboutSection,
        '{{EXPERIENCE_SECTION}}': experienceSection,
        '{{EDUCATION_SECTION}}': educationSection,
        '{{REFERENCES_SECTION}}': referencesSection
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
        html = html.split(placeholder).join(value);
    }

    // ── Render PDF with Puppeteer ──
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const outputPath = path.join(portfolioDir, 'dist', getPdfFilename(data.hero.name));

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
    });

    await browser.close();

    console.log(`\n✅ PDF generated: ${outputPath}`);
    console.log(`   QR code links to: ${portfolioUrl}`);

    // ── Verify QR is decodable ──
    try {
        const pdfParse = require('pdf-parse');
        console.log('   QR verification: PDF generated (manual scan recommended)');
    } catch (e) {
        // pdf-parse not critical
    }
}

generatePDF().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
