/**
 * Données des projets affichés dans la section « Projets ».
 * Chaque entrée correspond à un projet réel du dossier PROJETINFO.
 */

/** Catégories utilisées par le filtre de la grille de projets */
export type ProjectCategory = 'web' | 'data' | 'desktop';

export interface Project {
  title: string;
  /** Sous-titre court affiché sous le titre */
  tagline: string;
  /** Description courte orientée « ce que le projet démontre » */
  description: string;
  /** Tags technologiques affichés sur la carte */
  tags: string[];
  category: ProjectCategory;
  /** Lien vers le dépôt (null si le dépôt n'est pas public) */
  github: string | null;
  /** Lien vers une démo en ligne, si disponible */
  demo: string | null;
  /** Projet mis en avant : carte élargie en tête de grille */
  featured?: boolean;
}

export const CATEGORIES: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'data', label: 'Data & ML' },
  { id: 'desktop', label: 'Desktop & Jeux' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Versus',
    tagline: 'Plateforme sociale d’événements sportifs',
    description:
      'Application web fullstack pour créer et rejoindre des événements sportifs : ' +
      'authentification JWT, recherche avec filtres, avis, commentaires et notifications. ' +
      'Frontend React, API REST Spring Boot sécurisée, base MySQL conteneurisée avec Docker.',
    tags: ['React', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'JWT'],
    category: 'web',
    github: 'https://github.com/Rayane937/ProjetSp-2',
    demo: null,
    featured: true,
  },
  {
    title: 'AeroTrainer',
    tagline: 'Plateforme d’apprentissage aéronautique',
    description:
      'Site éducatif pour préparer le BIA et les sélections Cadets Air France : ' +
      'moteur de quiz par catégories, simulations physiques interactives en Canvas/SVG ' +
      '(portance, vent traversier, altimètre) et progression sauvegardée en localStorage. ' +
      '100 % statique, sans framework ni dépendance.',
    tags: ['JavaScript', 'Canvas', 'SVG', 'HTML/CSS', 'localStorage'],
    category: 'web',
    github: null,
    demo: null,
  },
  {
    title: 'Prédiction de matchs par NLP',
    tagline: 'Text mining sur la Coupe du Monde 2022',
    description:
      'Étude de la valeur prédictive des articles de presse d’avant-match : extraction de texte ' +
      'par équipe, vectorisation TF-IDF, régression logistique multinomiale et validation croisée ' +
      'stratifiée, comparées à des baselines (aléatoire, classement FIFA).',
    tags: ['Python', 'scikit-learn', 'NLP', 'pandas', 'spaCy'],
    category: 'data',
    github: 'https://github.com/Rayane937/Projet_TextMining',
    demo: null,
  },
  {
    title: 'Gestion d’espaces verts',
    tagline: 'Application de gestion associative',
    description:
      'Application desktop JavaFX en architecture MVC pour une association de protection des arbres : ' +
      'trois espaces métier (association, membres, municipalité), votes et nominations, visites, ' +
      'notifications et import du jeu de données open data des arbres de Paris.',
    tags: ['Java 17', 'JavaFX', 'Maven', 'MVC', 'OpenCSV'],
    category: 'desktop',
    github: 'https://github.com/Nizar91300/Projet_Arbre',
    demo: null,
  },
  {
    title: 'Labyrinthe',
    tagline: 'Jeu 2D en Java',
    description:
      'Jeu de labyrinthe structuré en MVC strict : niveaux, ennemis, bonus, sauvegarde des parties ' +
      'et personnalisation du personnage. Réalisé en équipe dans le cadre du module ' +
      'Java graphique / IHM de l’Université Paris-Saclay.',
    tags: ['Java', 'MVC', 'IHM'],
    category: 'desktop',
    github: null,
    demo: null,
  },
  {
    title: 'Dominion',
    tagline: 'Jeu de cartes en C++',
    description:
      'Réimplémentation du jeu de deck-building Dominion en C++ orienté objet : hiérarchie de ' +
      'cartes polymorphe conçue en UML, boucle de jeu complète en console, musique via SDL2 ' +
      'et compilation Makefile.',
    tags: ['C++', 'POO', 'SDL2', 'Makefile', 'UML'],
    category: 'desktop',
    github: 'https://github.com/TeeShirtNoir/projet_cpp_et4',
    demo: null,
  },
];
