import type { ImageMetadata } from "astro";
import elementosOfertas from "../assets/cases/elementos/ofertas.png";
import elementosInicio from "../assets/cases/elementos/inicio.png";
import elementosCatalogo from "../assets/cases/elementos/catalogo.png";
import editorPlatense from "../assets/cases/el-editor/portal-platense.png";
import editorMendoza from "../assets/cases/el-editor/portal-mendoza.png";
import editorMetricsMendoza from "../assets/cases/el-editor/metricas-mendoza.png";
import editorMetricsPlatense from "../assets/cases/el-editor/metricas-platense.png";
import minecallWorld from "../assets/cases/minecall/mundo.png";
import minecallAccess from "../assets/cases/minecall/acceso.png";
import chemicalInventory from "../assets/cases/chemical/04-admin-inventario.png";
import chemicalCompanies from "../assets/cases/chemical/01-superadmin-comercios.png";
import chemicalPurchases from "../assets/cases/chemical/05-admin-compras-recepciones.png";
import chemicalSales from "../assets/cases/chemical/07-admin-pos-carrito.png";
import chemicalPermissions from "../assets/cases/chemical/10-admin-configuracion-equipo.png";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  responsibility: string;
  decisions: string[];
  stack: string[];
  gallery?: {
    src: ImageMetadata;
    label: string;
    alt: string;
  }[];
  links: LinkItem[];
};

export type ExperienceItem = {
  date: string;
  company: string;
  role: string;
  description: string;
};

export const metadata = {
  url: "https://portfolio-eze-pacheco.vercel.app/",
  title: "Ezequiel Pacheco | Backend Developer & Full Stack Developer",
  description:
    "Backend Developer / Full Stack Developer con foco en Node.js, TypeScript y PostgreSQL. APIs, autorización, transacciones y procesamiento asíncrono; alcance frontend con React y Next.js.",
  ogImage: "/portfolio-social.jpg",
};

export const profile = {
  name: "Ezequiel Pacheco",
  role: "Backend Developer | Full Stack Developer",
  location: "Buenos Aires, Argentina",
  email: "ezequielpacheco.dev@gmail.com",
  cvPath: "/Ezequiel_Pacheco_Backend_FullStack_CV_ES_2026.pdf",
};

export const capabilities = {
  focus: "Backend Developer",
  scope: "Full Stack",
  coreBackend: [
    { technology: "Node.js", evidence: "APIs y procesamiento asíncrono", href: "#editor-title", project: "El Editor" },
    { technology: "TypeScript", evidence: "Backend con NestJS", href: "#chemical-title", project: "Chemical Software" },
    { technology: "PostgreSQL", evidence: "Datos y consistencia transaccional", href: "#elementos-title", project: "Elementos" },
  ],
  groups: [
    { label: "Backend e integraciones", technologies: ["Express", "NestJS", "Redis", "REST / OpenAPI", "WebSockets"] },
    { label: "Alcance frontend", technologies: ["React", "Next.js"] },
    { label: "Experiencia adicional", technologies: ["Go", "Java / Spring Boot", "Python"] },
  ],
  support: "Pruebas unitarias y de integración · Git · Docker · GitHub Actions.",
};

const mailtoHref = (subject?: string) =>
  `mailto:${profile.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

const emailHref = mailtoHref();

export const links = {
  github: {
    label: "GitHub",
    href: "https://github.com/EzePacheco",
    external: true,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ezepacheco-dev/",
    external: true,
  },
  email: {
    label: "Email",
    href: emailHref,
    external: true,
  },
} satisfies Record<string, LinkItem>;

export const navItems: LinkItem[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export const projects: Project[] = [
  {
    id: "elementos",
    title: "Elementos",
    summary:
      "Marketplace de materiales de construcción en desarrollo, con inventario, carrito multiseller, checkout y gestión de órdenes.",
    responsibility:
      "En equipo, diseñé la API modular Node.js/Express y PostgreSQL e implementé inventario, carrito y Mercado Pago. Endurecí checkout y permisos con controles transaccionales, y desarrollé workers de importación recuperables.",
    decisions: [
      "Diseñé la base modular con casos de uso, repositorios, migraciones y contratos OpenAPI.",
      "Endurecí checkout y cambios de permisos con controles transaccionales y serialización de operaciones sensibles.",
      "Integré Mercado Pago Checkout Pro y devoluciones con idempotencia.",
      "Implementé recuperación de workers de importación con leases persistidos, heartbeat y fencing.",
    ],
    stack: ["Node.js","Express","PostgreSQL","Mercado Pago"],
    gallery: [
      {
        src: elementosOfertas,
        label: "Ofertas y productos",
        alt: "Listado de ofertas de materiales de construcción con precios, comercios y acciones de compra.",
      },
      {
        src: elementosCatalogo,
        label: "Catálogo",
        alt: "Catálogo de materiales de construcción con categorías y filtros de producto.",
      },
      {
        src: elementosInicio,
        label: "Inicio público",
        alt: "Página inicial del portal Elementos con categorías de materiales para la construcción.",
      },
    ],
    links: [
      {
        label: "Abrir portal de prueba",
        href: "https://portaltest.elementosconstruccion.com.ar/",
        external: true,
      },
    ],
  },
  {
    id: "el-editor-cms",
    title: "El Editor",
    summary:
      "CMS editorial multitenant con dos portales públicos en producción: El Editor Platense y El Editor Mendoza.",
    responsibility:
      "En equipo, evolucioné APIs Node.js/Express con aislamiento por tenant y RBAC. Implementé WebSub persistente con reintentos y jobs idempotentes recuperables; contribuí al CMS React y los portales Next.js.",
    decisions: [
      "Implementé aislamiento por tenant y permisos RBAC aplicados en el servidor.",
      "Construí un publicador WebSub con persistencia de eventos y reintentos.",
      "Agregué recuperación de jobs de edición mediante checkpoints transaccionales.",
      "Mejoré ISR, caché y SEO del portal; desarrollé papelera/restauración de artículos y paneles administrativos en React.",
    ],
    stack: ["Node.js","Express","PostgreSQL","React","Next.js"],
    gallery: [
      {
        src: editorPlatense,
        label: "Portal Platense",
        alt: "Portal público de El Editor Platense con noticias, secciones y contenidos editoriales.",
      },
      {
        src: editorMendoza,
        label: "Portal Mendoza",
        alt: "Portal público de El Editor Mendoza con noticias, secciones y contenidos editoriales.",
      },
      {
        src: editorMetricsMendoza,
        label: "Métricas del portal · Mendoza",
        alt: "Captura del panel de métricas de El Editor Mendoza para el período mostrado.",
      },
      {
        src: editorMetricsPlatense,
        label: "Métricas del portal · Platense",
        alt: "Captura del panel de métricas de El Editor Platense para el período mostrado.",
      },
    ],
    links: [
      {
        label: "Ver portal Platense",
        href: "https://eleditorplatense.com/",
        external: true,
      },
      {
        label: "Ver portal Mendoza",
        href: "https://eleditormendoza.com.ar/",
        external: true,
      },
    ],
  },
  {
    id: "minecall",
    title: "MineCall",
    summary:
      "En un proyecto colaborativo, implementé coordinación de presencia en Go con Redis y outbox transaccional en PostgreSQL, además de restricciones de audio y video por proximidad aplicadas en el servidor con LiveKit.",
    responsibility:
      "En un proyecto colaborativo de oficina virtual, implementé presencia y reconexión en Go/Redis, outbox transaccional en PostgreSQL y autorización de audio/video por proximidad en el servidor con LiveKit.",
    decisions: [
      "Implementé coordinación de presencia con Redis, leases y recuperación de conexiones.",
      "Incorporé outbox transaccional en PostgreSQL para cambios durables.",
      "Apliqué controles de membresía y proximidad en el servidor para autorizar audio/video mediante LiveKit.",
      "Contribuí a Control Center y pruebas de reconexión y carga dentro del trabajo compartido.",
    ],
    stack: ["Go","PostgreSQL","Redis","LiveKit"],
    gallery: [
      {
        src: minecallWorld,
        label: "Mundo realtime",
        alt: "Vista de MineCall: mundo compartido con salas, zonas y controles de presencia.",
      },
      {
        src: minecallAccess,
        label: "Acceso",
        alt: "Pantalla de acceso de MineCall sobre el entorno visual del producto.",
      },
    ],
    links: [
      {
        label: "Abrir demo de MineCall",
        href: "https://minecall.online/",
        external: true,
      },
    ],
  },
  {
    id: "cercaya",
    title: "Cercaya",
    summary:
      "Marketplace colaborativo de servicios a domicilio, en desarrollo.",
    responsibility:
      "Implementé módulos de identidad OIDC, solicitudes idempotentes y privacidad de ubicación con Java, Spring Boot y PostgreSQL; extendí el catálogo canónico y su integración móvil. También desarrollé un módulo de evidencia con adaptadores sintéticos; su almacenamiento productivo sigue pendiente.",
    decisions: [
      "Implementé identidad OIDC y su vinculación con cuentas locales en un backend modular.",
      "Protegí solicitudes con autorización contextual, idempotencia, controles transaccionales y privacidad geográfica.",
      "Extendí el catálogo canónico Java/PostgreSQL y la selección de oficios en Expo/TypeScript, con sincronización serial y recuperación de errores.",
    ],
    stack: ["Java / Spring Boot","Spring Modulith","PostgreSQL","OIDC"],
    links: [
      {
        label: "Pedir caso técnico",
        href: mailtoHref("Caso técnico - Cercaya"),
        external: true,
      },
    ],
  },
  {
    id: "chemical-software",
    title: "Chemical Software",
    summary:
      "Sistema colaborativo de gestión multicomercio en desarrollo para inventario, compras y ventas, con contexto por empresa y sucursal.",
    responsibility:
      "Implementé multitenancy y permisos por comercio/sucursal, reservas de stock y auditoría con NestJS, TypeScript y PostgreSQL. Extendí transformación y costeo como piloto técnico.",
    decisions: [
      "Derivé el contexto de empresa y sucursal en el servidor mediante membresías y controles de acceso.",
      "Protegí cambios del último administrador con bloqueo transaccional y agregué auditoría por empresa.",
      "Implementé reservas de stock persistidas para controlar su disponibilidad.",
      "Desarrollé transformación productiva y costeo para un piloto técnico; su aceptación operativa sigue pendiente.",
    ],
    stack: ["NestJS","TypeScript","PostgreSQL","TypeORM"],
    gallery: [
      {
        src: chemicalInventory,
        label: "Inventario",
        alt: "Chemical Software: inventario de la sucursal activa con disponibilidad, reservas, valoración y movimientos; datos de demostración.",
      },
      {
        src: chemicalCompanies,
        label: "Comercios",
        alt: "Chemical Software: administración de comercios y su primer administrador desde la plataforma multicomercio; datos de demostración.",
      },
      {
        src: chemicalPurchases,
        label: "Compras y recepciones",
        alt: "Chemical Software: recepción de compra confirmada con proveedor, líneas, costos y actualización de stock; datos de demostración.",
      },
      {
        src: chemicalSales,
        label: "Crear venta",
        alt: "Chemical Software: creación de una venta con selección de productos, cliente, cantidades y medio de pago; datos de demostración.",
      },
      {
        src: chemicalPermissions,
        label: "Usuarios y permisos",
        alt: "Chemical Software: equipo del comercio con roles y alcance por sucursal en la configuración de usuarios y permisos; datos de demostración.",
      },
    ],
    links: [
      {
        label: "Pedir caso técnico",
        href: mailtoHref("Caso técnico - Chemical Software"),
        external: true,
      },
    ],
  },
  {
    id: "memoriesai",
    title: "MemoriesAI",
    summary:
      "Desarrollé una CLI Python para recuperar contexto técnico con búsqueda BM25, índices SQLite y procedencia de fuentes. Extendí la recuperación acotada de documentos y sus pruebas.",
    responsibility:
      "Desarrollé una CLI local para conservar y recuperar contexto técnico por proyecto. Extendí la recuperación acotada de documentos con procedencia verificable y pruebas.",
    decisions: [
      "Mantengo Markdown como fuente e índices SQLite reconstruibles; BM25/FTS5 es el mecanismo principal de búsqueda.",
      "Incorporé catálogo y recuperación acotada de documentos con hashes, localizadores y procedencia.",
      "El contexto histórico conserva su origen y se contrasta con las fuentes actuales antes de usarse para decidir cambios.",
    ],
    stack: ["Python","BM25","SQLite","FTS5"],
    links: [
      {
        label: "Pedir caso técnico",
        href: mailtoHref("Caso técnico - MemoriesAI"),
        external: true,
      },
    ],
  },
  {
    id: "chichitos-ecommerce",
    title: "Chichitos",
    summary:
      "Ecommerce de indumentaria con Next.js, TypeScript y Supabase. Implementé checkout con validación de precios y stock en servidor, reservas e integración con Mercado Pago mediante webhooks firmados e idempotentes.",
    responsibility: "Implementé checkout con validación de precios y stock en servidor, reservas e integración con Mercado Pago mediante webhooks firmados e idempotentes.",
    decisions: [
      "Recalculé carrito, precios y envío en el servidor antes de crear el pago.",
      "Confirmé pagos mediante webhooks firmados e idempotentes.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago"],
    links: [
      { label: "Ver repositorio", href: "https://github.com/EzePacheco/chichitos-ecommerce", external: true },
    ],
  },
];

export const datamark = {
  title: "DATAMARK",
  summary:
    "MVP para comercios desarrollado en equipo durante una simulación profesional de No Country. Implementé autenticación, onboarding y funcionalidades de ventas con Node.js, JavaScript, Express, PostgreSQL y Prisma; integré pantallas React de productos, clientes y ventas con la API.",
  stack: ["Node.js", "JavaScript", "Express", "PostgreSQL", "Prisma"],
};

export const experience: ExperienceItem[] = [
  {
    date: "Marzo 2026 — Actualidad",
    company: "Empresa privada — Plataformas digitales",
    role: "Full Stack Developer — orientación Backend",
    description:
      "Desarrollo Backend / Full Stack de El Editor y Elementos en equipo, con responsabilidad en APIs, datos, autorización, integraciones y pruebas.",
  },
  {
    date: "Feb — Mar 2026",
    company: "No Country — DATAMARK",
    role: "Full Stack Developer",
    description:
      "Simulación profesional colaborativa: autenticación, onboarding y ventas con Node.js/JavaScript, e integración de pantallas React con la API.",
  },
  {
    date: "Sep 2023 — Abr 2026",
    company: "Burgers Thrones",
    role: "Fundador & Responsable de Operaciones",
    description:
      "Gestioné producción, stock, procesos y atención al cliente.",
  },
  {
    date: "2019 — 2023",
    company: "Grupo MSA",
    role: "Técnico de Producción & QA",
    description:
      "Realicé pruebas funcionales de hardware y software, diagnóstico y reporte de incidencias.",
  },
];

export function getProject(id: string): Project {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Unknown portfolio project: ${id}`);
  return project;
}
