import { useState } from "react";
import type { Project } from "../../data/portfolio.data";

type ProjectFilterProps = {
  projects: Project[];
};

const allLabel = "Todos";

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const categories = [allLabel, ...Array.from(new Set(projects.flatMap((project) => project.filters)))];
  const [activeCategory, setActiveCategory] = useState(allLabel);
  const visibleProjects =
    activeCategory === allLabel
      ? projects
      : projects.filter((project) => project.filters.includes(activeCategory));

  return (
    <div className="project-module">
      <div className="project-filter" aria-label="Filtrar proyectos por tipo">
        {categories.map((category) => (
          <button
            className="filter-button"
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {visibleProjects.map((project) => (
          <article className="project" data-kanji={project.decorativeGlyph} key={project.title}>
            <span className="project-index">{project.index}</span>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags" aria-label={`Tecnologías de ${project.title}`}>
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  className="project-link"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  key={`${project.title}-${link.label}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
