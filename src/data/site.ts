/**
 * Informations globales du site : identité, liens sociaux, SEO.
 * Tout le contenu "personnel" est centralisé ici pour être modifiable en un seul endroit.
 */
export const SITE = {
  name: 'Rayane Hadjaz',
  role: 'Ingénieur logiciel',
  /** Domaines de prédilection, affichés dans la section À propos */
  focus: 'Développement logiciel · Informatique industrielle · Vérification & validation',
  email: 'hadjazrayane@gmail.com',
  github: 'https://github.com/Rayane937',
  linkedin: 'https://www.linkedin.com/in/rayane-hadjaz-3684a71b1/',
  /** Chemin du CV dans /public */
  cvPath: '/CV_Rayane_Hadjaz_General.pdf',
  /** Portrait affiché dans la section d'accueil (dans /public) */
  photo: '/rayane-hadjaz.png',
  /** Identifiant du formulaire Formspree (https://formspree.io) */
  formspreeId: 'xpqgnzez',
  /** URL canonique de production — à ajuster après déploiement */
  url: 'https://rayane937.github.io',
  description:
    'Portfolio de Rayane Hadjaz, ingénieur logiciel diplômé de Polytech Paris-Saclay ' +
    '(informatique & ingénierie mathématique). Développement logiciel en environnement ' +
    'industriel, vérification, validation et tests, forgés par deux expériences en entreprise ' +
    '(Thales, HGH Infrared Systems) et un semestre Erasmus en Suède.',
} as const;
