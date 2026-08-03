<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=github&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/github/license/YangtozoR59/evodev.github.io" alt="License">
</p>

<h1 align="center">Evodevs Team — Site vitrine</h1>

<p align="center">
  Site vitrine officiel du collectif de développeurs <strong>Evodevs Team</strong>, basé à Ngaoundéré, Cameroun.
</p>

---

## À propos

Ce dépôt contient le code source du site vitrine d'**Evodevs Team**, un collectif de développeurs proposant des sites web, des Mini Apps Telegram et des services de branding pour les PME et particuliers en Afrique. Le site présente l'offre de services, les tarifs, le portfolio et les moyens de contact du collectif.

Le site est bilingue (français / anglais) et pensé pour le contexte local : optimisé pour les connexions lentes, avec des points de contact adaptés (WhatsApp, Mobile Money).

## Fonctionnalités

- Présentation des services et de la grille tarifaire (FCFA / USD)
- Section portfolio des réalisations
- Présentation du processus de collaboration
- FAQ
- Bascule de langue français / anglais (`data-i18n`)
- Contact direct via WhatsApp et e-mail
- Site 100 % statique, léger et rapide à charger

## Stack technique

| Domaine | Technologies |
|---|---|
| Structure | HTML5 |
| Style | CSS3 |
| Interactivité | JavaScript (vanilla, sans framework) |
| Hébergement | GitHub Pages |

## Structure du projet

```
evodev.github.io/
├── index.html      # Page unique du site (sections : hero, Afrique, services, portfolio, process, FAQ, contact)
├── css/
│   └── style.css   # Styles du site
├── js/
│   └── main.js     # Logique d'interaction et traductions (fr/en)
└── logo.jpg        # Logo Evodevs Team
```

## Installation et développement local

Le site est entièrement statique, aucune dépendance ni build n'est nécessaire.

```bash
git clone https://github.com/YangtozoR59/evodev.github.io.git
cd evodev.github.io
```

Ouvrir simplement `index.html` dans un navigateur, ou servir le dossier avec un serveur local :

```bash
python3 -m http.server 8000
```

Le site est alors disponible sur `http://localhost:8000`.

## Déploiement

Le site est déployé automatiquement via **GitHub Pages** depuis la branche `main`, à l'adresse :
`https://yangtozor59.github.io/evodev.github.io/`

## Roadmap

- [ ] Nom de domaine personnalisé (CNAME)
- [ ] Formulaire de contact fonctionnel (au-delà du lien WhatsApp/e-mail)
- [ ] Section témoignages clients
- [ ] Optimisation SEO et intégration d'analytics

## Contribuer

Les contributions sont les bienvenues. Pour proposer une amélioration :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

## Licence

Ce projet est distribué sous licence [MIT](LICENSE).

## Auteur

Développé par **Caleb Yang** ([@YangtozoR59](https://github.com/YangtozoR59)) — Evodevs Team
