export type Locale = "es" | "en";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type CaseMedia = {
  assetId: string;
  kind: "image" | "diagram" | "video";
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudy = {
  slug: "minecall" | "el-editor" | "chichitos";
  title: string;
  status: string;
  summary: string;
  problem: string;
  context: string;
  responsibility: string;
  decisions: string[];
  implementation: string[];
  evidence: string[];
  limits: string;
  media: CaseMedia[];
  links: LinkItem[];
};

type ExperienceItem = {
  date: string;
  company: string;
  role: string;
  description: string;
};

type SecondaryCase = {
  title: string;
  status: string;
  summary: string;
  responsibility: string;
  limits: string;
};

type Capability = {
  title: string;
  description: string;
  evidence: string;
};

export type PortfolioContent = {
  locale: Locale;
  metadata: { title: string; description: string; ogImage: string };
  profile: {
    name: string;
    role: string;
    location: string;
    currentCompany: string;
    email: string;
    hero: string;
    availability: string;
  };
  labels: Record<string, string>;
  nav: LinkItem[];
  cases: CaseStudy[];
  experience: ExperienceItem[];
  secondary: SecondaryCase[];
  capabilities: Capability[];
  engineeringSystems: {
    title: string;
    summary: string;
    evidence: string[];
    limits: string;
  };
};

const email = "ezequielpacheco.dev@gmail.com";
const links = {
  github: "https://github.com/EzePacheco",
  linkedin: "https://www.linkedin.com/in/ezepacheco-dev",
  chichitos: "https://chichitos-web.vercel.app/",
  chichitosRepo: "https://github.com/EzePacheco/chichitos-ecommerce",
};

export const assetEvidence = {
  minecallWorld: {
    product: "MineCall",
    origin: "Captura revisada de una demo con identidad ficticia",
    data: "synthetic",
    safeClaim: "Mundo voxel con presencia, zonas y controles de llamada",
    prohibitions: [
      "No presentar la identidad ficticia como usuario real",
      "No inferir uso o adopción",
    ],
    reviewedAt: "2026-08-25",
  },
  minecallBuilder: {
    product: "MineCall",
    origin:
      "Diagrama SVG derivado de contratos y código del editor de entidades",
    data: "explanatory",
    safeClaim: "Explica catálogo, placement por celda y persistencia del mundo",
    prohibitions: [
      "No presentar como captura de interfaz",
      "No afirmar editor avanzado",
    ],
    reviewedAt: "2026-08-25",
  },
  minecallProximity: {
    product: "MineCall",
    origin:
      "Animación explicativa derivada del contrato de media por proximidad",
    data: "explanatory",
    safeClaim: "Explica la entrada y salida del radio de video",
    prohibitions: [
      "No presentar como grabación de producto",
      "No inferir calidad de llamada",
    ],
    reviewedAt: "2026-08-25",
  },
  chichitosCatalog: {
    product: "Chichitos",
    origin: "Captura del storefront público",
    data: "public-product",
    safeClaim: "Catálogo con filtros y una prenda visible",
    prohibitions: ["No afirmar ventas ni persistencia del carrito"],
    reviewedAt: "2026-08-25",
  },
  chichitosDetail: {
    product: "Chichitos",
    origin: "Captura del detalle público configurable",
    data: "public-product",
    safeClaim: "Detalle que expone talla, color y diseño visibles",
    prohibitions: ["No afirmar pago completado ni múltiples variantes activas"],
    reviewedAt: "2026-08-25",
  },
  chichitosMobile: {
    product: "Chichitos",
    origin: "Captura mobile del detalle público",
    data: "public-product",
    safeClaim: "La misma configuración se adapta a un viewport angosto",
    prohibitions: ["No inferir métricas móviles"],
    reviewedAt: "2026-08-25",
  },
  editorArchitecture: {
    product: "El Editor",
    origin: "Diagrama SVG derivado de autoridades técnicas locales",
    data: "explanatory",
    safeClaim: "Explica CMS, API, portales y publicación",
    prohibitions: [
      "No presentar como interfaz",
      "No incorporar nombres, datos o métricas privadas",
    ],
    reviewedAt: "2026-08-25",
  },
} as const;

const sharedExperience = {
  es: [
    {
      date: "Mar 2026 — Actualidad",
      company: "DELSUD",
      role: "Full Stack Developer",
      description:
        "Desarrollo full stack de CMS, portales multisitio y backend de marketplace: APIs, datos, autenticación, integraciones e interfaces.",
    },
    {
      date: "Feb — Mar 2026",
      company: "DATAMARK",
      role: "Fullstack Lead & Full Stack Developer",
      description:
        "MVP B2B para ventas, inventario, clientes y analítica con backend en capas y PostgreSQL.",
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
  ],
  en: [
    {
      date: "Mar 2026 — Present",
      company: "DELSUD",
      role: "Full Stack Developer",
      description:
        "Full-stack development across a CMS, multisite portals and marketplace backend: APIs, data, authentication, integrations and interfaces.",
    },
    {
      date: "Feb — Mar 2026",
      company: "DATAMARK",
      role: "Fullstack Lead & Full Stack Developer",
      description:
        "B2B MVP for sales, inventory, customers and analytics with a layered backend and PostgreSQL.",
    },
    {
      date: "Sep 2023 — Apr 2026",
      company: "Burgers Thrones",
      role: "Founder & Operations Lead",
      description:
        "Operations, stock, customer service and data-supported business decisions.",
    },
    {
      date: "2019 — 2023",
      company: "Grupo MSA",
      role: "Production & QA Technician",
      description:
        "Functional hardware and software testing, diagnosis and critical defect reporting.",
    },
  ],
} satisfies Record<Locale, ExperienceItem[]>;

const commonMedia = {
  minecallEs: [
    {
      assetId: "minecallWorld",
      kind: "image",
      src: "/media/minecall-world.png",
      alt: "Mundo voxel de MineCall con avatar, salas y controles de llamada",
      caption: "Interfaz real · identidad ficticia",
    },
    {
      assetId: "minecallBuilder",
      kind: "diagram",
      src: "/diagrams/minecall-builder.svg",
      alt: "Diagrama del constructor simple de MineCall",
      caption: "Diagrama explicativo · no es una captura",
    },
    {
      assetId: "minecallProximity",
      kind: "video",
      src: "/media/minecall-proximity-explainer.mp4",
      alt: "Explicación animada de video por proximidad",
      caption: "Animación explicativa · no es una grabación del producto",
    },
  ],
  minecallEn: [
    {
      assetId: "minecallWorld",
      kind: "image",
      src: "/media/minecall-world.png",
      alt: "MineCall voxel world with an avatar, rooms and call controls",
      caption: "Real interface · fictional identity",
    },
    {
      assetId: "minecallBuilder",
      kind: "diagram",
      src: "/diagrams/minecall-builder.svg",
      alt: "Diagram of MineCall simple world builder",
      caption: "Explanatory diagram · not a screenshot",
    },
    {
      assetId: "minecallProximity",
      kind: "video",
      src: "/media/minecall-proximity-explainer.mp4",
      alt: "Animated explanation of proximity video",
      caption: "Explanatory animation · not a product recording",
    },
  ],
  chichitosEs: [
    {
      assetId: "chichitosCatalog",
      kind: "image",
      src: "/media/chichitos-catalog.png",
      alt: "Catálogo público de Chichitos con filtros y una prenda",
      caption: "Interfaz pública · catálogo",
    },
    {
      assetId: "chichitosDetail",
      kind: "image",
      src: "/media/chichitos-detail.png",
      alt: "Detalle configurable de una remera de Chichitos",
      caption: "Interfaz pública · detalle configurable",
    },
    {
      assetId: "chichitosMobile",
      kind: "image",
      src: "/media/chichitos-mobile.png",
      alt: "Detalle de Chichitos en pantalla mobile",
      caption: "Interfaz pública · mobile",
    },
  ],
  chichitosEn: [
    {
      assetId: "chichitosCatalog",
      kind: "image",
      src: "/media/chichitos-catalog.png",
      alt: "Public Chichitos catalog with filters and one product",
      caption: "Public interface · catalog",
    },
    {
      assetId: "chichitosDetail",
      kind: "image",
      src: "/media/chichitos-detail.png",
      alt: "Configurable Chichitos shirt detail",
      caption: "Public interface · configurable detail",
    },
    {
      assetId: "chichitosMobile",
      kind: "image",
      src: "/media/chichitos-mobile.png",
      alt: "Chichitos detail on a mobile viewport",
      caption: "Public interface · mobile",
    },
  ],
} satisfies Record<string, CaseMedia[]>;

const cases: Record<Locale, CaseStudy[]> = {
  es: [
    {
      slug: "minecall",
      title: "MineCall",
      status: "Producto cocreado",
      summary:
        "Oficina virtual voxel con mundos persistentes, presencia y audio/video por proximidad.",
      problem:
        "Coordinar presencia efímera, estado durable y media en una experiencia realtime sin confundir sus autoridades.",
      context:
        "Producto construido con un socio. El repositorio local confirma mundo persistente, editor simple de entidades y enforcement server-side de proximidad.",
      responsibility:
        "Diseñé y desarrollé gran parte de la plataforma full stack: API Go, datos, realtime, media, Control Center y experiencia web.",
      decisions: [
        "Separar mutaciones durables por HTTP de presencia y movimiento por WebSocket.",
        "Usar PostgreSQL como autoridad durable y Redis/outbox sólo para coordinación multi-instancia.",
        "Calcular proximidad de media en servidor y verificarla con dos browsers contra LiveKit real.",
      ],
      implementation: [
        "Mundos, membresías y placements persistidos.",
        "Constructor simple de entidades y bloques; no editor avanzado.",
        "Clientes realtime con reconexión y suscripción selectiva de media.",
      ],
      evidence: [
        "Contratos HTTP y WebSocket versionados",
        "Smoke adversarial de media",
        "Gate full stack local",
        "Captura con identidad ficticia",
      ],
      limits:
        "La URL anterior de demo responde 404 al 2026-08-25. El video publicado es explicativo, no una grabación. OAuth real y rollout tiered siguen pendientes por entorno.",
      media: commonMedia.minecallEs,
      links: [
        {
          label: "Pedir caso técnico",
          href: `mailto:${email}?subject=Caso%20t%C3%A9cnico%20MineCall`,
        },
      ],
    },
    {
      slug: "el-editor",
      title: "El Editor",
      status: "Experiencia profesional",
      summary:
        "Plataforma editorial multisitio para contenido, permisos, media y publicación de portales.",
      problem:
        "Unificar la operación de distintos medios sin duplicar producto y preservando identidad, permisos y flujos editoriales.",
      context:
        "Trabajo realizado en un contexto profesional externo. No se presenta como cliente propio ni se publican nombres, métricas o interfaces privadas.",
      responsibility:
        "Desarrollé capacidades del backend, el CMS React y portales públicos: datos, autenticación, RBAC, media, publicación e integraciones.",
      decisions: [
        "Separar CMS, API, portal público y entrega de publicación.",
        "Proteger tenancy y RBAC en servidor; la interfaz sólo refleja permisos autorizados.",
        "Coordinar publicación, revalidación, feeds y SEO sin acoplar el dominio editorial al portal.",
      ],
      implementation: [
        "API y persistencia editorial",
        "CMS y permisos por rol",
        "Portales multisitio y publicación derivada",
      ],
      evidence: [
        "Código, contratos y tests locales revisados",
        "Diagrama de responsabilidades",
        "Experiencia profesional vigente",
      ],
      limits:
        "Los PNG existentes quedan retenidos por privacidad. El diagrama explica arquitectura y no representa una interfaz ni datos operativos.",
      media: [
        {
          assetId: "editorArchitecture",
          kind: "diagram",
          src: "/diagrams/el-editor-architecture.svg",
          alt: "Diagrama explicativo de CMS, API, portales y publicación de El Editor",
          caption: "Diagrama explicativo · no es una interfaz",
        },
      ],
      links: [
        {
          label: "Pedir caso técnico",
          href: `mailto:${email}?subject=Caso%20t%C3%A9cnico%20El%20Editor`,
        },
      ],
    },
    {
      slug: "chichitos",
      title: "Chichitos",
      status: "Producto público",
      summary:
        "Storefront para indumentaria infantil personalizada con catálogo y detalle configurable.",
      problem:
        "Explicar con claridad una prenda personalizada y permitir elegir sólo las opciones que la interfaz pública expone.",
      context:
        "Producto público. Las capturas se tomaron del storefront publicado el 2026-08-25 y no contienen datos personales.",
      responsibility:
        "Desarrollé el producto end-to-end, con foco en arquitectura, catálogo, experiencia pública, administración y despliegue.",
      decisions: [
        "Separar UI pública, capacidades de producto y adaptadores.",
        "Resolver disponibilidad y reglas críticas en límites del servidor.",
        "Diseñar el detalle para mantener contexto entre imagen y configuración.",
      ],
      implementation: [
        "Catálogo con filtros visibles",
        "Detalle con una talla, un color y un diseño expuestos",
        "Composición responsive verificada a 390 px",
      ],
      evidence: [
        "Captura de catálogo",
        "Captura de detalle configurable",
        "Captura mobile del mismo detalle",
      ],
      limits:
        "No se afirma carrito persistente, pago completado, ventas ni múltiples variantes activas. Las capturas prueban únicamente la interfaz pública visible.",
      media: commonMedia.chichitosEs,
      links: [
        { label: "Abrir tienda", href: links.chichitos, external: true },
        { label: "Ver repositorio", href: links.chichitosRepo, external: true },
      ],
    },
  ],
  en: [
    {
      slug: "minecall",
      title: "MineCall",
      status: "Co-built product",
      summary:
        "Voxel virtual office with persistent worlds, presence and proximity audio/video.",
      problem:
        "Coordinate ephemeral presence, durable state and media in a realtime experience without confusing their authorities.",
      context:
        "Product built with a partner. Local repository evidence confirms persistent worlds, a simple entity editor and server-side proximity enforcement.",
      responsibility:
        "I designed and built a substantial part of the full-stack platform: Go API, data, realtime, media, Control Center and web experience.",
      decisions: [
        "Separate durable HTTP mutations from WebSocket presence and movement.",
        "Keep PostgreSQL as durable authority and use Redis/outbox only for multi-instance coordination.",
        "Compute media proximity on the server and verify it with two real browsers against LiveKit.",
      ],
      implementation: [
        "Persistent worlds, memberships and placements.",
        "Simple entity and block builder; not an advanced editor.",
        "Realtime clients with reconnect and selective media subscription.",
      ],
      evidence: [
        "Versioned HTTP and WebSocket contracts",
        "Adversarial media smoke",
        "Local full-stack gate",
        "Screenshot with a fictional identity",
      ],
      limits:
        "The previous demo URL returns 404 as of 2026-08-25. The published video is explanatory, not a recording. Real OAuth and tiered rollout remain environment-dependent.",
      media: commonMedia.minecallEn,
      links: [
        {
          label: "Request technical case",
          href: `mailto:${email}?subject=MineCall%20technical%20case`,
        },
      ],
    },
    {
      slug: "el-editor",
      title: "El Editor",
      status: "Professional experience",
      summary:
        "Multisite editorial platform for content, permissions, media and portal publishing.",
      problem:
        "Unify operations across different publications without duplicating the product while preserving identity, permissions and editorial workflows.",
      context:
        "Work completed in an external professional context. It is not presented as my client and no private names, metrics or interfaces are published.",
      responsibility:
        "I developed backend, React CMS and public portal capabilities across data, authentication, RBAC, media, publishing and integrations.",
      decisions: [
        "Separate CMS, API, public portal and publishing delivery.",
        "Enforce tenancy and RBAC on the server; UI only reflects authorized permissions.",
        "Coordinate publishing, revalidation, feeds and SEO without coupling the editorial domain to the portal.",
      ],
      implementation: [
        "Editorial API and persistence",
        "CMS and role-based permissions",
        "Multisite portals and derived publishing",
      ],
      evidence: [
        "Reviewed local code, contracts and tests",
        "Responsibility diagram",
        "Current professional experience",
      ],
      limits:
        "Existing PNG files remain withheld for privacy. The diagram explains architecture and represents neither an interface nor operational data.",
      media: [
        {
          assetId: "editorArchitecture",
          kind: "diagram",
          src: "/diagrams/el-editor-architecture.svg",
          alt: "Explanatory diagram of El Editor CMS, API, portals and publishing",
          caption: "Explanatory diagram · not an interface",
        },
      ],
      links: [
        {
          label: "Request technical case",
          href: `mailto:${email}?subject=El%20Editor%20technical%20case`,
        },
      ],
    },
    {
      slug: "chichitos",
      title: "Chichitos",
      status: "Public product",
      summary:
        "Storefront for personalized children clothing with a catalog and configurable detail.",
      problem:
        "Explain a personalized garment clearly and let people choose only the options exposed by the public interface.",
      context:
        "Public product. Screenshots were captured from the published storefront on 2026-08-25 and contain no personal data.",
      responsibility:
        "I built the product end to end, focusing on architecture, catalog, public experience, administration and deployment.",
      decisions: [
        "Separate public UI, product capabilities and adapters.",
        "Resolve availability and critical rules at server boundaries.",
        "Keep visual and configuration context together in product detail.",
      ],
      implementation: [
        "Catalog with visible filters",
        "Detail with one exposed size, color and design",
        "Responsive composition verified at 390 px",
      ],
      evidence: [
        "Catalog screenshot",
        "Configurable detail screenshot",
        "Mobile screenshot of the same detail",
      ],
      limits:
        "No persistent cart, completed payment, sales or multiple active variants are claimed. Screenshots prove only the visible public interface.",
      media: commonMedia.chichitosEn,
      links: [
        { label: "Open store", href: links.chichitos, external: true },
        { label: "View repository", href: links.chichitosRepo, external: true },
      ],
    },
  ],
};

export const portfolio: Record<Locale, PortfolioContent> = {
  es: {
    locale: "es",
    metadata: {
      title: "Ezequiel Pacheco | Product Builder & Full-Stack Engineer",
      description:
        "Portfolio de Ezequiel Pacheco: productos web, APIs, datos, interfaces y sistemas en tiempo real.",
      ogImage: "/og/es-home.png",
    },
    profile: {
      name: "Ezequiel Pacheco",
      role: "Product Builder & Full-Stack Engineer",
      location: "Buenos Aires, Argentina",
      currentCompany: "DELSUD",
      email,
      hero: "Construyo productos web de punta a punta y conecto decisiones de producto con backend, datos, interfaces, pruebas y operación.",
      availability: "Abierto a oportunidades de producto e ingeniería.",
    },
    labels: {
      skip: "Saltar al contenido",
      nav: "Navegación principal",
      projects: "Casos destacados",
      experience: "Experiencia profesional",
      secondary: "Trabajo secundario",
      capabilities: "Capacidades",
      contact: "Contacto",
      viewCase: "Ver caso",
      downloadCv: "Descargar CV",
      printableCv: "CV imprimible",
      language: "English",
      problem: "Problema",
      context: "Contexto",
      responsibility: "Responsabilidad",
      decisions: "Decisiones",
      implementation: "Implementación",
      evidence: "Evidencia",
      limits: "Límites",
      back: "Volver al portfolio",
      systems: "Sistemas de ingeniería",
    },
    nav: [
      { label: "Casos", href: "#proyectos" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Capacidades", href: "#capacidades" },
      { label: "Contacto", href: "#contacto" },
    ],
    cases: cases.es,
    experience: sharedExperience.es,
    secondary: [
      {
        title: "Elementos",
        status: "Producto privado",
        summary:
          "Marketplace de materiales con identidad, catálogo, ofertas, inventario y reservas.",
        responsibility:
          "Diseño e implementación del backend modular y sus contratos.",
        limits: "Sin interfaz pública, métricas ni estado operativo afirmado.",
      },
      {
        title: "Chemical Software",
        status: "En desarrollo",
        summary:
          "Sistema de gestión para catálogo, stock, compras, ventas y cuentas corrientes.",
        responsibility:
          "Backend NestJS, multitenancy, inventario, migraciones, OpenAPI y E2E.",
        limits:
          "No se presenta como SaaS en producción ni se usan mockups como evidencia.",
      },
      {
        title: "CercaYA",
        status: "MVP en construcción",
        summary:
          "Marketplace de servicios a domicilio con sitio público, apps Expo y backend.",
        responsibility:
          "Trabajo de producto e ingeniería sobre contratos, aplicación solicitante y fronteras de seguridad.",
        limits:
          "La app de prestadores sigue como stub y el hardening de producción permanece futuro.",
      },
    ],
    capabilities: [
      {
        title: "Backend y datos",
        description:
          "APIs, módulos y modelos con contratos, permisos y consistencia explícitos.",
        evidence: "Node.js · NestJS · Go · PostgreSQL · Redis",
      },
      {
        title: "Interfaces full stack",
        description:
          "Paneles, portales y experiencias conectadas a reglas reales del sistema.",
        evidence: "TypeScript · React · Next.js · Astro · Expo",
      },
      {
        title: "Calidad y operación",
        description:
          "Flujos críticos verificados con evidencia ejecutable y límites operativos claros.",
        evidence: "E2E · contratos · CI · observabilidad · rollback",
      },
    ],
    engineeringSystems: {
      title: "MemoriesAI",
      summary:
        "Segundo cerebro compartido para recuperar contexto durable sin reemplazar la autoridad del código.",
      evidence: [
        "CLI y retrieval",
        "Lifecycle y receipts",
        "Guardas y evidence runner",
        "Harness portable",
      ],
      limits:
        "Proyecto propio; no se muestran terminales, memoria privada ni métricas.",
    },
  },
  en: {
    locale: "en",
    metadata: {
      title: "Ezequiel Pacheco | Product Builder & Full-Stack Engineer",
      description:
        "Ezequiel Pacheco portfolio: web products, APIs, data, interfaces and realtime systems.",
      ogImage: "/og/en-home.png",
    },
    profile: {
      name: "Ezequiel Pacheco",
      role: "Product Builder & Full-Stack Engineer",
      location: "Buenos Aires, Argentina",
      currentCompany: "DELSUD",
      email,
      hero: "I build web products end to end, connecting product decisions with backend, data, interfaces, testing and operations.",
      availability: "Open to product and engineering opportunities.",
    },
    labels: {
      skip: "Skip to content",
      nav: "Main navigation",
      projects: "Selected cases",
      experience: "Professional experience",
      secondary: "Additional work",
      capabilities: "Capabilities",
      contact: "Contact",
      viewCase: "View case",
      downloadCv: "Download CV",
      printableCv: "Printable CV",
      language: "Español",
      problem: "Problem",
      context: "Context",
      responsibility: "Responsibility",
      decisions: "Decisions",
      implementation: "Implementation",
      evidence: "Evidence",
      limits: "Limits",
      back: "Back to portfolio",
      systems: "Engineering systems",
    },
    nav: [
      { label: "Cases", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Contact", href: "#contact" },
    ],
    cases: cases.en,
    experience: sharedExperience.en,
    secondary: [
      {
        title: "Elementos",
        status: "Private product",
        summary:
          "Materials marketplace with identity, catalog, offers, inventory and reservations.",
        responsibility:
          "Modular backend and contract design and implementation.",
        limits: "No public interface, metrics or operational status claimed.",
      },
      {
        title: "Chemical Software",
        status: "In development",
        summary:
          "Management system for catalog, stock, purchasing, sales and current accounts.",
        responsibility:
          "NestJS backend, multitenancy, inventory, migrations, OpenAPI and E2E.",
        limits:
          "Not presented as production SaaS and mockups are not used as evidence.",
      },
      {
        title: "CercaYA",
        status: "MVP in progress",
        summary:
          "Home-services marketplace with a public site, Expo apps and backend.",
        responsibility:
          "Product and engineering work across contracts, requester app and security boundaries.",
        limits:
          "The provider app remains a stub and production hardening is future work.",
      },
    ],
    capabilities: [
      {
        title: "Backend and data",
        description:
          "APIs, modules and models with explicit contracts, permissions and consistency.",
        evidence: "Node.js · NestJS · Go · PostgreSQL · Redis",
      },
      {
        title: "Full-stack interfaces",
        description:
          "Dashboards, portals and experiences connected to real system rules.",
        evidence: "TypeScript · React · Next.js · Astro · Expo",
      },
      {
        title: "Quality and operations",
        description:
          "Critical flows verified with executable evidence and clear operational limits.",
        evidence: "E2E · contracts · CI · observability · rollback",
      },
    ],
    engineeringSystems: {
      title: "MemoriesAI",
      summary:
        "Shared second brain for durable context retrieval without replacing code authority.",
      evidence: [
        "CLI and retrieval",
        "Lifecycle and receipts",
        "Guards and evidence runner",
        "Portable harness",
      ],
      limits: "Own project; no terminals, private memory or metrics are shown.",
    },
  },
};

export const caseSlugs = ["minecall", "el-editor", "chichitos"] as const;

export function getPortfolio(locale: Locale) {
  return portfolio[locale];
}

export function getCase(locale: Locale, slug: string) {
  return portfolio[locale].cases.find((item) => item.slug === slug);
}

export function casePath(locale: Locale, slug: string) {
  return locale === "es" ? `/proyectos/${slug}` : `/en/projects/${slug}`;
}

export function homePath(locale: Locale) {
  return locale === "es" ? "/" : "/en/";
}

export function cvPath(locale: Locale) {
  return locale === "es" ? "/cv/" : "/en/cv/";
}

export const socialLinks = {
  github: links.github,
  linkedin: links.linkedin,
};
