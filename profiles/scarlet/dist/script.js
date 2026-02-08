/* core.js - CV Portfolio Core Script */
/* This file is generated - translations come from config.json */

// TRANSLATIONS - Injected by generate.js
const translations = {
  "es": {
    "nav.home": "Inicio",
    "nav.about": "Perfil",
    "nav.education": "Formación",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "hero.name": "Dra. Scarlet Pérez",
    "hero.subtitle": "MEDICINA GENERAL | MEDICINA ESTÉTICA",
    "hero.cta": "CONTACTAR",
    "hero.uni": "Universidad Católica Boliviana San Pablo",
    "about.title": "Perfil Profesional",
    "about.desc": "Médico Cirujano con titulación homologada en España. Actualmente ampliando especialización con cursos en Medicina Estética y Restauración Capilar. Experiencia práctica en atención clínica, urgencias y coordinación de pacientes. Comprometida con la excelencia médica y el trato humano.",
    "exp.title": "Experiencia Profesional",
    "exp.1.date": "2022",
    "exp.1.place": "Caja Nacional de Salud - Bolivia",
    "exp.1.role": "Internado Rotatorio Médico",
    "exp.1.desc": "Rotaciones completas en Cirugía, Pediatría, Ginecología y Medicina Interna.",
    "exp.2.date": "2020 - 2022",
    "exp.2.place": "Centro Médico Perpetuo Socorro",
    "exp.2.role": "Rotaciones Clínicas",
    "exp.2.desc": "Asistencia en consultas externas y procedimientos menores.",
    "exp.3.date": "2020 - 2022",
    "exp.3.place": "Feria Expocruz",
    "exp.3.role": "Médico de Apoyo / Urgencias",
    "exp.3.desc": "Atención primaria de urgencias, triaje y estabilización.",
    "edu.title": "Formación Académica",
    "edu.1.date": "Enero 2026",
    "edu.1.school": "Ministerio de Sanidad",
    "edu.1.title": "Examen MIR",
    "edu.1.details": "Examen realizado el 24/01/2026.",
    "edu.2.date": "2025 - ACTUALIDAD",
    "edu.2.school": "UCV & European Medical College",
    "edu.2.title": "Curso en Medicina Estética y Rejuvenecimiento Integral",
    "edu.2.details": "Sede: Barcelona. En curso.",
    "edu.3.date": "2025 - ACTUALIDAD",
    "edu.3.school": "European Medical College",
    "edu.3.title": "Curso en Medicina y Restauración Capilar",
    "edu.3.details": "En curso.",
    "edu.4.date": "2024 - 2026",
    "edu.4.school": "AMIR",
    "edu.4.title": "Curso Preparación AMIR",
    "edu.4.details": "Preparación para examen MIR.",
    "edu.5.date": "2024",
    "edu.5.school": "Generalitat de Catalunya",
    "edu.5.title": "Ejercer como médico en Cataluña",
    "edu.5.details": "Habilitación para ejercer en Catalunya.",
    "edu.6.date": "2016 - 2022",
    "edu.6.school": "Universidad Católica Boliviana San Pablo",
    "edu.6.title": "Grado en Medicina y Cirugía",
    "edu.6.details": "Santa Cruz, Bolivia. Título homologado en España.",
    "contact.title": "Contacto Profesional",
    "contact.phone": "+34 617 893 031",
    "contact.email": "scarletdra@gmail.com",
    "contact.loc": "Barcelona, España",
    "footer.rights": "© 2026 Dra. Scarlet Pérez. Todos los derechos reservados.",
    "btn.expand": "Ver toda la formación",
    "btn.collapse": "Cerrar"
  },
  "en": {
    "nav.home": "Home",
    "nav.about": "Profile",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.name": "Dra. Scarlet Pérez",
    "hero.subtitle": "GENERAL MEDICINE | AESTHETIC MEDICINE",
    "hero.cta": "CONTACT",
    "hero.uni": "Universidad Católica Boliviana San Pablo",
    "about.title": "Professional Profile",
    "about.desc": "Medical Doctor with degree validated in Spain. Currently expanding specialization with courses in Aesthetic Medicine and Hair Restoration. Practical experience in clinical care, emergencies and patient coordination. Committed to medical excellence and human care.",
    "exp.title": "Professional Experience",
    "exp.1.date": "2022",
    "exp.1.place": "National Health Fund - Bolivia",
    "exp.1.role": "Medical Internship",
    "exp.1.desc": "Complete rotations in Surgery, Pediatrics, Gynecology and Internal Medicine.",
    "exp.2.date": "2020 - 2022",
    "exp.2.place": "Perpetuo Socorro Medical Center",
    "exp.2.role": "Clinical Rotations",
    "exp.2.desc": "Assistance in outpatient consultations and minor procedures.",
    "exp.3.date": "2020 - 2022",
    "exp.3.place": "Expocruz Fair",
    "exp.3.role": "Support Physician / Emergencies",
    "exp.3.desc": "Primary emergency care, triage and stabilization.",
    "edu.title": "Education",
    "edu.1.date": "January 2026",
    "edu.1.school": "Ministry of Health",
    "edu.1.title": "MIR Exam",
    "edu.1.details": "Exam taken on 24/01/2026.",
    "edu.2.date": "2025 - PRESENT",
    "edu.2.school": "UCV & European Medical College",
    "edu.2.title": "Course in Aesthetic Medicine and Comprehensive Rejuvenation",
    "edu.2.details": "Location: Barcelona. In progress.",
    "edu.3.date": "2025 - PRESENT",
    "edu.3.school": "European Medical College",
    "edu.3.title": "Course in Medicine and Hair Restoration",
    "edu.3.details": "In progress.",
    "edu.4.date": "2024 - 2026",
    "edu.4.school": "AMIR",
    "edu.4.title": "AMIR Preparation Course",
    "edu.4.details": "MIR exam preparation.",
    "edu.5.date": "2024",
    "edu.5.school": "Generalitat de Catalunya",
    "edu.5.title": "Practice medicine in Catalonia",
    "edu.5.details": "Authorization to practice in Catalonia.",
    "edu.6.date": "2016 - 2022",
    "edu.6.school": "Universidad Católica Boliviana San Pablo",
    "edu.6.title": "Degree in Medicine and Surgery",
    "edu.6.details": "Santa Cruz, Bolivia. Degree validated in Spain.",
    "contact.title": "Professional Contact",
    "contact.phone": "+34 617 893 031",
    "contact.email": "scarletdra@gmail.com",
    "contact.loc": "Barcelona, Spain",
    "footer.rights": "© 2026 Dr. Scarlet Pérez. All rights reserved.",
    "btn.expand": "See all education",
    "btn.collapse": "Close"
  },
  "ca": {
    "nav.home": "Inici",
    "nav.about": "Perfil",
    "nav.education": "Formació",
    "nav.experience": "Experiència",
    "nav.contact": "Contacte",
    "hero.name": "Dra. Scarlet Pérez",
    "hero.subtitle": "MEDICINA GENERAL | MEDICINA ESTÈTICA",
    "hero.cta": "CONTACTAR",
    "hero.uni": "Universidad Católica Boliviana San Pablo",
    "about.title": "Perfil Professional",
    "about.desc": "Metge Cirurgià amb titulació homologada a Espanya. Actualment ampliant especialització amb cursos en Medicina Estètica i Restauració Capil·lar. Experiència pràctica en atenció clínica, urgències i coordinació de pacients. Compromesa amb l'excel·lència mèdica i el tracte humà.",
    "exp.title": "Experiència Professional",
    "exp.1.date": "2022",
    "exp.1.place": "Caixa Nacional de Salut - Bolívia",
    "exp.1.role": "Internat Rotatori Mèdic",
    "exp.1.desc": "Rotacions completes en Cirurgia, Pediatria, Ginecologia i Medicina Interna.",
    "exp.2.date": "2020 - 2022",
    "exp.2.place": "Centre Mèdic Perpetuo Socorro",
    "exp.2.role": "Rotacions Clíniques",
    "exp.2.desc": "Assistència en consultes externes i procediments menors.",
    "exp.3.date": "2020 - 2022",
    "exp.3.place": "Fira Expocruz",
    "exp.3.role": "Metge de Suport / Urgències",
    "exp.3.desc": "Atenció primària d'urgències, triatge i estabilització.",
    "edu.title": "Formació Acadèmica",
    "edu.1.date": "Gener 2026",
    "edu.1.school": "Ministeri de Sanitat",
    "edu.1.title": "Examen MIR",
    "edu.1.details": "Examen realitzat el 24/01/2026.",
    "edu.2.date": "2025 - ACTUALITAT",
    "edu.2.school": "UCV & European Medical College",
    "edu.2.title": "Curs en Medicina Estètica i Rejoveniment Integral",
    "edu.2.details": "Seu: Barcelona. En curs.",
    "edu.3.date": "2025 - ACTUALITAT",
    "edu.3.school": "European Medical College",
    "edu.3.title": "Curs en Medicina i Restauració Capil·lar",
    "edu.3.details": "En curs.",
    "edu.4.date": "2024 - 2026",
    "edu.4.school": "AMIR",
    "edu.4.title": "Curs Preparació AMIR",
    "edu.4.details": "Preparació per examen MIR.",
    "edu.5.date": "2024",
    "edu.5.school": "Generalitat de Catalunya",
    "edu.5.title": "Exercir com a metge a Catalunya",
    "edu.5.details": "Habilitació per exercir a Catalunya.",
    "edu.6.date": "2016 - 2022",
    "edu.6.school": "Universidad Católica Boliviana San Pablo",
    "edu.6.title": "Grau en Medicina i Cirurgia",
    "edu.6.details": "Santa Cruz, Bolívia. Títol homologat a Espanya.",
    "contact.title": "Contacte Professional",
    "contact.phone": "+34 617 893 031",
    "contact.email": "scarletdra@gmail.com",
    "contact.loc": "Barcelona, Espanya",
    "footer.rights": "© 2026 Dra. Scarlet Pérez. Tots els drets reservats.",
    "btn.expand": "Veure tota la formació",
    "btn.collapse": "Tancar"
  }
};

// DARK SECTIONS - Injected by generate.js
const darkSections = ["about","experience","contact"];

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

        // Add scroll listener for auto-collapse at end (with debounce)
        let scrollTimeout = null;
        container._scrollEndHandler = function() {
            // Debounce: wait 800ms after scroll stops at bottom
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollBottom = container.scrollTop + container.clientHeight;
                const scrollMax = container.scrollHeight;

                // If scrolled to within 5px of absolute bottom, collapse and scroll to next section
                if (scrollBottom >= scrollMax - 5) {
                    collapseAndScrollNext(container, btn);
                }
            }, 800);
        };
        container.addEventListener('scroll', container._scrollEndHandler);
    } else {
        // COLLAPSE
        collapseTimeline(container, btn);
    }
};

function collapseTimeline(container, btn) {
    const currentLang = localStorage.getItem('preferredLang') || 'es';

    container.classList.add('collapsed');
    container.classList.remove('expanded');

    // Remove scroll listener
    if (container._scrollEndHandler) {
        container.removeEventListener('scroll', container._scrollEndHandler);
        container._scrollEndHandler = null;
    }

    const span = btn.querySelector('span');
    const icon = btn.querySelector('ion-icon');
    if (span) span.textContent = translations[currentLang]["btn.expand"] || "Ver todo";
    if (icon) icon.setAttribute('name', 'chevron-down-outline');

    container.scrollTop = 0;
}

function collapseAndScrollNext(container, btn) {
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
        }, 100);
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
        if (cutleryBurger) {
            cutleryBurger.classList.toggle('burger-open');
        }
        // Toggle gold colors when menu overlay is open (dark background)
        if (bottomNav) {
            bottomNav.classList.toggle('menu-open', menuOverlay.classList.contains('open'));
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
                if (cutleryBurger) cutleryBurger.classList.remove('burger-open');
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
    var r = Math.round(28 + 156 * dark);
    var g = Math.round(28 + 121 * dark);
    var b = Math.round(28 + 78 * dark);
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
