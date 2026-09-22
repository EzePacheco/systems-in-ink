import type { ImageMetadata } from "astro";
import chichitosVisual from "../assets/cases/chichitos-real.webp";
import chemicalSoftwareVisual from "../assets/cases/chemical-software-reference.webp";
import elEditorVisual from "../assets/cases/el-editor-real.webp";
import elementosVisual from "../assets/cases/elementos-real.webp";
import mineCallVisual from "../assets/cases/minecall-real.webp";

export type LinkItem = {
  label: string;
  href: string;
  display?: string;
  external?: boolean;
  download?: boolean;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  status: string;
  prominence: "featured" | "compact";
  summary: string;
  problem: string;
  responsibility: string;
  decisions: string[];
  evidence: string[];
  stack: string[];
  media: {
    src?: ImageMetadata;
    alt: string;
    caption?: string;
  };
  links: LinkItem[];
};

export type ExperienceItem = {
  date: string;
  company: string;
  role: string;
  description: string;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  items: string[];
};

export const metadata = {
  title: "Ezequiel Pacheco | Backend Developer & Full Stack Developer",
  description:
    "Backend Developer y Full Stack Developer especializado en Node.js, TypeScript y PostgreSQL, con experiencia en Go, Java/Spring Boot, React y Next.js. APIs, sistemas realtime, SaaS, ecommerce e IA aplicada al desarrollo.",
  ogImage: "/portfolio-social.jpg",
};

export const profile = {
  name: "Ezequiel Pacheco",
  role: "Backend Developer | Full Stack Developer",
  location: "Buenos Aires, Argentina",
  currentCompany: "Empresa privada — Plataformas digitales",
  email: "ezequielpacheco.dev@gmail.com",
  cvPath: "/Ezequiel_Pacheco_CV_JUL_2026.pdf",
  heroDescription:
    "Diseño y construyo sistemas web end-to-end con Node.js, TypeScript y PostgreSQL: APIs, datos, seguridad, integraciones, testing y operación. También desarrollo backend con Go y Java/Spring Boot.",
  footerNote: "Backend, full stack y operación de productos web.",
};

const mailtoHref = (subject?: string) =>
  `mailto:${profile.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

const emailHref = mailtoHref();

export const links = {
  github: {
    label: "GitHub",
    href: "https://github.com/EzePacheco",
    display: "/EzePacheco",
    external: true,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ezepacheco-dev",
    display: "/in/ezepacheco-dev",
    external: true,
  },
  email: {
    label: "Email",
    href: emailHref,
    display: profile.email,
    external: true,
  },
} satisfies Record<string, LinkItem>;

export const navItems: LinkItem[] = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Contacto", href: "#contacto" },
];

export const heroActions: LinkItem[] = [
  { label: "Ver proyectos", href: "#proyectos" },
  {
    label: "Descargar CV",
    href: profile.cvPath,
    download: true,
  },
  links.linkedin,
  links.github,
  { label: "Contacto", href: "#contacto" },
];

export const recruiterProof = [
  {
    value: "Node.js · TypeScript · PostgreSQL",
    label: "Núcleo backend",
  },
  {
    value: "NestJS · Go · Java / Spring Boot",
    label: "Otros ecosistemas backend",
  },
  {
    value: "React · Next.js",
    label: "Alcance full stack",
  },
];

export const projects: Project[] = [
  {
    id: "elementos",
    index: "01",
    title: "Elementos — Marketplace B2B/B2C",
    status: "En desarrollo",
    prominence: "featured",
    summary:
      "Diseñé y evolucioné la arquitectura backend modular de un marketplace transaccional con más de 30 módulos de negocio, trabajando principalmente con Node.js, Express, PostgreSQL, Sequelize y Umzug.",
    problem:
      "Sostener catálogo, comercios, inventario, reservas, checkout y finanzas con límites de dominio claros y consistencia transaccional.",
    responsibility:
      "Trabajé sobre arquitectura, identidad y seguridad, marketplace, pagos, jobs, contratos OpenAPI, testing y rendimiento.",
    decisions: [
      "Organicé el monolito modular con composition root, DI manual, casos de uso, repositorios y adapters/gateways.",
      "Implementé sesiones, cookies seguras, OAuth, OTP, RBAC, auditoría y rate limiting con autorización en el servidor.",
      "Resolví flujos transaccionales con constraints, FOR UPDATE, idempotencia, índices, query plans y performance gates.",
      "Integré Mercado Pago: Checkout Pro, payment intents, webhooks, reconciliación, refunds, ledger, holds y payouts.",
    ],
    evidence: [
      "Marketplace transaccional complejo",
      "Seguridad, órdenes y pagos",
      "Jobs idempotentes y realtime",
      "Observabilidad y rendimiento",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Umzug", "React", "Next.js", "Mercado Pago", "S3", "OpenAPI"],
    media: {
      src: elementosVisual,
      alt: "Inicio del portal Elementos con categorías de materiales para la construcción",
    },
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
    index: "02",
    title: "El Editor — CMS editorial multitenant + portales públicos",
    status: "En producción",
    prominence: "featured",
    summary:
      "Plataforma editorial compuesta por backend Node/Express, CMS React, portales Next.js, librería UI compartida y notifier WebSub. Trabajo de forma transversal sobre producto, backend, frontend e integración.",
    problem:
      "Unificar la operación editorial multitenant sin duplicar producto, manteniendo permisos, flujos y salida pública por portal.",
    responsibility:
      "Trabajé sobre backend, CMS, portales, UI compartida e integraciones: datos, RBAC, media, publicación, SEO técnico, analítica y operación.",
    decisions: [
      "Separé CMS, API, portal público, UI compartida y notifier WebSub en responsabilidades explícitas.",
      "Protegí multitenancy y RBAC en el servidor; la interfaz refleja permisos ya autorizados.",
      "Coordiné publicación, programación editorial, ISR, revalidación on-demand, RSS/WebSub y SEO técnico.",
      "Trabajé con health/readiness, structured logging, rate limiting, circuit breaker, caching e índices para operación.",
    ],
    evidence: [
      "Arquitectura multitenant y RBAC",
      "Ciclo editorial y media",
      "SEO, RSS, JSON-LD y analytics",
      "Jobs e integraciones operativas",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Next.js", "AWS S3 / CloudFront", "WebSub"],
    media: {
      src: elEditorVisual,
      alt: "Sección Deportes del portal público El Editor Platense",
    },
    links: [
      {
        label: "Abrir El Editor Platense",
        href: "https://eleditorplatense.com/",
        external: true,
      },
      {
        label: "Abrir El Editor Mendoza",
        href: "https://eleditormendoza.com.ar/",
        external: true,
      },
    ],
  },
  {
    id: "minecall",
    index: "03",
    title: "MineCall — Oficina virtual en tiempo real",
    status: "Demo pública",
    prominence: "compact",
    summary:
      "Diseñé la base backend y operativa de una plataforma de oficina virtual realtime utilizando Go, PostgreSQL, WebSockets, Redis y LiveKit.",
    problem:
      "Sostener una experiencia realtime fluida con presencia efímera, media por proximidad y estado durable.",
    responsibility:
      "Diseñé la arquitectura modular en Go, datos, protocolos realtime, presencia distribuida, media por proximidad, billing, Control Center, testing y operación.",
    decisions: [
      "Separé mutaciones durables por HTTP de presencia y movimiento con WebSockets autenticados y protocolos versionados.",
      "Implementé presence, reconnect/replay, heartbeat, backpressure, goroutines/channels, Redis Pub/Sub y coordinación horizontal.",
      "Usé PostgreSQL, pgx/sqlc, Goose y transactional outbox; LiveKit resuelve media y proximidad sin implementar WebRTC/SFU.",
      "Sumé adapters de Stripe/Mercado Pago, Prometheus, load/soak tests y E2E con Playwright.",
    ],
    evidence: ["Backend modular en Go", "Realtime y presencia distribuida", "LiveKit y billing mediante adapters", "Prometheus, load/soak y E2E"],
    stack: ["Go", "PostgreSQL", "Redis", "WebSockets", "LiveKit", "React", "Playwright"],
    media: {
      src: mineCallVisual,
      alt: "Mundo persistente de MineCall con avatares sintéticos dentro de un espacio construido",
    },
    links: [
      {
        label: "Abrir MineCall",
        href: "https://minecall.online/",
        external: true,
      },
    ],
  },
  {
    id: "cercaya",
    index: "04",
    title: "Cercaya — Marketplace de servicios a domicilio",
    status: "En desarrollo",
    prominence: "compact",
    summary:
      "Marketplace que conecta solicitantes y prestadores de servicios. Construí parte de la foundation backend y del primer flujo seguro del solicitante utilizando Java, Spring Boot y PostgreSQL.",
    problem:
      "Ofrecer una foundation modular y segura para el onboarding, solicitudes y evidencia privada, sin exponer información geográfica sensible.",
    responsibility:
      "Implementé backend modular, OpenAPI, seguridad default-deny, Auth0/OIDC, validación JWT, actor local, roles, consentimientos y el primer flujo de solicitudes.",
    decisions: [
      "Usé Spring Modulith, Spring JDBC y Flyway para módulos y límites explícitos, Problem Details y correlation IDs.",
      "Protegí ownership y privacidad geográfica con autorización contextual, requests idempotentes, locks transaccionales e integración entre módulos.",
      "Diseñé e implementé FB-07 Evidence Foundation: uploads idempotentes, grants/revoke, auditoría, borrado lógico, SHA-256 y sanitización de imágenes.",
      "La foundation está limitada deliberadamente a fixtures sintéticos; incluye validación MIME/contenido, stripping de EXIF/geolocalización y revalidación antes de servir.",
    ],
    evidence: ["Java / Spring Boot modular", "Seguridad y privacidad por defecto", "Consistencia transaccional", "Integration tests con Testcontainers"],
    stack: ["Java", "Spring Boot", "Spring Modulith", "Spring JDBC", "PostgreSQL", "Flyway", "Auth0 / OIDC", "JUnit", "Testcontainers", "React Native / Expo", "Astro"],
    media: {
      alt: "Captura móvil futura del flujo de solicitud de Cercaya",
    },
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
    index: "05",
    title: "Chemical Software — SaaS de gestión multicomercio",
    status: "SaaS en desarrollo",
    prominence: "compact",
    summary:
      "Diseñé e implementé capacidades centrales de un SaaS multi-tenant con NestJS, PostgreSQL y TypeORM.",
    problem:
      "Unificar la operación diaria del negocio sin perder contexto de empresa, sucursal, rol ni trazabilidad de inventario.",
    responsibility:
      "Implementé multitenancy por comercio, memberships, ADMIN / STAFF, permisos por sucursal, inventario, compras, stock ledger, reservas, idempotencia, locking, auditoría y contratos OpenAPI.",
    decisions: [
      "Aislé el contexto de comercio principalmente en la aplicación con AsyncLocalStorage request scope, guards y validaciones de membresía; no uso PostgreSQL RLS.",
      "Protegí JWT/cookies, roles y permisos por sucursal en el servidor y mantuve auditoría en operaciones sensibles.",
      "Resolví inventory, purchases, stock ledger, reservations, landed cost y precision handling como operaciones bloqueadas, idempotentes y auditables.",
      "Trabajé sobre React, TanStack Query, migraciones, E2E y CI como parte del flujo end-to-end.",
    ],
    evidence: ["Multitenancy aplicado", "Inventario y trazabilidad", "OpenAPI, migraciones y E2E", "CI y frontend conectado"],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "React", "TanStack Query", "OpenAPI", "GitHub Actions"],
    media: {
      src: chemicalSoftwareVisual,
      alt: "Prototipo visual aprobado de Chemical Software con catálogo e inventario y datos sintéticos",
      caption: "Prototipo aprobado · datos sintéticos",
    },
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
    index: "06",
    title: "MemoriesAI — Memoria durable y verificable para agentes",
    status: "Proyecto propio",
    prominence: "compact",
    summary:
      "Herramienta local en Python para capturar, gobernar y recuperar decisiones, aprendizajes, incidencias, procedimientos y handoffs entre sesiones de trabajo con agentes de software.",
    problem:
      "Preservar contexto útil entre sesiones sin desplazar la autoridad del código, contratos y documentación actual del proyecto.",
    responsibility:
      "Diseñé e implementé el modelo de memoria, lifecycle gobernado, CLI, retrieval, context assembly, journal/recovery, telemetry, adapter para Codex y portabilidad POSIX/Windows.",
    decisions: [
      "Mantengo Markdown como source of truth, con provenance, ownership, estados, relaciones, project scopes e índices SQLite reconstruibles.",
      "Uso BM25 por secciones como mecanismo principal y evalúo retrieval y context assembly de manera verificable.",
      "Embeddings, vector retrieval e hybrid-vector existen como extensiones experimentales y opt-in; el flujo principal es local, determinista y agnóstico al proveedor/modelo.",
    ],
    evidence: ["Lifecycle, provenance y ownership", "BM25 y FTS5 local", "Índices y recovery reconstruibles", "Adapter de Codex y portabilidad"],
    stack: ["Python", "BM25", "SQLite", "FTS5", "FastEmbed (experimental)", "CLI"],
    media: {
      alt: "Captura futura de retrieval de MemoriesAI con provenance",
    },
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
    index: "07",
    title: "Chichitos",
    status: "Proyecto ecommerce",
    prominence: "compact",
    summary:
      "Ecommerce end-to-end desarrollado con Next.js, TypeScript y Supabase, con catálogo, stock, reservas, checkout y pagos idempotentes mediante Mercado Pago.",
    problem: "Convertir un catálogo configurable en una compra segura con precio, stock, envío y pago validados en servidor.",
    responsibility: "Desarrollé el producto end-to-end: storefront, administración, catálogo, stock, reservas, checkout, persistencia, pagos y despliegue.",
    decisions: [
      "Recalcular carrito, precios y envío en el servidor antes de crear el pago.",
      "Confirmar pagos mediante webhook firmado e idempotente.",
    ],
    evidence: ["Storefront y administración", "Stock y reservas", "Pagos idempotentes", "Tests y despliegue"],
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago"],
    media: {
      src: chichitosVisual,
      alt: "Detalle público de una prenda configurable en el storefront de Chichitos",
      caption: "Storefront público · sin datos personales",
    },
    links: [
      { label: "Ver repositorio", href: "https://github.com/EzePacheco/chichitos-ecommerce", external: true },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "Marzo 2026 — Actualidad",
    company: "Empresa privada — Plataformas digitales",
    role: "Full Stack Developer (Backend-Oriented)",
    description:
      "Participo desde el relevamiento y especificación de requerimientos hasta arquitectura, implementación, pruebas y evolución de sistemas en producción.",
  },
  {
    date: "Feb — Mar 2026",
    company: "DATAMARK",
    role: "Full Stack Developer",
    description:
      "MVP B2B SaaS para ventas, inventario, clientes y analítica con backend en capas y PostgreSQL.",
  },
  {
    date: "Sep 2023 — Abr 2026",
    company: "Burgers Thrones",
    role: "Fundador & Responsable de Operaciones",
    description:
      "Operación, stock, atención al cliente y decisiones de negocio apoyadas en datos.",
  },
  {
    date: "2019 — 2023",
    company: "Grupo MSA",
    role: "Técnico de Producción & QA",
    description:
      "Testing funcional de hardware y software, diagnóstico y reporte de defectos críticos.",
  },
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Backend",
    description:
      "Diseño APIs, módulos y modelos de datos con contratos, permisos y consistencia explícitos.",
    items: ["Node.js", "TypeScript", "JavaScript", "Express", "NestJS", "Go", "Java", "Spring Boot", "Python", "REST APIs", "OpenAPI", "WebSockets"],
  },
  {
    index: "02",
    title: "Datos",
    description:
      "Trabajo con datos relacionales, migraciones, acceso explícito a persistencia y rendimiento de consultas.",
    items: ["PostgreSQL", "Redis", "MongoDB", "Sequelize", "TypeORM", "Prisma", "Spring JDBC", "Flyway", "Umzug"],
  },
  {
    index: "03",
    title: "Frontend",
    description:
      "Implemento experiencias conectadas a contratos y reglas reales del sistema cuando el producto lo requiere.",
    items: ["React", "Next.js", "React Native / Expo", "Astro", "Vite", "TanStack Query", "Tailwind CSS"],
  },
  {
    index: "04",
    title: "Arquitectura y seguridad",
    description: "Protejo invariantes, límites de dominio y flujos sensibles desde el backend.",
    items: ["Modular Monolith", "Multitenancy", "OIDC", "JWT", "Sessions", "RBAC", "Idempotency", "Background Jobs", "Rate Limiting"],
  },
  {
    index: "05",
    title: "Testing",
    description: "Verifico comportamiento y flujos críticos en las capas que los implementan.",
    items: ["Vitest", "Supertest", "Playwright", "JUnit", "Testcontainers", "API testing", "Contract testing", "Integration testing", "E2E", "Performance testing"],
  },
  {
    index: "06",
    title: "Operación",
    description: "Incorporo prácticas que hacen observable y operable un sistema en evolución.",
    items: ["Git", "GitHub Actions", "Docker", "AWS S3 / CloudFront", "Metrics", "Tracing", "Health / readiness"],
  },
  {
    index: "07",
    title: "AI-assisted engineering",
    description: "Uso agentes para análisis, implementación, pruebas y revisión, manteniendo la responsabilidad técnica humana.",
    items: ["Codex", "Claude Code", "Spec-Driven Development", "Test-Driven Development", "Agent workflows"],
  },
];

export const contact = {
  eyebrow: "Hablemos",
  title: "¿Buscás un Backend / Full Stack Developer?",
  description:
    "Disponible para oportunidades remotas en LATAM o en Buenos Aires. Hablemos de backend, datos, integraciones y productos end-to-end.",
  links: [links.email, links.linkedin, links.github],
};
