# Easy-SIL

**Backoffice moderne pour laboratoires de biologie médicale**

Easy-SIL est une application web de gestion pour laboratoires médicaux, offrant une interface intuitive pour gérer les patients, les rendez-vous, les résultats d'analyses, les automates, le personnel et la validation biologique.

## 🚀 Fonctionnalités

- **Patients** : Gestion complète des dossiers patients avec recherche avancée
- **Rendez-vous** : Planning et suivi des rendez-vous avec statuts en temps réel
- **Résultats** : Consultation et téléchargement des résultats d'analyses
- **Automates** : Monitoring des équipements de laboratoire et maintenance
- **Personnel** : Gestion de l'équipe du laboratoire
- **Validation** : Interface de validation biologique avec alertes automatiques

## 🛠️ Technologies

- **React 18** avec TypeScript
- **Vite** pour un développement ultra-rapide
- **React Router** pour la navigation
- **Lucide React** pour les icônes modernes
- **CSS moderne** avec variables CSS et animations

## 📦 Installation

### Prérequis

- Node.js 18+ et npm

### Installation des dépendances

```bash
cd /Users/romh/Sites/easy-sil
npm install
```

## 🚀 Démarrage

### Mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

### Prévisualisation de la production

```bash
npm run preview
```

## 📁 Structure du projet

```
easy-sil/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Layout.tsx       # Layout principal avec sidebar
│   │   ├── Card.tsx         # Composant carte
│   │   └── Button.tsx       # Composant bouton
│   ├── pages/               # Pages de l'application
│   │   ├── Patients.tsx     # Gestion des patients
│   │   ├── Appointments.tsx # Gestion des rendez-vous
│   │   ├── Results.tsx      # Résultats d'analyses
│   │   ├── Machines.tsx     # Gestion des automates
│   │   ├── Staff.tsx        # Gestion du personnel
│   │   └── Validation.tsx   # Validation biologique
│   ├── App.tsx              # Composant racine avec routing
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── public/                  # Assets statiques
├── index.html               # Template HTML
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design

L'interface est conçue avec une approche moderne et professionnelle :

- Palette de couleurs médicale (bleus et verts)
- Design responsive pour tous les écrans
- Animations fluides et transitions élégantes
- Sidebar de navigation fixe
- Cartes et tableaux stylisés
- Badges de statut colorés
- Icônes Lucide pour une meilleure UX

## 🔧 Configuration

### Variables CSS

Les couleurs principales peuvent être modifiées dans `src/index.css` :

```css
:root {
  --primary: #2563eb;
  --success: #10b981;
  --danger: #ef4444;
  --warning: #f59e0b;
  /* ... */
}
```

## 📝 Développement

### Linting

```bash
npm run lint
```

### TypeScript

Le projet utilise TypeScript en mode strict pour une meilleure qualité de code.

## 🚀 Déploiement

L'application peut être déployée sur n'importe quelle plateforme supportant les sites statiques :

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 Licence

Projet privé - Tous droits réservés

## 👨‍💻 Auteur

Développé pour les laboratoires de biologie médicale

---

**Note** : Cette application contient des données de démonstration. Pour une utilisation en production, connectez-la à une API backend réelle et implémentez l'authentification appropriée.

