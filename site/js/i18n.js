/* Dinnizer — bilingual EN/FR content and progressive enhancement. */
const TRANSLATIONS = {
  en: {
    'nav.services': 'Services',
    'nav.vision': 'Approach',
    'nav.about': 'Myself',
    'nav.blog': 'Blog',
    'nav.book': 'Book a call',
    'nav.skip': 'Skip to content',
    'hero.label': 'Fractional Deputy CEO · Deep-tech · Biotech',
    'hero.h1a': 'You built the technology.',
    'hero.h1b': 'I’ll build the company around it.',
    'hero.sub': 'Hands-on operational leadership for growing deep-tech and biotech companies. I work alongside your CEO to manage finance, people, systems, and day-to-day execution — on a part-time basis.',
    'hero.cta1': 'Book a discovery call',
    'hero.cta2': 'Explore my services →',
    'metrics.m1.n': '10+',
    'metrics.m1.l': 'years in deep-tech operations',
    'metrics.m2.n': '3+',
    'metrics.m2.l': 'months per engagement',
    'metrics.m3.n': 'A→C',
    'metrics.m3.l': 'Series A to C focus',
    'metrics.m4.n': 'FR / EN',
    'metrics.m4.l': 'bilingual collaboration',
    'problem.label': 'Why it matters',
    'problem.h2': 'Operations need leadership. They shouldn’t need all of your time.',
    'problem.intro': 'As your company grows, payroll, cash planning, contracts, and systems need dedicated attention. I take responsibility for the agreed operational scope so you can focus on your technology, customers, and next stage of growth.',
    'problem.p1.title': 'Financial visibility',
    'problem.p1.desc': 'Cash forecasts, budgets, and grant reporting need to stay current. Build a reliable view of your runway and commitments, with clear ownership of financial deadlines.',
    'problem.p2.title': 'Operational readiness',
    'problem.p2.desc': 'Contracts, intellectual property, and corporate records need attention before a funding round or audit. Coordinate the right specialists and keep critical obligations on track.',
    'problem.p3.title': 'Leadership at the right scale',
    'problem.p3.desc': 'You may need experienced operational leadership before a full-time executive makes sense. A fractional Deputy CEO joins your team with an agreed scope, time commitment, and handover plan.',
    'services.label': 'Scope of work',
    'services.h2': 'The operations behind your next stage of growth',
    'services.intro': 'We agree the priorities together. I lead delivery, report directly to the CEO, and coordinate your team and specialist advisers across the functions you need.',
    'services.s1.title': 'Finance & Cash Management',
    'services.s1.desc': 'Cash forecasts, budgets, and financial reporting. Purchasing and investment planning. Coordination with accountants and banking partners.',
    'services.s2.title': 'Non-dilutive Funding',
    'services.s2.desc': 'Bpifrance, ANR, EIC Accelerator, Horizon Europe, and CIR/CII. Funding opportunities, application coordination, reporting, and audit preparation.',
    'services.s3.title': 'HR & People Operations',
    'services.s3.desc': 'Hiring processes, onboarding, and performance reviews. Employment administration under French labour law, payroll coordination, and support from specialist advisers.',
    'services.s4.title': 'Legal, IP & Regulatory',
    'services.s4.desc': 'Contract management, IP portfolio oversight, and fundraising preparation. Coordination with legal counsel, patent attorneys, and regulatory specialists.',
    'services.s5.title': 'Administration & Office',
    'services.s5.desc': 'Back-office organisation, suppliers, facilities, and insurance. Corporate records, filing deadlines, and preparation of shareholder meetings.',
    'services.s6.title': 'Technology & IT',
    'services.s6.desc': 'Infrastructure, access management, and security practices. Workflow automation, including AI where useful, and coordination of data protection requirements.',
    'services.s7.title': 'ERP & Business Systems',
    'services.s7.desc': 'Odoo implementation and customisation. Integration of customer, product, and quality management systems. Tool selection and migration planning.',
    'services.s8.title': 'Teams & Delivery Partners',
    'services.s8.desc': 'Organisation design, hiring plans, and clear responsibilities. Support for team leads, shared objectives, and oversight of suppliers and subcontractors.',
    'services.runbuild': '<strong>Keep today running. Build for tomorrow.</strong> Day-to-day operations and improvement projects move forward together, so your company can evolve without losing momentum.',
    'how.label': 'Working together',
    'how.h2': 'A clear path from priorities to execution',
    'how.step1.n': '01',
    'how.step1.t': 'Discovery',
    'how.step1.d': 'A 30-minute conversation about your company, operational priorities, and timeline. We assess whether the engagement is a good fit.',
    'how.step2.n': '02',
    'how.step2.t': 'Scope and proposal',
    'how.step2.d': 'A written proposal sets out responsibilities, objectives, weekly availability, fees, and review points. You know what to expect before we start.',
    'how.step3.n': '03',
    'how.step3.t': 'Integration and delivery',
    'how.step3.d': 'I join your team, lead the agreed functions, and report weekly to the CEO. Decision-making authority and escalation routes are defined at the outset.',
    'how.note': 'Engagements start at three months. Scope, availability, and review points are agreed in advance. I work with no more than two companies at a time.',
    'vision.label': 'How I make decisions',
    'vision.h2': 'Evidence-based management',
    'vision.intro': 'Good decisions combine the best available research, your company’s data, and practical experience. I make assumptions explicit, measure what matters, and adjust when the evidence changes.',
    'vision.manifesto': 'Be clear about what we know, what we assume, and what would change our minds. Act with the evidence available — then check the result.',
    'vision.v1.title': 'Results, not anecdotes',
    'vision.v1.desc': 'A success story can suggest an idea, but it does not establish cause and effect. I look for measurable outcomes and evidence that applies to your situation.',
    'vision.v2.title': 'Testable objectives',
    'vision.v2.desc': 'Before introducing a process or tool, we define the problem, the expected benefit, and how to assess it. A framework needs to earn its place.',
    'vision.v3.title': 'Update the assumptions',
    'vision.v3.desc': 'Plans start with assumptions about costs, timelines, and behaviour. We make them visible and revise them as new information arrives.',
    'vision.v4.title': 'Practical significance',
    'vision.v4.desc': 'A statistically significant result may still have little business value. We weigh the size of the benefit against cost, effort, uncertainty, and risk.',
    'vision.v5.title': 'Test before scaling',
    'vision.v5.desc': 'Independent replication builds confidence. Where evidence is limited, a proportionate pilot and clear review criteria are better than an unqualified rollout.',
    'vision.v6.title': 'Look for missing evidence',
    'vision.v6.desc': 'Published successes do not tell the whole story. I look for negative findings, conflicts of interest, and limits in the data before drawing conclusions.',
    'vision.blog_link': 'Explore the thinking behind this approach →',
    'about.label': 'Myself',
    'about.h2': 'Lionel ARNAUD',
    'about.role': 'Operations leader · Biotech & Deep-tech',
    'about.linkedin': 'View my LinkedIn profile ↗',
    'about.tag1': 'Operational leadership',
    'about.tag2': 'Non-dilutive funding',
    'about.tag3': 'Business systems',
    'about.tag4': 'Paris · France & Europe',
    'about.bio1': 'I bring a decade of operational leadership in biotech and deep-tech, including building operational infrastructure at Biomemory, a DNA data storage company. My experience also includes expert advisory work for Agoranov and the European Innovation Council’s EIC Accelerator programme.',
    'about.bio2': 'A postgraduate degree from Université Paris Dauphine and training in clinical trial design at Johns Hopkins University and computer science through Harvard’s CS50x inform my approach: connect scientific rigour with practical execution.',
    'about.bio3': 'Based in Paris, I work in French and English, remotely and on site across France and Europe.',
    'book.label': 'Next step',
    'book.h2': 'Let’s talk about your priorities',
    'book.intro': 'Tell me where your company is today and what needs to change. In 30 minutes, we can discuss your priorities and whether I can help. No preparation required.',
    'book.cta': 'Book a free 30-minute call',
    'book.or': 'or email me',
    'book.note': 'Calls in French or English. I respond to enquiries within one business day.',
    'faq.label': 'Questions',
    'faq.h2': 'Before we work together',
    'faq.q1': 'Who is this for?',
    'faq.a1': 'Deep-tech and biotech companies from Series A to C, typically with 10 to 80 people. The CEO needs to delegate operational leadership, but a full-time executive hire may not yet be the right fit.',
    'faq.q2': 'What is the minimum engagement?',
    'faq.a2': 'The minimum engagement is three months. Duration depends on your priorities and is agreed in the proposal. The aim is to build processes, support your team, and prepare a clear handover.',
    'faq.q3': 'Can you work with more than one company?',
    'faq.a3': 'I work with no more than two companies at a time. Weekly availability is agreed before the engagement starts. An exclusive engagement can be discussed if needed.',
    'faq.q4': 'Do you work remotely?',
    'faq.a4': 'Both remotely and on site. I am based in Paris and work across France and Europe, with travel and team presence agreed for each engagement.',
    'faq.q5': 'What does evidence-based mean in practice?',
    'faq.a5': 'I combine relevant research with your company’s data and practical experience. We state assumptions, define measurable outcomes, and review decisions when new information appears.',
    'faq.q6': 'How is the engagement priced?',
    'faq.a6': 'A monthly retainer reflects the agreed scope and time commitment. You receive a written proposal after our initial conversation. The discovery call is free.',
    'footer.copy': '© 2026 Dinnizer SAS — All rights reserved.',
    'blog.label': 'Insights',
    'blog.h2': 'Blog',
    'blog.intro': 'Perspectives on evidence-based management, deep-tech operations, and better business decisions. Articles are currently published in English.',
    'blog.empty': 'No articles yet.',
    'nav.back_blog': '← Blog',
    'page.home': 'Dinnizer — Fractional Deputy CEO for deep-tech',
    'page.blog': 'Blog — Dinnizer',
  },
  fr: {
    'nav.services': 'Services',
    'nav.vision': 'Approche',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.book': 'Prendre RDV',
    'nav.skip': 'Aller au contenu',
    'hero.label': 'Direction générale à temps partagé · Deeptech · Biotech',
    'hero.h1a': 'Vous avez construit la technologie.',
    'hero.h1b': 'Je construis l’entreprise autour.',
    'hero.sub': 'Un pilotage opérationnel concret pour les entreprises deeptech et biotech en croissance. Aux côtés du dirigeant, je prends en charge les finances, les équipes, les outils et l’exécution au quotidien, à temps partagé.',
    'hero.cta1': 'Réserver un appel découverte',
    'hero.cta2': 'Découvrir mes services →',
    'metrics.m1.n': '10+',
    'metrics.m1.l': 'ans de pilotage opérationnel',
    'metrics.m2.n': '3+',
    'metrics.m2.l': 'mois minimum par mission',
    'metrics.m3.n': 'A→C',
    'metrics.m3.l': 'entreprises de série A à C',
    'metrics.m4.n': 'FR / EN',
    'metrics.m4.l': 'collaboration bilingue',
    'problem.label': 'Pourquoi ça compte',
    'problem.h2': 'Faites grandir votre entreprise sans tout porter seul.',
    'problem.intro': 'Avec la croissance, la paie, la trésorerie, les contrats et les outils demandent un pilotage dédié. Je prends en charge le périmètre convenu pour vous permettre de vous concentrer sur votre technologie, vos clients et votre développement.',
    'problem.p1.title': 'Une vision financière claire',
    'problem.p1.desc': 'Prévisions de trésorerie, budgets et suivi des aides : disposez d’une vision à jour de vos ressources et engagements, avec un responsable identifié pour chaque échéance.',
    'problem.p2.title': 'Des obligations maîtrisées',
    'problem.p2.desc': 'Contrats, propriété intellectuelle et documents sociaux se préparent avant une levée de fonds ou un audit. Mobilisez les bons spécialistes et gardez la maîtrise des échéances critiques.',
    'problem.p3.title': 'Une direction adaptée à vos besoins',
    'problem.p3.desc': 'Vous avez besoin d’un dirigeant opérationnel expérimenté sans nécessairement recruter à temps plein. Une direction à temps partagé apporte un périmètre clair, une disponibilité convenue et un plan de passation.',
    'services.label': 'Domaines d’intervention',
    'services.h2': 'Les fonctions qui soutiennent votre croissance',
    'services.intro': 'Nous définissons ensemble les priorités. Je pilote leur mise en œuvre, rends compte directement au dirigeant et coordonne les équipes et les conseils spécialisés.',
    'services.s1.title': 'Finance & Trésorerie',
    'services.s1.desc': 'Prévisions de trésorerie, budgets et suivi financier. Achats et planification des investissements. Coordination avec les experts-comptables et les partenaires bancaires.',
    'services.s2.title': 'Financements non dilutifs',
    'services.s2.desc': 'Bpifrance, ANR, EIC Accelerator, Horizon Europe et CIR/CII. Identification des dispositifs, coordination des dossiers, suivi des financements et préparation des audits.',
    'services.s3.title': 'Ressources humaines',
    'services.s3.desc': 'Recrutement, intégration et évaluation des collaborateurs. Administration du personnel en droit français, coordination de la paie et appui des conseils spécialisés.',
    'services.s4.title': 'Juridique, PI & Réglementaire',
    'services.s4.desc': 'Suivi des contrats et du portefeuille de propriété intellectuelle. Préparation des levées de fonds et coordination des avocats, conseils en brevets et spécialistes réglementaires.',
    'services.s5.title': 'Administration & Moyens généraux',
    'services.s5.desc': 'Organisation administrative, fournisseurs, locaux et assurances. Documents sociaux, échéances déclaratives et préparation des assemblées générales.',
    'services.s6.title': 'Informatique & Automatisation',
    'services.s6.desc': 'Infrastructure, gestion des accès et pratiques de sécurité. Automatisation des tâches, avec l’IA lorsqu’elle est utile, et coordination des obligations de protection des données.',
    'services.s7.title': 'ERP & Outils de gestion',
    'services.s7.desc': 'Déploiement et personnalisation d’Odoo. Intégration des outils de gestion clients, produits et qualité. Choix des solutions et préparation des migrations.',
    'services.s8.title': 'Équipes & Prestataires',
    'services.s8.desc': 'Organisation, plan de recrutement et répartition des responsabilités. Accompagnement des managers, objectifs partagés et suivi des fournisseurs et sous-traitants.',
    'services.runbuild': '<strong>Gérer le quotidien et préparer la suite.</strong> Je mène les projets de structuration tout en assurant la continuité des opérations. Votre entreprise doit pouvoir évoluer sans s’arrêter.',
    'how.label': 'Notre collaboration',
    'how.h2': 'Une mission structurée en trois étapes',
    'how.step1.n': '01',
    'how.step1.t': 'Découverte',
    'how.step1.d': 'Un échange de 30 minutes sur votre entreprise, vos priorités opérationnelles et votre calendrier, pour déterminer si mon intervention est adaptée.',
    'how.step2.n': '02',
    'how.step2.t': 'Cadrage de la mission',
    'how.step2.d': 'Une proposition écrite précise les responsabilités, les objectifs, la disponibilité, les honoraires et les points de revue. Les attentes sont claires avant de démarrer.',
    'how.step3.n': '03',
    'how.step3.t': 'Intégration et exécution',
    'how.step3.d': 'Je rejoins votre équipe, pilote les fonctions convenues et fais un point hebdomadaire avec le dirigeant. Le pouvoir de décision et les modalités d’arbitrage sont fixés ensemble.',
    'how.note': 'Les missions démarrent à trois mois. Périmètre, disponibilité et points de revue sont convenus à l’avance. J’accompagne au maximum deux entreprises simultanément.',
    'vision.label': 'Ma méthode de décision',
    'vision.h2': 'Management fondé sur les preuves',
    'vision.intro': 'Une bonne décision combine les meilleures recherches disponibles, les données de votre entreprise et l’expérience du terrain. Je formule les hypothèses, mesure les résultats utiles et ajuste les choix lorsque les faits évoluent.',
    'vision.manifesto': 'Distinguer ce que nous savons, ce que nous supposons et ce qui nous ferait changer d’avis. Agir avec les informations disponibles, puis vérifier le résultat.',
    'vision.v1.title': 'Des résultats, pas des anecdotes',
    'vision.v1.desc': 'Une réussite peut inspirer une idée sans démontrer un lien de cause à effet. Je recherche des résultats mesurables et des données pertinentes pour votre situation.',
    'vision.v2.title': 'Des objectifs vérifiables',
    'vision.v2.desc': 'Avant d’introduire un processus ou un outil, nous définissons le problème, le bénéfice attendu et la manière de l’évaluer. Une méthode doit démontrer son utilité.',
    'vision.v3.title': 'Réviser les hypothèses',
    'vision.v3.desc': 'Tout plan repose sur des hypothèses de coûts, de délais et de comportements. Nous les rendons explicites et les révisons à mesure que les informations arrivent.',
    'vision.v4.title': 'Un impact concret',
    'vision.v4.desc': 'Un résultat statistiquement significatif n’est pas forcément utile à l’entreprise. Nous comparons le bénéfice attendu au coût, à l’effort, à l’incertitude et au risque.',
    'vision.v5.title': 'Tester avant de généraliser',
    'vision.v5.desc': 'Des réplications indépendantes renforcent la confiance. Lorsque les données sont limitées, mieux vaut un essai proportionné et des critères de revue clairs qu’un déploiement sans réserve.',
    'vision.v6.title': 'Chercher les données manquantes',
    'vision.v6.desc': 'Les réussites publiées ne racontent pas toute l’histoire. Je recherche aussi les résultats négatifs, les conflits d’intérêts et les limites des données avant de conclure.',
    'vision.blog_link': 'Approfondir cette approche sur le blog →',
    'about.label': 'Myself',
    'about.h2': 'Lionel ARNAUD',
    'about.role': 'Dirigeant opérationnel · Biotech & Deeptech',
    'about.linkedin': 'Voir mon profil LinkedIn ↗',
    'about.tag1': 'Direction opérationnelle',
    'about.tag2': 'Financements non dilutifs',
    'about.tag3': 'Outils de gestion',
    'about.tag4': 'Paris · France & Europe',
    'about.bio1': 'J’apporte dix ans de direction opérationnelle en biotech et deeptech, notamment chez Biomemory, spécialiste du stockage de données sur ADN, où j’ai construit l’infrastructure opérationnelle. Mon parcours comprend également des missions d’expertise pour Agoranov et le programme EIC Accelerator du Conseil européen de l’innovation.',
    'about.bio2': 'Diplômé de l’Université Paris Dauphine, j’ai complété mon parcours par des formations à la conception des essais cliniques à Johns Hopkins et à l’informatique avec le programme CS50x de Harvard. Mon approche relie rigueur scientifique et mise en œuvre concrète.',
    'about.bio3': 'Basé à Paris, je travaille en français et en anglais, à distance et sur site en France et en Europe.',
    'book.label': 'Prochaine étape',
    'book.h2': 'Parlons de vos priorités',
    'book.intro': 'Où en est votre entreprise et que souhaitez-vous faire évoluer ? En 30 minutes, échangeons sur vos priorités et sur l’aide que je peux vous apporter. Aucune préparation nécessaire.',
    'book.cta': 'Réserver un appel gratuit de 30 minutes',
    'book.or': 'ou écrivez-moi',
    'book.note': 'Échanges en français ou en anglais. Je réponds aux demandes sous un jour ouvré.',
    'faq.label': 'Questions',
    'faq.h2': 'Avant de travailler ensemble',
    'faq.q1': 'À quelles entreprises vous adressez-vous ?',
    'faq.a1': 'Aux entreprises deeptech et biotech de série A à C, généralement de 10 à 80 personnes. Le dirigeant a besoin de déléguer le pilotage opérationnel, sans nécessairement recruter un cadre dirigeant à temps plein.',
    'faq.q2': 'Quelle est la durée minimale d’une mission ?',
    'faq.a2': 'La durée minimale est de trois mois. Elle dépend de vos priorités et figure dans la proposition. L’objectif est de structurer les processus, accompagner votre équipe et préparer une passation claire.',
    'faq.q3': 'Pouvez-vous accompagner plusieurs entreprises ?',
    'faq.a3': 'Au maximum deux missions simultanées. La disponibilité hebdomadaire est convenue avant de démarrer. Une mission exclusive peut être envisagée selon vos besoins.',
    'faq.q4': 'Travaillez-vous à distance ?',
    'faq.a4': 'À distance et sur site. Basé à Paris, j’interviens en France et en Europe. Les déplacements et la présence auprès de l’équipe sont convenus pour chaque mission.',
    'faq.q5': 'Que signifie « fondé sur les preuves » en pratique ?',
    'faq.a5': 'Je confronte les recherches disponibles aux données de votre entreprise et à l’expérience du terrain. Nous formulons les hypothèses, définissons des résultats mesurables et revoyons les décisions lorsque de nouvelles informations apparaissent.',
    'faq.q6': 'Comment sont fixés les honoraires ?',
    'faq.a6': 'Les honoraires mensuels dépendent du périmètre et du temps consacré à la mission. Une proposition détaillée est établie après notre échange. L’appel découverte est gratuit.',
    'footer.copy': '© 2026 Dinnizer SAS — Tous droits réservés.',
    'blog.label': 'Analyses',
    'blog.h2': 'Blog',
    'blog.intro': 'Analyses sur le management fondé sur les preuves, les opérations deeptech et la qualité des décisions. Les articles sont actuellement publiés en anglais.',
    'blog.empty': 'Aucun article pour l’instant.',
    'nav.back_blog': '← Blog',
    'page.home': 'Dinnizer — Direction générale à temps partagé en deeptech',
    'page.blog': 'Blog — Dinnizer',
  },
};

const DEFAULT_LANG = 'en';

function setLang(lang) {
  if (!Object.hasOwn(TRANSLATIONS, lang)) lang = DEFAULT_LANG;
  // Articles retain their original language; only the surrounding UI changes.
  document.documentElement.lang = document.body.dataset.contentLang || lang;
  try { localStorage.setItem('dinnizer-lang', lang); } catch { /* Storage may be blocked. */ }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[lang][el.getAttribute('data-i18n')];
    if (val === undefined) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
    el.lang = lang;
  });
  const titleKey = document.querySelector('[data-i18n-title]')?.getAttribute('data-i18n-title');
  if (titleKey && TRANSLATIONS[lang][titleKey]) document.title = TRANSLATIONS[lang][titleKey];
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = DEFAULT_LANG;
  try { saved = localStorage.getItem('dinnizer-lang') || DEFAULT_LANG; } catch { /* Use English. */ }
  setLang(saved);
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    };
    hamburger.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', String(navLinks.classList.toggle('open')));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('nav')) closeMenu();
    });
  }
});
