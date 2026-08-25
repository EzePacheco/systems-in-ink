# Portfolio de Ezequiel Pacheco

Casebook bilingüe construido con Astro. Presenta a Ezequiel como Product Builder & Full-Stack Engineer mediante tres casos profundos, experiencia profesional, trabajo secundario, sistemas de ingeniería y CV derivados.

## Desarrollo local

Requiere Node.js y npm.

```bash
npm install
npm run dev
```

## Verificación y artefactos

```bash
npm run lint
npm run build
npm run test:e2e
npm run og:generate
npm run cv:generate
npm run cv:check
```

`src/data/portfolio.data.ts` es la única autoridad de perfil, experiencia, casos, CV y provenance de assets. Las páginas ES/EN, metadata, OG y los PDF consumen esa fuente. Los assets no dependen de MemoriesAI en runtime.

`assetEvidence` registra para cada media producto, origen, datos públicos, sintéticos o explicativos, claim seguro, prohibiciones y fecha de revisión. El Editor sólo usa un diagrama rotulado; sus PNG retenidos no participan del sitio.

Los PDF derivados son `public/Ezequiel_Pacheco_CV_ES.pdf` y `public/Ezequiel_Pacheco_CV_EN.pdf`. La publicación y el deploy requieren autorización separada.

## Decisiones

- [ADR 0001](docs/adr/0001-contenido-localizado-y-cv-derivado.md): autoridad localizada compartida y CV derivado.
