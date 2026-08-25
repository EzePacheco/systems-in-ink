# ADR 0001: Contenido localizado y CV derivado

- Estado: aceptado
- Fecha: 2026-08-25

## Contexto

La home, los casos, el CV HTML y el PDF anterior repetían perfil, experiencia y claims. Esa duplicación permitía que el posicionamiento, los límites o las fechas divergieran entre superficies.

## Opciones

- Mantener contenido por componente conserva archivos pequeños, pero no ofrece una autoridad única ni una verificación consistente.
- Adoptar un CMS agrega operación remota y un contrato que un portfolio estático no necesita.
- Usar un módulo tipado y localizado mantiene la publicación estática, permite resolutores por idioma y deriva páginas, metadata y CV del mismo contenido.

## Decisión

`src/data/portfolio.data.ts` es la autoridad compartida de perfil, experiencia, casos, capacidades, CV y provenance de assets. Las rutas Astro resuelven locale y slug; no contienen claims propios. Playwright 1.62.0 renderiza las páginas `/cv/` y `/en/cv/` a PDF A4 tagged y genera OG desde las mismas rutas.

## Consecuencias

Un cambio de contenido se localiza una vez por idioma y se propaga a web, metadata y CV. Los PDF y OG son artefactos derivados versionados y deben regenerarse después de cambios relevantes. El build continúa siendo estático y no agrega runtime remoto.

## Validación, rollout y rollback

`npm run lint`, `npm run build`, `npm run test:e2e`, `npm run cv:generate` y `npm run cv:check` validan tipos, diez rutas, media y PDF. El rollback restaura el HTML/PDF anterior y los componentes con contenido embebido; no requiere migración.

## Trigger de revisión

Revisar la decisión si el contenido necesita edición por personas sin acceso al repositorio o si los PDF dejan de poder derivarse con una composición de impresión estable.
