# Capturas y recursos visuales

Las galerías vigentes importan originales desde `src/assets/cases/`. No existe una ruta
`public/projects/` ni un catálogo de slots pendientes. `ProjectGallery.astro` genera previews
WebP responsive con `astro:assets`, miniaturas y un visor que permite abrir el archivo original.
La proporción del primer original fija el marco de cada galería; las demás imágenes se ajustan
con `object-fit: contain`, sin recortar ni alterar su contenido.

| Proyecto | Carpeta | Capturas visibles |
| --- | --- | --- |
| El Editor | `el-editor/` | Platense, Mendoza y métricas de ambos portales |
| Elementos | `elementos/` | Ofertas, catálogo e inicio público |
| Chemical Software | `chemical/` | Inventario, comercios, compras/recepciones, venta y permisos |
| MineCall | `minecall/` | Mundo y acceso |

El orden y los textos alternativos viven en `projects[].gallery`, en
`src/data/portfolio.data.ts`. Chemical conserva cinco originales seleccionados; los nombres
numerados identifican su procedencia. El usuario confirmó que nombres, comercios, correos y
cifras de esas capturas son datos de demostración aptos para exhibición pública.

## Límites de evidencia

- Las capturas muestran capacidades del producto; no demuestran por sí solas autoría individual,
  escala, adopción o resultados atribuibles exclusivamente a una contribución.
- El Editor conserva su estado productivo confirmado por el usuario y ambos portales públicos.
- Chemical y Cercaya siguen en desarrollo; transformación/costeo de Chemical es un piloto técnico.
- MemoriesAI es tooling propio/local y no tiene galería de aplicación comercial.
- Antes de agregar capturas, revisar datos personales, credenciales, rutas internas y clientes reales.
- Conservar los originales; no superponer texto, simular interfaces ni recortar evidencia relevante.

## Material histórico

Los archivos sueltos de `src/assets/cases/` y `experience-manifest.json` pertenecen a versiones
anteriores. Se conservan como originales y procedencia histórica; no los importa el sitio actual
ni son autoridad para el copy actualizado. El manifest limita lo que aquellas imágenes demostraban
al momento de capturarlas, no las capacidades verificadas en auditorías posteriores.
