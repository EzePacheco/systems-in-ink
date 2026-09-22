# Portfolio de Ezequiel Pacheco

Portfolio profesional construido con Astro. Presenta casos de backend y producto end-to-end:
Elementos, El Editor, MineCall, Cercaya, Chemical Software y MemoriesAI; además de Chichitos
y DATAMARK como proyectos complementarios.

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

El repositorio genera un sitio estático y el PDF descargable del CV. Antes de publicar, verificar
que el contenido no exponga información privada ni referencias de empleadores que deban anonimizarse.
