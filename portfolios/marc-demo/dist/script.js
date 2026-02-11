/* core.js - CV Portfolio Core Script */
/* This file is generated - translations come from config.json */

// TRANSLATIONS - Injected by generate.js
const translations = {
  "es": {
    "nav.home": "Inicio",
    "nav.profile": "Perfil",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.skills": "Habilidades",
    "nav.references": "Referencias",
    "nav.contact": "Contacto",
    "hero.name": "Marc Beltrán Soler (Demo)",
    "hero.subtitle": "CHEF EJECUTIVO",
    "hero.current": "Chef Ejecutivo | Hotel Arts Barcelona, The Ritz-Carlton",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Profesional",
    "about.desc": "Chef ejecutivo con más de 12 años de trayectoria en alta cocina mediterránea y técnicas de vanguardia. Formado en la Escola d'Hoteleria Hofmann y curtido en cocinas con estrella Michelin bajo la dirección de chefs de referencia internacional. Especializado en cocina de temporada y producto de proximidad, gestión integral de brigadas de hasta 25 cocineros y desarrollo de conceptos gastronómicos para hoteles de 5 estrellas Gran Lujo. Obsesionado con la excelencia en el producto, el emplatado y la experiencia del comensal.",
    "about.stat1": "+12 años en alta cocina",
    "about.stat2": "Cocinas con ★ Michelin",
    "about.stat3": "Brigadas de hasta 25 pax",
    "exp.title": "Experiencia Profesional",
    "exp.1.date": "SEP 2022 - ACTUALIDAD",
    "exp.1.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.1.role": "Chef Ejecutivo",
    "exp.1.desc": "Dirección de todas las operaciones culinarias del hotel: restaurante gastronómico, brasserie, banquetes y room service. Gestión de brigada de 25 cocineros y 4 jefes de partida. Diseño de carta estacional con producto de lonja y huerta propia. Food cost sostenido por debajo del 28%.",
    "exp.2.date": "MAR 2019 - AGO 2022",
    "exp.2.place": "Mandarin Oriental Barcelona — Restaurante Moments (★★ Michelin)",
    "exp.2.role": "Segundo de Cocina / Sous Chef",
    "exp.2.desc": "Brazo derecho de la chef Carme Ruscalleda en cocina con 2 estrellas Michelin. Coordinación de 18 cocineros en servicio. Desarrollo de nuevas elaboraciones y supervisión de mise en place. Formación del equipo en técnicas de vanguardia y estándares Michelin.",
    "exp.3.date": "ENE 2017 - FEB 2019",
    "exp.3.place": "Restaurante Cinc Sentits, Barcelona (★ Michelin)",
    "exp.3.role": "Jefe de Partida — Partida Caliente",
    "exp.3.desc": "Responsable de la partida caliente en restaurante con estrella Michelin. Gestión de 4 cocineros. Elaboraciones de producto local con técnicas contemporáneas. Participación en el diseño del menú degustación.",
    "exp.4.date": "JUN 2015 - DIC 2016",
    "exp.4.place": "El Celler de Can Roca, Girona (★★★ Michelin)",
    "exp.4.role": "Stagiaire / Cocinero",
    "exp.4.desc": "Stage de 6 meses y posterior contrato en el mejor restaurante del mundo (2013, 2015). Inmersión en cocina creativa, pastelería de vanguardia y perfumería culinaria junto a los hermanos Roca.",
    "exp.5.date": "SEP 2014 - MAY 2015",
    "exp.5.place": "Hotel W Barcelona — Restaurant BRAVO",
    "exp.5.role": "Jefe de Partida — Partida Fría",
    "exp.5.desc": "Gestión de la partida fría en restaurante de hotel 5 estrellas. Diseño de entrantes y ensaladas del menú. Coordinación con proveedores de producto fresco local.",
    "exp.6.date": "SEP 2013 - AGO 2014",
    "exp.6.place": "Hofmann Restaurant, Barcelona (★ Michelin)",
    "exp.6.role": "Commis de Cocina",
    "exp.6.desc": "Primeras armas profesionales en el restaurante de la escuela Hofmann bajo la dirección de Mey Hofmann. Rotación por todas las partidas: fría, caliente, pastelería y cuarto frío.",
    "exp.7.date": "JUL 2012 - AGO 2013",
    "exp.7.place": "Restaurante Cal Pep, Barcelona",
    "exp.7.role": "Ayudante de Cocina",
    "exp.7.desc": "Apoyo en cocina de barra y sala en uno de los referentes de cocina de mercado de Barcelona. Manejo de producto fresco de la Boqueria. Aprendizaje directo de Pep Manubens.",
    "edu.title": "Formación Académica",
    "edu.1.date": "SEP 2010 - JUN 2013",
    "edu.1.school": "Escola d'Hoteleria Hofmann, Barcelona",
    "edu.1.title": "Diploma Superior en Cocina y Gastronomía",
    "edu.1.details": "3 años de formación intensiva. Prácticas en restaurante Hofmann (★ Michelin). Premio al mejor alumno de promoción 2013.",
    "edu.2.date": "MAR - MAY 2018",
    "edu.2.school": "Basque Culinary Center, San Sebastián",
    "edu.2.title": "Programa de Innovación y Creatividad Culinaria",
    "edu.2.details": "Curso intensivo en nuevas técnicas, I+D gastronómico y desarrollo de conceptos.",
    "edu.3.date": "2016",
    "edu.3.school": "APPCC Formación, Barcelona",
    "edu.3.title": "Certificado APPCC y Seguridad Alimentaria Avanzada",
    "edu.3.details": "Análisis de peligros y puntos de control crítico. Normativa europea de higiene alimentaria.",
    "edu.4.date": "2014",
    "edu.4.school": "Ajuntament de Barcelona",
    "edu.4.title": "Manipulador de Alimentos — Nivel Avanzado",
    "skills.title": "Habilidades e Idiomas",
    "skills.skills_title": "Competencias",
    "skills.lang_title": "Idiomas",
    "skills.s1": "Cocina mediterránea contemporánea",
    "skills.s2": "Técnicas de vanguardia",
    "skills.s3": "Gestión de brigada de cocina",
    "skills.s4": "Diseño de cartas y menús degustación",
    "skills.s5": "Control de escandallos y food cost",
    "skills.s6": "APPCC y seguridad alimentaria",
    "skills.s7": "Gestión de proveedores y producto",
    "skills.s8": "Cocina de temporada y km 0",
    "skills.s9": "Emplatado y presentación",
    "skills.s10": "Formación y mentoría de equipo",
    "skills.l1.name": "Catalán",
    "skills.l1.level": "Nativo",
    "skills.l2.name": "Español",
    "skills.l2.level": "Nativo",
    "skills.l3.name": "Inglés",
    "skills.l3.level": "Intermedio-alto",
    "skills.l4.name": "Francés",
    "skills.l4.level": "Básico",
    "ref.title": "Referencias",
    "ref.1.name": "Jordi Vilà",
    "ref.1.role": "Chef & Propietario — Alkimia (★ Michelin)",
    "ref.1.company": "Barcelona",
    "ref.2.name": "Roberto Martínez",
    "ref.2.role": "Director de F&B",
    "ref.2.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.3.name": "Mey Hofmann",
    "ref.3.role": "Directora & Fundadora",
    "ref.3.company": "Escola d'Hoteleria Hofmann, Barcelona",
    "ref.note": "Datos de contacto disponibles bajo petición.",
    "contact.title": "Contacto Profesional",
    "contact.phone": "+34 672 415 089",
    "contact.email": "marc.beltran.chef@gmail.com",
    "contact.loc": "Barcelona, España",
    "footer.rights": "© 2026 Marc Beltrán Soler. Todos los derechos reservados. · Portfolio de demostración — Registra3D CV Premium",
    "btn.expand": "Ver todo",
    "btn.collapse": "Cerrar",
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
    "hero.name": "Marc Beltrán Soler (Demo)",
    "hero.subtitle": "EXECUTIVE CHEF",
    "hero.current": "Executive Chef | Hotel Arts Barcelona, The Ritz-Carlton",
    "hero.cta": "CONTACT",
    "about.title": "Professional Profile",
    "about.desc": "Executive chef with over 12 years of experience in contemporary Mediterranean haute cuisine and avant-garde techniques. Trained at Hofmann School of Hospitality and forged in Michelin-starred kitchens under internationally renowned chefs. Specialized in seasonal and locally-sourced cuisine, comprehensive management of kitchen brigades of up to 25 cooks, and development of gastronomic concepts for 5-star Grand Luxury hotels. Driven by excellence in product, plating, and the dining experience.",
    "about.stat1": "12+ years in haute cuisine",
    "about.stat2": "Michelin ★ kitchens",
    "about.stat3": "Brigades up to 25 cooks",
    "exp.title": "Professional Experience",
    "exp.1.date": "SEP 2022 - PRESENT",
    "exp.1.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.1.role": "Executive Chef",
    "exp.1.desc": "Direction of all culinary operations: gastronomic restaurant, brasserie, banquets, and room service. Management of a 25-cook brigade and 4 sous chefs. Seasonal menu design with fish market and own garden produce. Food cost consistently below 28%.",
    "exp.2.date": "MAR 2019 - AUG 2022",
    "exp.2.place": "Mandarin Oriental Barcelona — Moments Restaurant (★★ Michelin)",
    "exp.2.role": "Sous Chef",
    "exp.2.desc": "Right hand of chef Carme Ruscalleda in a 2 Michelin-star kitchen. Coordination of 18 cooks during service. Development of new dishes and mise en place supervision. Team training in avant-garde techniques and Michelin standards.",
    "exp.3.date": "JAN 2017 - FEB 2019",
    "exp.3.place": "Cinc Sentits Restaurant, Barcelona (★ Michelin)",
    "exp.3.role": "Chef de Partie — Hot Section",
    "exp.3.desc": "Head of the hot section in a Michelin-starred restaurant. Management of 4 cooks. Local product preparations with contemporary techniques. Participation in tasting menu design.",
    "exp.4.date": "JUN 2015 - DEC 2016",
    "exp.4.place": "El Celler de Can Roca, Girona (★★★ Michelin)",
    "exp.4.role": "Stagiaire / Cook",
    "exp.4.desc": "6-month stage followed by contract at the world's best restaurant (2013, 2015). Immersion in creative cuisine, avant-garde pastry, and culinary perfumery alongside the Roca brothers.",
    "exp.5.date": "SEP 2014 - MAY 2015",
    "exp.5.place": "W Barcelona Hotel — BRAVO Restaurant",
    "exp.5.role": "Chef de Partie — Cold Section",
    "exp.5.desc": "Management of the cold section at a 5-star hotel restaurant. Starter and salad menu design. Coordination with local fresh produce suppliers.",
    "exp.6.date": "SEP 2013 - AUG 2014",
    "exp.6.place": "Hofmann Restaurant, Barcelona (★ Michelin)",
    "exp.6.role": "Commis Chef",
    "exp.6.desc": "First professional experience at Hofmann school restaurant under Mey Hofmann's direction. Rotation through all sections: cold, hot, pastry, and garde manger.",
    "exp.7.date": "JUL 2012 - AUG 2013",
    "exp.7.place": "Cal Pep Restaurant, Barcelona",
    "exp.7.role": "Kitchen Assistant",
    "exp.7.desc": "Support in bar and dining kitchen at one of Barcelona's market cuisine icons. Fresh produce handling from La Boqueria. Direct mentorship from Pep Manubens.",
    "edu.title": "Education",
    "edu.1.date": "SEP 2010 - JUN 2013",
    "edu.1.school": "Hofmann School of Hospitality, Barcelona",
    "edu.1.title": "Higher Diploma in Cuisine & Gastronomy",
    "edu.1.details": "3 years of intensive training. Internship at Hofmann Restaurant (★ Michelin). Best student award, class of 2013.",
    "edu.2.date": "MAR - MAY 2018",
    "edu.2.school": "Basque Culinary Center, San Sebastián",
    "edu.2.title": "Culinary Innovation & Creativity Program",
    "edu.2.details": "Intensive course in new techniques, gastronomic R&D, and concept development.",
    "edu.3.date": "2016",
    "edu.3.school": "HACCP Training, Barcelona",
    "edu.3.title": "HACCP & Advanced Food Safety Certificate",
    "edu.3.details": "Hazard analysis and critical control points. European food hygiene regulations.",
    "edu.4.date": "2014",
    "edu.4.school": "Barcelona City Council",
    "edu.4.title": "Food Handler Certificate — Advanced Level",
    "skills.title": "Skills & Languages",
    "skills.skills_title": "Competencies",
    "skills.lang_title": "Languages",
    "skills.s1": "Contemporary Mediterranean cuisine",
    "skills.s2": "Avant-garde techniques",
    "skills.s3": "Kitchen brigade management",
    "skills.s4": "Menu & tasting menu design",
    "skills.s5": "Recipe costing & food cost control",
    "skills.s6": "HACCP & food safety",
    "skills.s7": "Supplier & produce management",
    "skills.s8": "Seasonal & zero-km cuisine",
    "skills.s9": "Plating & presentation",
    "skills.s10": "Team training & mentoring",
    "skills.l1.name": "Catalan",
    "skills.l1.level": "Native",
    "skills.l2.name": "Spanish",
    "skills.l2.level": "Native",
    "skills.l3.name": "English",
    "skills.l3.level": "Upper-intermediate",
    "skills.l4.name": "French",
    "skills.l4.level": "Basic",
    "ref.title": "References",
    "ref.1.name": "Jordi Vilà",
    "ref.1.role": "Chef & Owner — Alkimia (★ Michelin)",
    "ref.1.company": "Barcelona",
    "ref.2.name": "Roberto Martínez",
    "ref.2.role": "F&B Director",
    "ref.2.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.3.name": "Mey Hofmann",
    "ref.3.role": "Director & Founder",
    "ref.3.company": "Hofmann School of Hospitality, Barcelona",
    "ref.note": "Contact details available upon request.",
    "contact.title": "Professional Contact",
    "contact.phone": "+34 672 415 089",
    "contact.email": "marc.beltran.chef@gmail.com",
    "contact.loc": "Barcelona, Spain",
    "footer.rights": "© 2026 Marc Beltrán Soler. All rights reserved. · Demo portfolio — Registra3D CV Premium",
    "btn.expand": "See all",
    "btn.collapse": "Close",
    "btn.download": "Download CV"
  },
  "ca": {
    "nav.home": "Inici",
    "nav.profile": "Perfil",
    "nav.experience": "Experiència",
    "nav.education": "Formació",
    "nav.skills": "Habilitats",
    "nav.references": "Referències",
    "nav.contact": "Contacte",
    "hero.name": "Marc Beltrán Soler (Demo)",
    "hero.subtitle": "XEF EXECUTIU",
    "hero.current": "Xef Executiu | Hotel Arts Barcelona, The Ritz-Carlton",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Professional",
    "about.desc": "Xef executiu amb més de 12 anys de trajectòria en alta cuina mediterrània i tècniques d'avantguarda. Format a l'Escola d'Hoteleria Hofmann i forjat en cuines amb estrella Michelin sota la direcció de xefs de referència internacional. Especialitzat en cuina de temporada i producte de proximitat, gestió integral de brigades de fins a 25 cuiners i desenvolupament de conceptes gastronòmics per a hotels de 5 estrelles Gran Luxe. Obsessionat amb l'excel·lència en el producte, l'emplatat i l'experiència del comensal.",
    "about.stat1": "+12 anys en alta cuina",
    "about.stat2": "Cuines amb ★ Michelin",
    "about.stat3": "Brigades de fins a 25 pax",
    "exp.title": "Experiència Professional",
    "exp.1.date": "SET 2022 - ACTUALITAT",
    "exp.1.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.1.role": "Xef Executiu",
    "exp.1.desc": "Direcció de totes les operacions culinàries de l'hotel: restaurant gastronòmic, brasserie, banquets i room service. Gestió de brigada de 25 cuiners i 4 caps de partida. Disseny de carta estacional amb producte de llotja i hort propi. Food cost sostingut per sota del 28%.",
    "exp.2.date": "MAR 2019 - AGO 2022",
    "exp.2.place": "Mandarin Oriental Barcelona — Restaurant Moments (★★ Michelin)",
    "exp.2.role": "Segon de Cuina / Sous Chef",
    "exp.2.desc": "Braç dret de la xef Carme Ruscalleda en cuina amb 2 estrelles Michelin. Coordinació de 18 cuiners en servei. Desenvolupament de noves elaboracions i supervisió de mise en place. Formació de l'equip en tècniques d'avantguarda i estàndards Michelin.",
    "exp.3.date": "GEN 2017 - FEB 2019",
    "exp.3.place": "Restaurant Cinc Sentits, Barcelona (★ Michelin)",
    "exp.3.role": "Cap de Partida — Partida Calenta",
    "exp.3.desc": "Responsable de la partida calenta en restaurant amb estrella Michelin. Gestió de 4 cuiners. Elaboracions de producte local amb tècniques contemporànies. Participació en el disseny del menú degustació.",
    "exp.4.date": "JUN 2015 - DES 2016",
    "exp.4.place": "El Celler de Can Roca, Girona (★★★ Michelin)",
    "exp.4.role": "Stagiaire / Cuiner",
    "exp.4.desc": "Stage de 6 mesos i posterior contracte al millor restaurant del món (2013, 2015). Immersió en cuina creativa, pastisseria d'avantguarda i perfumeria culinària amb els germans Roca.",
    "exp.5.date": "SET 2014 - MAI 2015",
    "exp.5.place": "Hotel W Barcelona — Restaurant BRAVO",
    "exp.5.role": "Cap de Partida — Partida Freda",
    "exp.5.desc": "Gestió de la partida freda en restaurant d'hotel 5 estrelles. Disseny d'entrants i amanides del menú. Coordinació amb proveïdors de producte fresc local.",
    "exp.6.date": "SET 2013 - AGO 2014",
    "exp.6.place": "Restaurant Hofmann, Barcelona (★ Michelin)",
    "exp.6.role": "Commis de Cuina",
    "exp.6.desc": "Primeres armes professionals al restaurant de l'escola Hofmann sota la direcció de Mey Hofmann. Rotació per totes les partides: freda, calenta, pastisseria i quart fred.",
    "exp.7.date": "JUL 2012 - AGO 2013",
    "exp.7.place": "Restaurant Cal Pep, Barcelona",
    "exp.7.role": "Ajudant de Cuina",
    "exp.7.desc": "Suport en cuina de barra i sala en un dels referents de cuina de mercat de Barcelona. Maneig de producte fresc de la Boqueria. Aprenentatge directe de Pep Manubens.",
    "edu.title": "Formació Acadèmica",
    "edu.1.date": "SET 2010 - JUN 2013",
    "edu.1.school": "Escola d'Hoteleria Hofmann, Barcelona",
    "edu.1.title": "Diploma Superior en Cuina i Gastronomia",
    "edu.1.details": "3 anys de formació intensiva. Pràctiques al restaurant Hofmann (★ Michelin). Premi al millor alumne de promoció 2013.",
    "edu.2.date": "MAR - MAI 2018",
    "edu.2.school": "Basque Culinary Center, Sant Sebastià",
    "edu.2.title": "Programa d'Innovació i Creativitat Culinària",
    "edu.2.details": "Curs intensiu en noves tècniques, R+D gastronòmic i desenvolupament de conceptes.",
    "edu.3.date": "2016",
    "edu.3.school": "APPCC Formació, Barcelona",
    "edu.3.title": "Certificat APPCC i Seguretat Alimentària Avançada",
    "edu.3.details": "Anàlisi de perills i punts de control crític. Normativa europea d'higiene alimentària.",
    "edu.4.date": "2014",
    "edu.4.school": "Ajuntament de Barcelona",
    "edu.4.title": "Manipulador d'Aliments — Nivell Avançat",
    "skills.title": "Habilitats i Idiomes",
    "skills.skills_title": "Competències",
    "skills.lang_title": "Idiomes",
    "skills.s1": "Cuina mediterrània contemporània",
    "skills.s2": "Tècniques d'avantguarda",
    "skills.s3": "Gestió de brigada de cuina",
    "skills.s4": "Disseny de cartes i menús degustació",
    "skills.s5": "Control d'escandalls i food cost",
    "skills.s6": "APPCC i seguretat alimentària",
    "skills.s7": "Gestió de proveïdors i producte",
    "skills.s8": "Cuina de temporada i km 0",
    "skills.s9": "Emplatat i presentació",
    "skills.s10": "Formació i mentoria d'equip",
    "skills.l1.name": "Català",
    "skills.l1.level": "Natiu",
    "skills.l2.name": "Espanyol",
    "skills.l2.level": "Natiu",
    "skills.l3.name": "Anglès",
    "skills.l3.level": "Intermedi-alt",
    "skills.l4.name": "Francès",
    "skills.l4.level": "Bàsic",
    "ref.title": "Referències",
    "ref.1.name": "Jordi Vilà",
    "ref.1.role": "Xef & Propietari — Alkimia (★ Michelin)",
    "ref.1.company": "Barcelona",
    "ref.2.name": "Roberto Martínez",
    "ref.2.role": "Director de F&B",
    "ref.2.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.3.name": "Mey Hofmann",
    "ref.3.role": "Directora & Fundadora",
    "ref.3.company": "Escola d'Hoteleria Hofmann, Barcelona",
    "ref.note": "Dades de contacte disponibles sota petició.",
    "contact.title": "Contacte Professional",
    "contact.phone": "+34 672 415 089",
    "contact.email": "marc.beltran.chef@gmail.com",
    "contact.loc": "Barcelona, Espanya",
    "footer.rights": "© 2026 Marc Beltrán Soler. Tots els drets reservats. · Portfolio de demostració — Registra3D CV Premium",
    "btn.expand": "Veure tot",
    "btn.collapse": "Tancar",
    "btn.download": "Descarregar CV"
  }
};

// DARK SECTIONS - Injected by generate.js
const darkSections = ["about","experience","skills"];

// NAV ACCENT RGB - Injected by generate.js (extracted from theme --accent-color)
const navAccentRgb = [184,149,106];

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
