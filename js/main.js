/**
 * Evodevs Team — JavaScript Interactif & Bilingue
 * Simulateur de Devis, Animations & Intégration WhatsApp
 */

const translations = {
  fr: {
    lang_flag: "🇬🇧",
    lang_label: "EN",
    nav_services: "Services",
    nav_simulator: "Simulateur",
    nav_portfolio: "Réalisations",
    nav_process: "Méthode",
    nav_faq: "FAQ",
    nav_cta: "Devis Gratuit →",

    // Hero
    hero_eyebrow: "🚀 Offre Exceptionnelle : -50% sur tous nos services web",
    hero_title: "Propulsez votre marque avec des <span class='gradient-text'>solutions digitales</span> qui convertissent.",
    hero_sub: "Sites vitrines ultra-rapides, boutiques Telegram Mini Apps et branding d'élite pour commerçants, PME et créateurs ambitieux. Livrés en un temps record.",
    btn_calc: "Simuler mon tarif en 1 clic",
    btn_wa_chat: "Discuter sur WhatsApp",
    stat_delivery: "Délai moyen garanti",
    stat_speed: "Vitesse de chargement 3G",
    stat_discount: "Tarifs divisés par deux",
    stat_momo: "Paiement Mobile Money",

    // Services
    srv_badge: "🔥 Tarifs Spéciaux -50%",
    srv_title: "Des offres claires, sur-mesure & imbattables",
    srv_sub: "Choisissez votre pack ou personnalisez votre demande. Tous nos forfaits incluent hébergement, révisions et formation.",
    ribbon_top: "⭐ LE PLUS DEMANDÉ",
    btn_order: "Commander ce pack →",

    s1_name: "Site Vitrine Essentiel",
    s1_desc: "Une présence web moderne pour présenter votre entreprise, vos services et générer des appels / messages WhatsApp directs.",
    s1_price: "60 000 FCFA <span>(≈ $100)</span>",
    s1_f1: "✓ 1 à 3 pages ultra-rapides & responsives",
    s1_f2: "✓ Bouton de contact WhatsApp direct",
    s1_f3: "✓ Nom de domaine & hébergement 1 an offert",
    s1_f4: "✓ Référencement Google de base (SEO)",
    s1_f5: "✓ Garantie 14 jours incluse",

    s2_name: "Site Web Pro & Catalogue",
    s2_desc: "Plateforme multi-pages sur-mesure avec catalogue dynamique de produits/services, formulaires et optimisation SEO avancée.",
    s2_price: "125k – 200k FCFA <span>(≈ $200 – $330)</span>",
    s2_f1: "✓ Jusqu'à 6 pages personnalisées",
    s2_f2: "✓ Catalogue interactif & filtres",
    s2_f3: "✓ SEO local & Google My Business",
    s2_f4: "✓ Formulaires de réservation / devis",
    s2_f5: "✓ Formation vidéo pour gérer vos textes",

    s3_name: "Telegram Mini App E-Commerce",
    s3_desc: "Votre boutique complète intégrée dans Telegram : panier, catalogue interactif et réception instantanée des commandes.",
    s3_price: "175k – 325k FCFA <span>(≈ $285 – $530)</span>",
    s3_f1: "✓ Boutique native Telegram WebApp",
    s3_f2: "✓ Panier & calcul instantané",
    s3_f3: "✓ Notifications de commandes en direct",
    s3_f4: "✓ Interface rapide sans quitter Telegram",
    s3_f5: "✓ Déploiement Cloud inclus",

    s4_name: "Identité Visuelle & Logo",
    s4_desc: "Création de votre univers de marque : logo vectoriel haute définition, charte graphique et formats pour réseaux sociaux.",
    s4_price: "30k – 60k FCFA <span>(≈ $50 – $100)</span>",
    s4_f1: "✓ 3 propositions uniques de logos",
    s4_f2: "✓ Fichiers vectoriels HD (SVG, PNG, PDF)",
    s4_f3: "✓ Palette de couleurs & typographies",
    s4_f4: "✓ Bannières réseaux sociaux adaptées",
    s4_f5: "✓ Révisions illimitées jusqu'à validation",

    s5_name: "Bot Telegram & Automatisation",
    s5_desc: "Automatisez vos réponses clients, la prise de commandes et la diffusion de messages 24h/24 sans effort.",
    s5_price: "50k – 110k FCFA <span>(≈ $80 – $180)</span>",
    s5_f1: "✓ Menu interactif & boutons personnalisés",
    s5_f2: "✓ Alertes instantanées administrateur",
    s5_f3: "✓ Gestion des réponses automatiques FAQ",
    s5_f4: "✓ Hébergement Cloud sécurisé",
    s5_f5: "✓ Prise en main simple & rapide",

    s6_name: "Maintenance & Sérénité",
    s6_desc: "Gardez votre site rapide, sécurisé et à jour sans vous soucier de la technique. Sauvegardes et assistance prioritaires.",
    s6_price: "7 500 FCFA <span>/ mois</span> <small>(ou 60 000 FCFA / an)</small>",
    s6_f1: "✓ Hébergement Cloud haute performance",
    s6_f2: "✓ Sauvegardes régulières de vos données",
    s6_f3: "✓ Mises à jour de sécurité continues",
    s6_f4: "✓ Support technique WhatsApp dédié",
    s6_f5: "✓ Modifications mineures mensuelles",

    // Simulateur
    sim_badge: "⚡ Outil Interactif",
    sim_title: "Calculez le tarif exact de votre projet",
    sim_sub: "Cochez vos options et découvrez instantanément votre devis personnalisé avec la remise -50% appliquée.",
    sim_step1: "1. Choisissez le type de solution :",
    sim_step2: "2. Ajoutez des options sur-mesure (optionnel) :",
    sim_est_total: "Estimation Totale :",
    sim_est_delay: "Délai estimé :",
    sim_btn_order: "Valider cette configuration sur WhatsApp →",

    // Portfolio
    port_badge: "🏆 Réalisations & Démonstrations",
    port_title: "Ce que nous créons pour nos partenaires",
    port_sub: "Explorez nos architectures interactives : rapides, légères et orientées conversion.",
    p1_title: "Boutique de Mode — Telegram Mini App",
    p1_desc: "Catalogue complet interactif accessible directement dans Telegram, avec gestion du panier et alertes instantanées de commandes.",
    p2_title: "Restaurant & Fast-Food — Menu Digital",
    p2_desc: "Site vitrine léger avec menu en ligne interactif et redirection automatique des commandes vers le WhatsApp du restaurant.",
    p3_title: "Horizon Immobilier — Vitrine Corporate",
    p3_desc: "Site professionnel mettant en valeur les biens à louer et à vendre avec formulaire de demande de devis sur-mesure.",

    // Méthode
    proc_badge: "🛠 Notre Méthode",
    proc_title: "Un accompagnement sans stress en 4 étapes",
    proc_sub: "Zéro jargon incompréhensible, des points WhatsApp réguliers et une livraison clé en main.",
    step1_name: "Cadrage & Devis Rapide",
    step1_text: "Échange gratuit sur WhatsApp sur vos besoins et vos objectifs. Proposition chiffrée claire sous 24h.",
    step2_name: "Acompte & Maquettage",
    step2_text: "Acompte de 40% (MoMo/OM acceptés). Nous concevons la structure et validons le design avant le code.",
    step3_name: "Développement & Tests",
    step3_text: "Intégration soignée, optimisation pour les connexions 3G et tests complets sur tous les téléphones.",
    step4_name: "Mise en Ligne & Formation",
    step4_text: "Déploiement sur votre domaine, validation finale, solde et session pour gérer vos textes en totale autonomie.",

    // FAQ
    faq_badge: "💡 Foire Aux Questions",
    faq_title: "Tout ce que vous devez savoir",
    q1: "Comment fonctionne le paiement ? Dois-je tout payer d'avance ?",
    a1: "Non. Nous demandons un acompte de 40% pour démarrer le projet. Le solde (60%) est payé uniquement à la livraison finale, une fois que vous êtes entièrement satisfait. Paiements par MTN Mobile Money, Orange Money ou virement.",
    q2: "Travaillez-vous avec des clients en dehors du Cameroun ?",
    a2: "Oui, absolument ! Nous accompagnons des clients dans toute l'Afrique francophone (Côte d'Ivoire, Sénégal, Gabon...) et en Europe/USA. Échanges réguliers via WhatsApp et Google Meet.",
    q3: "Puis-je modifier mon site moi-même après la livraison ?",
    a3: "Oui ! Nous vous fournissons une mini-formation et nous configurons le site pour que vous puissiez changer vos numéros, photos et tarifs facilement. Notre support reste disponible à tout moment.",
    q4: "Que comprend la garantie 14 jours ?",
    a4: "Pendant 14 jours après la mise en ligne, nous effectuons gratuitement toutes les retouches et ajustements mineurs que vous souhaitez pour garantir votre satisfaction totale.",

    // Contact
    c_badge: "💬 Contact Immédiat",
    c_title: "Prêt à lancer votre projet avec -50% ?",
    c_sub: "Remplissez ce formulaire express ou contactez-nous directement sur WhatsApp. Réponse garantie sous 2h.",
    f_name: "Votre Nom ou Entreprise *",
    f_phone: "Numéro WhatsApp / Téléphone *",
    f_service: "Service souhaité *",
    f_budget: "Budget indicatif",
    f_msg: "Détails de votre besoin",
    f_btn_wa: "Envoyer ma demande sur WhatsApp (Immédiat)",
    f_btn_mail: "Envoyer par E-mail",
    direct_title: "Ou joignez-nous directement :",

    // Footer
    footer_bio: "Agence digitale d'élite basée à Ngaoundéré & Yaoundé, Cameroun. Création de sites web ultra-rapides, Mini Apps Telegram et solutions numériques innovantes.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. Tous droits réservés.",
    back_top: "Haut de page ↑"
  },

  en: {
    lang_flag: "🇫🇷",
    lang_label: "FR",
    nav_services: "Services",
    nav_simulator: "Estimator",
    nav_portfolio: "Showcase",
    nav_process: "Process",
    nav_faq: "FAQ",
    nav_cta: "Free Quote →",

    // Hero
    hero_eyebrow: "🚀 Special Offer: -50% on all digital solutions",
    hero_title: "Scale your brand with <span class='gradient-text'>digital solutions</span> built to convert.",
    hero_sub: "Blazing fast websites, Telegram Mini Apps, and elite branding for ambitious entrepreneurs and businesses. Delivered in record time.",
    btn_calc: "Estimate price in 1 click",
    btn_wa_chat: "Chat on WhatsApp",
    stat_delivery: "Guaranteed avg turnaround",
    stat_speed: "3G load speed",
    stat_discount: "Prices cut by 50%",
    stat_momo: "Mobile Money Accepted",

    // Services
    srv_badge: "🔥 Special -50% Pricing",
    srv_title: "Clear, bespoke & unbeatable packages",
    srv_sub: "Pick your package or customize your request. All packages include hosting, revisions, and walkthrough training.",
    ribbon_top: "⭐ MOST POPULAR",
    btn_order: "Order this pack →",

    s1_name: "Essential Showcase Site",
    s1_desc: "A modern web presence to present your services, build credibility, and generate instant WhatsApp sales inquiries.",
    s1_price: "$100 <span>(≈ 60 000 FCFA)</span>",
    s1_f1: "✓ 1 to 3 ultra-fast responsive pages",
    s1_f2: "✓ Direct WhatsApp click-to-chat button",
    s1_f3: "✓ 1 year free domain & cloud hosting",
    s1_f4: "✓ Core Google SEO optimization",
    s1_f5: "✓ 14-day warranty included",

    s2_name: "Pro Business Site & Catalog",
    s2_desc: "Custom multi-page website featuring an interactive product/service catalog, inquiry forms, and advanced local SEO.",
    s2_price: "$200 – $330 <span>(≈ 125k – 200k FCFA)</span>",
    s2_f1: "✓ Up to 6 custom designed pages",
    s2_f2: "✓ Dynamic catalog & filtering",
    s2_f3: "✓ Local SEO & Google Business setup",
    s2_f4: "✓ Booking & quote request forms",
    s2_f5: "✓ Guided training to manage content",

    s3_name: "Telegram Mini App E-Commerce",
    s3_desc: "Your full shop built inside Telegram: in-app cart, interactive catalog, and instant order routing to the seller.",
    s3_price: "$285 – $530 <span>(≈ 175k – 325k FCFA)</span>",
    s3_f1: "✓ Native Telegram WebApp store",
    s3_f2: "✓ Interactive shopping cart",
    s3_f3: "✓ Real-time order push notifications",
    s3_f4: "✓ Frictionless checkout within Telegram",
    s3_f5: "✓ Secure Cloud hosting included",

    s4_name: "Visual Identity & Logo",
    s4_desc: "Creation of your brand universe: vector HD logo, complete brand guidelines, and social media header kits.",
    s4_price: "$50 – $100 <span>(≈ 30k – 60k FCFA)</span>",
    s4_f1: "✓ 3 unique logo concepts",
    s4_f2: "✓ Master vector files (SVG, PNG, PDF)",
    s4_f3: "✓ Color palette & typography rules",
    s4_f4: "✓ Social media cover templates",
    s4_f5: "✓ Unlimited revisions until approval",

    s5_name: "Telegram Bot & Automation",
    s5_desc: "Automate customer support, handle orders, and broadcast messages 24/7 effortlessly.",
    s5_price: "$80 – $180 <span>(≈ 50k – 110k FCFA)</span>",
    s5_f1: "✓ Custom interactive menus & commands",
    s5_f2: "✓ Instant admin alerts on incoming leads",
    s5_f3: "✓ Automated FAQ responses",
    s5_f4: "✓ Secure cloud backend hosting",
    s5_f5: "✓ Simple and quick onboarding",

    s6_name: "Maintenance & Peace of Mind",
    s6_desc: "Keep your site fast, safe, and up-to-date without technical headaches. Priority support and regular backups.",
    s6_price: "$12 <span>/ month</span> <small>(or $100 / year)</small>",
    s6_f1: "✓ High-performance cloud hosting",
    s6_f2: "✓ Regular automated backups",
    s6_f3: "✓ Continuous security patches",
    s6_f4: "✓ Dedicated WhatsApp support channel",
    s6_f5: "✓ Minor monthly updates included",

    // Simulator
    sim_badge: "⚡ Interactive Tool",
    sim_title: "Calculate your exact project price",
    sim_sub: "Check options and instantly preview your tailored quote with the 50% discount applied.",
    sim_step1: "1. Select solution type:",
    sim_step2: "2. Add optional bespoke add-ons:",
    sim_est_total: "Estimated Total:",
    sim_est_delay: "Estimated Turnaround:",
    sim_btn_order: "Confirm this setup on WhatsApp →",

    // Portfolio
    port_badge: "🏆 Showcase & Demos",
    port_title: "What we build for our partners",
    port_sub: "Explore our interactive architectures: high speed, lightweight, and conversion-focused.",
    p1_title: "Fashion Boutique — Telegram Mini App",
    p1_desc: "Full interactive shopping catalog accessible inside Telegram, with cart management and instant seller notifications.",
    p2_title: "Restaurant & Eatery — Digital Menu",
    p2_desc: "Lightweight digital menu showcase with click-and-collect order routing to WhatsApp.",
    p3_title: "Horizon Real Estate — Corporate Portal",
    p3_desc: "Professional platform presenting properties for rent and sale with custom inquiry forms.",

    // Process
    proc_badge: "🛠 Our Workflow",
    proc_title: "A stress-free 4-step journey",
    proc_sub: "Zero complicated jargon, regular WhatsApp updates, and turnkey project delivery.",
    step1_name: "Discovery & Quote",
    step1_text: "Free WhatsApp chat about your business goals. Clear quote delivered within 24h.",
    step2_name: "Deposit & Wireframes",
    step2_text: "40% deposit (MoMo/OM accepted). We validate architecture and UI mockups before coding.",
    step3_name: "Development & Testing",
    step3_text: "Clean development, speed optimization for 3G networks, and thorough testing.",
    step4_name: "Launch & Walkthrough",
    step4_text: "Deployment on your domain, final QA, balance payment, and autonomy training.",

    // FAQ
    faq_badge: "💡 Frequently Asked Questions",
    faq_title: "Everything you need to know",
    q1: "How does payment work? Do I have to pay upfront?",
    a1: "No. We ask for a 40% deposit to kick off. The remaining 60% is settled only upon final delivery once you are 100% satisfied. Payment via MTN MoMo, Orange Money, or wire transfer.",
    q2: "Do you work with international clients?",
    a2: "Yes, absolutely! We support clients across Africa, Europe, and North America. Regular checkpoints on WhatsApp and Google Meet.",
    q3: "Can I edit my website myself after launch?",
    a3: "Yes! We provide a guided walkthrough and structure the site so you can easily update contact info, photos, and prices.",
    q4: "What does the 14-day warranty cover?",
    a4: "For 14 days after launch, we handle all minor tweaks and adjustments for free to ensure your total satisfaction.",

    // Contact
    c_badge: "💬 Direct Contact",
    c_title: "Ready to launch with 50% discount?",
    c_sub: "Fill in this quick form or reach out directly on WhatsApp. Reply guaranteed within 2 hours.",
    f_name: "Your Name or Company *",
    f_phone: "WhatsApp / Phone Number *",
    f_service: "Desired Service *",
    f_budget: "Estimated Budget",
    f_msg: "Project Details",
    f_btn_wa: "Send my request on WhatsApp (Instant)",
    f_btn_mail: "Send via Email",
    direct_title: "Or reach us directly on:",

    // Footer
    footer_bio: "Elite digital agency based in Ngaoundéré & Yaoundé, Cameroon. Building high-speed websites, Telegram Mini Apps, and brand identities.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. All rights reserved.",
    back_top: "Back to top ↑"
  }
};

let currentLang = localStorage.getItem('evodevs_lang_v2') || 'fr';

function applyTranslations(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('evodevs_lang_v2', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langFlag = document.querySelector('.lang-flag');
  const langLabel = document.getElementById('langLabel');
  if (langFlag) langFlag.textContent = translations[lang].lang_flag;
  if (langLabel) langLabel.textContent = translations[lang].lang_label;

  updateSimulator();
}

// ---- Simulateur Interactif ----
function updateSimulator() {
  const selectedRadio = document.querySelector('input[name="projectType"]:checked');
  if (!selectedRadio) return;

  // Visual active state for radio cards
  document.querySelectorAll('.sim-radio-card').forEach((card) => card.classList.remove('active'));
  selectedRadio.closest('.sim-radio-card')?.classList.add('active');

  let baseCost = parseInt(selectedRadio.dataset.base, 10) || 60000;
  let baseDelay = parseInt(selectedRadio.dataset.delay, 10) || 5;

  // Add-ons
  let addonsCost = 0;
  let addonsDelay = 0;
  document.querySelectorAll('.sim-addon:checked').forEach((chk) => {
    chk.closest('.sim-check-card')?.classList.add('active');
    addonsCost += parseInt(chk.dataset.cost, 10) || 0;
    if (chk.dataset.addonName?.includes('Express')) {
      addonsDelay -= 2;
    } else {
      addonsDelay += 1;
    }
  });

  document.querySelectorAll('.sim-addon:not(:checked)').forEach((chk) => {
    chk.closest('.sim-check-card')?.classList.remove('active');
  });

  const totalCost = baseCost + addonsCost;
  const totalDays = Math.max(2, baseDelay + addonsDelay);

  const costEl = document.getElementById('simTotalCost');
  const delayEl = document.getElementById('simTotalDelay');

  if (costEl) {
    costEl.textContent = `${totalCost.toLocaleString('fr-FR')} FCFA` + (currentLang === 'en' ? ` (≈ $${Math.round(totalCost / 615)})` : '');
  }
  if (delayEl) {
    delayEl.textContent = `~ ${totalDays} ` + (currentLang === 'fr' ? 'jours' : 'days');
  }
}

function selectService(serviceName) {
  const selectEl = document.getElementById('cService');
  if (selectEl) {
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].text.toLowerCase().includes(serviceName.toLowerCase().split('(')[0].trim())) {
        selectEl.selectedIndex = i;
        break;
      }
    }
  }
}

// ---- Initialisation DOM ----
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  // 1. Switch Langue
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'fr' ? 'en' : 'fr';
      applyTranslations(nextLang);
    });
  }

  // 2. Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
    document.querySelectorAll('.drawer-link, .drawer-btn-cta').forEach((l) => {
      l.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }

  // 3. Écouteurs du Simulateur
  document.querySelectorAll('input[name="projectType"]').forEach((r) => {
    r.addEventListener('change', updateSimulator);
  });
  document.querySelectorAll('.sim-addon').forEach((c) => {
    c.addEventListener('change', updateSimulator);
  });
  updateSimulator();

  // Bouton Commander depuis le Simulateur
  const btnOrderFromSim = document.getElementById('btnOrderFromSim');
  if (btnOrderFromSim) {
    btnOrderFromSim.addEventListener('click', () => {
      const selectedRadio = document.querySelector('input[name="projectType"]:checked');
      const radioTitle = selectedRadio?.closest('.sim-radio-card')?.querySelector('.radio-name')?.textContent || 'Pack Web';
      const costText = document.getElementById('simTotalCost')?.textContent || '';
      const delayText = document.getElementById('simTotalDelay')?.textContent || '';

      const addons = [];
      document.querySelectorAll('.sim-addon:checked').forEach((chk) => {
        addons.push(chk.dataset.addonName);
      });

      const message =
        `*🚀 Configuration Projet Simulateur — Evodevs Team*\n\n` +
        `📦 *Pack de Base :* ${radioTitle}\n` +
        `➕ *Options ajoutées :* ${addons.length ? addons.join(', ') : 'Aucune'}\n` +
        `💰 *Estimation Tarif :* ${costText}\n` +
        `⏱ *Délai estimé :* ${delayText}\n\n` +
        `Bonjour Evodevs, je souhaite échanger sur cette configuration pour lancer mon projet !`;

      window.open(`https://wa.me/237698448024?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
  }

  // 4. Accordéon FAQ
  document.querySelectorAll('.faq-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const element = btn.closest('.faq-element');
      const drawer = element.querySelector('.faq-drawer');
      const isOpen = element.classList.contains('active');

      document.querySelectorAll('.faq-element').forEach((other) => {
        other.classList.remove('active');
        other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        const otherDrawer = other.querySelector('.faq-drawer');
        if (otherDrawer) otherDrawer.style.maxHeight = null;
      });

      if (!isOpen) {
        element.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        if (drawer) drawer.style.maxHeight = drawer.scrollHeight + 'px';
      }
    });
  });

  // 5. Formulaire de Contact & WhatsApp Direct
  const btnSubmitWhatsApp = document.getElementById('btnSubmitWhatsApp');
  const btnSubmitEmail = document.getElementById('btnSubmitEmail');

  function getContactData() {
    const name = document.getElementById('cName')?.value.trim();
    const phone = document.getElementById('cPhone')?.value.trim();
    const service = document.getElementById('cService')?.value;
    const budget = document.getElementById('cBudget')?.value;
    const message = document.getElementById('cMessage')?.value.trim();

    return { name, phone, service, budget, message };
  }

  function validateContact(d) {
    if (!d.name) {
      alert(currentLang === 'fr' ? 'Veuillez saisir votre nom.' : 'Please enter your name.');
      document.getElementById('cName')?.focus();
      return false;
    }
    if (!d.phone) {
      alert(currentLang === 'fr' ? 'Veuillez saisir votre numéro WhatsApp / téléphone.' : 'Please enter your phone number.');
      document.getElementById('cPhone')?.focus();
      return false;
    }
    return true;
  }

  if (btnSubmitWhatsApp) {
    btnSubmitWhatsApp.addEventListener('click', () => {
      const d = getContactData();
      if (!validateContact(d)) return;

      const waText =
        `*🚀 Demande de Devis (-50%) — Evodevs Team*\n\n` +
        `👤 *Nom / Entreprise :* ${d.name}\n` +
        `📞 *Contact :* ${d.phone}\n` +
        `💼 *Service Choisi :* ${d.service}\n` +
        `💰 *Budget Indicatif :* ${d.budget}\n` +
        `📝 *Détails :* ${d.message || 'Non renseigné'}\n\n` +
        `Bonjour Evodevs, je souhaite réserver cette prestation au tarif promo.`;

      window.open(`https://wa.me/237698448024?text=${encodeURIComponent(waText)}`, '_blank', 'noopener');
    });
  }

  if (btnSubmitEmail) {
    btnSubmitEmail.addEventListener('click', () => {
      const d = getContactData();
      if (!validateContact(d)) return;

      const subject = encodeURIComponent(`Demande Projet -50% : ${d.service} (${d.name})`);
      const body = encodeURIComponent(
        `Bonjour Evodevs Team,\n\n` +
        `Je souhaite solliciter vos services :\n` +
        `- Nom : ${d.name}\n` +
        `- Contact Téléphone / WhatsApp : ${d.phone}\n` +
        `- Service : ${d.service}\n` +
        `- Budget : ${d.budget}\n` +
        `- Description :\n${d.message || 'Aucun détail supplémentaire'}\n\n` +
        `Dans l'attente de votre réponse.`
      );

      window.location.href = `mailto:evodevsteam.contact@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
