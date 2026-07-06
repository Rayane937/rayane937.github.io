/**
 * Île React : grille de projets avec filtre par catégorie.
 * Reçoit les données depuis Astro (rendu serveur) et n'hydrate que le filtrage.
 */
import { useState } from 'react';
import { CATEGORIES, type Project, type ProjectCategory } from '../../data/projects';

interface Props {
  projects: Project[];
}

/** Icône GitHub (inline pour éviter toute dépendance d'icônes) */
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/** Icône « lien externe » pour les démos */
function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

/** Carte individuelle de projet */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-lg border border-line bg-card p-6 transition-colors hover:border-brass/50 ${
        project.featured ? 'sm:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-fog">{project.title}</h3>
          <p className="mt-0.5 font-mono text-sm text-brass">{project.tagline}</p>
        </div>
        {/* Liens dépôt / démo, uniquement quand ils existent */}
        <div className="flex shrink-0 gap-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-mist transition-colors hover:bg-night hover:text-brass"
              aria-label={`Code source de ${project.title} sur GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-mist transition-colors hover:bg-night hover:text-brass"
              aria-label={`Démo en ligne de ${project.title}`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 grow leading-relaxed text-mist">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" role="list" aria-label="Technologies utilisées">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-line bg-night px-3 py-1 text-xs font-medium text-fog">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectsGrid({ projects }: Props) {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filtres par catégorie */}
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets par catégorie">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            aria-pressed={active === cat.id}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat.id
                ? 'border-brass bg-brass text-night'
                : 'border-line text-mist hover:border-brass/50 hover:text-fog'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* aria-live : annonce le changement de contenu aux lecteurs d'écran */}
      <div className="grid gap-5 sm:grid-cols-2" aria-live="polite">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
