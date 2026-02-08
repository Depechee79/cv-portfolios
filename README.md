# CV Portfolios — Monorepo

Generador de portfolios web profesionales a partir de datos estructurados. Cada cliente recibe un portfolio web responsive con descarga de CV en PDF y código QR que enlaza al portfolio.

## Estructura del proyecto

```
cv-portfolios/
├── package.json                    # Scripts del proyecto
├── index.html                      # Landing page (listado de portfolios)
├── template/                       # Plantilla base compartida
│   ├── base.css                    # Estilos base (responsive, print, etc.)
│   ├── core.js                     # Lógica JS (i18n, menú, scroll, etc.)
│   └── themes/                     # Temas visuales por sector
│       ├── hospitality.css         # Restauración / Hostelería
│       └── medical.css             # Medicina / Salud
├── portfolios/                     # Un directorio por cada profesional
│   ├── mireia/                     # Portfolio activo
│   ├── scarlet/                    # Portfolio activo
│   └── _template/                  # Plantilla para nuevos portfolios
├── scripts/
│   ├── generate-portfolio.js       # Genera la web desde data.json
│   ├── generate-pdf.js             # Genera PDF imprimible con QR
│   ├── parse-pdf.js                # Extrae texto de un CV en PDF
│   └── new-portfolio.js            # Crea un nuevo portfolio desde template
└── public/                         # Assets estáticos globales
```

## Flujo de negocio

```
1. Cliente envía CV en PDF
2. Ejecutas parse-pdf.js → genera carpeta con texto extraído
3. Rellenas data.json con los datos estructurados
4. Ejecutas generate-portfolio.js → genera la web
5. Despliegas a GitHub Pages
6. El portfolio web tiene botón "Descargar CV" (PDF con QR)
```

## Comandos

### Generar portfolios web

```bash
# Generar un portfolio específico
npm run generate -- mireia
npm run generate -- scarlet

# Generar todos
npm run generate:all

# Previsualizar en local
npm run serve:mireia     # http://localhost:3000
npm run serve:scarlet    # http://localhost:3001
```

### Crear un nuevo portfolio

```bash
# Opción 1: Desde la plantilla vacía
npm run new-portfolio -- carlos

# Opción 2: Desde un PDF del cliente
npm run parse-pdf -- "./cv-carlos.pdf" carlos
```

Después de crear la carpeta:

1. Editar `portfolios/carlos/data.json` con los datos del cliente
2. Añadir foto como `portfolios/carlos/photo.jpg`
3. Elegir tema en data.json (`hospitality`, `medical`, o crear uno nuevo)
4. Ejecutar `npm run generate -- carlos`

### Generar PDF imprimible con QR

```bash
# Requiere instalar dependencias primero:
npm install puppeteer qrcode

# Generar PDF
npm run pdf -- mireia
npm run pdf -- scarlet

# Con URL personalizada
node scripts/generate-pdf.js mireia --url=https://mireia.tudominio.com
```

## Añadir un nuevo profesional (paso a paso)

### 1. Crear la carpeta

```bash
npm run new-portfolio -- nombre
```

Esto copia `portfolios/_template/` a `portfolios/nombre/` con:
- `data.json` — plantilla con todos los campos vacíos
- `assets/` — para foto, documentos originales
- `overrides/` — para personalizaciones extra

### 2. Rellenar data.json

El archivo `data.json` tiene esta estructura:

```json
{
  "theme": "hospitality",        // Tema visual (hospitality, medical)
  "languages": ["es", "en", "ca"], // Idiomas disponibles
  "hero": { ... },               // Cabecera: nombre, foto, título
  "about": { ... },              // Perfil profesional
  "experience": { ... },         // Experiencia laboral
  "education": { ... },          // Formación académica
  "skills": { ... },             // Habilidades e idiomas
  "references": { ... },         // Referencias (opcional, null si no hay)
  "contact": { ... }             // Datos de contacto
}
```

Cada campo de texto tiene traducciones:
```json
"title": {
  "es": "Perfil Profesional",
  "en": "Professional Profile",
  "ca": "Perfil Professional"
}
```

### 3. Añadir foto

Guardar la foto del cliente como `portfolios/nombre/photo.jpg`.

### 4. Generar y verificar

```bash
npm run generate -- nombre
npx serve portfolios/nombre/dist -p 3000
```

### 5. Desplegar

Hacer commit y push a GitHub. GitHub Pages sirve los portfolios automáticamente.

```bash
git add portfolios/nombre/
git commit -m "feat: add portfolio for nombre"
git push origin main
```

La URL será:
`https://depechee79.github.io/cv-portfolios/portfolios/nombre/dist/`

## Crear un nuevo tema

1. Copiar `template/themes/hospitality.css` como base
2. Cambiar las CSS custom properties (colores, fuentes, backgrounds)
3. Guardar en `template/themes/nombre-tema.css`
4. Usar `"theme": "nombre-tema"` en el `data.json` del portfolio

Variables clave:
```css
:root {
    --primary-color: #1C1C1C;      /* Color principal */
    --secondary-color: #F7F4EF;    /* Color de fondo claro */
    --accent-color: #B8956A;       /* Color de acento */
    --text-dark: #2A2A2A;          /* Texto oscuro */
    --text-light: #8A8A8A;         /* Texto secundario */
    --font-heading: 'Montserrat';  /* Fuente títulos */
    --font-body: 'Lato';           /* Fuente cuerpo */
}
```

## Tecnologías

- **HTML/CSS/JS vanilla** — Sin frameworks, máximo rendimiento
- **Node.js** — Scripts de generación
- **Puppeteer + QRCode** — Generación de PDF con QR (opcional)
- **pdf-parse** — Extracción de texto de PDFs (opcional)
- **GitHub Pages** — Hosting gratuito
- **Ionicons** — Iconografía
- **Mobile first** — Diseño responsive con scroll-snap

## Licencia

MIT — Aitor
