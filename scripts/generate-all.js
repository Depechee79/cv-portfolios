/**
 * Genera todos los portfolios web automaticamente.
 * Descubre las carpetas en portfolios/ (excluyendo _template)
 * y ejecuta generate-portfolio.js para cada una.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const portfoliosDir = path.join(__dirname, '..', 'portfolios');
const dirs = fs.readdirSync(portfoliosDir)
    .filter(d => d !== '_template' && fs.statSync(path.join(portfoliosDir, d)).isDirectory());

console.log(`Found ${dirs.length} portfolios: ${dirs.join(', ')}\n`);

let success = 0;
let failed = 0;

dirs.forEach(dir => {
    try {
        console.log(`Generating: ${dir}`);
        execSync(`node scripts/generate-portfolio.js ${dir}`, { stdio: 'inherit' });
        success++;
        console.log('');
    } catch (err) {
        console.error(`Failed to generate: ${dir}`);
        failed++;
    }
});

console.log(`\nDone: ${success} generated, ${failed} failed (${dirs.length} total).`);

if (failed > 0) {
    process.exit(1);
}
