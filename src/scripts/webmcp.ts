type PublicProject = {
  id: string;
  title: string;
  summary: string;
  contribution?: string;
  decisions: string[];
  technologies: string[];
  evidence: { label: string; description: string }[];
  links: { label: string; url: string }[];
};

type PublicPortfolioContext = {
  profile: {
    name: string;
    role: string;
    summary: string;
    location: string;
    contact: { label: string; url: string }[];
  };
  capabilities: {
    focus: string;
    scope: string;
    coreBackend: { technology: string; evidence: string; href: string; project: string }[];
    groups: { label: string; technologies: string[] }[];
    support: string;
  };
  projects: PublicProject[];
  experience: {
    date: string;
    company: string;
    role: string;
    description: string;
  }[];
};

type WebMcpTool = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: true; untrustedContentHint: false };
  execute(input: unknown): unknown | Promise<unknown>;
};

type WebMcpContext = {
  registerTool(tool: WebMcpTool, options?: { signal?: AbortSignal }): void | Promise<void>;
};

type WebMcpDocument = Document & { modelContext?: WebMcpContext };

const contextElement = document.getElementById("portfolio-agent-context");
if (contextElement?.textContent) {
  try {
    const portfolio = JSON.parse(contextElement.textContent) as PublicPortfolioContext;
    const projectIds = portfolio.projects.map(({ id }) => id);
    const tools: WebMcpTool[] = [
      {
        name: "get_professional_profile",
        title: "Consultar perfil profesional",
        description:
          "Devuelve el perfil, foco técnico, alcance frontend y enlaces públicos de Ezequiel Pacheco. Úsala para responder preguntas de recruiters sobre posicionamiento, tecnologías o contacto. No inicia contacto ni modifica datos.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: () => ({ profile: portfolio.profile, capabilities: portfolio.capabilities }),
      },
      {
        name: "list_selected_projects",
        title: "Listar proyectos seleccionados",
        description:
          "Devuelve los proyectos publicados con su resumen, contribución documentada, tecnologías y enlaces. Usa esta herramienta para encontrar casos relevantes antes de pedir el detalle de uno.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: () => ({
          projects: portfolio.projects.map(({ id, title, summary, contribution, technologies, links }) => ({
            id,
            title,
            summary,
            ...(contribution ? { contribution } : {}),
            technologies,
            links,
          })),
        }),
      },
      {
        name: "get_selected_project_details",
        title: "Consultar detalle de proyecto",
        description:
          "Devuelve el aporte, decisiones técnicas, tecnologías, evidencia visual descrita y enlaces publicados de un proyecto. Limítate a la contribución documentada; no infieras ownership, resultados ni estado fuera del contenido provisto.",
        inputSchema: {
          type: "object",
          properties: { projectId: { type: "string", enum: projectIds } },
          required: ["projectId"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: (input) => {
          const projectId =
            input && typeof input === "object" && "projectId" in input
              ? (input as { projectId?: unknown }).projectId
              : undefined;
          const project = portfolio.projects.find(({ id }) => id === projectId);
          return project
            ? { project }
            : { error: "Proyecto no encontrado", availableProjectIds: projectIds };
        },
      },
      {
        name: "get_professional_experience",
        title: "Consultar experiencia profesional",
        description:
          "Devuelve los períodos, roles, organizaciones y descripciones de experiencia tal como aparecen en el portfolio. No infiere relaciones entre períodos superpuestos.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: () => ({ experience: portfolio.experience }),
      },
    ];

    let lifecycle: AbortController | undefined;
    const stop = () => {
      lifecycle?.abort();
      lifecycle = undefined;
    };
    const registerTools = async () => {
      const modelContext = (document as WebMcpDocument).modelContext;
      if (!modelContext?.registerTool || (lifecycle && !lifecycle.signal.aborted)) return;

      lifecycle = new AbortController();
      for (const tool of tools) {
        try {
          await modelContext.registerTool(tool, { signal: lifecycle.signal });
        } catch (error) {
          if (!lifecycle.signal.aborted) {
            console.warn(`No se pudo registrar la herramienta WebMCP "${tool.name}".`, error);
          }
        }
      }
    };

    window.addEventListener("pagehide", stop);
    window.addEventListener("pageshow", () => void registerTools());
    window.addEventListener("astro:before-swap", stop);
    window.addEventListener("astro:page-load", () => void registerTools());
    void registerTools();
  } catch (error) {
    console.warn("No se pudo leer el contexto público para herramientas WebMCP.", error);
  }
}
