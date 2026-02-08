/**
 * CV PDF Parser → data.json
 * Usage: node scripts/parse-pdf.js <pdf-path> <portfolio-name>
 * Example: node scripts/parse-pdf.js "./input-cv.pdf" carlos
 *
 * Extracts text from a PDF CV and generates a starter data.json.
 * The output will need manual review and editing, but provides a
 * structured starting point.
 *
 * Dependencies: npm install pdf-parse
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const pdfPath = process.argv[2];
const portfolioName = process.argv[3];

if (!pdfPath || !portfolioName) {
    console.error('Usage: node scripts/parse-pdf.js <pdf-path> <portfolio-name>');
    console.error('Example: node scripts/parse-pdf.js "./input-cv.pdf" carlos');
    process.exit(1);
}

if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    process.exit(1);
}

async function parsePDF() {
    let pdfParse;
    try {
        pdfParse = require('pdf-parse');
    } catch (e) {
        console.error('❌ Missing dependency: pdf-parse');
        console.error('   Run: npm install pdf-parse');
        process.exit(1);
    }

    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(pdfBuffer);

    console.log(`\n📄 PDF parsed: ${pdfData.numpages} page(s), ${pdfData.text.length} characters\n`);

    // Save extracted text for reference
    const portfolioDir = path.join(ROOT, 'portfolios', portfolioName);
    if (!fs.existsSync(portfolioDir)) {
        console.log(`Creating portfolio directory: portfolios/${portfolioName}/`);
        fs.mkdirSync(path.join(portfolioDir, 'assets', 'originals'), { recursive: true });
        fs.mkdirSync(path.join(portfolioDir, 'overrides'), { recursive: true });
    }

    const extractedTextPath = path.join(portfolioDir, 'assets', 'originals', 'extracted-text.txt');
    fs.writeFileSync(extractedTextPath, pdfData.text);
    console.log(`📝 Extracted text saved to: ${extractedTextPath}`);

    // Copy source PDF to originals
    const pdfCopyPath = path.join(portfolioDir, 'assets', 'originals', path.basename(pdfPath));
    fs.copyFileSync(pdfPath, pdfCopyPath);
    console.log(`📋 Source PDF copied to: ${pdfCopyPath}`);

    // Copy template data.json as starting point
    const templatePath = path.join(ROOT, 'portfolios', '_template', 'data.json');
    const dataPath = path.join(portfolioDir, 'data.json');

    if (!fs.existsSync(dataPath)) {
        fs.copyFileSync(templatePath, dataPath);
        console.log(`📄 Template data.json copied to: ${dataPath}`);
    } else {
        console.log(`⚠️  data.json already exists, not overwriting`);
    }

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`EXTRACTED TEXT PREVIEW (first 500 chars):`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(pdfData.text.substring(0, 500));
    console.log(`...\n`);

    console.log(`✅ Next steps:`);
    console.log(`  1. Review extracted text: ${extractedTextPath}`);
    console.log(`  2. Fill in portfolios/${portfolioName}/data.json with the structured data`);
    console.log(`  3. Add a profile photo as portfolios/${portfolioName}/photo.jpg`);
    console.log(`  4. Choose a theme (hospitality, medical) in data.json`);
    console.log(`  5. Run: npm run generate -- ${portfolioName}`);
}

parsePDF().catch(err => {
    console.error('Error parsing PDF:', err);
    process.exit(1);
});
