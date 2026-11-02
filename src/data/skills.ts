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
    skills: ['C#', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Qualité, tests & validation',
    blurb: 'Vérification, validation et tests pour un logiciel fiable.',
    skills: [
      'Vérification & validation (V&V)',
      'Robot Framework',
      'TestStand',
      'Tests automatisés',
      'Tests unitaires & d’intégration',
      'Diagnostic & résolution d’anomalies',
    ],
  },
  {
    title: 'Environnement industriel',
    blurb: 'Outils et pratiques maîtrisés en stage chez Thales et HGH Infrared Systems.',
    skills: [
      'C# / .NET',
      'LabVIEW',
      'Visual Studio',
      'Migration .NET Framework → .NET 8',
      'Migration C++ → C#',
      'NuGet',
      'Artifactory',
      'Bitbucket',
      'Git Flow',
    ],
  },
  {
    title: 'Protocoles de communication',
    blurb: 'Communication réseau et équipements, du transport à la supervision.',
    skills: ['TCP/IP', 'UDP', 'SSH', 'SFTP', 'SNMP'],
  },
  {
    title: 'Backend & bases de données',
    blurb: 'API REST sécurisées et persistance des données.',
    skills: ['Spring Boot', 'Spring Security (JWT)', 'JPA / Hibernate', 'MySQL', 'API REST'],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces réactives, accessibles et performantes.',
    skills: ['React', 'Angular', 'Vue.js', 'Vite', 'Astro', 'Material UI'],
  },
  {
    title: 'Outils & méthodes',
    blurb: 'Un workflow propre, du commit au déploiement.',
    skills: ['Git / GitHub / GitLab', 'Docker', 'Jenkins', 'Maven', 'Jira', 'Agile / Scrum', 'Architecture MVC'],
  },
  {
    title: 'Data & analyse',
    blurb: 'Analyse de données et traitement, en complément.',
    skills: ['Python', 'pandas', 'scikit-learn', 'OpenCV', 'NLP'],
  },
];
