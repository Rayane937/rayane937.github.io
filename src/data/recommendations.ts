/**
 * Lettres de recommandation, affichées en cartes dans la section Recommandations.
 * Les PDF sont servis depuis /public.
 */
export interface Recommandation {
  /** Entreprise / auteur de la lettre */
  company: string;
  /** Contexte (poste, mission) */
  role: string;
  /** Résumé court de la mission */
  blurb: string;
  /** Chemin du PDF dans /public */
  file: string;
}

export const RECOMMANDATIONS: Recommandation[] = [
  {
    company: 'Thales SIX GTS',
    role: 'Stage ingénieur développement logiciel — Affaire Rafale',
    blurb:
      'Migration d’une plateforme logicielle servant de socle à des projets aéronautiques ' +
      'et de défense ; diagnostic et résolution d’anomalies en environnement industriel exigeant.',
    file: '/lettre-recommandation-thales.pdf',
  },
  {
    company: 'HGH Infrared Systems',
    role: 'Stage développement logiciel',
    blurb:
      'Logiciel de calibration pour la thermographie industrielle : migration C++ → C# ' +
      'et conduite des phases de test en autonomie.',
    file: '/lettre-recommandation-hgh.pdf',
  },
];
