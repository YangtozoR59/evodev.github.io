/**
 * Evodevs Team — Script Principal
 * Logique Bilingue (FR/EN), Accordéon FAQ, Formulaire de Devis & Intégration WhatsApp
 */

const translations = {
  fr: {
    lang_toggle_text: "EN",
    nav_advantages: "Atouts",
    nav_services: "Services & Tarifs",
    nav_portfolio: "Réalisations",
    nav_process: "Méthode",
    nav_faq: "FAQ",
    nav_cta: "Devis gratuit →",

    // Hero
    hero_eyebrow: "Collectif Tech Spécialisé — Cameroun & International",
    hero_title: "Donnez vie à vos projets avec des <em>solutions web</em> rapides & sur-mesure.",
    hero_sub: "Du commerçant indépendant à la PME en pleine croissance : nous concevons des sites vitrines haute performance, des boutiques et des Mini Apps Telegram taillées pour convertir vos prospects en clients.",
    btn_primary: "Demander un devis gratuit",
    btn_secondary: "Discuter sur WhatsApp",
    stat_time: "5-7j",
    stat_time_label: "Délai moyen de livraison",
    stat_speed: "< 1.5s",
    stat_speed_label: "Temps de chargement optimisé",
    stat_momo: "MoMo & OM",
    stat_momo_label: "Paiement Mobile facilité",
    stat_support: "100%",
    stat_support_label: "Suivi & Support direct",

    // Avantages
    africa_label: "Nos Engagements",
    africa_title: "Des solutions adaptées à vos réalités",
    africa_sub: "Nous combinons l'expertise technique internationale avec une parfaite compréhension des besoins du marché africain.",
    af1_title: "Paiements Locaux & Sécurisés",
    af1_desc: "Réglez facilement par MTN Mobile Money, Orange Money (FCFA) ou par virement bancaire. Acompte transparent et solde à la validation.",
    af2_title: "Ultra-Léger & Économie de Données",
    af2_desc: "Nos architectures sont optimisées pour charger instantanément, même sur réseau 3G/4G instable, garantissant l'accès à tous vos visiteurs.",
    af3_title: "Accompagnement & WhatsApp Direct",
    af3_desc: "Un canal de communication dédié et réactif. Pas de tickets lents : nous répondons rapidement sur WhatsApp et vous formons à la livraison.",

    // Services
    services_label: "Nos Offres",
    services_title: "Services clairs & tarifs transparents",
    services_sub: "Des formules adaptées à votre stade de développement, avec des livrables concrets et sans frais cachés.",
    badge_popular: "Recommandé",

    srv0_title: "Site Vitrine Essentiel",
    srv0_desc: "Présentez votre activité avec élégance : 1 à 3 pages responsives, bouton WhatsApp direct, formulaire de contact et hébergement inclus 1 an.",
    srv0_f1: "✓ Design responsive mobile & desktop",
    srv0_f2: "✓ Intégration WhatsApp & Appel direct",
    srv0_f3: "✓ Nom de domaine & hébergement 1 an",
    srv0_price: "120 000 FCFA <span>(≈ $195)</span>",

    srv1_title: "Site Web Pro & Catalogue",
    srv1_desc: "Site multi-sections sur-mesure pour PME structurée : catalogue interactif de services/produits, référencement SEO et formulaires avancés.",
    srv1_f1: "✓ Jusqu'à 6 pages sur-mesure",
    srv1_f2: "✓ Catalogue produits / galerie dynamique",
    srv1_f3: "✓ Référencement SEO & Google My Business",
    srv1_price: "250 000 – 400 000 FCFA <span>(≈ $410 – $650)</span>",

    srv2_title: "Telegram Mini App E-Commerce",
    srv2_desc: "Vendez directement dans Telegram : catalogue complet, panier interactif et réception automatique des commandes sans quitter l'application.",
    srv2_f1: "✓ Interface e-commerce moderne in-app",
    srv2_f2: "✓ Gestion simple du catalogue",
    srv2_f3: "✓ Alertes instantanées des commandes",
    srv2_price: "350 000 – 650 000 FCFA <span>(≈ $570 – $1 050)</span>",

    srv3_title: "Identité Visuelle & Logo",
    srv3_desc: "Donnez une image forte à votre marque : logo vectoriel professionnel, palette de couleurs, typographies et déclinaisons pour réseaux sociaux.",
    srv3_f1: "✓ Logo vectoriel (SVG, PNG, PDF)",
    srv3_f2: "✓ Charte graphique & déclinaisons",
    srv3_f3: "✓ 3 propositions & révisions incluses",
    srv3_price: "60 000 – 120 000 FCFA <span>(≈ $100 – $200)</span>",

    srv4_title: "Bot Telegram & Automatisation",
    srv4_desc: "Automatisez les réponses fréquentes de vos clients, la prise de commandes simples et la diffusion de messages ciblés 24h/24.",
    srv4_f1: "✓ Menu interactif et logique sur-mesure",
    srv4_f2: "✓ Notification administrateur immédiate",
    srv4_f3: "✓ Déploiement serveur sécurisé",
    srv4_price: "100 000 – 220 000 FCFA <span>(≈ $165 – $360)</span>",

    srv5_title: "Maintenance & Sérénité",
    srv5_desc: "Gardez votre site rapide, sécurisé et à jour sans vous soucier des aspects techniques. Sauvegardes continues et assistance dédiée.",
    srv5_f1: "✓ Hébergement Cloud haute disponibilité",
    srv5_f2: "✓ Mises à jour & sauvegardes hebdomadaires",
    srv5_f3: "✓ Support technique prioritaire",
    srv5_price: "15 000 FCFA <span>/ mois</span> <small>(ou 120 000 FCFA / an)</small>",

    // Portfolio
    port_label: "Réalisations & Cas d'Usage",
    port_title: "Des solutions concrètes en action",
    port_sub: "Exemples de projets et d'architectures que nous déployons pour nos clients.",
    port1_title: "Boutique de Mode — Telegram Mini App",
    port1_desc: "Catalogue complet interactif directement accessible dans Telegram, avec panier et transmission de commande instantanée vers le vendeur.",
    port2_title: "Restaurant & Fast-Food — Menu Digital",
    port2_desc: "Site vitrine léger avec menu en ligne interactif, localisation géographique et redirection directe des commandes vers WhatsApp.",
    port3_title: "Agence de Services — Vitrine Pro",
    port3_desc: "Plateforme professionnelle présentant l'offre de service, les avis vérifiés et un formulaire dynamique de demande de devis.",

    // Témoignages
    test1_quote: '"L\'équipe a parfaitement compris notre besoin. Le site charge en un clin d\'œil sur mobile et nos clients nous contactent directement sur WhatsApp sans friction. Le paiement par MoMo a rendu la collaboration très simple."',
    test1_author: "Marie T.",
    test1_role: "Fondatrice, Boutique Prêt-à-porter",
    test2_quote: '"Délai respecté et travail très soigné. Avoir une équipe locale réactive et joignable sur WhatsApp change complètement l\'expérience par rapport aux prestataires distants. Je recommande vivement."',
    test2_author: "Paul D.",
    test2_role: "Directeur commercial PME",

    // Méthode
    process_label: "Notre Méthode",
    process_title: "Une démarche simple en 4 étapes",
    process_sub: "Transparence totale, livraisons itératives et accompagnement personnalisé à chaque phase.",
    step1_title: "Cadrage & Devis Gratuit",
    step1_desc: "Discussion rapide sur vos objectifs, vos contenus et votre budget. Proposition chiffrée claire sous 24h.",
    step2_title: "Acompte & Maquettage",
    step2_desc: "Acompte de 40% pour démarrer. Nous concevons la structure et validons ensemble le design avant développement.",
    step3_title: "Développement & Tests",
    step3_desc: "Intégration rapide, optimisation des temps de chargement et tests complets sur smartphones et tablettes.",
    step4_title: "Mise en Ligne & Formation",
    step4_desc: "Déploiement sur votre domaine, vérification finale et formation simple pour gérer vos contenus en totale autonomie.",

    // FAQ
    faq_label: "Questions Fréquentes",
    faq_title: "Tout ce que vous devez savoir",
    faq1_q: "Comment se déroule le paiement ? Dois-je tout payer d'avance ?",
    faq1_a: "Non. Nous fonctionnons avec un acompte de 40% au lancement du projet. Le solde est réglé uniquement à la livraison finale, une fois que vous avez validé le rendu. Paiements acceptés : MTN Mobile Money, Orange Money ou virement bancaire.",
    faq2_q: "Travaillez-vous avec des clients hors du Cameroun ?",
    faq2_a: "Oui, absolument ! Nous collaborons avec des clients partout en Afrique francophone et dans la diaspora (Europe, Amérique du Nord). Les échanges se font via WhatsApp, Google Meet et les paiements internationaux sont acceptés.",
    faq3_q: "Que se passe-t-il si je n'ai aucune compétence technique ?",
    faq3_a: "Vous n'avez besoin d'aucune compétence technique. Nous gérons l'hébergement, la configuration du nom de domaine et la mise en ligne. À la livraison, nous vous guidons pas à pas pour que vous puissiez mettre à jour vos coordonnées facilement.",
    faq4_q: "Puis-je demander des modifications après la livraison ?",
    faq4_a: "Oui. Tous nos forfaits incluent une période de garantie et d'ajustements mineurs offerte de 14 jours après la livraison. Pour un accompagnement sur le long terme, notre forfait de maintenance prend en charge toutes vos évolutions futures.",

    // Contact & Formulaire
    contact_title: "Prêt à digitaliser votre activité ?",
    contact_desc: "Remplissez le formulaire ci-dessous ou échangez directement avec nous sur WhatsApp pour une estimation gratuite sous 2h.",
    f_label_name: "Votre Nom ou Entreprise *",
    f_label_phone: "Numéro WhatsApp / Téléphone *",
    f_label_service: "Type de projet souhaité *",
    f_label_budget: "Budget approximatif (FCFA)",
    f_label_msg: "Décrivez brièvement votre besoin",
    btn_form_wa: "Envoyer sur WhatsApp (Immédiat)",
    btn_form_mail: "Envoyer par E-mail",
    direct_contact_title: "Ou contactez-nous directement via :",

    // Footer
    footer_desc: "Collectif de développeurs au Cameroun dédié à la création de sites web performants, d'applications modernes et d'identités digitales pour l'Afrique et le monde.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. Basé à Ngaoundéré, Cameroun. Tous droits réservés.",
    f_back_top: "Haut de page ↑"
  },

  en: {
    lang_toggle_text: "FR",
    nav_advantages: "Advantages",
    nav_services: "Services & Pricing",
    nav_portfolio: "Showcase",
    nav_process: "Process",
    nav_faq: "FAQ",
    nav_cta: "Free Quote →",

    // Hero
    hero_eyebrow: "Specialized Tech Collective — Cameroon & Worldwide",
    hero_title: "Bring your digital vision to life with fast & <em>tailored web solutions</em>.",
    hero_sub: "From independent entrepreneurs to growing SMBs: we build high-performance showcase websites, online stores, and Telegram Mini Apps crafted to turn visitors into paying customers.",
    btn_primary: "Request a Free Quote",
    btn_secondary: "Chat on WhatsApp",
    stat_time: "5-7 days",
    stat_time_label: "Average delivery time",
    stat_speed: "< 1.5s",
    stat_speed_label: "Optimized load time",
    stat_momo: "MoMo & OM",
    stat_momo_label: "Mobile payment ready",
    stat_support: "100%",
    stat_support_label: "Dedicated support",

    // Advantages
    africa_label: "Our Commitments",
    africa_title: "Solutions built for your reality",
    africa_sub: "We combine world-class technical standards with an in-depth understanding of local African markets.",
    af1_title: "Local & Secure Payments",
    af1_desc: "Pay easily via MTN Mobile Money, Orange Money (XAF) or bank transfer. Transparent deposit and balance upon project sign-off.",
    af2_title: "Ultra-Light & Data Saver",
    af2_desc: "Our code is streamlined to load instantly even on 3G connections, saving your customers' mobile data bundles.",
    af3_title: "Direct WhatsApp Support",
    af3_desc: "Fast, human communication without bureaucratic ticketing. We answer promptly on WhatsApp and provide a handover walkthrough.",

    // Services
    services_label: "Our Offerings",
    services_title: "Transparent services & clear pricing",
    services_sub: "Tailored packages designed for your business stage, with clear deliverables and zero hidden fees.",
    badge_popular: "Recommended",

    srv0_title: "Essential Showcase Site",
    srv0_desc: "Present your business with authority: 1-3 responsive pages, direct WhatsApp integration, contact form, and 1 year hosting included.",
    srv0_f1: "✓ Mobile & desktop responsive design",
    srv0_f2: "✓ Direct WhatsApp & call integration",
    srv0_f3: "✓ Domain name & 1 year hosting included",
    srv0_price: "$195 <span>(≈ 120 000 FCFA)</span>",

    srv1_title: "Pro Business Website & Catalog",
    srv1_desc: "Custom multi-page website for growing businesses: dynamic catalog, SEO optimization, and high-converting inquiry forms.",
    srv1_f1: "✓ Up to 6 custom designed pages",
    srv1_f2: "✓ Product/service catalog & gallery",
    srv1_f3: "✓ Local SEO & Google Business setup",
    srv1_price: "$410 – $650 <span>(≈ 250k – 400k FCFA)</span>",

    srv2_title: "Telegram Mini App E-Commerce",
    srv2_desc: "Sell directly within Telegram: full in-app shopping cart, catalog browsing, and instant order routing to the seller.",
    srv2_f1: "✓ Seamless Telegram WebApp interface",
    srv2_f2: "✓ Easy catalog management",
    srv2_f3: "✓ Instant order push notifications",
    srv2_price: "$570 – $1,050 <span>(≈ 350k – 650k FCFA)</span>",

    srv3_title: "Visual Identity & Brand Kit",
    srv3_desc: "Establish a memorable brand presence: professional vector logo, color palette, typography guidelines, and social media assets.",
    srv3_f1: "✓ Vector logo formats (SVG, PNG, PDF)",
    srv3_f2: "✓ Brand guidelines & social covers",
    srv3_f3: "✓ 3 unique design concepts included",
    srv3_price: "$100 – $200 <span>(≈ 60k – 120k FCFA)</span>",

    srv4_title: "Telegram Bot & Automation",
    srv4_desc: "Automate repetitive customer queries, handle simple lead qualification, and broadcast updates 24/7.",
    srv4_f1: "✓ Custom interactive bot menu",
    srv4_f2: "✓ Real-time admin notifications",
    srv4_f3: "✓ Secure server deployment",
    srv4_price: "$165 – $360 <span>(≈ 100k – 220k FCFA)</span>",

    srv5_title: "Maintenance & Peace of Mind",
    srv5_desc: "Keep your website lightning fast, secure, and up-to-date. Continuous backups and dedicated monthly technical support.",
    srv5_f1: "✓ High-availability cloud hosting",
    srv5_f2: "✓ Weekly backups & security updates",
    srv5_f3: "✓ Priority customer support",
    srv5_price: "$25 <span>/ month</span> <small>(or $200 / year)</small>",

    // Portfolio
    port_label: "Showcase & Use Cases",
    port_title: "Real solutions in action",
    port_sub: "Examples of architectures and digital platforms we craft for our clients.",
    port1_title: "Fashion Boutique — Telegram Mini App",
    port1_desc: "Interactive catalog built right into Telegram with seamless cart checkout and instant notification to sales reps.",
    port2_title: "Restaurant & Eatery — Digital Menu",
    port2_desc: "High-speed digital menu showcase with map location and one-tap order routing to WhatsApp.",
    port3_title: "Service Agency — Corporate Portal",
    port3_desc: "High-converting corporate website with verified reviews, clear service tiers, and interactive booking forms.",

    // Testimonials
    test1_quote: '"The team understood our exact needs from day one. The site loads blazingly fast on mobile and customers reach us on WhatsApp smoothly. Paying via Mobile Money was a huge plus."',
    test1_author: "Marie T.",
    test1_role: "Founder, Fashion Brand",
    test2_quote: '"Deadlines were respected and the final delivery was spotless. Having a responsive local team on WhatsApp makes all the difference compared to remote freelancers. Highly recommended."',
    test2_author: "Paul D.",
    test2_role: "Commercial Director, SMB",

    // Process
    process_label: "Our Process",
    process_title: "A simple 4-step framework",
    process_sub: "Full transparency, iterative milestones, and personalized guidance every step of the way.",
    step1_title: "Discovery & Free Quote",
    step1_desc: "Quick chat about your business goals, assets, and budget. Clear quote delivered within 24h.",
    step2_title: "Deposit & Wireframing",
    step2_desc: "40% deposit to kick off. We outline the layout and validate design prototypes before writing code.",
    step3_title: "Development & Testing",
    step3_desc: "Clean coding, performance optimization, and rigorous testing on actual mobile devices.",
    step4_title: "Deployment & Handover",
    step4_desc: "Live launch on your domain, final QA, and a guided handover training so you can manage your site.",

    // FAQ
    faq_label: "Frequently Asked Questions",
    faq_title: "Everything you need to know",
    faq1_q: "How does payment work? Do I have to pay everything upfront?",
    faq1_a: "No. We require a 40% deposit to initiate the project. The remaining balance is paid only upon final delivery once you are 100% satisfied. Accepted payment methods: MTN Mobile Money, Orange Money, or bank transfer.",
    faq2_q: "Do you work with international clients?",
    faq2_a: "Yes! We work with clients across Africa, Europe, and North America. Coordination takes place via WhatsApp, Google Meet, and international payments are accepted.",
    faq3_q: "What if I have zero technical knowledge?",
    faq3_a: "You don't need any technical skills. We handle hosting, domain setup, and configuration. At launch, we give you a simple walkthrough so you feel confident.",
    faq4_q: "Can I request adjustments after launch?",
    faq4_a: "Yes. All our packages include a 14-day warranty and minor adjustments period post-launch. For ongoing evolutions, our maintenance plan has you covered.",

    // Contact & Form
    contact_title: "Ready to elevate your digital presence?",
    contact_desc: "Fill in the form below or message us directly on WhatsApp for a free quote within 2 hours.",
    f_label_name: "Your Name or Company *",
    f_label_phone: "WhatsApp Number / Phone *",
    f_label_service: "Project Type *",
    f_label_budget: "Estimated Budget",
    f_label_msg: "Brief project description",
    btn_form_wa: "Send on WhatsApp (Instant)",
    btn_form_mail: "Send via Email",
    direct_contact_title: "Or connect with us directly on:",

    // Footer
    footer_desc: "Cameroon-based tech collective building high-speed websites, Telegram applications, and digital identities for Africa and global businesses.",
    footer_copy: "© 2026 <strong>Evodevs Team</strong>. Based in Ngaoundéré, Cameroon. All rights reserved.",
    f_back_top: "Back to top ↑"
  }
};

let currentLang = localStorage.getItem('evodevs_lang') || 'fr';

function applyTranslations(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('evodevs_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = translations[lang].lang_toggle_text;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation de la langue
  applyTranslations(currentLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'fr' ? 'en' : 'fr';
      applyTranslations(nextLang);
    });
  }

  // 2. Accordéon FAQ interactif & accessible
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-q');
    const answerDiv = item.querySelector('.faq-a');

    if (questionBtn && answerDiv) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Fermer tous les autres éléments
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-q');
            const otherAns = otherItem.querySelector('.faq-a');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle l'élément courant
        if (isOpen) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answerDiv.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
        }
      });
    }
  });

  // 3. Gestion du Formulaire Interactif de Devis
  const btnSendWhatsApp = document.getElementById('btn-send-whatsapp');
  const btnSendEmail = document.getElementById('btn-send-email');

  function getFormData() {
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const service = document.getElementById('form-service').value;
    const budget = document.getElementById('form-budget').value;
    const message = document.getElementById('form-message').value.trim();

    return { name, phone, service, budget, message };
  }

  function validateForm(data) {
    if (!data.name) {
      alert(currentLang === 'fr' ? 'Veuillez renseigner votre nom ou entreprise.' : 'Please enter your name or company.');
      document.getElementById('form-name').focus();
      return false;
    }
    if (!data.phone) {
      alert(currentLang === 'fr' ? 'Veuillez renseigner un numéro de téléphone / WhatsApp.' : 'Please enter your phone / WhatsApp number.');
      document.getElementById('form-phone').focus();
      return false;
    }
    return true;
  }

  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener('click', () => {
      const data = getFormData();
      if (!validateForm(data)) return;

      const formattedMsg = `*Demande de Devis — Evodevs Team*\n\n` +
        `👤 *Nom / Entreprise :* ${data.name}\n` +
        `📞 *Contact :* ${data.phone}\n` +
        `🚀 *Type de Projet :* ${data.service}\n` +
        `💰 *Budget Estimé :* ${data.budget}\n` +
        `📝 *Détails :* ${data.message || 'Non spécifié'}`;

      const waUrl = `https://wa.me/237698448024?text=${encodeURIComponent(formattedMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', () => {
      const data = getFormData();
      if (!validateForm(data)) return;

      const subject = encodeURIComponent(`Demande de Devis : ${data.service} - ${data.name}`);
      const body = encodeURIComponent(
        `Bonjour Evodevs Team,\n\n` +
        `Je souhaite solliciter vos services pour un projet :\n\n` +
        `- Nom / Entreprise : ${data.name}\n` +
        `- Contact : ${data.phone}\n` +
        `- Type de Projet : ${data.service}\n` +
        `- Budget Estimé : ${data.budget}\n` +
        `- Description du besoin :\n${data.message || 'Non spécifié'}\n\n` +
        `Dans l'attente de votre retour.`
      );

      window.location.href = `mailto:evodevsteam.contact@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
