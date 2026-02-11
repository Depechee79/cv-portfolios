/* core.js - CV Portfolio Core Script */
/* This file is generated - translations come from config.json */

// TRANSLATIONS - Injected by generate.js
const translations = {
  "es": {
    "nav.home": "Inicio",
    "nav.profile": "Perfil",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.skills": "Competencias",
    "nav.references": "Referencias",
    "nav.contact": "Contacto",
    "hero.name": "Leonardo Gómez Arvea",
    "hero.subtitle": "F&B MANAGER",
    "hero.current": "F&B Manager en The Social Hub Poblenou",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Profesional",
    "about.desc": "F&B Manager con más de dos décadas de experiencia en hostelería premium en Barcelona. Trayectoria que combina la dirección operativa de hoteles 4 y 5 estrellas con la visión emprendedora de fundar y dirigir su propio restaurante. Especializado en liderazgo estratégico, excelencia operativa y desarrollo de conceptos gastronómicos innovadores. Formación internacional en Francia, Suiza y México que aporta una perspectiva global a la gestión de equipos multidisciplinares y la implementación de prácticas sostenibles.",
    "about.stat1": "+20 años en hostelería",
    "about.stat2": "+100 personas lideradas",
    "about.stat3": "Hoteles 4★-5★",
    "exp.title": "Experiencia Profesional",
    "exp.1.date": "2023 — ACTUALIDAD",
    "exp.1.place": "The Social Hub Poblenou",
    "exp.1.role": "F&B Manager",
    "exp.1.desc": "Transformación de los puntos de venta de F&B mediante la implementación de conceptos gastronómicos premium y prácticas de sostenibilidad. Gestión operativa de múltiples espacios: WorkCafé, rooftop y cocinas comunitarias. Promoción y mentoría del equipo, fomentando el crecimiento profesional y la cohesión.",
    "exp.2.date": "2020 — 2023",
    "exp.2.place": "Grand Hotel Central",
    "exp.2.role": "F&B Manager",
    "exp.2.desc": "Liderazgo de la recuperación operativa post-pandemia, reestructurando flujos de trabajo y acelerando la recuperación financiera. Obtención de la Certificación Biosphere implementando prácticas de turismo sostenible conforme a estándares internacionales. Gestión de equipos transversales para mejorar la satisfacción del cliente y optimizar las operaciones en todas las áreas de restauración.",
    "exp.3.date": "2018 — 2020",
    "exp.3.place": "Grupo Lombardo Restauración",
    "exp.3.role": "Director de Operaciones",
    "exp.3.desc": "Supervisión de las operaciones diarias de la cadena de restaurantes de tapas. Implementación de estrategias de crecimiento de ingresos y optimización de costes. Adopción de tecnología para mejorar la eficiencia operativa. Adaptación de operaciones durante la crisis COVID-19, garantizando la continuidad del negocio y la seguridad del equipo.",
    "exp.4.date": "2015 — 2018",
    "exp.4.place": "Bestial Beach Club",
    "exp.4.role": "Director General",
    "exp.4.desc": "Dirección integral de las operaciones del icónico beach club mediterráneo. Gestión de un equipo amplio y desarrollo de ingresos significativos mediante conceptos de menú innovadores y promociones estacionales. Implementación de estrategias comerciales rentables y toma de decisiones basada en datos para maximizar la rentabilidad.",
    "exp.5.date": "2008 — 2015",
    "exp.5.place": "Txapela — AN Grup",
    "exp.5.role": "Director de Restaurante",
    "exp.5.desc": "Dirección integral del restaurante Txapela en una de las ubicaciones más emblemáticas de Barcelona. Gestión operativa y de equipos en un establecimiento de alto volumen especializado en cocina vasca y de pintxos. Responsable de la cuenta de resultados, la experiencia del cliente y la coordinación con la central del grupo.",
    "exp.6.date": "2002 — 2008",
    "exp.6.place": "Chilam Balam",
    "exp.6.role": "Propietario y Director",
    "exp.6.desc": "Fundación y dirección de restaurante de cocina mexicana auténtica en la emblemática Avenida Gaudí de Barcelona. Gestión integral del negocio: concepto gastronómico, operaciones, equipo, proveedores y relación con clientes. Seis años de trayectoria empresarial hasta el impacto de la crisis económica de 2008.",
    "edu.title": "Formación Académica",
    "edu.1.date": "2016",
    "edu.1.school": "EAE Business School / Ostelea",
    "edu.1.title": "Dirección Hotelera y de Restauración",
    "edu.1.details": "Barcelona, España.",
    "edu.2.date": "2002",
    "edu.2.school": "Ferrandi Paris · Université du Vin · Ecole Hôtelière de Lausanne",
    "edu.2.title": "Máster en Gestión de Alimentos y Bebidas",
    "edu.2.details": "Francia / Suiza.",
    "edu.3.date": "2001",
    "edu.3.school": "Universidad Iberoamericana",
    "edu.3.title": "Licenciatura en Administración Hotelera",
    "edu.3.details": "Ciudad de México, México.",
    "edu.4.date": "2000",
    "edu.4.school": "Universidad Iberoamericana",
    "edu.4.title": "Diploma en Artes Culinarias y Formación de Chef",
    "edu.4.details": "Ciudad de México, México.",
    "skills.title": "Competencias e Idiomas",
    "skills.skills_title": "Competencias",
    "skills.lang_title": "Idiomas",
    "skills.s1": "Planificación estratégica",
    "skills.s2": "Liderazgo de equipos",
    "skills.s3": "Experiencia del cliente",
    "skills.s4": "Sostenibilidad (Biosphere)",
    "skills.s5": "Desarrollo de conceptos",
    "skills.s6": "Gestión financiera",
    "skills.l1.name": "Español",
    "skills.l1.level": "Nativo",
    "skills.l2.name": "Inglés",
    "skills.l2.level": "Avanzado (C1)",
    "skills.l3.name": "Catalán",
    "skills.l3.level": "Avanzado (C1)",
    "skills.l4.name": "Francés",
    "skills.l4.level": "Intermedio alto (B2)",
    "contact.title": "Contacto Profesional",
    "contact.phone": "+34 692 40 54 56",
    "contact.email": "leonardo.gomez.arvea@gmail.com",
    "contact.loc": "Passatge de Canti 9, 1º 2ª, Poblenou, Barcelona",
    "footer.rights": "© 2025 Leonardo Gómez Arvea. Todos los derechos reservados.",
    "btn.expand": "Ver más",
    "btn.collapse": "Ver menos",
    "btn.download": "Descargar CV"
  },
  "en": {
    "nav.home": "Home",
    "nav.profile": "Profile",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.references": "References",
    "nav.contact": "Contact",
    "hero.name": "Leonardo Gómez Arvea",
    "hero.subtitle": "F&B MANAGER",
    "hero.current": "F&B Manager at The Social Hub Poblenou",
    "hero.cta": "CONTACT",
    "about.title": "Professional Profile",
    "about.desc": "F&B Manager with over two decades of experience in premium hospitality in Barcelona. A career that combines operational management of 4 and 5-star hotels with the entrepreneurial vision of founding and directing his own restaurant. Specialised in strategic leadership, operational excellence and innovative gastronomic concept development. International education in France, Switzerland and Mexico that brings a global perspective to multidisciplinary team management and sustainable practices implementation.",
    "about.stat1": "20+ years in hospitality",
    "about.stat2": "100+ people led",
    "about.stat3": "4★-5★ Hotels",
    "exp.title": "Professional Experience",
    "exp.1.date": "2023 — PRESENT",
    "exp.1.place": "The Social Hub Poblenou",
    "exp.1.role": "F&B Manager",
    "exp.1.desc": "Transformation of F&B outlets through implementation of premium gastronomic concepts and sustainability practices. Operational management of multiple venues: WorkCafé, rooftop, and community kitchens. Team promotion and mentoring, fostering professional growth and cohesion.",
    "exp.2.date": "2020 — 2023",
    "exp.2.place": "Grand Hotel Central",
    "exp.2.role": "F&B Manager",
    "exp.2.desc": "Led post-pandemic operational recovery, restructuring workflows and accelerating financial turnaround. Secured Biosphere Certification by implementing sustainable tourism practices aligned with international standards. Managed cross-functional teams to enhance guest satisfaction and streamline operations across all dining areas.",
    "exp.3.date": "2018 — 2020",
    "exp.3.place": "Grupo Lombardo Restauración",
    "exp.3.role": "Operations Manager",
    "exp.3.desc": "Oversight of daily operations across the tapas restaurant chain. Implementation of revenue growth strategies and cost optimization. Technology adoption to improve operational efficiency. Operations adaptation during COVID-19, ensuring business continuity and team safety.",
    "exp.4.date": "2015 — 2018",
    "exp.4.place": "Bestial Beach Club",
    "exp.4.role": "General Manager",
    "exp.4.desc": "Comprehensive direction of operations at the iconic Mediterranean beach club. Management of a large team and significant revenue development through innovative menu concepts and seasonal promotions. Implementation of profitable business strategies and data-driven decision-making to maximize profitability.",
    "exp.5.date": "2008 — 2015",
    "exp.5.place": "Txapela — AN Grup",
    "exp.5.role": "Restaurant Director",
    "exp.5.desc": "Comprehensive management of Txapela restaurant in one of Barcelona's most iconic locations. Operational and team management in a high-volume establishment specializing in Basque cuisine and pintxos. Responsible for P&L, guest experience, and coordination with the group's headquarters.",
    "exp.6.date": "2002 — 2008",
    "exp.6.place": "Chilam Balam",
    "exp.6.role": "Owner & Director",
    "exp.6.desc": "Founded and directed an authentic Mexican cuisine restaurant on Barcelona's emblematic Avenida Gaudí. End-to-end business management: gastronomic concept, operations, team, suppliers, and client relations. Six years of entrepreneurial track record until the impact of the 2008 economic crisis.",
    "edu.title": "Education",
    "edu.1.date": "2016",
    "edu.1.school": "EAE Business School / Ostelea",
    "edu.1.title": "Hotel and Restaurant Management",
    "edu.1.details": "Barcelona, Spain.",
    "edu.2.date": "2002",
    "edu.2.school": "Ferrandi Paris · Université du Vin · Ecole Hôtelière de Lausanne",
    "edu.2.title": "Master in Food & Beverage Management",
    "edu.2.details": "France / Switzerland.",
    "edu.3.date": "2001",
    "edu.3.school": "Universidad Iberoamericana",
    "edu.3.title": "Bachelor in Hotel Management",
    "edu.3.details": "Mexico City, Mexico.",
    "edu.4.date": "2000",
    "edu.4.school": "Universidad Iberoamericana",
    "edu.4.title": "Diploma in Culinary Arts and Chef Training",
    "edu.4.details": "Mexico City, Mexico.",
    "skills.title": "Skills & Languages",
    "skills.skills_title": "Competencies",
    "skills.lang_title": "Languages",
    "skills.s1": "Strategic Planning",
    "skills.s2": "Team Leadership",
    "skills.s3": "Guest Experience",
    "skills.s4": "Sustainability (Biosphere)",
    "skills.s5": "Concept Development",
    "skills.s6": "Financial Management",
    "skills.l1.name": "Spanish",
    "skills.l1.level": "Native",
    "skills.l2.name": "English",
    "skills.l2.level": "Advanced (C1)",
    "skills.l3.name": "Catalan",
    "skills.l3.level": "Advanced (C1)",
    "skills.l4.name": "French",
    "skills.l4.level": "Upper intermediate (B2)",
    "contact.title": "Professional Contact",
    "contact.phone": "+34 692 40 54 56",
    "contact.email": "leonardo.gomez.arvea@gmail.com",
    "contact.loc": "Passatge de Canti 9, 1º 2ª, Poblenou, Barcelona",
    "footer.rights": "© 2025 Leonardo Gómez Arvea. All rights reserved.",
    "btn.expand": "See more",
    "btn.collapse": "See less",
    "btn.download": "Download CV"
  },
  "ca": {
    "nav.home": "Inici",
    "nav.profile": "Perfil",
    "nav.experience": "Experiència",
    "nav.education": "Formació",
    "nav.skills": "Competències",
    "nav.references": "Referències",
    "nav.contact": "Contacte",
    "hero.name": "Leonardo Gómez Arvea",
    "hero.subtitle": "F&B MANAGER",
    "hero.current": "F&B Manager a The Social Hub Poblenou",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Professional",
    "about.desc": "F&B Manager amb més de dues dècades d'experiència en hostaleria premium a Barcelona. Trajectòria que combina la direcció operativa d'hotels de 4 i 5 estrelles amb la visió emprenedora de fundar i dirigir el seu propi restaurant. Especialitzat en lideratge estratègic, excel·lència operativa i desenvolupament de conceptes gastronòmics innovadors. Formació internacional a França, Suïssa i Mèxic que aporta una perspectiva global a la gestió d'equips multidisciplinaris i la implementació de pràctiques sostenibles.",
    "about.stat1": "+20 anys en hostaleria",
    "about.stat2": "+100 persones liderades",
    "about.stat3": "Hotels 4★-5★",
    "exp.title": "Experiència Professional",
    "exp.1.date": "2023 — ACTUALITAT",
    "exp.1.place": "The Social Hub Poblenou",
    "exp.1.role": "F&B Manager",
    "exp.1.desc": "Transformació dels punts de venda de F&B mitjançant la implementació de conceptes gastronòmics premium i pràctiques de sostenibilitat. Gestió operativa de múltiples espais: WorkCafé, rooftop i cuines comunitàries. Promoció i mentoria de l'equip, fomentant el creixement professional i la cohesió.",
    "exp.2.date": "2020 — 2023",
    "exp.2.place": "Grand Hotel Central",
    "exp.2.role": "F&B Manager",
    "exp.2.desc": "Lideratge de la recuperació operativa post-pandèmia, reestructurant fluxos de treball i accelerant la recuperació financera. Obtenció de la Certificació Biosphere implementant pràctiques de turisme sostenible conforme a estàndards internacionals. Gestió d'equips transversals per millorar la satisfacció del client i optimitzar les operacions en totes les àrees de restauració.",
    "exp.3.date": "2018 — 2020",
    "exp.3.place": "Grupo Lombardo Restauración",
    "exp.3.role": "Director d'Operacions",
    "exp.3.desc": "Supervisió de les operacions diàries de la cadena de restaurants de tapes. Implementació d'estratègies de creixement d'ingressos i optimització de costos. Adopció de tecnologia per millorar l'eficiència operativa. Adaptació d'operacions durant la crisi COVID-19, garantint la continuïtat del negoci i la seguretat de l'equip.",
    "exp.4.date": "2015 — 2018",
    "exp.4.place": "Bestial Beach Club",
    "exp.4.role": "Director General",
    "exp.4.desc": "Direcció integral de les operacions de l'icònic beach club mediterrani. Gestió d'un equip ampli i desenvolupament d'ingressos significatius mitjançant conceptes de menú innovadors i promocions estacionals. Implementació d'estratègies comercials rendibles i presa de decisions basada en dades per maximitzar la rendibilitat.",
    "exp.5.date": "2008 — 2015",
    "exp.5.place": "Txapela — AN Grup",
    "exp.5.role": "Director de Restaurant",
    "exp.5.desc": "Direcció integral del restaurant Txapela en una de les ubicacions més emblemàtiques de Barcelona. Gestió operativa i d'equips en un establiment d'alt volum especialitzat en cuina basca i pintxos. Responsable del compte de resultats, l'experiència del client i la coordinació amb la central del grup.",
    "exp.6.date": "2002 — 2008",
    "exp.6.place": "Chilam Balam",
    "exp.6.role": "Propietari i Director",
    "exp.6.desc": "Fundació i direcció de restaurant de cuina mexicana autèntica a l'emblemàtica Avinguda Gaudí de Barcelona. Gestió integral del negoci: concepte gastronòmic, operacions, equip, proveïdors i relació amb clients. Sis anys de trajectòria empresarial fins a l'impacte de la crisi econòmica de 2008.",
    "edu.title": "Formació Acadèmica",
    "edu.1.date": "2016",
    "edu.1.school": "EAE Business School / Ostelea",
    "edu.1.title": "Direcció Hotelera i de Restauració",
    "edu.1.details": "Barcelona, Espanya.",
    "edu.2.date": "2002",
    "edu.2.school": "Ferrandi Paris · Université du Vin · Ecole Hôtelière de Lausanne",
    "edu.2.title": "Màster en Gestió d'Aliments i Begudes",
    "edu.2.details": "França / Suïssa.",
    "edu.3.date": "2001",
    "edu.3.school": "Universidad Iberoamericana",
    "edu.3.title": "Llicenciatura en Administració Hotelera",
    "edu.3.details": "Ciutat de Mèxic, Mèxic.",
    "edu.4.date": "2000",
    "edu.4.school": "Universidad Iberoamericana",
    "edu.4.title": "Diploma en Arts Culinàries i Formació de Xef",
    "edu.4.details": "Ciutat de Mèxic, Mèxic.",
    "skills.title": "Competències i Idiomes",
    "skills.skills_title": "Competències",
    "skills.lang_title": "Idiomes",
    "skills.s1": "Planificació estratègica",
    "skills.s2": "Lideratge d'equips",
    "skills.s3": "Experiència del client",
    "skills.s4": "Sostenibilitat (Biosphere)",
    "skills.s5": "Desenvolupament de conceptes",
    "skills.s6": "Gestió financera",
    "skills.l1.name": "Espanyol",
    "skills.l1.level": "Natiu",
    "skills.l2.name": "Anglès",
    "skills.l2.level": "Avançat (C1)",
    "skills.l3.name": "Català",
    "skills.l3.level": "Avançat (C1)",
    "skills.l4.name": "Francès",
    "skills.l4.level": "Intermedi alt (B2)",
    "contact.title": "Contacte Professional",
    "contact.phone": "+34 692 40 54 56",
    "contact.email": "leonardo.gomez.arvea@gmail.com",
    "contact.loc": "Passatge de Canti 9, 1r 2a, Poblenou, Barcelona",
    "footer.rights": "© 2025 Leonardo Gómez Arvea. Tots els drets reservats.",
    "btn.expand": "Veure més",
    "btn.collapse": "Veure menys",
    "btn.download": "Descarregar CV"
  }
};

// DARK SECTIONS - Injected by generate.js
const darkSections = ["education","skills","contact"];

// NAV ACCENT RGB - Injected by generate.js (extracted from theme --accent-color)
const navAccentRgb = [255,255,255];

// EXPANDABLE TIMELINE LOGIC
window.toggleTimeline = function (id, btn) {
    const container = document.getElementById(id);
    const isCollapsed = container.classList.contains('collapsed');
    const currentLang = localStorage.getItem('preferredLang') || 'es';

    if (isCollapsed) {
        // EXPAND
        container.classList.remove('collapsed');
        container.classList.add('expanded');

        const span = btn.querySelector('span');
        const icon = btn.querySelector('ion-icon');
        if (span) span.textContent = translations[currentLang]["btn.collapse"] || "Cerrar";
        if (icon) icon.setAttribute('name', 'chevron-up-outline');

        container.scrollTop = 0;

        // MOBILE: Section becomes scroll container with sticky title
        if (window.innerWidth <= 768) {
            var section = container.closest('section');
            var scroller = document.getElementById('app-scroller');
            if (section) {
                // Determine sticky title background:
                // 1. Try backgroundColor (works for solid color sections)
                // 2. For gradient/image backgrounds, sample a pixel from the section
                var sectionBg = getComputedStyle(section).backgroundColor;
                var isTransparent = !sectionBg || sectionBg === 'transparent' || sectionBg === 'rgba(0, 0, 0, 0)';
                if (isTransparent) {
                    // Section uses background-image/gradient — check if it's a dark section
                    var isDark = darkSections.indexOf(section.id) !== -1;
                    sectionBg = isDark ? 'rgb(28, 28, 28)' : '#FFFFFF';
                }
                section.style.setProperty('--sticky-bg', sectionBg);

                section.classList.add('section-expanded');
                if (scroller) scroller.classList.add('snap-disabled');
                // Scroll to title after expansion renders
                var title = section.querySelector('h2');
                if (title) {
                    setTimeout(function() {
                        section.scrollTop = 0;
                        title.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 150);
                }
            }
        }

        // Install BOTH scroll and wheel handlers unconditionally.
        // CSS transition on max-height (0.8s) makes a single early check unreliable
        // — each handler checks the real-time state when its event fires.

        // Scroll handler: auto-collapse when user scrolls to bottom (overflow case)
        let scrollTimeout = null;
        container._scrollEndHandler = function() {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollBottom = container.scrollTop + container.clientHeight;
                const scrollMax = container.scrollHeight;
                if (scrollBottom >= scrollMax - 5) {
                    collapseAndScrollNext(container, btn);
                }
            }, 800);
        };
        container.addEventListener('scroll', container._scrollEndHandler);

        // Wheel handler on the SECTION (not just the container) to also cover
        // the gap area below the timeline where overflow:hidden traps scroll.
        var section = container.closest('section');
        let wheelDebounce = null;
        container._wheelHandler = function(e) {
            if (wheelDebounce) return;
            // Check in real time whether content actually overflows
            var contentOverflows = container.scrollHeight > container.clientHeight + 10;
            if (!contentOverflows && e.deltaY > 0) {
                e.preventDefault();
                wheelDebounce = setTimeout(function() { wheelDebounce = null; }, 500);
                collapseAndScrollNext(container, btn);
            }
        };
        (section || container).addEventListener('wheel', container._wheelHandler, { passive: false });
    } else {
        // COLLAPSE
        collapseTimeline(container, btn);
    }
};

function collapseTimeline(container, btn) {
    const currentLang = localStorage.getItem('preferredLang') || 'es';

    container.classList.add('collapsed');
    container.classList.remove('expanded');

    // Remove scroll and wheel listeners, reset overscroll override
    if (container._scrollEndHandler) {
        container.removeEventListener('scroll', container._scrollEndHandler);
        container._scrollEndHandler = null;
    }
    if (container._wheelHandler) {
        // Wheel handler lives on the section (parent), not the container
        var section = container.closest('section');
        (section || container).removeEventListener('wheel', container._wheelHandler);
        container._wheelHandler = null;
    }
    container.style.overscrollBehaviorY = '';

    const span = btn.querySelector('span');
    const icon = btn.querySelector('ion-icon');
    if (span) span.textContent = translations[currentLang]["btn.expand"] || "Ver todo";
    if (icon) icon.setAttribute('name', 'chevron-down-outline');

    container.scrollTop = 0;

    // MOBILE: Restore section and snap behavior
    // skipScroll flag set by collapseAndScrollNext to avoid conflicting scrolls
    if (window.innerWidth <= 768) {
        var sectionEl = container.closest('section');
        var scroller = document.getElementById('app-scroller');
        if (sectionEl) {
            sectionEl.scrollTop = 0;
            sectionEl.classList.remove('section-expanded');
            sectionEl.style.removeProperty('--sticky-bg');
            var shouldScroll = !container._skipMobileScroll;
            container._skipMobileScroll = false;
            // Re-enable snap after a brief delay for layout to settle
            setTimeout(function() {
                if (scroller) {
                    var anyExpanded = document.querySelector('section.section-expanded');
                    if (!anyExpanded) {
                        scroller.classList.remove('snap-disabled');
                    }
                }
                if (shouldScroll) {
                    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 150);
        }
    }
}

function collapseAndScrollNext(container, btn) {
    // Tell collapseTimeline not to scroll back to same section on mobile
    container._skipMobileScroll = true;

    // First, collapse the timeline
    collapseTimeline(container, btn);

    // Find the parent section
    const section = container.closest('section');
    if (!section) return;

    // Find the next sibling section
    const nextSection = section.nextElementSibling;
    if (nextSection && (nextSection.tagName === 'SECTION' || nextSection.tagName === 'FOOTER')) {
        // Small delay to let collapse animation start
        setTimeout(() => {
            nextSection.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    let currentLang = localStorage.getItem('preferredLang') || 'es';
    updateLanguage(currentLang);

    // Lang Switcher Interaction
    const langSwitcher = document.querySelector('.lang-switcher-bottom');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function (e) {
            const targetBtn = e.target.closest('.lang-btn-bottom');
            if (!targetBtn) return;

            if (this.classList.contains('expanded')) {
                if (!targetBtn.classList.contains('active')) {
                    const selectedLang = targetBtn.getAttribute('data-lang');
                    if (selectedLang) {
                        currentLang = selectedLang;
                        updateLanguage(currentLang);
                    }
                }
                this.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
            }
        });

        document.addEventListener('click', function (e) {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('expanded');
            }
        });
    }

    // BURGER MENU LOGIC
    window.toggleBurgerMenu = function () {
        const burgerBtn = document.getElementById('burger-btn');
        const menuOverlay = document.getElementById('menu-overlay');
        const cutleryBurger = burgerBtn ? burgerBtn.querySelector('.cutlery-burger') : null;
        const bottomNav = document.querySelector('.bottom-nav');
        if (!burgerBtn || !menuOverlay) return;

        menuOverlay.classList.toggle('open');
        const isOpen = menuOverlay.classList.contains('open');

        if (cutleryBurger) {
            // Hospitality theme: cutlery → X animation via CSS class
            cutleryBurger.classList.toggle('burger-open', isOpen);
        } else {
            // Generic theme (medical etc.): swap ion-icon between menu ↔ close
            const icon = burgerBtn.querySelector('ion-icon');
            if (icon) {
                icon.setAttribute('name', isOpen ? 'close-outline' : 'menu-outline');
            }
        }
        // Toggle accent colors when menu overlay is open (dark background)
        if (bottomNav) {
            bottomNav.classList.toggle('menu-open', isOpen);
        }
    };

    // Close menu on link click — scroll within #app-scroller
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const menuOverlay = document.getElementById('menu-overlay');
            const burgerBtn = document.getElementById('burger-btn');
            const bottomNav = document.querySelector('.bottom-nav');
            if (menuOverlay) menuOverlay.classList.remove('open');
            if (burgerBtn) {
                const cutleryBurger = burgerBtn.querySelector('.cutlery-burger');
                if (cutleryBurger) {
                    cutleryBurger.classList.remove('burger-open');
                } else {
                    const icon = burgerBtn.querySelector('ion-icon');
                    if (icon) icon.setAttribute('name', 'menu-outline');
                }
            }
            if (bottomNav) bottomNav.classList.remove('menu-open');

            // Scroll to section within #app-scroller
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        });
    });

    // Handle CTA button scroll within #app-scroller
    const ctaBtn = document.querySelector('.btn-primary[href="#contact"]');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        });
    }

    // Set initial nav color
    if (document.querySelector('.bottom-nav')) {
        document.querySelector('.bottom-nav').style.setProperty('--nav-adaptive-color', 'rgb(28,28,28)');
    }

    // Scroll animations — IntersectionObserver
    var animElements = document.querySelectorAll('.animate-on-scroll');
    if (animElements.length > 0 && 'IntersectionObserver' in window) {
        var animObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animObserver.unobserve(entry.target);
                }
            });
        }, {
            root: document.getElementById('app-scroller'),
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        animElements.forEach(function(el) {
            animObserver.observe(el);
        });
    } else {
        // Fallback: show all elements immediately
        animElements.forEach(function(el) {
            el.classList.add('visible');
        });
    }
});

// Adaptive nav colors — scroll-synced loop
function _navColorTick() {
    var nav = document.querySelector('.bottom-nav');
    var scroller = document.getElementById('app-scroller');
    if (!nav || !scroller) return;
    if (nav.classList.contains('menu-open')) return;

    var rect = scroller.getBoundingClientRect();
    var viewH = rect.height;
    if (viewH <= 0) return;

    var sections = document.querySelectorAll('header, section, footer');
    var dark = 0;

    for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        var sr = s.getBoundingClientRect();
        var vt = Math.max(sr.top, rect.top);
        var vb = Math.min(sr.bottom, rect.bottom);
        var vh = vb - vt;
        if (vh > 0 && darkSections.indexOf(s.id) !== -1) {
            dark += vh / viewH;
        }
    }

    dark = Math.min(1, Math.max(0, dark));
    var r = Math.round(28 + (navAccentRgb[0] - 28) * dark);
    var g = Math.round(28 + (navAccentRgb[1] - 28) * dark);
    var b = Math.round(28 + (navAccentRgb[2] - 28) * dark);
    nav.style.setProperty('--nav-adaptive-color', 'rgb(' + r + ',' + g + ',' + b + ')');
}
setInterval(_navColorTick, 16);

// Snap-visible detection
var _lastVisibleSection = null;
function _snapVisibleTick() {
    var scroller = document.getElementById('app-scroller');
    if (!scroller) return;

    var scrollerRect = scroller.getBoundingClientRect();
    var centerY = scrollerRect.top + scrollerRect.height / 2;

    var sections = document.querySelectorAll('header, section, footer');
    var bestSection = null;
    var bestOverlap = 0;

    for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        var sr = s.getBoundingClientRect();
        var vt = Math.max(sr.top, scrollerRect.top);
        var vb = Math.min(sr.bottom, scrollerRect.bottom);
        var vh = vb - vt;

        if (vh > bestOverlap) {
            bestOverlap = vh;
            bestSection = s;
        }
    }

    if (bestSection && bestSection !== _lastVisibleSection) {
        if (_lastVisibleSection) {
            _lastVisibleSection.classList.remove('snap-visible');
        }
        bestSection.classList.add('snap-visible');
        _lastVisibleSection = bestSection;

        // Auto-collapse timelines when leaving experience/education sections
        if (bestSection &&
            (bestSection.id === 'experience' || bestSection.id === 'education')) {
            // Do nothing, user is viewing this section
        } else {
            var expandedTimelines = document.querySelectorAll('.timeline-container.expanded');
            expandedTimelines.forEach(function(tl) {
                var btn = tl.parentElement.querySelector('.btn-expand');
                if (btn) {
                    collapseTimeline(tl, btn);
                }
            });
        }
    }
}
setInterval(_snapVisibleTick, 100);

function updateLanguage(lang) {
    if (!translations[lang]) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn-bottom').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}
