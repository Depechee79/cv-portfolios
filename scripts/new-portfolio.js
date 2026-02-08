/**
 * New Portfolio Creator
 * Usage: node scripts/new-portfolio.js <name>
 * Example: node scripts/new-portfolio.js carlos
 *
 * Copies _template into a new portfolio folder ready to customize.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const name = process.argv[2];

if (!name) {
    console.error('Usage: node scripts/new-portfolio.js <name>');
    console.error('Example: node scripts/new-portfolio.js carlos');
    process.exit(1);
}

// Sanitize name (lowercase, no spaces)
const safeName = name.toLowerCase().replace(/[^a-z0-9-]/g, '');

const templateDir = path.join(ROOT, 'portfolios', '_template');
const targetDir = path.join(ROOT, 'portfolios', safeName);

if (fs.existsSync(targetDir)) {
    console.error(`Portfolio "${safeName}" already exists at: ${targetDir}`);
    process.exit(1);
}

if (!fs.existsSync(templateDir)) {
    console.error(`Template not found at: ${templateDir}`);
    process.exit(1);
}

// Recursive copy
function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(templateDir, targetDir);

console.log(`\n✅ New portfolio created: portfolios/${safeName}/`);
console.log(`\nNext steps:`);
console.log(`  1. Edit portfolios/${safeName}/data.json with the client's info`);
console.log(`  2. Add their photo as portfolios/${safeName}/photo.jpg`);
console.log(`  3. Run: npm run generate -- ${safeName}`);
console.log(`  4. Preview: npx serve portfolios/${safeName}/dist -p 3000`);
console.log('');
