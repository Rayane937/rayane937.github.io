/**
 * Parcours de formation, affiché en frise chronologique dans la section Formation.
 * Du plus récent au plus ancien (ordre d'affichage de la timeline).
 */
export interface Diplome {
  /** Période affichée en tête (ex. "2021 – 2026") */
  period: string;
  /** Intitulé du diplôme / de l'étape */
  title: string;
  /** Établissement */
  school: string;
  /** Description courte du contenu */
  detail: string;
}

export const EDUCATION: Diplome[] = [
  {
    period: '2021 – 2026',
    title: 'Diplôme d’ingénieur — Informatique & Ingénierie Mathématique',
    school: 'Polytech Paris-Saclay',
    detail:
      'Algorithmique, développement logiciel, bases de données, réseaux avancés, calcul ' +
      'scientifique et mathématiques appliquées. Projets pluridisciplinaires menés en méthodes agiles.',
  },
  {
    period: 'Sept. 2025 – Janv. 2026',
    title: 'Mobilité Erasmus',
    school: 'Linköping University — Suède',
    detail:
      'Semestre intégral en anglais dans un environnement international : C++ avancé, ' +
      'programmation logique, systèmes temps réel et text mining.',
  },
  {
    period: '2021 – 2023',
    title: 'Cycle préparatoire intégré',
    school: 'Polytech Sorbonne — Sorbonne Université',
    detail:
      'Socle scientifique rigoureux. Physique : mécanique, thermodynamique, écoulement des ' +
      'fluides, résistance des matériaux, électromagnétisme et électricité. Mathématiques : ' +
      'séries, calcul matriciel, probabilités et analyse. Également chimie et informatique.',
  },
];
