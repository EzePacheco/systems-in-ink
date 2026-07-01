export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  display?: string;
  external?: boolean;
};

export type HeroAction = LinkItem & {
  variant?: "primary" | "secondary";
  download?: boolean;
};

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type Principle = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  filters: string[];
  decorativeGlyph: string;
  links: ProjectLink[];
};

export type ProcessStep = {
  index: string;
  glyph: string;
  title: string;
  description: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  date: string;
  company: string;
  role: string;
  description: string;
};

export const metadata = {
  title: "Ezequiel Pacheco | Full Stack Developer Backend-Oriented",
  description:
    "Portfolio editorial de Ezequiel Pacheco, Full Stack Developer backend-oriented en Buenos Aires, especializado en Node.js, APIs REST, PostgreSQL, CMS, SaaS e integraciones.",
  ogImage: "/black-paper-editorial-texture.png",
};

export const profile = {
  name: "Ezequiel Pacheco",
  role: "Full Stack Developer · Backend-Oriented",
  location: "Buenos Aires, Argentina",
  email: "ezequielpacheco.dev@gmail.com",
  cvPath: "/Ezequiel_Pacheco_CV_JUN_2026.pdf",
  edition: "Portfolio / Engineering / 2026",
  heroTitle: "Sistemas claros. Backend sólido.",
  heroDescription:
    "Diseño y construyo productos web de punta a punta: APIs, datos, autenticación, CMS, SaaS e integraciones preparadas para producción.",
  footerNote: "Backend-oriented Full Stack Developer",
};

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
    href: `mailto:${profile.email}`,
    display: profile.email,
    external: false,
  },
} satisfies Record<string, LinkItem>;

export const navItems: NavItem[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export const headerLinks: LinkItem[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  links.github,
  links.linkedin,
];

export const heroActions: HeroAction[] = [
  { label: "Ver proyectos", href: "#proyectos", variant: "primary" },
  {
    label: "Descargar CV",
    href: profile.cvPath,
    variant: "secondary",
    download: true,
  },
  { label: "Contactar", href: links.email.href, variant: "secondary" },
];

export const principles: Principle[] = [
  {
    eyebrow: "Principio 01",
    title: "Dominio",
    description:
      "Reglas de negocio, permisos, actores y flujos antes que framework.",
  },
  {
    eyebrow: "Principio 02",
    title: "Datos",
    description:
      "Modelado relacional, migraciones, ownership y consistencia operacional.",
  },
  {
    eyebrow: "Principio 03",
    title: "Producción",
    description:
      "Logs, health checks, seguridad, testing, performance y mantenimiento.",
  },
];

export const metrics: Metric[] = [
  {
    value: "~200K",
    label: "visitas mensuales",
    context: "CMS y portales públicos",
  },
  {
    value: "~70K",
    label: "usuarios únicos",
    context: "audiencia mensual",
  },
  {
    value: "+20K",
    label: "dispositivos testeados",
    context: "hardware/software QA",
  },
  {
    value: "+1.300",
    label: "tickets mensuales",
    context: "operación de negocio",
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "El Editor CMS",
    description:
      "CMS editorial multitenant en producción. Backend completo, APIs REST, modelos Sequelize, migraciones, media library, usuarios/RBAC, métricas, configuración del sitio, banners, RSS/WebSub y workflows editoriales.",
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "AWS S3",
      "WebSub/RSS",
    ],
    filters: ["Backend", "Editorial"],
    decorativeGlyph: "運用",
    links: [
      {
        label: "Pedir caso técnico",
        href: `mailto:${profile.email}?subject=Caso%20tecnico%20-%20El%20Editor%20CMS`,
      },
    ],
  },
  {
    index: "02",
    title: "DATAMARK",
    description:
      "MVP B2B SaaS para ventas, inventario, clientes y dashboards analíticos. Backend en capas con TypeScript, Express, PostgreSQL, Prisma y JWT/RBAC.",
    tags: ["TypeScript", "Express", "PostgreSQL", "Prisma", "React"],
    filters: ["Backend", "SaaS"],
    decorativeGlyph: "事業",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/EzePacheco/S02-26-Equipo-50-Data-Science",
        external: true,
      },
    ],
  },
  {
    index: "03",
    title: "Sistema de Gestión de Noticias",
    description:
      "Plataforma editorial open source con API REST modular, JWT, roles, testing, CI, publicación de noticias y frontend administrativo.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "GitHub Actions"],
    filters: ["Backend", "Editorial"],
    decorativeGlyph: "記事",
    links: [
      {
        label: "Backend",
        href: "https://github.com/Marco21c/backend-noticias",
        external: true,
      },
      {
        label: "Frontend",
        href: "https://github.com/Marco21c/front-noticias",
        external: true,
      },
    ],
  },
  {
    index: "04",
    title: "Nail Studio API",
    description:
      "API de turnos con disponibilidad en tiempo real, prevención de solapamientos, autenticación JWT, roles ADMIN/STAFF y carga de imágenes.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    filters: ["Backend", "API"],
    decorativeGlyph: "予約",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/EzePacheco/nail-studio-api",
        external: true,
      },
    ],
  },
  {
    index: "05",
    title: "Chichitos Ecommerce",
    description:
      "Ecommerce full-stack para marca de indumentaria infantil. Next.js App Router, TypeScript, Supabase, Mercado Pago, Vercel y documentación arquitectónica.",
    tags: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "Vercel"],
    filters: ["Frontend", "Ecommerce"],
    decorativeGlyph: "商い",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/EzePacheco/chichitos-ecommerce",
        external: true,
      },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    glyph: "一",
    title: "Entiendo el dominio",
    description:
      "Actores, permisos, reglas de negocio y criterios de aceptación.",
  },
  {
    index: "02",
    glyph: "二",
    title: "Modelo los datos",
    description: "Tablas, relaciones, migraciones, estados y ownership.",
  },
  {
    index: "03",
    glyph: "三",
    title: "Diseño contratos",
    description:
      "APIs claras, validaciones, errores consistentes y respuestas estables.",
  },
  {
    index: "04",
    glyph: "四",
    title: "Protejo el sistema",
    description:
      "JWT, RBAC, tenants, sanitización, HMAC y operaciones sensibles.",
  },
  {
    index: "05",
    glyph: "五",
    title: "Pienso en producción",
    description:
      "Logs, health checks, retries, testing, deploy y mantenimiento.",
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT/RBAC", "HMAC"],
  },
  {
    title: "Datos",
    items: ["PostgreSQL", "Sequelize", "Prisma", "SQL", "Umzug"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Sass", "Tailwind CSS"],
  },
  {
    title: "Calidad",
    items: [
      "Vitest",
      "Supertest",
      "node:test",
      "API testing",
      "Documentación técnica",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "GitHub Actions",
      "AWS S3",
      "Postman",
      "Health/Readiness checks",
    ],
  },
  {
    title: "Dominios",
    items: [
      "CMS editorial",
      "SaaS B2B",
      "Ecommerce",
      "Analytics",
      "WebSub/RSS",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "Marzo 2026 — Actualidad",
    company: "DELSUD",
    role: "Full Stack Developer · Backend-Oriented",
    description:
      "CMS y portales públicos multitenant para medios digitales. Backend, APIs, datos, auth, integraciones y CMS Panel.",
  },
  {
    date: "Febrero 2026 — Marzo 2026",
    company: "DATAMARK",
    role: "Fullstack Lead & Full Stack Developer",
    description:
      "MVP B2B SaaS con backend en capas, JWT/RBAC, PostgreSQL, Prisma y dashboards analíticos.",
  },
  {
    date: "Septiembre 2023 — Abril 2026",
    company: "Burgers Thrones",
    role: "Fundador & Responsable de Operaciones",
    description:
      "Operación, stock, métricas, atención al cliente y toma de decisiones basada en datos.",
  },
  {
    date: "2019 — 2023",
    company: "Grupo MSA",
    role: "Técnico de Producción & QA",
    description:
      "Testing funcional de hardware/software, reportes de incidencias y detección de defectos críticos.",
  },
];

export const contact = {
  eyebrow: "Contacto / 連絡",
  title: "Construyamos algo claro, sólido y mantenible.",
  description:
    "Puedo ayudar en backend Node.js, APIs REST, PostgreSQL, CMS, SaaS, dashboards, autenticación, permisos, integraciones y mantenimiento de productos en producción.",
  links: [links.email, links.linkedin, links.github],
  copyButton: {
    label: "Copiar email",
    successLabel: "Email copiado",
    failureLabel: "No se pudo copiar",
  },
};
