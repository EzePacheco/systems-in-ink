# Project media slots

Las próximas capturas reales se sirven desde `public/projects/`. Los nombres reservados permiten
mantener el layout y la carga de cada caso sin alterar la composición.

| Proyecto | Archivo | Orientación / ratio | Contenido recomendado |
| --- | --- | --- | --- |
| Elementos | `elementos/portal.webp` | landscape, 16:10 | Portal o flujo principal de marketplace; UI completa y legible. |
| Elementos | `elementos/backoffice.webp` | landscape, 16:10 | Backoffice o flujo transaccional opcional. |
| El Editor | `el-editor/cms.webp` | landscape, 16:10 | CMS editorial, preferentemente edición o workflow. |
| El Editor | `el-editor/portal.webp` | landscape, 16:10 | Portal público con portada o una sección editorial. |
| MineCall | `minecall/world.webp` | wide, 16:9 | Mundo realtime con presencia visible. |
| MineCall | `minecall/control-center.webp` | landscape, 16:10 | Control Center u operación; opcional. |
| Cercaya | `cercaya/requester.webp` | mobile, 9:19.5 | Flujo de solicitud en React Native / Expo. |
| Cercaya | `cercaya/evidence.webp` | mobile, 9:19.5 | Evidencia privada o autorización contextual, sin datos sensibles. |
| Chemical Software | `chemical/inventory.webp` | landscape, 16:10 | Inventario, compras u operación principal. |
| Chemical Software | `chemical/operations.webp` | landscape, 16:10 | Dashboard o segundo flujo operativo; opcional. |
| MemoriesAI | `memoriesai/retrieval.webp` | tooling, 16:10 | CLI real o resultado con provenance y contexto recuperado. |

Usar capturas reales en WebP o AVIF. Evitar marcos de dispositivo, filtros, datos sensibles y
recortes que oculten la interfaz relevante.

## Instrucciones de captura

- Desktop: idealmente 1600×1000; 1440×900 cuando corresponda. Mostrar la UI completa, sin browser chrome salvo que se solicite para la composición final.
- Mobile: captura nativa de viewport alto y proporción real del dispositivo.
- En todos los casos: excluir información privada, emails personales, tokens, datos sensibles y barras de desarrollo innecesarias.
