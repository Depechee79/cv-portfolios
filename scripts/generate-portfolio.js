/**
 * CV Portfolio Generator
 * Usage: node scripts/generate-portfolio.js <portfolio>
 * Example: node scripts/generate-portfolio.js mireia
 */

const fs = require('fs');
const path = require('path');
const { getPdfFilename, isValidUrl, getFaviconHref } = require('./utils');

// Root of monorepo (one level up from scripts/)
const ROOT = path.join(__dirname, '..');

// Get portfolio name from command line
const profile = process.argv[2];

if (!profile) {
    console.error('Usage: node scripts/generate-portfolio.js <portfolio>');
    console.error('Example: node scripts/generate-portfolio.js mireia');
    process.exit(1);
}

const profileDir = path.join(ROOT, 'portfolios', profile);
const configPath = path.join(profileDir, 'data.json');

if (!fs.existsSync(configPath)) {
    console.error(`Data file not found: ${configPath}`);
    process.exit(1);
}

console.log(`Generating site for: ${profile}`);

// Load config
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Load base CSS
const baseCSS = fs.readFileSync(path.join(ROOT, 'template', 'base.css'), 'utf8');

// Load theme CSS
const themeCSS = fs.readFileSync(path.join(ROOT, 'template', 'themes', `${config.theme}.css`), 'utf8');

// Load core JS
const coreJS = fs.readFileSync(path.join(ROOT, 'template', 'core.js'), 'utf8');

// Create dist directory
const distDir = path.join(profileDir, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Build translations object from config
function buildTranslations(config) {
    const translations = {};

    config.languages.forEach(lang => {
        translations[lang] = {};

        // Nav
        if (config.nav) {
            Object.keys(config.nav).forEach(key => {
                if (config.nav[key][lang]) {
                    translations[lang][`nav.${key}`] = config.nav[key][lang];
                }
            });
        }

        // Hero
        if (config.hero) {
            translations[lang]['hero.name'] = config.hero.name;
            if (config.hero.subtitle) translations[lang]['hero.subtitle'] = config.hero.subtitle[lang] || config.hero.subtitle;
            if (config.hero.current) translations[lang]['hero.current'] = config.hero.current[lang] || config.hero.current;
            if (config.hero.cta) translations[lang]['hero.cta'] = config.hero.cta[lang] || config.hero.cta;
            if (config.hero.degree) translations[lang]['hero.degree'] = config.hero.degree[lang] || config.hero.degree;
            if (config.hero.university) {
                translations[lang]['hero.uni'] = config.hero.university.name[lang] || config.hero.university.name;
            }
            if (config.hero.college) {
                translations[lang]['hero.college_name'] = config.hero.college.name[lang] || config.hero.college.name;
                translations[lang]['hero.col_num'] = `Colegiada no ${config.hero.college.number}`;
            }
        }

        // About
        if (config.about) {
            translations[lang]['about.title'] = config.about.title[lang] || config.about.title;
            translations[lang]['about.desc'] = config.about.desc[lang] || config.about.desc;
            if (config.about.stats) {
                config.about.stats.forEach((stat, i) => {
                    translations[lang][`about.stat${i+1}`] = stat[lang] || stat;
                });
            }
        }

        // Experience
        if (config.experience) {
            translations[lang]['exp.title'] = config.experience.title[lang] || config.experience.title;
            config.experience.items.forEach((item, i) => {
                const n = i + 1;
                translations[lang][`exp.${n}.date`] = item.date[lang] || item.date;
                translations[lang][`exp.${n}.place`] = item.place[lang] || item.place;
                translations[lang][`exp.${n}.role`] = item.role[lang] || item.role;
                translations[lang][`exp.${n}.desc`] = item.desc[lang] || item.desc;
            });
        }

        // Education
        if (config.education) {
            translations[lang]['edu.title'] = config.education.title[lang] || config.education.title;
            config.education.items.forEach((item, i) => {
                const n = i + 1;
                translations[lang][`edu.${n}.date`] = item.date[lang] || item.date;
                translations[lang][`edu.${n}.school`] = item.school[lang] || item.school;
                translations[lang][`edu.${n}.title`] = item.title[lang] || item.title;
                if (item.details) {
                    translations[lang][`edu.${n}.details`] = item.details[lang] || item.details;
                }
            });
        }

        // Skills
        if (config.skills) {
            translations[lang]['skills.title'] = config.skills.title[lang] || config.skills.title;
            translations[lang]['skills.skills_title'] = config.skills.skills_title[lang] || config.skills.skills_title;
            translations[lang]['skills.lang_title'] = config.skills.languages_title[lang] || config.skills.languages_title;
            config.skills.items.forEach((item, i) => {
                translations[lang][`skills.s${i+1}`] = item[lang] || item;
            });
            config.skills.languages.forEach((item, i) => {
                translations[lang][`skills.l${i+1}.name`] = item.name[lang] || item.name;
                translations[lang][`skills.l${i+1}.level`] = item.level[lang] || item.level;
            });
        }

        // References
        if (config.references) {
            translations[lang]['ref.title'] = config.references.title[lang] || config.references.title;
            config.references.items.forEach((item, i) => {
                const n = i + 1;
                translations[lang][`ref.${n}.name`] = item.name;
                translations[lang][`ref.${n}.role`] = item.role[lang] || item.role;
                translations[lang][`ref.${n}.company`] = item.company[lang] || item.company;
            });
            translations[lang]['ref.note'] = config.references.note[lang] || config.references.note;
        }

        // Contact
        if (config.contact) {
            translations[lang]['contact.title'] = config.contact.title[lang] || config.contact.title;
            translations[lang]['contact.phone'] = config.contact.phone;
            translations[lang]['contact.email'] = config.contact.email;
            translations[lang]['contact.loc'] = config.contact.location[lang] || config.contact.location;
        }

        // Footer
        if (config.footer) {
            translations[lang]['footer.rights'] = `© ${config.footer.rights[lang] || config.footer.rights}`;
        }

        // Buttons
        if (config.buttons) {
            translations[lang]['btn.expand'] = config.buttons.expand[lang] || config.buttons.expand;
            translations[lang]['btn.collapse'] = config.buttons.collapse[lang] || config.buttons.collapse;
            // Download button
            const downloadLabels = { es: 'Descargar CV', en: 'Download CV', ca: 'Descarregar CV' };
            translations[lang]['btn.download'] = downloadLabels[lang] || 'Download CV';
        }
    });

    return translations;
}

// Generate HTML from config
function generateHTML(config) {
    const isMedical = config.theme === 'medical';
    const isHospitality = config.theme.startsWith('hospitality');

    // Build nav links based on available sections
    const navLinks = [];
    navLinks.push(`<li><a href="#hero" class="menu-link" data-i18n="nav.home">Inicio</a></li>`);
    if (config.about) navLinks.push(`<li><a href="#about" class="menu-link" data-i18n="nav.${config.nav.about ? 'about' : 'profile'}">Perfil</a></li>`);
    if (config.education) navLinks.push(`<li><a href="#education" class="menu-link" data-i18n="nav.education">Formacion</a></li>`);
    if (config.experience) navLinks.push(`<li><a href="#experience" class="menu-link" data-i18n="nav.experience">Experiencia</a></li>`);
    if (config.references) navLinks.push(`<li><a href="#references" class="menu-link" data-i18n="nav.references">Referencias</a></li>`);
    if (config.skills) navLinks.push(`<li><a href="#skills" class="menu-link" data-i18n="nav.skills">Habilidades</a></li>`);
    navLinks.push(`<li><a href="#contact" class="menu-link" data-i18n="nav.contact">Contacto</a></li>`);

    // Build burger icon
    let burgerIcon = '';
    if (isHospitality) {
        burgerIcon = `
                <div class="cutlery-burger">
                    <svg class="cutlery-spoon" viewBox="0 0 100 463" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47 0L32 8L22 22L14 37L9 53L5 69L2 86L0 103L0 120L2 137L8 153L18 166L30 177L40 190L40 207L39 224L39 241L38 258L37 275L36 292L34 309L33 326L31 342L29 359L28 376L26 393L26 410L27 427L29 444L37 458L53 463L66 452L70 436L71 419L71 402L70 385L69 368L68 352L66 335L65 318L63 301L62 284L61 267L60 250L60 233L59 216L59 199L61 183L74 172L87 161L96 147L100 130L100 113L99 96L97 80L94 63L90 47L83 31L75 16L63 5L47 0Z" fill="currentColor"/>
                    </svg>
                    <svg class="cutlery-fork" viewBox="0 0 100 650" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0L7 37L3 75L1 112L0 150L0 188L12 223L33 254L36 291L32 329L29 366L25 404L22 442L20 479L18 517L17 555L19 592L24 630L52 650L77 624L82 587L81 549L78 511L74 474L71 436L68 399L66 361L64 323L64 285L70 249L91 218L100 182L100 144L99 106L96 68L93 31L86 5L84 43L83 81L81 118L72 145L69 108L67 70L66 32L61 4L59 41L58 79L56 117L47 147L43 110L42 72L41 34L37 2L34 39L32 77L30 115L23 149L18 112L17 74L16 36L13 0Z" fill="currentColor"/>
                    </svg>
                    <svg class="cutlery-knife" viewBox="0 0 100 835" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37 0L23 25L18 53L14 82L13 111L11 141L11 170L11 199L11 228L11 257L11 286L11 316L11 345L12 374L16 403L23 431L25 460L24 489L23 519L22 548L19 577L17 606L13 635L9 664L6 693L2 722L0 751L1 780L6 808L23 831L52 835L74 817L81 789L82 760L80 731L76 702L73 673L69 644L66 615L64 586L62 557L61 527L60 498L59 469L61 440L72 413L84 386L93 359L99 330L100 301L100 272L99 243L97 214L95 185L92 156L89 127L85 98L79 69L72 41L60 14L37 0Z" fill="currentColor"/>
                    </svg>
                </div>`;
    } else {
        burgerIcon = `<ion-icon name="menu-outline"></ion-icon>`;
    }

    // Build hero section
    let heroContent = '';
    if (isMedical && config.hero.university) {
        // College info is optional
        const collegeHtml = config.hero.college ? `
                <div class="hero-details college-info">
                    <p data-i18n="hero.college_name">${config.hero.college.name.es}</p>
                    <p data-i18n="hero.col_num">Colegiada no ${config.hero.college.number}</p>
                </div>` : '';

        heroContent = `
                <div class="profile-frame">
                    <img src="photo.jpg" alt="${config.hero.name}" class="profile-img" id="hero-img">
                </div>

                <span class="subtitle" data-i18n="hero.subtitle">${config.hero.subtitle.es || config.hero.subtitle}</span>
                <h1 data-i18n="hero.name">${config.hero.name}</h1>

                <div class="university-info" style="margin-bottom: 15px;">
                    <p style="font-size: 1rem; font-weight: 500; color: var(--text-dark); opacity: 0.9;">
                        <span data-i18n="hero.degree">${config.hero.university.degree.es}</span> | <a
                            href="${config.hero.university.url}" target="_blank" rel="noopener noreferrer"
                            style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"
                            data-i18n="hero.uni">${config.hero.university.name.es}</a> (${config.hero.university.year})
                    </p>
                </div>
${collegeHtml}
                <a href="#contact" class="btn-primary" data-i18n="hero.cta">${config.hero.cta.es}</a>`;
    } else {
        heroContent = `
                <div class="profile-frame">
                    <img src="photo.jpg" alt="${config.hero.name}" class="profile-img">
                </div>

                <span class="subtitle" data-i18n="hero.subtitle">${config.hero.subtitle.es || config.hero.subtitle}</span>
                <h1 data-i18n="hero.name">${config.hero.name}</h1>

                <div class="hero-details">
                    <p style="font-size: 1rem; font-weight: 500;" data-i18n="hero.current">
                        ${config.hero.current ? (config.hero.current.es || config.hero.current) : ''}
                    </p>
                    <div style="margin-top: 10px; font-size: 0.9rem; opacity: 0.7;">
                        English | Catala | Espanol
                    </div>
                </div>

                <a href="#contact" class="btn-primary" data-i18n="hero.cta">${config.hero.cta.es}</a>`;
    }

    // Build about section
    let aboutSection = '';
    if (config.about) {
        const statsHtml = config.about.stats ? `
                <div class="stats-grid">
                    ${config.about.stats.map((stat, i) => `<div class="stat-badge animate-on-scroll animate-delay-${i+1}" data-i18n="about.stat${i+1}">${stat.es}</div>`).join('\n                    ')}
                </div>` : '';

        aboutSection = `
        <section class="section-about" id="about">
            <div class="container">
                <h2 class="animate-on-scroll" data-i18n="about.title">${config.about.title.es}</h2>
                <div class="about-text animate-on-scroll animate-delay-1">
                    <p data-i18n="about.desc">${config.about.desc.es}</p>
                </div>
                ${statsHtml}
            </div>
        </section>`;
    }

    // Build education section
    let educationSection = '';
    if (config.education && config.education.items.length > 0) {
        const timelineItems = config.education.items.map((item, i) => {
            const n = i + 1;
            const detailsHtml = item.details ? `<p data-i18n="edu.${n}.details">${item.details.es}</p>` : '';
            return `
                        <div class="timeline-item animate-on-scroll">
                            <div class="timeline-dot"></div>
                            <span class="timeline-date" data-i18n="edu.${n}.date">${item.date.es}</span>
                            <div class="timeline-content">
                                <div class="company-name">
                                    ${item.url && item.url !== '#'
                                        ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="school-link" data-i18n="edu.${n}.school">${item.school.es}</a>`
                                        : `<span data-i18n="edu.${n}.school">${item.school.es}</span>`}
                                </div>
                                <h3 data-i18n="edu.${n}.title">${item.title.es}</h3>
                                ${detailsHtml}
                            </div>
                        </div>`;
        }).join('\n');

        educationSection = `
        <section class="section-education" id="education">
            <div class="container">
                <h2 data-i18n="edu.title">${config.education.title.es}</h2>

                <div class="timeline-container collapsed" id="edu-timeline">
                    <div class="timeline">
${timelineItems}
                    </div>
                </div>
                <div class="btn-expand-container">
                    <button class="btn-expand" onclick="toggleTimeline('edu-timeline', this)">
                        <span data-i18n="btn.expand">${config.buttons.expand.es}</span>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </section>`;
    }

    // Build experience section
    let experienceSection = '';
    if (config.experience && config.experience.items.length > 0) {
        const timelineItems = config.experience.items.map((item, i) => {
            const n = i + 1;
            return `
                        <div class="timeline-item animate-on-scroll">
                            <div class="timeline-dot"></div>
                            <span class="timeline-date" data-i18n="exp.${n}.date">${item.date.es}</span>
                            <div class="timeline-content">
                                <div class="company-name">
                                    ${item.url && item.url !== '#'
                                        ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" data-i18n="exp.${n}.place">${item.place.es}</a>`
                                        : `<span data-i18n="exp.${n}.place">${item.place.es}</span>`}
                                </div>
                                <h3 data-i18n="exp.${n}.role">${item.role.es}</h3>
                                <p data-i18n="exp.${n}.desc">${item.desc.es}</p>
                            </div>
                        </div>`;
        }).join('\n');

        const sectionClass = isHospitality ? 'section-experience' : 'section-education';

        experienceSection = `
        <section class="${sectionClass}" id="experience">
            <div class="container">
                <h2 data-i18n="exp.title">${config.experience.title.es}</h2>

                <div class="timeline-container collapsed" id="exp-timeline">
                    <div class="timeline">
${timelineItems}
                    </div>
                </div>
                <div class="btn-expand-container">
                    <button class="btn-expand" onclick="toggleTimeline('exp-timeline', this)">
                        <span data-i18n="btn.expand">${config.buttons.expand.es}</span>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </section>`;
    }

    // Build references section
    let referencesSection = '';
    if (config.references && config.references.items.length > 0) {
        const cards = config.references.items.map((item, i) => {
            const n = i + 1;
            return `
                    <div class="reference-card">
                        <div class="ref-icon"><ion-icon name="person-circle-outline"></ion-icon></div>
                        <h3 class="ref-name" data-i18n="ref.${n}.name">${item.name}</h3>
                        <p class="ref-role" data-i18n="ref.${n}.role">${item.role.es}</p>
                        <p class="ref-company" data-i18n="ref.${n}.company">${item.company.es}</p>
                    </div>`;
        }).join('\n');

        referencesSection = `
        <section class="section-references" id="references">
            <div class="container">
                <h2 data-i18n="ref.title">${config.references.title.es}</h2>

                <div class="references-grid">
${cards}
                </div>

                <p class="ref-note" data-i18n="ref.note">${config.references.note.es}</p>
            </div>
        </section>`;
    }

    // Build skills section
    let skillsSection = '';
    if (config.skills) {
        const skillTags = config.skills.items.map((item, i) =>
            `<span class="skill-tag animate-on-scroll animate-delay-${Math.min(i+1, 3)}" data-i18n="skills.s${i+1}">${item.es}</span>`
        ).join('\n                        ');

        const langItems = config.skills.languages.map((item, i) => {
            const dots = Array(5).fill(0).map((_, d) =>
                `<span class="lang-dot${d < item.dots ? ' filled' : ''}"></span>`
            ).join('\n                                ');
            return `
                        <div class="lang-item animate-on-scroll animate-delay-${Math.min(i+1, 3)}">
                            <div class="lang-name" data-i18n="skills.l${i+1}.name">${item.name.es}</div>
                            <div class="lang-level" data-i18n="skills.l${i+1}.level">${item.level.es}</div>
                            <div class="lang-dots">
                                ${dots}
                            </div>
                        </div>`;
        }).join('\n');

        skillsSection = `
        <section class="section-skills" id="skills">
            <div class="container">
                <h2 data-i18n="skills.title">${config.skills.title.es}</h2>

                <div class="skills-container">
                    <h3 class="skills-subtitle" data-i18n="skills.skills_title">${config.skills.skills_title.es}</h3>
                    <div class="skills-grid">
                        ${skillTags}
                    </div>

                    <h3 class="skills-subtitle" data-i18n="skills.lang_title">${config.skills.languages_title.es}</h3>
                    <div class="lang-grid">
${langItems}
                    </div>
                </div>
            </div>
        </section>`;
    }

    // Build contact section
    let contactSection = `
        <footer class="section-contact" id="contact">
            <div class="container">
                <h2 data-i18n="contact.title">${config.contact.title.es}</h2>

                <div style="margin-top: 40px; margin-bottom: 40px;">
                    <div class="contact-text-item animate-on-scroll">
                        <ion-icon name="call"></ion-icon>
                        <a href="tel:${config.contact.phone.replace(/\s/g, '')}" data-i18n="contact.phone">${config.contact.phone}</a>
                    </div>

                    <div class="contact-text-item animate-on-scroll animate-delay-1">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <a href="https://wa.me/${config.contact.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
                    </div>

                    <div class="contact-text-item animate-on-scroll animate-delay-2">
                        <ion-icon name="mail"></ion-icon>
                        <a href="mailto:${config.contact.email}" data-i18n="contact.email">${config.contact.email}</a>
                    </div>

                    <div class="contact-text-item animate-on-scroll animate-delay-3">
                        <ion-icon name="location"></ion-icon>
                        <span data-i18n="contact.loc">${config.contact.location.es}</span>
                    </div>
                </div>

                ${isValidUrl(config.contact.linkedin) ? `<div class="social-links">
                    <a href="${config.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>` : ''}

                <a class="btn-download-cv" href="${getPdfFilename(config.hero.name)}" download="${getPdfFilename(config.hero.name)}" title="Descargar CV en PDF">
                    <ion-icon name="download-outline"></ion-icon>
                    <span data-i18n="btn.download">Descargar CV</span>
                </a>

                <p style="margin-top: 40px; opacity: 0.8; font-size: 0.9rem;" data-i18n="footer.rights">© ${config.footer.rights.es}</p>
            </div>
        </footer>`;

    // Language buttons
    const langButtons = config.languages.map((lang, i) =>
        `<button class="lang-btn-bottom${i === 0 ? ' active' : ''}" data-lang="${lang}">${lang.toUpperCase()}</button>`
    ).join('\n            ');

    // Assemble full HTML
    return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="hero.name">${config.meta.title}</title>
    <link rel="icon" href="${getFaviconHref(config.meta.favicon, config.theme)}">
    <link rel="stylesheet" href="styles.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>

<body>

    <nav class="bottom-nav">
        <div class="lang-switcher-bottom">
            ${langButtons}
        </div>

        <div class="burger-menu-container">
            <button id="burger-btn" aria-label="Menu" onclick="toggleBurgerMenu()">
                ${burgerIcon}
            </button>
        </div>
    </nav>

    <div class="menu-overlay" id="menu-overlay">
        <ul class="menu-links">
            ${navLinks.join('\n            ')}
        </ul>
    </div>

    <main id="app-scroller">

        <header class="hero" id="hero">
            <div class="container hero-content">
${heroContent}
            </div>
        </header>
${aboutSection}
${educationSection}
${experienceSection}
${referencesSection}
${skillsSection}
${contactSection}

    </main>

    <script src="script.js"></script>
</body>

</html>`;
}

// Build translations
const translations = buildTranslations(config);

// Generate JavaScript with injected translations
const darkSections = JSON.stringify(config.darkSections || ['about', 'experience', 'skills']);

// Extract accent color from theme CSS for nav color interpolation
let navAccentRgb = [184, 149, 106]; // fallback: original gold
const isLightThemeNav = config.theme === 'hospitality-light';
if (isLightThemeNav) {
    // Light theme: dark sections have verde botella bg → nav must be WHITE
    navAccentRgb = [255, 255, 255];
} else {
    const accentMatch = themeCSS.match(/--accent-color:\s*#([0-9a-fA-F]{6})/);
    if (accentMatch) {
        const hex = accentMatch[1];
        navAccentRgb = [
            parseInt(hex.substr(0, 2), 16),
            parseInt(hex.substr(2, 2), 16),
            parseInt(hex.substr(4, 2), 16)
        ];
    }
}

const finalJS = coreJS
    .replace('{{TRANSLATIONS}}', JSON.stringify(translations, null, 2))
    .replace('{{DARK_SECTIONS}}', darkSections)
    .replace('{{NAV_ACCENT_RGB}}', JSON.stringify(navAccentRgb));

// Generate per-section background CSS overrides (if sectionBackgrounds defined)
let sectionBgCSS = '';
if (config.sectionBackgrounds) {
    const sectionSelectors = {
        hero: '.hero',
        about: '.section-about',
        experience: config.theme.startsWith('hospitality') ? '.section-experience' : '.section-education#experience',
        education: '.section-education#education',
        skills: '.section-skills',
        contact: '.section-contact'
    };
    const darkSectionIds = config.darkSections || [];
    const lines = ['\n/* ══════════════════════════════════════ */\n/* PER-SECTION BACKGROUNDS */\n/* ══════════════════════════════════════ */\n'];
    Object.keys(config.sectionBackgrounds).forEach(function(sectionId) {
        const url = config.sectionBackgrounds[sectionId];
        const selector = sectionSelectors[sectionId];
        if (!selector || !url) return;
        const isDark = darkSectionIds.indexOf(sectionId) !== -1;
        const isHero = sectionId === 'hero';
        if (isDark) {
            const isLightTheme = config.theme === 'hospitality-light';
            const darkOverlay = isLightTheme ? '0.80' : '0.88';
            lines.push(selector + ' {');
            lines.push("    background: linear-gradient(rgba(28, 28, 28, " + darkOverlay + "), rgba(28, 28, 28, " + darkOverlay + ")),");
            lines.push("        url('" + url + "') center/cover no-repeat;");
            lines.push("    background-attachment: scroll;");
            lines.push('}');
        } else if (isHero) {
            const isLightTheme = config.theme === 'hospitality-light';
            const heroOverlayTop = isLightTheme ? 'rgba(250, 250, 250, 0.93)' : 'rgba(247, 244, 239, 0.88)';
            const heroOverlayBot = isLightTheme ? 'rgba(250, 250, 250, 0.96)' : 'rgba(247, 244, 239, 0.92)';
            lines.push(selector + ' {');
            lines.push("    background: linear-gradient(" + heroOverlayTop + ", " + heroOverlayBot + "),");
            lines.push("        url('" + url + "') center top/cover no-repeat;");
            lines.push('}');
        }
    });
    sectionBgCSS = lines.join('\n');
}

// Generate CSS (base + theme + per-section overrides)
const finalCSS = baseCSS + '\n\n/* ══════════════════════════════════════ */\n/* THEME: ' + config.theme.toUpperCase() + ' */\n/* ══════════════════════════════════════ */\n\n' + themeCSS + sectionBgCSS;

// Generate HTML
const finalHTML = generateHTML(config);

// Copy photo
const photoSrc = path.join(profileDir, 'photo.jpg');
const photoDest = path.join(distDir, 'photo.jpg');
if (fs.existsSync(photoSrc)) {
    fs.copyFileSync(photoSrc, photoDest);
    console.log('  Copied: photo.jpg');
}

// Write files
fs.writeFileSync(path.join(distDir, 'index.html'), finalHTML);
console.log('  Generated: index.html');

fs.writeFileSync(path.join(distDir, 'styles.css'), finalCSS);
console.log('  Generated: styles.css');

fs.writeFileSync(path.join(distDir, 'script.js'), finalJS);
console.log('  Generated: script.js');

console.log(`\nSite generated at: ${distDir}`);
console.log(`Open in browser: file://${distDir}/index.html`);
