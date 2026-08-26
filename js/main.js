/**
 * Evodevs — JavaScript Moderne, Bilingue & Animations Fluides
 * Sans Emojis, Optimisé Mobile
 */

const translations = {
  fr: {
    lang_desktop: "EN",
    lang_mobile: "Passer en English",
    nav_services: "Services & Tarifs",
    nav_simulator: "Calculateur de Prix",
    nav_portfolio: "Nos Réalisations",
    nav_process: "Notre Méthode",
    nav_faq: "Questions Fréquentes",
    nav_cta: "Devis Gratuit",

    // Hero
    hero_tag: "Tarifs promotionnels à -50%",
    hero_sub: "Sites vitrines sur-mesure, boutiques Telegram Mini Apps et identités visuelles d'excellence pour indépendants et entreprises.",
    btn_calc: "Simuler mon tarif",
    btn_wa_chat: "Échanger sur WhatsApp",

    // Services
    srv_badge: "Catalogue des Offres",
    srv_title: "Des solutions concrètes à tarifs transparents",
    srv_sub: "Toutes nos prestations incluent hébergement, sécurité, révisions et formation.",
    ribbon_top: "Recommandé",
    btn_order: "Commander ce pack",

    s1_name: "Site Vitrine Essentiel",
    s1_desc: "Une présence web moderne pour présenter votre activité et générer des prises de contact directes.",
    s1_price: "60 000 FCFA <span>(≈ $100)</span>",
    s1_f1: "1 à 3 pages responsives modernes",
    s1_f2: "Bouton de contact WhatsApp direct",
    s1_f3: "Domaine & hébergement 1 an offert",
    s1_f4: "Référencement Google SEO de base",
    s1_f5: "Garantie 14 jours incluse",

    s2_name: "Site Web Pro & Catalogue",
    s2_desc: "Plateforme multi-pages avec catalogue interactif de vos produits ou services et optimisation Google.",
    s2_price: "125k – 200k FCFA <span>(≈ $200 – $330)</span>",
    s2_f1: "Jusqu'à 6 pages personnalisées",
    s2_f2: "Catalogue interactif avec filtres",
    s2_f3: "SEO local & Google My Business",
    s2_f4: "Formulaires de réservation / devis",
    s2_f5: "Formation prise en main incluse",

    s3_name: "Telegram Mini App E-Commerce",
    s3_desc: "Votre boutique complète au sein de Telegram : panier d'achat, catalogue et réception immédiate des commandes.",
    s3_price: "175k – 325k FCFA <span>(≈ $285 – $530)</span>",
    s3_f1: "Boutique native Telegram WebApp",
    s3_f2: "Panier d'achat interactif",
    s3_f3: "Alertes commandes instantanées",
    s3_f4: "Achat direct sans quitter Telegram",
    s3_f5: "Hébergement Cloud sécurisé",

    s4_name: "Identité Visuelle & Logo",
    s4_desc: "Création de votre univers graphique : logo vectoriel haute définition, charte de couleurs et déclinaisons.",
    s4_price: "30k – 60k FCFA <span>(≈ $50 – $100)</span>",
    s4_f1: "3 propositions uniques de logos",
    s4_f2: "Fichiers vectoriels HD (SVG, PNG, PDF)",
    s4_f3: "Palette de couleurs & typographies",
    s4_f4: "Bannières réseaux sociaux adaptées",
    s4_f5: "Révisions jusqu'à entière validation",

    s5_name: "Bot Telegram & Automatisation",
    s5_desc: "Automatisez vos réponses clients, la prise de commandes et vos alertes 24h/24 sans effort.",
    s5_price: "50k – 110k FCFA <span>(≈ $80 – $180)</span>",
    s5_f1: "Menu interactif & boutons sur-mesure",
    s5_f2: "Alertes administrateur en direct",
    s5_f3: "Gestion automatique des questions FAQ",
    s5_f4: "Hébergement Cloud sécurisé",
    s5_f5: "Prise en main simple & rapide",

    s6_name: "Maintenance & Sérénité",
    s6_desc: "Gardez votre site rapide, sécurisé et à jour sans contraintes techniques. Sauvegardes et assistance prioritaires.",
    s6_price: "7 500 FCFA <span>/ mois</span> <small>(ou 60 000 FCFA / an)</small>",
    s6_f1: "Hébergement Cloud haute performance",
    s6_f2: "Sauvegardes automatiques régulières",
    s6_f3: "Mises à jour de sécurité continues",
    s6_f4: "Support technique WhatsApp dédié",
    s6_f5: "Modifications mineures mensuelles",

    // Simulateur
    sim_badge: "Calculateur Interactif",
    sim_title: "Estimez votre projet en direct",
    sim_sub: "Sélectionnez la base et vos options pour obtenir immédiatement le montant et le délai estimé.",
    sim_step1: "1. Base du projet :",
    sim_step2: "2. Options additionnelles (optionnel) :",
    sim_est_total: "Estimation Totale :",
    sim_est_delay: "Délai estimé :",
    sim_btn_order: "Valider cette demande sur WhatsApp",

    // Portfolio
    port_badge: "Démonstrations",
    port_title: "Aperçu de nos réalisations",
    port_sub: "Des architectures fluides conçues pour optimiser la conversion de vos prospects.",
    p1_title: "Boutique de Mode — Telegram Mini App",
    p1_desc: "Catalogue complet interactif directement accessible dans Telegram avec gestion du panier et alertes instantanées.",
    p2_title: "Restaurant — Menu Digital",
    p2_desc: "Site vitrine fluide avec menu interactif et redirection automatique des commandes vers WhatsApp.",
    p3_title: "Agence Immobilière — Vitrine Pro",
    p3_desc: "Site professionnel mettant en valeur les biens avec formulaires de demande de devis sur-mesure.",

    // Process
    proc_badge: "Notre Méthode",
    proc_title: "Un déroulement clair en 4 étapes",
    proc_sub: "Des échanges directs sur WhatsApp, des délais respectés et une livraison clé en main.",
    step1_name: "Cadrage & Devis Rapide",
    step1_text: "Échange sur vos attentes et vos objectifs. Proposition chiffrée claire sous 24h.",
    step2_name: "Acompte & Maquettage",
    step2_text: "Acompte de 40% (MoMo/OM acceptés). Nous concevons la structure et validons le design ensemble.",
    step3_name: "Développement & Tests",
    step3_text: "Développement soigné, optimisation mobile et tests de compatibilité.",
    step4_name: "Mise en Ligne & Formation",
    step4_text: "Déploiement sur votre domaine, validation finale, règlement du solde et guide de gestion.",

    // FAQ
    faq_badge: "FAQ",
    faq_title: "Questions Fréquentes",
    q1: "Comment fonctionne le règlement ?",
    a1: "Un acompte de 40% est demandé pour démarrer le projet. Le solde (60%) est réglé à la livraison finale après votre validation. Paiements acceptés : MTN MoMo, Orange Money ou virement bancaire.",
    q2: "Travaillez-vous à distance avec l'international ?",
    a2: "Oui. Nous accompagnons des clients dans toute l'Afrique francophone (Côte d'Ivoire, Sénégal, Gabon...) et en Europe/USA via WhatsApp et Google Meet.",
    q3: "Puis-je modifier mes textes et photos moi-même ?",
    a3: "Oui. Nous vous fournissons un guide simple pour modifier vos contenus en toute autonomie, et notre support reste joignable à tout moment.",
    q4: "Que comprend la garantie 14 jours ?",
    a4: "Pendant 14 jours après la mise en ligne, tous les ajustements mineurs demandés sont réalisés gratuitement et en priorité.",

    // Contact
    c_badge: "Contact Immédiat",
    c_title: "Démarrer un Projet",
    c_sub: "Remplissez ce formulaire express ou contactez-nous directement sur WhatsApp. Réponse garantie sous 2h.",
    f_name: "Nom ou Entreprise *",
    f_phone: "Numéro WhatsApp / Téléphone *",
    f_service: "Prestation souhaitée *",
    f_budget: "Budget indicatif",
    f_msg: "Détails du besoin",
    f_btn_wa: "Envoyer sur WhatsApp",
    f_btn_mail: "Envoyer par E-mail",
    direct_title: "Coordonnées directes :",

    // Footer
    footer_bio: "Collectif tech basé à Ngaoundéré & Yaoundé, Cameroun. Création de sites web ultra-rapides, Mini Apps Telegram et solutions numériques sur-mesure.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. Tous droits réservés.",
    back_top: "Haut de page ↑"
  },

  en: {
    lang_desktop: "FR",
    lang_mobile: "Switch to Français",
    nav_services: "Services & Pricing",
    nav_simulator: "Price Calculator",
    nav_portfolio: "Showcase",
    nav_process: "Our Workflow",
    nav_faq: "FAQ",
    nav_cta: "Free Quote",

    // Hero
    hero_tag: "Special 50% discount offers",
    hero_sub: "Tailored showcase websites, Telegram Mini Apps, and brand identities crafted for ambitious businesses.",
    btn_calc: "Estimate my price",
    btn_wa_chat: "Chat on WhatsApp",

    // Services
    srv_badge: "Services Catalog",
    srv_title: "Tangible solutions with clear pricing",
    srv_sub: "All packages include hosting, security patches, revisions, and training.",
    ribbon_top: "Recommended",
    btn_order: "Order this pack",

    s1_name: "Essential Showcase Site",
    s1_desc: "A modern web presence to present your business and generate direct inquiries.",
    s1_price: "$100 <span>(≈ 60 000 FCFA)</span>",
    s1_f1: "1 to 3 fast responsive pages",
    s1_f2: "Direct WhatsApp click-to-chat button",
    s1_f3: "1 year free domain & cloud hosting",
    s1_f4: "Core Google SEO setup",
    s1_f5: "14-day warranty included",

    s2_name: "Pro Business Site & Catalog",
    s2_desc: "Custom multi-page website featuring an interactive catalog and Google SEO.",
    s2_price: "$200 – $330 <span>(≈ 125k – 200k FCFA)</span>",
    s2_f1: "Up to 6 custom designed pages",
    s2_f2: "Dynamic catalog & filtering",
    s2_f3: "Local SEO & Google Business setup",
    s2_f4: "Booking & quote request forms",
    s2_f5: "Handover walkthrough guide",

    s3_name: "Telegram Mini App E-Commerce",
    s3_desc: "Your full shop inside Telegram: in-app cart, catalog, and real-time order alerts.",
    s3_price: "$285 – $530 <span>(≈ 175k – 325k FCFA)</span>",
    s3_f1: "Native Telegram WebApp store",
    s3_f2: "Interactive shopping cart",
    s3_f3: "Real-time order notifications",
    s3_f4: "Direct in-app checkout",
    s3_f5: "Secure Cloud hosting included",

    s4_name: "Visual Identity & Logo",
    s4_desc: "Creation of your brand universe: vector HD logo, color guidelines, and social kits.",
    s4_price: "$50 – $100 <span>(≈ 30k – 60k FCFA)</span>",
    s4_f1: "3 unique logo concepts",
    s4_f2: "Master vector files (SVG, PNG, PDF)",
    s4_f3: "Color palette & typography rules",
    s4_f4: "Social media header covers",
    s4_f5: "Revisions until total approval",

    s5_name: "Telegram Bot & Automation",
    s5_desc: "Automate customer support, handle orders, and broadcast 24/7 alerts.",
    s5_price: "$80 – $180 <span>(≈ 50k – 110k FCFA)</span>",
    s5_f1: "Custom menus & commands",
    s5_f2: "Instant admin push alerts",
    s5_f3: "Automated FAQ responses",
    s5_f4: "Secure cloud backend hosting",
    s5_f5: "Quick and simple onboarding",

    s6_name: "Maintenance & Peace of Mind",
    s6_desc: "Keep your site fast, safe, and up-to-date. Priority support and regular backups.",
    s6_price: "$12 <span>/ month</span> <small>(or $100 / year)</small>",
    s6_f1: "High-performance cloud hosting",
    s6_f2: "Regular automated backups",
    s6_f3: "Continuous security patches",
    s6_f4: "Dedicated WhatsApp support channel",
    s6_f5: "Minor monthly updates included",

    // Simulator
    sim_badge: "Interactive Calculator",
    sim_title: "Estimate your project online",
    sim_sub: "Select base solution and optional add-ons to preview pricing and delivery turnaround.",
    sim_step1: "1. Project foundation:",
    sim_step2: "2. Optional add-ons:",
    sim_est_total: "Estimated Total:",
    sim_est_delay: "Estimated Turnaround:",
    sim_btn_order: "Validate this setup on WhatsApp",

    // Portfolio
    port_badge: "Demonstrations",
    port_title: "Showcase & Demonstrations",
    port_sub: "Smooth web architectures designed to optimize lead conversion.",
    p1_title: "Fashion Boutique — Telegram Mini App",
    p1_desc: "Full interactive shopping catalog accessible inside Telegram with cart management and instant alerts.",
    p2_title: "Restaurant — Digital Menu",
    p2_desc: "Smooth digital menu with automated order routing to WhatsApp.",
    p3_title: "Real Estate Portal — Pro Showcase",
    p3_desc: "Professional platform presenting properties with custom inquiry forms.",

    // Process
    proc_badge: "Our Workflow",
    proc_title: "A clear 4-step journey",
    proc_sub: "Direct WhatsApp checkpoints, reliable turnaround, and turnkey delivery.",
    step1_name: "Discovery & Quote",
    step1_text: "Free WhatsApp chat about your business goals. Clear quote delivered within 24h.",
    step2_name: "Deposit & Wireframes",
    step2_text: "40% deposit (MoMo/OM accepted). We validate architecture and UI mockups together.",
    step3_name: "Development & Testing",
    step3_text: "Clean development, mobile speed optimization, and thorough testing.",
    step4_name: "Launch & Walkthrough",
    step4_text: "Deployment on your domain, final QA, balance payment, and autonomy guide.",

    // FAQ
    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    q1: "How does payment work?",
    a1: "A 40% deposit is required to start. The remaining 60% is settled upon final delivery after your approval. Payments accepted: MTN MoMo, Orange Money, or wire transfer.",
    q2: "Do you work with international clients?",
    a2: "Yes. We support clients across Africa, Europe, and North America via WhatsApp and Google Meet.",
    q3: "Can I edit my website myself after launch?",
    a3: "Yes. We provide a simple guide so you can update content independently, and our support remains accessible.",
    q4: "What does the 14-day warranty cover?",
    a4: "For 14 days after launch, all minor adjustments requested are handled for free with top priority.",

    // Contact
    c_badge: "Direct Contact",
    c_title: "Start a Project",
    c_sub: "Fill in this quick form or reach out directly on WhatsApp. Reply guaranteed within 2 hours.",
    f_name: "Name or Company *",
    f_phone: "WhatsApp / Phone Number *",
    f_service: "Desired Service *",
    f_budget: "Estimated Budget",
    f_msg: "Project Details",
    f_btn_wa: "Send on WhatsApp",
    f_btn_mail: "Send via Email",
    direct_title: "Direct Contact:",

    // Footer
    footer_bio: "Tech collective based in Ngaoundéré & Yaoundé, Cameroon. Building high-speed websites, Telegram Mini Apps, and custom digital tools.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. All rights reserved.",
    back_top: "Back to top ↑"
  }
};

let currentLang = localStorage.getItem('evodevs_lang_v4') || 'fr';

function applyTranslations(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('evodevs_lang_v4', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langDesktop = document.getElementById('langLabelDesktop');
  const langMobile = document.getElementById('langLabelMobile');
  if (langDesktop) langDesktop.textContent = translations[lang].lang_desktop;
  if (langMobile) langMobile.textContent = translations[lang].lang_mobile;

  updateSimulator();
}

function updateSimulator() {
  const selectedRadio = document.querySelector('input[name="projectType"]:checked');
  if (!selectedRadio) return;

  document.querySelectorAll('.sim-radio-card').forEach((card) => card.classList.remove('active'));
  selectedRadio.closest('.sim-radio-card')?.classList.add('active');

  let baseCost = parseInt(selectedRadio.dataset.base, 10) || 60000;
  let baseDelay = parseInt(selectedRadio.dataset.delay, 10) || 5;

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

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  // 1. Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver.observe(el);
  });

  // 2. Language Switchers
  const langToggleDesktop = document.getElementById('langToggleDesktop');
  const langToggleMobile = document.getElementById('langToggleMobile');

  function toggleLang() {
    const next = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations(next);
  }

  if (langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

  // 3. Clean Mobile Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open', !isOpen);
      mobileToggle.classList.toggle('active', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.drawer-link, .drawer-btn-cta').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 4. Simulator
  document.querySelectorAll('input[name="projectType"]').forEach((r) => {
    r.addEventListener('change', updateSimulator);
  });
  document.querySelectorAll('.sim-addon').forEach((c) => {
    c.addEventListener('change', updateSimulator);
  });
  updateSimulator();

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
        `*Demande de Projet (Simulateur) — Evodevs*\n\n` +
        `Solution : ${radioTitle}\n` +
        `Options : ${addons.length ? addons.join(', ') : 'Aucune'}\n` +
        `Estimation : ${costText}\n` +
        `Délai estimé : ${delayText}\n\n` +
        `Bonjour Evodevs, je souhaite échanger sur cette configuration.`;

      window.open(`https://wa.me/237698448024?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
  }

  // 5. FAQ Accordion
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

  // 6. Contact Form
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
        `*Demande de Devis — Evodevs*\n\n` +
        `Nom / Entreprise : ${d.name}\n` +
        `Contact : ${d.phone}\n` +
        `Prestation : ${d.service}\n` +
        `Budget : ${d.budget}\n` +
        `Détails : ${d.message || 'Non renseigné'}\n\n` +
        `Bonjour Evodevs, je souhaite échanger sur ce projet.`;

      window.open(`https://wa.me/237698448024?text=${encodeURIComponent(waText)}`, '_blank', 'noopener');
    });
  }

  if (btnSubmitEmail) {
    btnSubmitEmail.addEventListener('click', () => {
      const d = getContactData();
      if (!validateContact(d)) return;

      const subject = encodeURIComponent(`Demande Projet : ${d.service} (${d.name})`);
      const body = encodeURIComponent(
        `Bonjour Evodevs Team,\n\n` +
        `Je souhaite solliciter vos services :\n` +
        `- Nom : ${d.name}\n` +
        `- Téléphone / WhatsApp : ${d.phone}\n` +
        `- Prestation : ${d.service}\n` +
        `- Budget : ${d.budget}\n` +
        `- Description :\n${d.message || 'Non précisé'}`
      );

      window.location.href = `mailto:evodevsteam.contact@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
