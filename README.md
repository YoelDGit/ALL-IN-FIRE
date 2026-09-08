# Asci · Certificados de medición

App instalable (PWA) para generar certificados de medición BIE en PDF.

## Publicar en GitHub Pages (gratis, 5 minutos)

1. En GitHub, crea un repositorio nuevo (público), por ejemplo `certificados-asci`.
2. Sube estos archivos a la raíz del repositorio (arrastrar y soltar en la web de GitHub funciona):
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-32.png`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-512-maskable.png`
   - `icon-apple-touch.png`
3. Ve a **Settings → Pages** del repositorio.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera 1-2 minutos. GitHub te dará una URL como:
   `https://tu-usuario.github.io/certificados-asci/`
6. Abre esa URL desde el navegador del móvil.
7. En Chrome (Android) debería aparecer un banner o la opción en el menú
   "Instalar app" / "Añadir a pantalla de inicio". En iPhone (Safari):
   botón compartir → "Añadir a pantalla de inicio".
8. Listo: queda instalada con el icono de Asci, abre a pantalla completa,
   y funciona sin conexión gracias al `sw.js` (Service Worker).

## Actualizar la app más adelante

Cada vez que subas cambios a `index.html`, edita la primera línea de
`sw.js` y sube la versión (por ejemplo `asci-certificados-v2`). Así los
teléfonos que ya la tienen instalada descargan la versión nueva la
siguiente vez que abran con conexión.

## Publicarla en Play Store (opcional, más adelante)

Con la app ya alojada en GitHub Pages (paso anterior), puedes usar
[pwabuilder.com](https://www.pwabuilder.com/): pegas la URL de tu GitHub
Pages, y genera el paquete Android listo para subir a Play Console
(requiere cuenta de desarrollador de Google, pago único de 25 USD).
