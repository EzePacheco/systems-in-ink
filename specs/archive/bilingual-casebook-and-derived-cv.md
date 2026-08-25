# Portfolio bilingüe, casebook y CV derivado

## Objetivo

Presentar a Ezequiel como Product Builder & Full-Stack Engineer mediante una home bilingüe, tres casos profundos y dos CV A4 derivados de una fuente localizada común.

## Comportamiento observable

- Existen `/`, `/en/`, seis rutas de casos y `/cv/`, `/en/cv/`.
- Home, casos, metadata y CV consumen una única autoridad tipada y localizada.
- MineCall, El Editor y Chichitos priorizan problema, responsabilidad, decisiones, evidencia y límites.
- Elementos, Chemical Software y CercaYA aparecen como trabajo secundario con estado y límites.
- Los PDF ES/EN se generan desde las páginas imprimibles y quedan etiquetados.

## Fuera de alcance

Enlaces a NewMethod, tracking, webhooks, pagos, métricas, deploy, publicación y cambios en productos fuente.

## Riesgo principal

Exagerar capacidades o incorporar evidencia visual privada, personal o no verificable.

## Aceptación y evidencia

- Las diez rutas se generan con metadata localizada y OG por caso sin canonical absoluto.
- Chichitos no afirma carrito persistente, pago, ventas ni múltiples variantes activas.
- El Editor usa evidencia técnica y un diagrama explicativo; no usa sus PNG retenidos.
- Playwright 1.62.0 verifica navegación, idioma, media, accesibilidad básica, consola y red.
- `cv:generate` crea dos PDF A4; `cv:check`, `pdfinfo` y `pdftotext` confirman formato, idioma, links, contenido actualizado y ausencia de cortes detectables.

## Rollback

Revertir este slice elimina rutas y artefactos derivados; no cambia datos externos ni necesita migración.
