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
    "hero.name": "Elena Montero Valls (Demo)",
    "hero.subtitle": "DIRECTORA DE F&B",
    "hero.current": "Directora de F&B | Mandarin Oriental Barcelona",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Profesional",
    "about.desc": "Directora de Food & Beverage con más de 18 años de experiencia en hoteles de lujo y cadenas internacionales de primer nivel. Trayectoria progresiva desde sala hasta la dirección integral de operaciones de restauración en establecimientos como Mandarin Oriental, Hyatt y Marriott. Especializada en gestión de P&L, optimización de costes F&B, desarrollo de conceptos gastronómicos y formación de equipos multiculturales de alto rendimiento. Certificada WSET Level 3 y con un MBA en Dirección Hotelera por Les Roches. Apasionada por la excelencia en guest experience y la innovación en servicios de restauración.",
    "about.stat1": "+18 años en hotelería de lujo",
    "about.stat2": "Cadenas 5★ internacionales",
    "about.stat3": "Equipos de hasta 80 personas",
    "exp.title": "Experiencia Profesional",
    "exp.1.date": "ENE 2021 - ACTUALIDAD",
    "exp.1.place": "Mandarin Oriental, Barcelona",
    "exp.1.role": "Directora de F&B",
    "exp.1.desc": "Dirección integral de todas las operaciones de restauración del hotel: 2 restaurantes (incluyendo Moments ★★ Michelin), bar, banquetes, room service y minibar. Gestión de P&L con facturación anual de 8,5M€. Supervisión de equipo de 80 personas entre sala, cocina y stewarding. Implantación de sistema de revenue management en F&B con incremento del 12% en RevPASH. Coordinación directa con dirección general y propietarios.",
    "exp.2.date": "MAR 2017 - DIC 2020",
    "exp.2.place": "Hyatt Regency Barcelona Tower",
    "exp.2.role": "Assistant F&B Director",
    "exp.2.desc": "Brazo derecho del director de F&B en hotel de 280 habitaciones con 3 puntos de venta. Gestión operativa diaria, control de costes F&B (mantenido en 29%), planificación de eventos y banquetes de hasta 500 comensales. Formación y evaluación de equipos siguiendo estándares Hyatt. Liderazgo del proyecto de apertura del rooftop bar con concepto de coctelería de autor.",
    "exp.3.date": "SEP 2014 - FEB 2017",
    "exp.3.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.3.role": "Restaurant Manager",
    "exp.3.desc": "Responsable de la operación integral del restaurante principal del hotel (120 cubiertos). Gestión de equipo de 22 personas. Supervisión de estándares de servicio Ritz-Carlton (Gold Standards). Organización de wine dinners y eventos gastronómicos. Incremento del ticket medio en un 18% mediante upselling estratégico y maridajes.",
    "exp.4.date": "ENE 2012 - AGO 2014",
    "exp.4.place": "W Barcelona",
    "exp.4.role": "Assistant Restaurant Manager",
    "exp.4.desc": "Supervisión de servicio en restaurante BRAVO y terraza SALT. Gestión de turnos, control de inventarios y coordinación con cocina. Implementación de SOPs de servicio. Participación en aperturas de temporada y eventos VIP con capacidad de hasta 200 personas.",
    "exp.5.date": "JUN 2010 - DIC 2011",
    "exp.5.place": "Marriott Barcelona Hotel — Renaissance",
    "exp.5.role": "Supervisora de Sala",
    "exp.5.desc": "Coordinación del equipo de sala en restaurante buffet y à la carte (160 cubiertos). Supervisión de montajes para eventos corporativos. Primer contacto con gestión de estándares de marca Marriott y programa Voyager de formación interna.",
    "exp.6.date": "SEP 2008 - MAY 2010",
    "exp.6.place": "Hotel Majestic, Barcelona",
    "exp.6.role": "Camarera de Sala — Fine Dining",
    "exp.6.desc": "Servicio de sala en restaurante gastronómico del Hotel Majestic GL. Atención directa a comensal en fine dining con protocolo de servicio clásico. Servicio de vinos y recomendación de carta. Colaboración en eventos privados y cenas de gala.",
    "exp.7.date": "JUN 2006 - AGO 2008",
    "exp.7.place": "Restaurant La Dama, Barcelona",
    "exp.7.role": "Camarera / Ayudante de Sala",
    "exp.7.desc": "Primeras armas en restauración de alto nivel en restaurante clásico del Eixample. Aprendizaje de protocolo, servicio de gueridón, trinchado en sala y atención al comensal. Simultaneado con estudios universitarios.",
    "edu.title": "Formación Académica",
    "edu.1.date": "SEP 2015 - JUN 2017",
    "edu.1.school": "Les Roches Marbella — International School of Hotel Management",
    "edu.1.title": "MBA en Dirección Hotelera Internacional",
    "edu.1.details": "Especialización en Revenue Management y F&B Operations. Proyecto final: modelo de optimización de RevPASH para hoteles de 5 estrellas. Programa ejecutivo compaginado con actividad profesional.",
    "edu.2.date": "SEP 2003 - JUN 2007",
    "edu.2.school": "CETT-UB — Escola Universitària d'Hoteleria i Turisme",
    "edu.2.title": "Grado en Turismo y Gestión Hotelera",
    "edu.2.details": "Formación integral en gestión hotelera, operaciones de restauración y marketing turístico. Prácticas en Hotel Majestic Barcelona.",
    "edu.3.date": "2019",
    "edu.3.school": "Wine & Spirit Education Trust (WSET)",
    "edu.3.title": "WSET Level 3 — Award in Wines",
    "edu.3.details": "Certificación avanzada en cata, regiones vinícolas mundiales, viticultura y vinificación. Examen teórico-práctico con cata a ciegas.",
    "edu.4.date": "2020",
    "edu.4.school": "Cornell University — School of Hotel Administration (Online)",
    "edu.4.title": "Certificado en Revenue Management para F&B",
    "edu.4.details": "Programa online especializado en estrategias de pricing, RevPASH y optimización de asientos en restaurantes de hotel.",
    "edu.5.date": "2013",
    "edu.5.school": "Asociación Española de Sumilleres",
    "edu.5.title": "Curso de Sumillería Profesional",
    "edu.5.details": "Formación en servicio de vinos, maridaje, gestión de bodega y carta de vinos para restauración.",
    "skills.title": "Habilidades e Idiomas",
    "skills.skills_title": "Competencias",
    "skills.lang_title": "Idiomas",
    "skills.s1": "Gestión de P&L y presupuestos F&B",
    "skills.s2": "Control de costes de alimentos y bebidas",
    "skills.s3": "Revenue management (RevPASH)",
    "skills.s4": "Formación y liderazgo de equipos",
    "skills.s5": "Estándares de marca y guest experience",
    "skills.s6": "Planificación de eventos y banquetes",
    "skills.s7": "Sumillería y gestión de carta de vinos",
    "skills.s8": "Protocolo y servicio de lujo",
    "skills.s9": "Desarrollo de conceptos gastronómicos",
    "skills.s10": "Opera PMS, Micros POS, STR, Revinate",
    "skills.l1.name": "Catalán",
    "skills.l1.level": "Nativo",
    "skills.l2.name": "Español",
    "skills.l2.level": "Nativo",
    "skills.l3.name": "Inglés",
    "skills.l3.level": "Bilingüe",
    "skills.l4.name": "Francés",
    "skills.l4.level": "Intermedio",
    "ref.title": "Referencias",
    "ref.1.name": "Thomas Keller-Richter",
    "ref.1.role": "General Manager",
    "ref.1.company": "Mandarin Oriental, Barcelona",
    "ref.2.name": "Cristina Pérez Domínguez",
    "ref.2.role": "Directora Regional de Operaciones",
    "ref.2.company": "Hyatt Hotels — Europa del Sur",
    "ref.3.name": "Àlex Ferrer Gironès",
    "ref.3.role": "Director de F&B",
    "ref.3.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.note": "Datos de contacto disponibles bajo petición.",
    "contact.title": "Contacto Profesional",
    "contact.phone": "+34 658 921 473",
    "contact.email": "elena.montero.fb@gmail.com",
    "contact.loc": "Barcelona, España",
    "footer.rights": "© 2026 Elena Montero Valls. Todos los derechos reservados. · Portfolio de demostración — Registra3D CV Premium",
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
    "hero.name": "Elena Montero Valls (Demo)",
    "hero.subtitle": "F&B DIRECTOR",
    "hero.current": "F&B Director | Mandarin Oriental Barcelona",
    "hero.cta": "CONTACT",
    "about.title": "Professional Profile",
    "about.desc": "Food & Beverage Director with over 18 years of experience in luxury hotels and top-tier international chains. Progressive career from restaurant floor to comprehensive F&B operations management at properties including Mandarin Oriental, Hyatt, and Marriott. Specialized in P&L management, F&B cost optimization, gastronomic concept development, and high-performance multicultural team building. WSET Level 3 certified with an MBA in Hospitality Management from Les Roches. Passionate about guest experience excellence and innovation in food & beverage services.",
    "about.stat1": "18+ years in luxury hospitality",
    "about.stat2": "International 5★ chains",
    "about.stat3": "Teams of up to 80 people",
    "exp.title": "Professional Experience",
    "exp.1.date": "JAN 2021 - PRESENT",
    "exp.1.place": "Mandarin Oriental, Barcelona",
    "exp.1.role": "F&B Director",
    "exp.1.desc": "Comprehensive management of all hotel F&B operations: 2 restaurants (including Moments ★★ Michelin), bar, banquets, room service, and minibar. P&L management with annual revenue of €8.5M. Supervision of 80-person team across front-of-house, kitchen, and stewarding. Implementation of F&B revenue management system achieving 12% RevPASH increase. Direct coordination with general management and ownership.",
    "exp.2.date": "MAR 2017 - DEC 2020",
    "exp.2.place": "Hyatt Regency Barcelona Tower",
    "exp.2.role": "Assistant F&B Director",
    "exp.2.desc": "Right hand of the F&B Director at a 280-room hotel with 3 outlets. Daily operational management, F&B cost control (maintained at 29%), planning of events and banquets for up to 500 guests. Team training and evaluation following Hyatt standards. Led the rooftop bar opening project featuring signature cocktail concept.",
    "exp.3.date": "SEP 2014 - FEB 2017",
    "exp.3.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.3.role": "Restaurant Manager",
    "exp.3.desc": "Responsible for the full operation of the hotel's main restaurant (120 covers). Management of a 22-person team. Supervision of Ritz-Carlton service standards (Gold Standards). Organization of wine dinners and gastronomic events. Increased average check by 18% through strategic upselling and pairings.",
    "exp.4.date": "JAN 2012 - AUG 2014",
    "exp.4.place": "W Barcelona",
    "exp.4.role": "Assistant Restaurant Manager",
    "exp.4.desc": "Service supervision at BRAVO restaurant and SALT terrace. Shift management, inventory control, and kitchen coordination. Implementation of service SOPs. Participation in seasonal openings and VIP events for up to 200 guests.",
    "exp.5.date": "JUN 2010 - DEC 2011",
    "exp.5.place": "Marriott Barcelona Hotel — Renaissance",
    "exp.5.role": "Floor Supervisor",
    "exp.5.desc": "Dining room team coordination at buffet and à la carte restaurant (160 covers). Supervision of setups for corporate events. First exposure to Marriott brand standards management and internal Voyager training program.",
    "exp.6.date": "SEP 2008 - MAY 2010",
    "exp.6.place": "Hotel Majestic, Barcelona",
    "exp.6.role": "Waitress — Fine Dining",
    "exp.6.desc": "Dining room service at Hotel Majestic GL's gastronomic restaurant. Direct guest attention in fine dining with classic service protocol. Wine service and menu recommendations. Collaboration in private events and gala dinners.",
    "exp.7.date": "JUN 2006 - AUG 2008",
    "exp.7.place": "La Dama Restaurant, Barcelona",
    "exp.7.role": "Waitress / Dining Room Assistant",
    "exp.7.desc": "First steps in high-end dining at a classic Eixample restaurant. Learning protocol, gueridon service, tableside carving, and guest attention. Combined with university studies.",
    "edu.title": "Education",
    "edu.1.date": "SEP 2015 - JUN 2017",
    "edu.1.school": "Les Roches Marbella — International School of Hotel Management",
    "edu.1.title": "MBA in International Hotel Management",
    "edu.1.details": "Specialization in Revenue Management and F&B Operations. Final project: RevPASH optimization model for 5-star hotels. Executive program combined with professional activity.",
    "edu.2.date": "SEP 2003 - JUN 2007",
    "edu.2.school": "CETT-UB — University School of Hospitality & Tourism",
    "edu.2.title": "Degree in Tourism & Hotel Management",
    "edu.2.details": "Comprehensive training in hotel management, restaurant operations, and tourism marketing. Internship at Hotel Majestic Barcelona.",
    "edu.3.date": "2019",
    "edu.3.school": "Wine & Spirit Education Trust (WSET)",
    "edu.3.title": "WSET Level 3 — Award in Wines",
    "edu.3.details": "Advanced certification in tasting, world wine regions, viticulture, and winemaking. Theoretical-practical exam with blind tasting.",
    "edu.4.date": "2020",
    "edu.4.school": "Cornell University — School of Hotel Administration (Online)",
    "edu.4.title": "Certificate in F&B Revenue Management",
    "edu.4.details": "Online program specialized in pricing strategies, RevPASH, and seat optimization in hotel restaurants.",
    "edu.5.date": "2013",
    "edu.5.school": "Spanish Sommelier Association",
    "edu.5.title": "Professional Sommelier Course",
    "edu.5.details": "Training in wine service, food pairing, cellar management, and wine list design for restaurants.",
    "skills.title": "Skills & Languages",
    "skills.skills_title": "Competencies",
    "skills.lang_title": "Languages",
    "skills.s1": "P&L management & F&B budgeting",
    "skills.s2": "Food & beverage cost control",
    "skills.s3": "Revenue management (RevPASH)",
    "skills.s4": "Team training & leadership",
    "skills.s5": "Brand standards & guest experience",
    "skills.s6": "Event & banquet planning",
    "skills.s7": "Sommellerie & wine list management",
    "skills.s8": "Luxury service protocol",
    "skills.s9": "Gastronomic concept development",
    "skills.s10": "Opera PMS, Micros POS, STR, Revinate",
    "skills.l1.name": "Catalan",
    "skills.l1.level": "Native",
    "skills.l2.name": "Spanish",
    "skills.l2.level": "Native",
    "skills.l3.name": "English",
    "skills.l3.level": "Bilingual",
    "skills.l4.name": "French",
    "skills.l4.level": "Intermediate",
    "ref.title": "References",
    "ref.1.name": "Thomas Keller-Richter",
    "ref.1.role": "General Manager",
    "ref.1.company": "Mandarin Oriental, Barcelona",
    "ref.2.name": "Cristina Pérez Domínguez",
    "ref.2.role": "Regional Director of Operations",
    "ref.2.company": "Hyatt Hotels — Southern Europe",
    "ref.3.name": "Àlex Ferrer Gironès",
    "ref.3.role": "F&B Director",
    "ref.3.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.note": "Contact details available upon request.",
    "contact.title": "Professional Contact",
    "contact.phone": "+34 658 921 473",
    "contact.email": "elena.montero.fb@gmail.com",
    "contact.loc": "Barcelona, Spain",
    "footer.rights": "© 2026 Elena Montero Valls. All rights reserved. · Demo portfolio — Registra3D CV Premium",
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
    "hero.name": "Elena Montero Valls (Demo)",
    "hero.subtitle": "DIRECTORA DE F&B",
    "hero.current": "Directora de F&B | Mandarin Oriental Barcelona",
    "hero.cta": "CONTACTAR",
    "about.title": "Perfil Professional",
    "about.desc": "Directora de Food & Beverage amb més de 18 anys d'experiència en hotels de luxe i cadenes internacionals de primer nivell. Trajectòria progressiva des de sala fins a la direcció integral d'operacions de restauració en establiments com Mandarin Oriental, Hyatt i Marriott. Especialitzada en gestió de P&L, optimització de costos F&B, desenvolupament de conceptes gastronòmics i formació d'equips multiculturals d'alt rendiment. Certificada WSET Level 3 i amb un MBA en Direcció Hotelera per Les Roches. Apassionada per l'excel·lència en guest experience i la innovació en serveis de restauració.",
    "about.stat1": "+18 anys en hoteleria de luxe",
    "about.stat2": "Cadenes 5★ internacionals",
    "about.stat3": "Equips de fins a 80 persones",
    "exp.title": "Experiència Professional",
    "exp.1.date": "GEN 2021 - ACTUALITAT",
    "exp.1.place": "Mandarin Oriental, Barcelona",
    "exp.1.role": "Directora de F&B",
    "exp.1.desc": "Direcció integral de totes les operacions de restauració de l'hotel: 2 restaurants (inclòs Moments ★★ Michelin), bar, banquets, room service i minibar. Gestió de P&L amb facturació anual de 8,5M€. Supervisió d'equip de 80 persones entre sala, cuina i stewarding. Implantació de sistema de revenue management en F&B amb increment del 12% en RevPASH. Coordinació directa amb direcció general i propietaris.",
    "exp.2.date": "MAR 2017 - DES 2020",
    "exp.2.place": "Hyatt Regency Barcelona Tower",
    "exp.2.role": "Assistant F&B Director",
    "exp.2.desc": "Braç dret del director de F&B en hotel de 280 habitacions amb 3 punts de venda. Gestió operativa diària, control de costos F&B (mantingut al 29%), planificació d'esdeveniments i banquets de fins a 500 comensals. Formació i avaluació d'equips seguint estàndards Hyatt. Lideratge del projecte d'obertura del rooftop bar amb concepte de cocteleria d'autor.",
    "exp.3.date": "SET 2014 - FEB 2017",
    "exp.3.place": "Hotel Arts Barcelona — The Ritz-Carlton",
    "exp.3.role": "Restaurant Manager",
    "exp.3.desc": "Responsable de l'operació integral del restaurant principal de l'hotel (120 coberts). Gestió d'equip de 22 persones. Supervisió d'estàndards de servei Ritz-Carlton (Gold Standards). Organització de wine dinners i esdeveniments gastronòmics. Increment del tiquet mitjà en un 18% mitjançant upselling estratègic i maridatges.",
    "exp.4.date": "GEN 2012 - AGO 2014",
    "exp.4.place": "W Barcelona",
    "exp.4.role": "Assistant Restaurant Manager",
    "exp.4.desc": "Supervisió de servei al restaurant BRAVO i terrassa SALT. Gestió de torns, control d'inventaris i coordinació amb cuina. Implementació de SOPs de servei. Participació en obertures de temporada i esdeveniments VIP amb capacitat de fins a 200 persones.",
    "exp.5.date": "JUN 2010 - DES 2011",
    "exp.5.place": "Marriott Barcelona Hotel — Renaissance",
    "exp.5.role": "Supervisora de Sala",
    "exp.5.desc": "Coordinació de l'equip de sala en restaurant buffet i à la carte (160 coberts). Supervisió de muntatges per a esdeveniments corporatius. Primer contacte amb gestió d'estàndards de marca Marriott i programa Voyager de formació interna.",
    "exp.6.date": "SET 2008 - MAI 2010",
    "exp.6.place": "Hotel Majestic, Barcelona",
    "exp.6.role": "Cambrera de Sala — Fine Dining",
    "exp.6.desc": "Servei de sala al restaurant gastronòmic de l'Hotel Majestic GL. Atenció directa al comensal en fine dining amb protocol de servei clàssic. Servei de vins i recomanació de carta. Col·laboració en esdeveniments privats i sopars de gala.",
    "exp.7.date": "JUN 2006 - AGO 2008",
    "exp.7.place": "Restaurant La Dama, Barcelona",
    "exp.7.role": "Cambrera / Ajudant de Sala",
    "exp.7.desc": "Primeres armes en restauració d'alt nivell en restaurant clàssic de l'Eixample. Aprenentatge de protocol, servei de gueridó, treball en sala i atenció al comensal. Simultanejat amb estudis universitaris.",
    "edu.title": "Formació Acadèmica",
    "edu.1.date": "SET 2015 - JUN 2017",
    "edu.1.school": "Les Roches Marbella — International School of Hotel Management",
    "edu.1.title": "MBA en Direcció Hotelera Internacional",
    "edu.1.details": "Especialització en Revenue Management i F&B Operations. Projecte final: model d'optimització de RevPASH per a hotels de 5 estrelles. Programa executiu compaginat amb activitat professional.",
    "edu.2.date": "SET 2003 - JUN 2007",
    "edu.2.school": "CETT-UB — Escola Universitària d'Hoteleria i Turisme",
    "edu.2.title": "Grau en Turisme i Gestió Hotelera",
    "edu.2.details": "Formació integral en gestió hotelera, operacions de restauració i màrqueting turístic. Pràctiques a l'Hotel Majestic Barcelona.",
    "edu.3.date": "2019",
    "edu.3.school": "Wine & Spirit Education Trust (WSET)",
    "edu.3.title": "WSET Level 3 — Award in Wines",
    "edu.3.details": "Certificació avançada en tast, regions vinícoles mundials, viticultura i vinificació. Examen teòric-pràctic amb tast a cegues.",
    "edu.4.date": "2020",
    "edu.4.school": "Cornell University — School of Hotel Administration (Online)",
    "edu.4.title": "Certificat en Revenue Management per a F&B",
    "edu.4.details": "Programa online especialitzat en estratègies de pricing, RevPASH i optimització de seients en restaurants d'hotel.",
    "edu.5.date": "2013",
    "edu.5.school": "Associació Espanyola de Sumillers",
    "edu.5.title": "Curs de Sumilleria Professional",
    "edu.5.details": "Formació en servei de vins, maridatge, gestió de celler i carta de vins per a restauració.",
    "skills.title": "Habilitats i Idiomes",
    "skills.skills_title": "Competències",
    "skills.lang_title": "Idiomes",
    "skills.s1": "Gestió de P&L i pressupostos F&B",
    "skills.s2": "Control de costos d'aliments i begudes",
    "skills.s3": "Revenue management (RevPASH)",
    "skills.s4": "Formació i lideratge d'equips",
    "skills.s5": "Estàndards de marca i guest experience",
    "skills.s6": "Planificació d'esdeveniments i banquets",
    "skills.s7": "Sumilleria i gestió de carta de vins",
    "skills.s8": "Protocol i servei de luxe",
    "skills.s9": "Desenvolupament de conceptes gastronòmics",
    "skills.s10": "Opera PMS, Micros POS, STR, Revinate",
    "skills.l1.name": "Català",
    "skills.l1.level": "Natiu",
    "skills.l2.name": "Espanyol",
    "skills.l2.level": "Natiu",
    "skills.l3.name": "Anglès",
    "skills.l3.level": "Bilingüe",
    "skills.l4.name": "Francès",
    "skills.l4.level": "Intermedi",
    "ref.title": "Referències",
    "ref.1.name": "Thomas Keller-Richter",
    "ref.1.role": "General Manager",
    "ref.1.company": "Mandarin Oriental, Barcelona",
    "ref.2.name": "Cristina Pérez Domínguez",
    "ref.2.role": "Directora Regional d'Operacions",
    "ref.2.company": "Hyatt Hotels — Europa del Sud",
    "ref.3.name": "Àlex Ferrer Gironès",
    "ref.3.role": "Director de F&B",
    "ref.3.company": "Hotel Arts Barcelona — The Ritz-Carlton",
    "ref.note": "Dades de contacte disponibles sota petició.",
    "contact.title": "Contacte Professional",
    "contact.phone": "+34 658 921 473",
    "contact.email": "elena.montero.fb@gmail.com",
    "contact.loc": "Barcelona, Espanya",
    "footer.rights": "© 2026 Elena Montero Valls. Tots els drets reservats. · Portfolio de demostració — Registra3D CV Premium",
    "btn.expand": "Veure tot",
    "btn.collapse": "Tancar",
    "btn.download": "Descarregar CV"
  }
};

// DARK SECTIONS - Injected by generate.js
const darkSections = ["about","experience","skills"];

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
