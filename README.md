# Portfolio — Rayane Hadjaz

Portfolio professionnel de développeur, en Single Page Application avec navigation par ancres : Hero, À propos, Compétences, Projets (grille filtrable) et Contact (formulaire fonctionnel).

## Stack technique

| Outil | Rôle |
|---|---|
| [Astro 5](https://astro.build) | Framework principal — rendu statique, quasi zéro JavaScript envoyé au client |
| [React 19](https://react.dev) | Îles interactives uniquement : filtre de projets et formulaire de contact |
| [Tailwind CSS 4](https://tailwindcss.com) | Styles, avec un design system défini en tokens (`src/styles/global.css`) |
| [Formspree](https://formspree.io) | Envoi des messages du formulaire de contact, sans backend |

L'architecture suit le modèle « îles » d'Astro : toute la page est du HTML statique, seuls `ProjectsGrid` et `ContactForm` sont hydratés (`client:visible`), ce qui garde d'excellents scores Lighthouse en performance, SEO et accessibilité.

## Lancer le projet

```bash
# Prérequis : Node.js 18.17+ (ou 20+)
npm install
npm run dev        # serveur de développement → http://localhost:4321
npm run build      # build de production dans dist/
npm run preview    # prévisualisation du build
```

## Structure

```
portfolio/
├── public/
│   ├── cv-rayane-hadjaz.pdf   # CV téléchargeable (voir « Personnalisation »)
│   └── favicon.svg
├── src/
│   ├── data/                  # Tout le contenu éditable (projets, compétences, identité)
│   │   ├── site.ts            # Nom, liens, email, ID Formspree, SEO
│   │   ├── projects.ts        # Projets de la grille + catégories du filtre
│   │   └── skills.ts          # Groupes de compétences
│   ├── components/
│   │   ├── react/             # Îles React (interactif)
│   │   │   ├── ProjectsGrid.tsx
│   │   │   └── ContactForm.tsx
│   │   └── *.astro            # Sections statiques (Header, Hero, About, …)
│   ├── layouts/Layout.astro   # <head> : SEO, Open Graph, JSON-LD
│   ├── pages/index.astro      # Page unique
│   └── styles/global.css      # Design tokens Tailwind v4 (@theme)
└── astro.config.mjs
```

## Personnalisation (à faire avant mise en ligne)

1. **CV** : remplacer `public/cv-rayane-hadjaz.pdf` (actuellement un placeholder) par le vrai CV.
2. **URL de production** : mettre à jour `site` dans `astro.config.mjs` après le déploiement (utilisée pour les balises canonique et Open Graph).

Tout le contenu (textes des projets, compétences, liens) se modifie dans `src/data/` sans toucher aux composants.

## Déploiement

Le site est 100 % statique (`npm run build` → `dist/`) : déployable tel quel sur GitHub Pages, Netlify, Vercel ou Cloudflare Pages.
