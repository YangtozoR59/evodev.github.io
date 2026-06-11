const translations = {
  en: {
    lang_label: "FR",
    nav_cta: "Start a project →",
    hero_eyebrow: "Digital Evolution Collective",
    hero_title: "Building<br /><em>tomorrow's</em> web<br />today.",
    hero_sub: "Evodevs Team is a decentralized collective of developers and designers specializing in Telegram Mini Apps, modern interfaces, and digital branding.",
    btn_primary: "Our services ↓",
    btn_secondary: "Let's discuss your project",
    stat_time: "48h",
    stat_time_label: "Average delivery time",
    stat_remote: "100%",
    stat_remote_label: "Remote & decentralized",
    stat_web3: "Web3",
    stat_web3_label: "& Telegram ready",
    services_label: "What we do",
    services_title: "Services & pricing",
    services_sub: "Concrete deliverables, short deadlines, transparent pricing.",
    srv1_title: "Telegram Mini App",
    srv1_desc: "Full interface integrated into Telegram — catalog, orders, payments. Polished Glassmorphism UI.",
    srv1_price: "$800 – $1,500 <span>/ project</span>",
    srv2_title: "Landing Page / Showcase Site",
    srv2_desc: "Fast, modern, and optimized website. Ideal for immediate professional presence or a campaign.",
    srv2_price: "$300 – $600 <span>/ project</span>",
    srv3_title: "Full Branding",
    srv3_desc: "Logo, palette, brand guidelines, assets delivered in SVG & PNG. Light & dark versions included.",
    srv3_price: "$400 – $800 <span>/ project</span>",
    srv4_title: "Telegram Bot",
    srv4_desc: "Automation, notifications, API integration. Custom bots for your workflow.",
    srv4_price: "$300 – $500 <span>/ project</span>",
    srv5_title: "Full Pack",
    srv5_desc: "Mini App + Branding + Telegram Bot. All-in-one solution to launch your digital product.",
    srv5_price: "$1,500 – $2,500 <span>/ project</span>",
    srv6_title: "Maintenance & Updates",
    srv6_desc: "Continuous support, new features, bug fixes. Available for existing projects.",
    srv6_price: "$150 – $400 <span>/ month</span>",
    process_label: "How it works",
    process_title: "Simple & fast",
    step1_title: "Brief",
    step1_desc: "We discuss your project for 30 min. Goals, deadlines, budget.",
    step2_title: "Quote",
    step2_desc: "Detailed proposal within 24h. No surprises.",
    step3_title: "Production",
    step3_desc: "We deliver quickly, with regular updates.",
    step4_title: "Delivery",
    step4_desc: "Source code, assets, documentation. You have 100% ownership.",
    contact_title: "Ready to build something?",
    contact_desc: "Describe your project — we'll get back to you within 24h with a concrete proposal.",
    footer_text: "© 2025 <strong>Evodevs Team</strong> — Digital Evolution Collective"
  },
  fr: {
    lang_label: "EN",
    nav_cta: "Démarrer un projet →",
    hero_eyebrow: "Digital Evolution Collective",
    hero_title: "On construit<br />le web de <em>demain</em><br />aujourd'hui.",
    hero_sub: "Evodevs Team est un collectif décentralisé de développeurs et designers spécialisés en Telegram Mini Apps, interfaces modernes et branding digital.",
    btn_primary: "Nos services ↓",
    btn_secondary: "Discutons de votre projet",
    stat_time: "48h",
    stat_time_label: "Délai moyen de livraison",
    stat_remote: "100%",
    stat_remote_label: "Remote & décentralisé",
    stat_web3: "Web3",
    stat_web3_label: "& Telegram ready",
    services_label: "Ce qu'on fait",
    services_title: "Services & tarifs",
    services_sub: "Des livrables concrets, des délais courts, des prix transparents.",
    srv1_title: "Telegram Mini App",
    srv1_desc: "Interface complète intégrée à Telegram — catalogue, commandes, paiements. Glassmorphism UI soigné.",
    srv1_price: "$800 – $1 500 <span>/ projet</span>",
    srv2_title: "Landing Page / Site vitrine",
    srv2_desc: "Site rapide, moderne et optimisé. Idéal pour une présence pro immédiate ou une campagne.",
    srv2_price: "$300 – $600 <span>/ projet</span>",
    srv3_title: "Branding complet",
    srv3_desc: "Logo, palette, charte graphique, assets livrés en SVG & PNG. Light & dark versions incluses.",
    srv3_price: "$400 – $800 <span>/ projet</span>",
    srv4_title: "Bot Telegram",
    srv4_desc: "Automatisation, notifications, intégration API. Bots sur mesure pour votre flux de travail.",
    srv4_price: "$300 – $500 <span>/ projet</span>",
    srv5_title: "Pack complet",
    srv5_desc: "Mini App + Branding + Bot Telegram. Solution all-in-one pour lancer votre produit digital.",
    srv5_price: "$1 500 – $2 500 <span>/ projet</span>",
    srv6_title: "Maintenance & évolutions",
    srv6_desc: "Support continu, nouvelles fonctionnalités, corrections. Disponible pour les projets existants.",
    srv6_price: "$150 – $400 <span>/ mois</span>",
    process_label: "Comment ça marche",
    process_title: "Simple & rapide",
    step1_title: "Brief",
    step1_desc: "On discute de votre projet en 30 min. Objectifs, délais, budget.",
    step2_title: "Devis",
    step2_desc: "Proposition détaillée sous 24h. Pas de surprises.",
    step3_title: "Production",
    step3_desc: "On livre vite, avec des points d'étape réguliers.",
    step4_title: "Livraison",
    step4_desc: "Code source, assets, documentation. Vous êtes propriétaire à 100%.",
    contact_title: "Prêt à construire quelque chose ?",
    contact_desc: "Décrivez votre projet — on vous répond sous 24h avec une proposition concrète.",
    footer_text: "© 2025 <strong>Evodevs Team</strong> — Digital Evolution Collective"
  }
};

let currentLang = localStorage.getItem('evodevsLang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('evodevsLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = translations[lang]['lang_label'];
  }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'fr' : 'en';
  setLanguage(newLang);
});

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
