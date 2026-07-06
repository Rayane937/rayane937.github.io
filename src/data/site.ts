/**
 * Informations globales du site : identité, liens sociaux, SEO.
 * Tout le contenu "personnel" est centralisé ici pour être modifiable en un seul endroit.
 */
export const SITE = {
  name: 'Rayane Hadjaz',
  role: 'Développeur Logiciel',
  /** Secteurs visés, affichés dans le hero et la section À propos */
  focus: 'Finance · Génie civil',
  email: 'hadjazrayane@gmail.com',
  github: 'https://github.com/Rayane937',
  linkedin: 'https://www.linkedin.com/in/rayane-hadjaz-3684a71b1/',
  /** Chemin du CV dans /public — remplacer le PDF placeholder par le vrai CV */
  cvPath: '/cv-rayane-hadjaz.pdf',
  /** Identifiant du formulaire Formspree (https://formspree.io) */
  formspreeId: 'xpqgnzez',
  /** URL canonique de production — à ajuster après déploiement */
  url: 'https://rayane937.github.io',
  description:
    'Portfolio de Rayane Hadjaz, développeur logiciel junior polyvalent (Java/Spring Boot, React, Python). ' +
    'Diplômé en septembre 2026, à la recherche d’un premier poste de développeur, ' +
    'de préférence dans les secteurs de la finance ou du génie civil.',
} as const;
