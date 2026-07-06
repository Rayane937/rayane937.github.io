/**
 * Compétences affichées dans la section « Compétences »,
 * regroupées par domaine. Déduites des projets du portfolio.
 */
export interface SkillGroup {
  title: string;
  /** Petit descriptif du domaine, affiché sous le titre du groupe */
  blurb: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Langages',
    blurb: 'Un socle polyvalent, du bas niveau au web.',
    skills: ['Java', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML & CSS'],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces réactives, accessibles et performantes.',
    skills: ['React', 'Vite', 'Astro', 'Tailwind CSS', 'Material UI', 'Canvas / SVG'],
  },
  {
    title: 'Backend & bases de données',
    blurb: 'API REST sécurisées et persistance des données.',
    skills: ['Spring Boot', 'Spring Security (JWT)', 'JPA / Hibernate', 'MySQL', 'API REST'],
  },
  {
    title: 'Data & Machine Learning',
    blurb: 'Analyse de données et NLP appliqué.',
    skills: ['scikit-learn', 'pandas', 'spaCy', 'NLP', 'Jupyter'],
  },
  {
    title: 'Outils & méthodes',
    blurb: 'Un workflow propre, du commit au déploiement.',
    skills: ['Git / GitHub / GitLab', 'Docker', 'Maven', 'Makefile', 'Postman', 'Architecture MVC'],
  },
];
