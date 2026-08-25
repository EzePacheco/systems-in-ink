import type { ImageMetadata } from "astro";
import chichitosVisual from "../assets/cases/chichitos.png";
import chemicalSoftwareVisual from "../assets/cases/chemical-software-mockup.png";
import elEditorVisual from "../assets/cases/el-editor-responsive-mockup.png";
import elementosVisual from "../assets/cases/elementos-responsive-mockup.png";
import memoriesAiVisual from "../assets/cases/memoriesai-terminal.svg";
import mineCallVisual from "../assets/cases/minecall.png";

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
    src: ImageMetadata;
    alt: string;
    caption: string;
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
  title: "Ezequiel Pacheco | Full Stack Developer con foco en backend",
  description:
    "Portfolio de Ezequiel Pacheco, Full Stack Developer con foco en backend. Experiencia en productos web, APIs, PostgreSQL, CMS, ecommerce y sistemas en tiempo real.",
  ogImage: "/portfolio-social.jpg",
};

export const profile = {
  name: "Ezequiel Pacheco",
  role: "Full Stack Developer con foco en backend",
  location: "Buenos Aires, Argentina",
  currentCompany: "DELSUD",
  email: "ezequielpacheco.dev@gmail.com",
  cvPath: "/Ezequiel_Pacheco_CV_JUL_2026.pdf",
  heroDescription:
    "Diseño e implemento sistemas web de punta a punta: backend, datos, APIs, interfaces, pruebas y operación. Además, aporto contexto de negocio y decisiones de producto.",
  footerNote: "Backend, full stack y operación de productos web.",
};

const gmailComposeHref = (subject?: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}${
    subject ? `&su=${encodeURIComponent(subject)}` : ""
  }`;

const emailHref = gmailComposeHref();

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
  { label: "Contactar", href: emailHref },
  {
    label: "Descargar CV",
    href: profile.cvPath,
    download: true,
  },
  { label: "Ver proyectos", href: "#proyectos" },
];

export const recruiterProof = [
  {
    value: "Producción",
    label: "Sistemas reales, no sólo demos",
  },
  {
    value: "Full stack",
    label: "Backend, datos e interfaces de punta a punta",
  },
  {
    value: "Ownership",
    label: "Calidad, operación y producto como diferencial",
  },
];

export const projects: Project[] = [
  {
    id: "el-editor-cms",
    index: "01",
    title: "El Editor CMS",
    status: "En producción",
    prominence: "featured",
    summary:
      "Plataforma editorial multisitio para administrar contenido, usuarios, media, analítica y publicación de portales digitales.",
    problem:
      "Unificar la operación de distintos medios sin duplicar producto, manteniendo identidad, permisos y flujos editoriales propios.",
    responsibility:
      "Desarrollé capacidades del backend, el CMS React y los portales públicos: datos, autenticación, RBAC, media, métricas, publicidad, publicación e integraciones operativas.",
    decisions: [
      "Separar CMS, API, portal público, UI compartida y entrega WebSub en responsabilidades explícitas.",
      "Proteger tenancy y RBAC en el servidor; la interfaz sólo refleja permisos ya autorizados.",
      "Coordinar publicación, revalidación, RSS/WebSub, SEO y reintentos sin acoplar el backend editorial al portal.",
    ],
    evidence: [
      "Backend y CMS en producción",
      "RBAC y multitenancy",
      "Jobs e integraciones",
      "Portales, SEO y analítica",
    ],
    stack: ["Node.js", "PostgreSQL", "React", "Next.js", "AWS S3", "WebSub"],
    media: {
      src: elEditorVisual,
      alt: "Mockups de notebook, tablet y teléfono mostrando las métricas de El Editor CMS",
      caption: "Experiencia responsive · interfaz con datos sintéticos",
    },
    links: [
      {
        label: "Pedir caso técnico",
        href: gmailComposeHref("Caso técnico - El Editor CMS"),
        external: true,
      },
    ],
  },
  {
    id: "elementos",
    index: "02",
    title: "Elementos",
    status: "Producto privado",
    prominence: "featured",
    summary:
      "Marketplace de materiales de construcción con portal comprador, backoffice comercial, identidad, catálogo, ofertas e inventario.",
    problem:
      "Conectar compradores, comercios y operación interna sobre un catálogo consistente, con límites claros entre dominios.",
    responsibility:
      "Diseñé e implementé el backend modular del marketplace: identidad, seguridad, catálogo, comercios, ofertas, media, discovery, inventario y reservas. También diagramé flujos y casos de uso.",
    decisions: [
      "Traducir los recorridos de comprador, comercio y backoffice en flujos y casos de uso compartidos por producto y desarrollo.",
      "Organizar el backend como monolito modular por dominio y comunicar capacidades mediante superficies públicas.",
      "Mantener OpenAPI como contrato consumible y verificar rutas, respuestas y escenarios críticos.",
      "Separar catálogo, estado comercial, disponibilidad e identidad para preservar sus invariantes.",
    ],
    evidence: [
      "Backend modular",
      "Auth y seguridad",
      "Inventario y reservas",
      "OpenAPI y performance",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Next.js", "React"],
    media: {
      src: elementosVisual,
      alt: "Mockups de notebook, tablet y teléfono mostrando una ficha de producto de Elementos",
      caption: "Experiencia responsive · contenido de demostración",
    },
    links: [
      {
        label: "Pedir caso técnico",
        href: gmailComposeHref("Caso técnico - Elementos"),
        external: true,
      },
    ],
  },
  {
    id: "minecall",
    index: "03",
    title: "MineCall",
    status: "Demo pública",
    prominence: "compact",
    summary:
      "Oficina virtual voxel con presencia, chat y audio/video por proximidad en tiempo real.",
    problem:
      "Sostener una experiencia realtime fluida con presencia efímera, media por proximidad y estado durable.",
    responsibility:
      "Diseñé y desarrollé gran parte de la plataforma full stack: API Go, datos, realtime, media por proximidad, billing, Control Center y experiencia web. Las decisiones de negocio se trabajaron con un socio.",
    decisions: [
      "Separar mutaciones durables por HTTP de presencia y movimiento por WebSocket.",
      "Usar PostgreSQL como autoridad durable y Redis/outbox para coordinación horizontal.",
      "Aplicar proximidad de media server-side con LiveKit y verificarla con browsers reales.",
    ],
    evidence: ["API Go y PostgreSQL", "Realtime y LiveKit", "Billing y administración", "E2E full stack"],
    stack: ["Go", "PostgreSQL", "WebSocket", "Redis", "LiveKit", "Three.js"],
    media: {
      src: mineCallVisual,
      alt: "Mundo voxel de MineCall con oficinas, avatar y controles de llamada",
      caption: "Demo pública con identidad ficticia",
    },
    links: [
      {
        label: "Abrir MineCall",
        href: "https://minecall-859734929961.southamerica-east1.run.app/",
        external: true,
      },
    ],
  },
  {
    id: "chichitos-ecommerce",
    index: "04",
    title: "Chichitos",
    status: "Tienda pública",
    prominence: "compact",
    summary:
      "Ecommerce para una marca argentina de indumentaria infantil personalizada y estampada a pedido.",
    problem:
      "Convertir un catálogo configurable en una compra segura con precio, stock, envío y pago validados en servidor.",
    responsibility:
      "Desarrollé el producto end-to-end: storefront, administración, catálogo, stock y reservas, checkout, persistencia, pagos y despliegue.",
    decisions: [
      "Recalcular carrito, precios y envío en el servidor antes de crear el pago.",
      "Confirmar pagos mediante webhook firmado e idempotente.",
      "Separar UI pública, capacidades de producto, casos de uso y adaptadores.",
    ],
    evidence: ["Storefront y admin", "Stock y reservas", "Pagos idempotentes", "Tests y despliegue"],
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "Google Maps"],
    media: {
      src: chichitosVisual,
      alt: "Portada pública del ecommerce Chichitos",
      caption: "Storefront público sin datos personales",
    },
    links: [
      {
        label: "Abrir tienda",
        href: "https://chichitos-web.vercel.app/",
        external: true,
      },
      {
        label: "Ver repositorio",
        href: "https://github.com/EzePacheco/chichitos-ecommerce",
        external: true,
      },
    ],
  },
  {
    id: "chemical-software",
    index: "05",
    title: "Chemical Software",
    status: "SaaS en desarrollo",
    prominence: "compact",
    summary:
      "SaaS de gestión para catálogo, stock, compras, ventas, pedidos y cuentas corrientes con operación multi-comercio.",
    problem:
      "Unificar la operación diaria del negocio sin perder contexto de empresa, sucursal, rol ni trazabilidad de inventario.",
    responsibility:
      "Implementé capacidades críticas del backend en NestJS: multitenancy, autenticación y membresías, inventario, recepciones, costos de compra y auditoría. También trabajé en frontend, contratos OpenAPI, migraciones, E2E y CI.",
    decisions: [
      "Modelar compañía y sucursal como contextos distintos para preservar el aislamiento multi-tenant.",
      "Validar membresías y roles en el servidor y mantener trazabilidad sobre cambios sensibles.",
      "Resolver recepciones, ajustes y costos de compra como operaciones consistentes y auditables.",
      "Traducir la operación en casos de uso y flujos específicos por rol.",
    ],
    evidence: ["Backend NestJS", "Migraciones y OpenAPI", "E2E de negocio", "Flujos y producto"],
    stack: ["NestJS", "PostgreSQL", "TypeORM", "React", "TanStack Query", "Zod"],
    media: {
      src: chemicalSoftwareVisual,
      alt: "Mockup sintético de Chemical Software con dashboard operativo y catálogo",
      caption: "Mockup sintético · sin datos reales",
    },
    links: [
      {
        label: "Pedir caso técnico",
        href: gmailComposeHref("Caso técnico - Chemical Software"),
        external: true,
      },
    ],
  },
  {
    id: "memoriesai",
    index: "06",
    title: "MemoriesAI",
    status: "Proyecto propio",
    prominence: "compact",
    summary:
      "Segundo cerebro compartido para que distintos agentes recuperen contexto durable sin reemplazar la autoridad del código.",
    problem:
      "Preservar decisiones y aprendizajes entre sesiones sin convertir conversaciones o snapshots en verdad técnica.",
    responsibility:
      "Diseñé e implementé el modelo de memoria, lifecycle, CLI, retrieval, receipts, guardas, instalador y distribución del harness multiagente.",
    decisions: [
      "Mantener una sola autoridad por pregunta y confirmar los hechos en el repositorio del producto.",
      "Separar memoria durable de progreso transitorio mediante receipts.",
      "Usar retrieval lexical, grafo y tiempo con procedencia explícita y gates verificables.",
    ],
    evidence: ["CLI y retrieval", "Lifecycle y receipts", "Guardas y evidencia", "Harness portable"],
    stack: ["Python", "Git", "Markdown", "BM25", "Codex", "Claude"],
    media: {
      src: memoriesAiVisual,
      alt: "Terminal de demostración de MemoriesAI con briefing, evidencia y cierre de sesión",
      caption: "Salida sintética sin datos privados",
    },
    links: [
      {
        label: "Pedir caso técnico",
        href: gmailComposeHref("Caso técnico - MemoriesAI"),
        external: true,
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "Mar 2026 — Actualidad",
    company: "DELSUD",
    role: "Full Stack Developer · Backend-Oriented",
    description:
      "Desarrollo full stack de CMS, portales multisitio y backend de marketplace: APIs, datos, autenticación, integraciones e interfaces.",
  },
  {
    date: "Feb — Mar 2026",
    company: "DATAMARK",
    role: "Fullstack Lead & Full Stack Developer",
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
    title: "Backend y datos",
    description:
      "Diseño APIs, módulos y modelos de datos con contratos, permisos y consistencia explícitos.",
    items: ["Node.js", "NestJS", "Go", "REST", "WebSocket", "PostgreSQL", "Redis"],
  },
  {
    index: "02",
    title: "Full stack e interfaces",
    description:
      "Implemento paneles, portales y experiencias web conectadas a contratos y reglas reales del sistema.",
    items: ["TypeScript", "React", "Next.js", "Astro", "CMS", "Ecommerce"],
  },
  {
    index: "03",
    title: "Calidad, operación y producto",
    description:
      "Verifico los flujos críticos y sumo contexto de negocio, casos de uso y decisiones de producto.",
    items: ["E2E", "Contratos", "CI", "Observabilidad", "Casos de uso", "User flows"],
  },
];

export const contact = {
  eyebrow: "Hablemos",
  title: "¿Tenés un producto que necesita claridad técnica?",
  description:
    "Puedo aportar backend, APIs, datos, integraciones y desarrollo full stack, con ownership técnico y criterio de producto.",
  links: [links.email, links.linkedin, links.github],
};
