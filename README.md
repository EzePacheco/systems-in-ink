# Portfolio de Ezequiel Pacheco

Portfolio personal construido con Astro. Presenta seis casos de producto: El Editor CMS,
Elementos, MineCall, Chichitos Ecommerce, Chemical Software y MemoriesAI.

## Desarrollo local

Requiere Node.js y npm.

```bash
npm install
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:4321`.

## Verificación

```bash
npm run lint
npm run build
npm run preview
```

`npm run lint` ejecuta el chequeo estático de Astro y TypeScript. `npm run build` genera el sitio
estático en `dist/`.

## Contenido y privacidad

El contenido central vive en `src/data/portfolio.data.ts`. Las capturas de productos privados usan
entornos de demostración o contenido sintético; no deben incorporar datos personales, credenciales,
rutas internas ni información real de clientes.

El repositorio sólo genera artefactos locales. La publicación requiere una autorización separada.
