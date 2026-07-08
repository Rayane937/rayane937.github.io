/**
 * Informations globales du site : identité, liens sociaux, SEO.
 * Tout le contenu "personnel" est centralisé ici pour être modifiable en un seul endroit.
 */
export const SITE = {
  name: 'Rayane Hadjaz',
  role: 'Ingénieur Polytech Paris-Saclay',
  /** Secteurs visés, affichés dans la section À propos */
  focus: 'Finance · Génie civil · Aéronautique',
  email: 'hadjazrayane@gmail.com',
  github: 'https://github.com/Rayane937',
  linkedin: 'https://www.linkedin.com/in/rayane-hadjaz-3684a71b1/',
  /** Chemin du CV dans /public */
  cvPath: '/CV_Rayane_HADJAZ_Informatique.pdf',
  /** Identifiant du formulaire Formspree (https://formspree.io) */
  formspreeId: 'xpqgnzez',
  /** URL canonique de production — à ajuster après déploiement */
  url: 'https://rayane937.github.io',
  description:
    'Portfolio de Rayane Hadjaz, ingénieur Polytech Paris-Saclay diplômé en septembre 2026. ' +
    'À la recherche d’un premier poste dans la finance, le génie civil ou l’aéronautique, ' +
    'avec de solides compétences informatiques comme atout différenciant.',
} as const;
