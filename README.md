# Portfolio de Ezequiel Pacheco

Portfolio profesional estático construido con Astro. Backend como foco y Full Stack como alcance.
El Editor y Elementos son los casos principales; Chemical Software y MineCall son casos
seleccionados. Cercaya, MemoriesAI, Chichitos y DATAMARK completan las señales técnicas.

## Desarrollo local

Usar una versión de Node.js compatible con `astro/package.json` y npm. Instalar las versiones
exactas del lockfile:

```bash
npm ci
npm run dev
```

Astro utiliza `http://localhost:4321` por defecto; si el puerto está ocupado, anuncia otro en
la terminal. La sesión de revisión actual usa `http://127.0.0.1:4322/`.

## Verificación

```bash
npm run lint
npm run build
npm run preview
```

`lint` ejecuta Astro/TypeScript; `build` genera `dist/`. Ninguno publica el sitio.
Revisar también desktop/mobile, texto al 200%, teclado, disclosures, galerías, movimiento reducido
y las tres descargas del CV cuando se cambien esas fronteras. Un build correcto no demuestra
accesibilidad completa ni disponibilidad de los destinos externos.

## Estructura vigente

- `src/pages/index.astro`: composición y jerarquía de las secciones.
- `src/layouts/BaseLayout.astro`: documento HTML, SEO, fuentes, estilos y carga del comportamiento.
- `src/components/layout/Header.astro`: navegación desktop/mobile desde una lista común.
- `src/components/ProjectGallery.astro`: preview, miniaturas, visor y sus interacciones.
- `src/components/ActionLink.astro`: acciones reutilizables con variantes principal, secundaria, de proyecto, de encabezado y de texto; descarga y aviso accesible de nueva pestaña.
- `src/scripts/portfolio.ts`: menú móvil, encabezado y reveal con tipos DOM explícitos.
- `src/scripts/webmcp.ts`: herramientas WebMCP opcionales, de solo lectura y basadas en el contenido público del portfolio; sin `document.modelContext`, el sitio conserva su funcionamiento normal.
- `src/data/portfolio.data.ts`: contenido, contribuciones, navegación, galerías y experiencia.
- `src/styles/portfolio.css`: única hoja de estilos activa.

La implementación anterior de secciones/layouts y su CSS ya no se utiliza. No mantener otra
versión de un mismo componente o aporte profesional en paralelo. `getProject` falla con un mensaje
explícito si la página solicita un proyecto inexistente.

## Acceso para agentes

Cuando el navegador implementa WebMCP, la página registra herramientas para consultar el perfil,
los proyectos, el detalle de un caso y la experiencia profesional. Devuelven únicamente contenido
público ya presente en el portfolio y no ejecutan acciones externas. El contexto estructurado se
genera en el layout desde los datos del sitio; el HTML, los enlaces y la descarga del CV siguen
siendo la experiencia principal en navegadores sin soporte.

## Contenido, media y CV

El contenido profesional debe seguir la auditoría aprobada: separar contribución personal de
producto colaborativo; no inferir seniority, años, producción o resultados desde código o capturas.
Portfolio y CV conservan “Empresa privada — Plataformas digitales”.

Las capturas y su procedencia se describen en [docs/project-media-slots.md](docs/project-media-slots.md).
Los originales históricos se conservan, aunque no se sirvan en las galerías actuales.

El CV español aprobado se sirve sin regeneración desde
`public/Ezequiel_Pacheco_Backend_FullStack_CV_ES_2026.pdf`; las tres descargas usan `profile.cvPath`.
El PDF anterior y `cv/` se conservan como originales históricos, sin reutilizarlos como versión vigente.

## Archivos locales de trabajo

Capturas de QA, cachés de navegador, reportes de revisión y resultados de pruebas se conservan
localmente; no forman parte del sitio ni de la publicación. Las notas locales `feat.md`,
`otw-snapshot.md`, `otw2.md` y `skill1.md` se preservan y se excluyen de Git. No borrar originales,
notas o configuración personal para conseguir un árbol limpio.
