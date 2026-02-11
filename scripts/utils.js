/**
 * Utilidades compartidas — CV Portfolios
 * FUENTE UNICA DE VERDAD para funciones usadas por multiples scripts.
 * No duplicar esta logica en otros archivos.
 */

/**
 * Genera el nombre de archivo del PDF a partir del nombre completo.
 * Usado por generate-portfolio.js (para el link de descarga) y generate-pdf.js (para el archivo).
 * @param {string} heroName - Nombre completo del portfolio (ej: "Mireia Puchaes Cremades")
 * @returns {string} Nombre de archivo (ej: "Mireia-Puchaes-Cremades-CV.pdf")
 */
function getPdfFilename(heroName) {
    return `${heroName.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑàèìòùÀÈÌÒÙ ]/g, '').replace(/\s+/g, '-')}-CV.pdf`;
}

/**
 * Determina si un valor de URL es valido (no es placeholder ni vacio).
 * @param {string|null|undefined} value - Valor a verificar
 * @returns {boolean} true si es una URL usable
 */
function isValidUrl(value) {
    return value != null && value !== '#' && value.trim() !== '';
}

/**
 * Genera el href del favicon segun el valor en data.json y el tema.
 * Si el valor ya es un data URI (como en scarlet/medical), lo usa directamente.
 * Si no, genera un SVG data URI con emoji apropiado para el tema.
 * @param {string} faviconValue - Valor de meta.favicon del data.json
 * @param {string} theme - Nombre del tema ('hospitality', 'medical', etc.)
 * @returns {string} Data URI valido para el atributo href del link rel="icon"
 */
function getFaviconHref(faviconValue, theme) {
    if (faviconValue && faviconValue.startsWith('data:')) {
        return faviconValue;
    }

    const faviconsByTheme = {
        hospitality: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%F0%9F%8D%BD%EF%B8%8F</text></svg>`,
        medical: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%E2%9C%9A</text></svg>`
    };

    return faviconsByTheme[theme] || faviconsByTheme.hospitality;
}

module.exports = { getPdfFilename, isValidUrl, getFaviconHref };
