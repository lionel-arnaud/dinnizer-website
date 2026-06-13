/* Dinnizer — bilingual EN/FR toggle. No dependencies. */

/* ─── replace this with your actual Cal.com username once set up ─── */
const CAL_LINK = "dinnizer/discovery-30min";
/* ─────────────────────────────────────────────────────────────────── */

const TRANSLATIONS = {
  en: {
    /* Nav */
    'nav.services':  'Services',
    'nav.vision':    'Vision',
    'nav.blog':      'Blog',
    'nav.book':      'Book a call',

    /* Hero */
    'hero.label':    'Fractional Deputy CEO · Deep-tech · Biotech',
    'hero.h1a':      'You built the technology.',
    'hero.h1b':      "I'll build the company around it.",
    'hero.sub':      'Finance, HR, Legal, Admin, IT, and Regulatory — owned and delivered. Not advised.',
    'hero.cta1':     'Book a discovery call',
    'hero.cta2':     'See what I cover →',

    /* Metrics strip */
    'metrics.m1.n': '10+',
    'metrics.m1.l': 'years in deep-tech ops',
    'metrics.m2.n': '3–36',
    'metrics.m2.l': 'month mandates',
    'metrics.m3.n': 'A→C',
    'metrics.m3.l': 'series covered',
    'metrics.m4.n': '100%',
    'metrics.m4.l': 'operational ownership',

    /* Problem */
    'problem.label': 'Why it matters',
    'problem.h2':    'Operations don\'t run themselves. But they shouldn\'t run you either.',
    'problem.intro': 'Every month a founder spends on payroll, compliance, vendor negotiations, and IT firefighting is a month not spent on the product, the science, or the market. The cost is invisible — until it isn\'t.',
    'problem.p1.title': 'Finance consumes founders',
    'problem.p1.desc':  'Cash flow gaps, CAC accounting, statutory filings, grant reporting — individually manageable, collectively exhausting. One missed BPI reporting deadline costs more than six months of a fractional CFO.',
    'problem.p2.title': 'Regulatory and legal drift',
    'problem.p2.desc':  'IP not registered at the right moment. A KBIS anomaly spotted in a data room. A contractor misclassified. In deep-tech, the operational fabric of the company is also its valuation narrative.',
    'problem.p3.title': 'The headcount dilemma',
    'problem.p3.desc':  'A full-time Deputy CEO is expensive and hard to reverse. A consultant gives advice you have to implement yourself. A fractional operator takes ownership — and hands it back when the company is ready.',

    /* Services */
    'services.label':  'Scope of work',
    'services.h2':     'Everything between the product and the cap table',
    'services.intro':  'I take full ownership of the internal functions that don\'t generate revenue but determine survival. Reporting to the CEO, accountable for results.',
    'services.s1.title': 'Finance & Cash Management',
    'services.s1.desc':  'Cash flow modelling and forecasting. P&L supervision. Purchasing optimisation. CapEx planning. Statutory accounts coordination. Bank relationships.',
    'services.s2.title': 'Non-dilutive Funding',
    'services.s2.desc':  'BPI France, ANR, EIC Accelerator, Horizon Europe, CIR/CII — sourcing, structuring, writing, and reporting. From first application to audit defence.',
    'services.s3.title': 'HR & People Operations',
    'services.s3.desc':  'Hiring process design. Employment contracts under French labour law. Onboarding. Performance frameworks. Payroll coordination. Labour compliance and social audit prep.',
    'services.s4.title': 'Legal, IP & Regulatory',
    'services.s4.desc':  'Contract lifecycle management. IP filing strategy and portfolio oversight. Regulatory pathways (CE marking, FDA pre-submission). Fundraising legal coordination.',
    'services.s5.title': 'Administration & Office',
    'services.s5.desc':  'Back-office structuring. Vendor and supplier management. Facilities and leases. Insurance. Corporate housekeeping (KBIS, statutes, AGM).',
    'services.s6.title': 'Technology & IT',
    'services.s6.desc':  'Infrastructure and sysadmin. Security baselines and access management. AI workflow automation. Data governance and GDPR compliance.',
    'services.s7.title': 'ERP & Tooling',
    'services.s7.desc':  'Odoo implementation and customisation. CRM, PLM, QMS integration. Tool rationalisation and migration planning.',
    'services.s8.title': 'Team & Contractor Management',
    'services.s8.desc':  'Org design and hiring roadmap. OKR framework implementation. Subcontractor supervision and audit. Supplier KPIs. Management of management.',
    'services.runbuild':  '<strong>Run & Build — simultaneously.</strong> Operational continuity (run) and transformation projects (build) managed in parallel. Because a company at Series B cannot stop while it reorganises.',

    /* How it works */
    'how.label':    'Engagement model',
    'how.h2':       'Three steps to embedded leadership',
    'how.step1.n':  '01',
    'how.step1.t':  'Discovery',
    'how.step1.d':  'A 30-minute call to map your operational gaps, priorities, and timeline. No pitch, no deck — a structured diagnostic conversation.',
    'how.step2.n':  '02',
    'how.step2.t':  'Scoped proposal',
    'how.step2.d':  'A written proposal specifying scope, KPIs, reporting structure, and duration. Fixed mandate or rolling monthly — your choice.',
    'how.step3.n':  '03',
    'how.step3.t':  'Embedded mandate',
    'how.step3.d':  'I join the team, take ownership of the agreed functions, and operate with the authority of a C-suite member. Weekly reporting to the CEO.',
    'how.note':     'Typical mandate length: 3 to 18 months. I carry a maximum of two mandates simultaneously to ensure full availability.',

    /* Vision */
    'vision.label':  'Editorial line',
    'vision.h2':     'Evidence-based management',
    'vision.intro':  'Management is full of practices selected on the basis of narrative, intuition, and peer pressure. I apply to operational decisions the same standard I would apply to a clinical study: what does the replicated evidence actually say?',
    'vision.manifesto': 'This is not a rejection of judgement — it is a demand that judgement be calibrated. Assumptions stated. Priors updated. Effect sizes checked against operational relevance, not just statistical significance.',
    'vision.v1.title': 'Effect sizes, not anecdotes',
    'vision.v1.desc':  'Business biographies are not evidence. Case studies are hypotheses at best. Interventions are evaluated on replicated effect sizes across heterogeneous samples.',
    'vision.v2.title': 'No unfalsifiable frameworks',
    'vision.v2.desc':  'Personality assessments with no predictive validity. Transformation programmes with no measurable outcome. Culture decks accountable to no one. These do not have a place here.',
    'vision.v3.title': 'Bayesian updating',
    'vision.v3.desc':  'Prior beliefs are stated explicitly and revised proportionally to the strength of incoming evidence. The first study is a hypothesis. A tenth independent replication is closer to policy.',
    'vision.v4.title': 'Clinical significance over p-values',
    'vision.v4.desc':  '"Statistically significant" does not mean operationally meaningful. A 0.1% absolute risk increase that "doubles your risk" is not worth reorganising your company for.',
    'vision.v5.title': 'Replication before adoption',
    'vision.v5.desc':  'Initial effect sizes systematically decline with subsequent replications (the decline effect). We do not implement practices because a TED talk was persuasive.',
    'vision.v6.title': 'Publication bias is the baseline',
    'vision.v6.desc':  'Positive results are published. Negative results are filed. In management research as in medicine, the visible literature overstates effects by construction. Adjust accordingly.',
    'vision.blog_link': 'Read the full argument on the blog →',

    /* About */
    'about.label':    'The person',
    'about.h2':       'Lionel Arnaud',
    'about.role':     'Operations leader · Biotech & Deep-tech',
    'about.bio1':     'A decade of operational leadership in biotech and deep-tech — including Biomemory (DNA data storage), where he built the company\'s operational infrastructure from early stage. Expert advisor for Agoranov (Paris\'s leading deeptech incubator) and the European Innovation Council EIC Accelerator programme.',
    'about.bio2':     'Trained in clinical trial design (Johns Hopkins University) and computer science (Harvard CS50X), with a postgraduate degree from Université Paris Dauphine. The same epistemological rigour he applies in scientific due diligence — distinguishing prior probability, effect size, and replication from statistical noise — is what he brings to operational mandates.',
    'about.bio3':     'Bilingual French–English. Based in Paris. Available for remote and on-site mandates across France and Europe.',

    /* Booking */
    'book.label':   'Next step',
    'book.h2':      'Book a discovery call',
    'book.intro':   'Thirty minutes. No deck. A structured conversation about where your operations are today and what they need to look like in six months.',
    'book.cta':     'Schedule a 30-min call',
    'book.or':      'or write to',
    'book.note':    'I respond within one business day. Calls available in French and English.',

    /* FAQ */
    'faq.label':    'Questions',
    'faq.h2':       'Common questions',
    'faq.q1':       'Who is a typical client?',
    'faq.a1':       'Series A to C deep-tech or biotech ventures — typically 10 to 80 people — where the CEO is doing operational work that should be delegated but where hiring a full-time C-suite is premature or undesirable.',
    'faq.q2':       'What is the minimum engagement?',
    'faq.a2':       '3 months. Most mandates run 9 to 18 months. The goal is always to make myself redundant: build the process, train the team, hand over.',
    'faq.q3':       'Can you take on more than one company at a time?',
    'faq.a3':       'Maximum two mandates simultaneously, to preserve genuine availability. One mandate in deep focus is possible on request.',
    'faq.q4':       'Do you work remotely?',
    'faq.a4':       'Both. I embed on-site for the first weeks of any mandate and adapt to the rhythm of the team thereafter. On-site availability: Paris region. Remote: anywhere.',
    'faq.q5':       'What does "evidence-based" mean concretely?',
    'faq.a5':       'It means I will not implement a management framework because it is fashionable. I will not recommend a tool because a conference speaker praised it. Decisions are grounded in replicated evidence, stated assumptions, and measurable outcomes. More on the blog.',
    'faq.q6':       'What does this cost?',
    'faq.a6':       'Pricing is structured as a monthly retainer proportional to scope and time commitment. Contact me for a scoped proposal — the discovery call is free.',

    /* Footer */
    'footer.copy':   '© 2026 Dinnizer SAS — All rights reserved.',

    /* Blog page */
    'blog.label':   'Insights',
    'blog.h2':      'Blog',
    'blog.intro':   'Long-form articles on evidence-based management, deep-tech operations, and the epistemology of business decisions.',
    'blog.empty':   'No articles yet.',

    /* Nav blog back */
    'nav.back_blog': '← Blog',

    /* Page titles */
    'page.home':    'Dinnizer — Fractional Deputy CEO for deep-tech',
    'page.blog':    'Blog — Dinnizer',
  },

  fr: {
    'nav.services': 'Services',
    'nav.vision':   'Vision',
    'nav.blog':     'Blog',
    'nav.book':     'Prendre RDV',

    'hero.label':   'Deputy CEO freelance · Deeptech · Biotech',
    'hero.h1a':     'Vous avez construit la technologie.',
    'hero.h1b':     "Je construis l'entreprise autour.",
    'hero.sub':     'Finance, RH, Juridique, Admin, IT, Réglementaire — pris en charge et livrés. Pas simplement conseillés.',
    'hero.cta1':    'Réserver un appel découverte',
    'hero.cta2':    'Voir ce que je couvre →',

    'metrics.m1.n': '10+',
    'metrics.m1.l': "ans en opérations deeptech",
    'metrics.m2.n': '3–36',
    'metrics.m2.l': 'mois de mandat',
    'metrics.m3.n': 'A→C',
    'metrics.m3.l': 'séries couvertes',
    'metrics.m4.n': '100%',
    'metrics.m4.l': 'responsabilité opérationnelle',

    'problem.label': 'Pourquoi ça compte',
    'problem.h2':    "Les opérations ne se gèrent pas toutes seules. Mais elles ne devraient pas non plus vous gérer.",
    'problem.intro': "Chaque mois qu'un fondateur passe sur la paie, la conformité, les négociations fournisseurs et les urgences IT est un mois de moins consacré au produit, à la science ou au marché. Le coût est invisible — jusqu'au moment où il ne l'est plus.",
    'problem.p1.title': 'La finance consume les fondateurs',
    'problem.p1.desc':  "Flux de trésorerie, comptabilité des coûts d'acquisition, dépôts statutaires, rapports de subventions — individuellement gérables, collectivement épuisants. Un délai de reporting BPI manqué coûte plus que six mois de DAF fractionnel.",
    'problem.p2.title': 'Dérive juridique et réglementaire',
    'problem.p2.desc':  "PI non déposée au bon moment. Une anomalie KBIS relevée en data room. Un prestataire mal qualifié. En deeptech, le tissu opérationnel de l'entreprise est aussi son narratif de valorisation.",
    'problem.p3.title': 'Le dilemme des effectifs',
    'problem.p3.desc':  "Un Deputy CEO à temps plein est coûteux et difficile à réversibiliser. Un consultant donne des conseils que vous devez implémenter vous-même. Un opérateur fractionnel prend la responsabilité — et la restitue quand l'entreprise est prête.",

    'services.label': 'Périmètre',
    'services.h2':    'Tout ce qui se passe entre le produit et le cap table',
    'services.intro': "Je prends la pleine responsabilité des fonctions internes qui ne génèrent pas de revenus mais conditionnent la survie. Reportant au CEO, engagé sur les résultats.",
    'services.s1.title': 'Finance & Trésorerie',
    'services.s1.desc':  "Modélisation et prévision des flux de trésorerie. Supervision du P&L. Optimisation des achats. Planification du CapEx. Coordination des comptes annuels. Relations bancaires.",
    'services.s2.title': 'Financements non-dilutifs',
    'services.s2.desc':  "BPI France, ANR, EIC Accelerator, Horizon Europe, CIR/CII — sourcing, montage, rédaction et reporting. Du premier dossier à la défense d'audit.",
    'services.s3.title': 'RH & Gestion des personnes',
    'services.s3.desc':  "Conception du processus de recrutement. Contrats de travail (droit du travail français). Onboarding. Dispositifs d'évaluation. Coordination de la paie. Conformité sociale et préparation d'audit.",
    'services.s4.title': 'Juridique, PI & Réglementaire',
    'services.s4.desc':  "Gestion du cycle de vie contractuel. Stratégie de dépôt PI et suivi du portefeuille. Parcours réglementaires (marquage CE, pré-soumission FDA). Coordination juridique levée de fonds.",
    'services.s5.title': 'Administration & Office',
    'services.s5.desc':  "Structuration du back-office. Gestion des fournisseurs et prestataires. Locaux et baux. Assurances. Secrétariat juridique (KBIS, statuts, AG).",
    'services.s6.title': 'Technologie & IT',
    'services.s6.desc':  "Infrastructure et sysadmin. Référentiels de sécurité et gestion des accès. Automatisation par IA. Gouvernance des données et conformité RGPD.",
    'services.s7.title': 'ERP & Outils',
    'services.s7.desc':  "Implémentation et personnalisation d'Odoo. Intégration CRM, PLM, QMS. Rationalisation et migration des outils.",
    'services.s8.title': 'Management équipes & prestataires',
    'services.s8.desc':  "Design organisationnel et plan de recrutement. Mise en place des OKR. Supervision et audit des sous-traitants. KPIs fournisseurs. Management du management.",
    'services.runbuild':  "<strong>Run & Build — simultanément.</strong> Continuité opérationnelle (run) et projets de transformation (build) gérés en parallèle. Parce qu'une société en Série B ne peut pas s'arrêter pendant qu'elle se réorganise.",

    'how.label':    "Modèle d'engagement",
    'how.h2':       'Trois étapes vers un leadership embarqué',
    'how.step1.n':  '01',
    'how.step1.t':  'Découverte',
    'how.step1.d':  "Un appel de 30 minutes pour cartographier vos lacunes opérationnelles, vos priorités et votre calendrier. Pas de pitch, pas de deck — une conversation diagnostique structurée.",
    'how.step2.n':  '02',
    'how.step2.t':  'Proposition délimitée',
    'how.step2.d':  "Une proposition écrite précisant le périmètre, les KPIs, la structure de reporting et la durée. Mandat fixe ou mensuel reconductible — à votre choix.",
    'how.step3.n':  '03',
    'how.step3.t':  'Mandat embarqué',
    'how.step3.d':  "Je rejoins l'équipe, prends la responsabilité des fonctions convenues et opère avec l'autorité d'un membre du comité de direction. Reporting hebdomadaire au CEO.",
    'how.note':     "Durée de mandat typique : 3 à 18 mois. Je mène au maximum deux mandats simultanément pour garantir une disponibilité réelle.",

    'vision.label':  'Ligne éditoriale',
    'vision.h2':     'Management fondé sur les preuves',
    'vision.intro':  "Le management regorge de pratiques choisies sur la base du récit, de l'intuition et de la pression des pairs. J'applique aux décisions opérationnelles le même standard qu'à une étude clinique : que dit réellement l'évidence répliquée ?",
    'vision.manifesto': "Ce n'est pas un rejet du jugement — c'est une exigence que ce jugement soit calibré. Hypothèses formulées. Priors mis à jour. Tailles d'effet vérifiées au regard de leur pertinence opérationnelle, pas seulement de leur significativité statistique.",
    'vision.v1.title': "Tailles d'effet, pas anecdotes",
    'vision.v1.desc':  "Les biographies de fondateurs ne sont pas des preuves. Les études de cas sont au mieux des hypothèses. Les interventions sont évaluées sur des tailles d'effet répliquées sur des échantillons hétérogènes.",
    'vision.v2.title': 'Pas de cadres infalsifiables',
    'vision.v2.desc':  "Tests de personnalité sans validité prédictive. Programmes de transformation sans résultat mesurable. Culture decks sans responsabilisation. Ces approches n'ont pas leur place ici.",
    'vision.v3.title': 'Mise à jour bayésienne',
    'vision.v3.desc':  "Les croyances préalables sont formulées explicitement et révisées proportionnellement à la force des nouvelles preuves. La première étude est une hypothèse. Une dixième réplication indépendante se rapproche d'une politique.",
    'vision.v4.title': 'Pertinence clinique vs p-values',
    'vision.v4.desc':  '"Statistiquement significatif" ne signifie pas "opérationnellement pertinent". Une augmentation absolue du risque de 0,1% qui "double votre risque" ne vaut pas une réorganisation.',
    'vision.v5.title': 'Réplication avant adoption',
    'vision.v5.desc':  "Les tailles d'effet initiales diminuent systématiquement avec les réplications ultérieures (decline effect). Nous n'implémentons pas de pratiques parce qu'un TED talk était convaincant.",
    'vision.v6.title': "Le biais de publication est la norme",
    'vision.v6.desc':  "Les résultats positifs sont publiés. Les résultats négatifs sont classés. En recherche managériale comme en médecine, la littérature visible surestime les effets par construction. À ajuster en conséquence.",
    'vision.blog_link': 'Lire l\'argument complet sur le blog →',

    'about.label':   'La personne',
    'about.h2':      'Lionel Arnaud',
    'about.role':    'Dirigeant opérationnel · Biotech & Deeptech',
    'about.bio1':    "Dix ans de direction opérationnelle en biotech et deeptech — dont Biomemory (stockage de données sur ADN), où il a construit l'infrastructure opérationnelle de l'entreprise dès les premiers stades. Expert pour Agoranov (premier incubateur deeptech de Paris) et le programme EIC Accelerator du Conseil Européen de l'Innovation.",
    'about.bio2':    "Formé à la conception des essais cliniques (Université Johns Hopkins) et à l'informatique (Harvard CS50X), diplômé de l'Université Paris Dauphine. La même rigueur épistémologique qu'il applique dans la due diligence scientifique — distinguer probabilité a priori, taille d'effet et réplication du bruit statistique — est ce qu'il apporte aux mandats opérationnels.",
    'about.bio3':    "Bilingue français–anglais. Basé à Paris. Disponible pour des mandats à distance et sur site en France et en Europe.",

    'book.label':  'Prochaine étape',
    'book.h2':     'Réserver un appel découverte',
    'book.intro':  "Trente minutes. Pas de deck. Une conversation structurée sur l'état actuel de vos opérations et ce à quoi elles doivent ressembler dans six mois.",
    'book.cta':    'Planifier un appel de 30 min',
    'book.or':     'ou écrire à',
    'book.note':   "Je réponds dans un délai d'un jour ouvré. Appels disponibles en français et en anglais.",

    'faq.label':   'Questions',
    'faq.h2':      'Questions fréquentes',
    'faq.q1':      'Qui est un client typique ?',
    'faq.a1':      "Des startups deeptech ou biotech en Série A à C — typiquement 10 à 80 personnes — où le CEO fait du travail opérationnel qui devrait être délégué, mais où recruter un C-suite à plein temps est prématuré ou indésirable.",
    'faq.q2':      "Quelle est la durée minimale d'engagement ?",
    'faq.a2':      "3 mois. La plupart des mandats durent 9 à 18 mois. L'objectif est toujours de me rendre inutile : construire le processus, former l'équipe, transférer.",
    'faq.q3':      'Pouvez-vous prendre plusieurs entreprises en même temps ?',
    'faq.a3':      "Maximum deux mandats simultanément, pour préserver une disponibilité réelle. Un mandat en focus total est possible sur demande.",
    'faq.q4':      'Travaillez-vous à distance ?',
    'faq.a4':      "Les deux. Je m'intègre sur site durant les premières semaines de tout mandat et m'adapte ensuite au rythme de l'équipe. Disponibilité sur site : région parisienne. À distance : partout.",
    'faq.q5':      'Que signifie concrètement "fondé sur les preuves" ?',
    'faq.a5':      "Cela signifie que je n'implémenterai pas un cadre de management parce qu'il est à la mode. Je ne recommanderai pas un outil parce qu'un conférencier l'a vanté. Les décisions sont ancrées dans des preuves répliquées, des hypothèses formulées et des résultats mesurables. Plus de détails sur le blog.",
    'faq.q6':      'Quel est le coût ?',
    'faq.a6':      "La tarification est structurée en honoraires mensuels proportionnels au périmètre et au taux d'implication. Contactez-moi pour une proposition délimitée — l'appel découverte est gratuit.",

    'footer.copy':  '© 2026 Dinnizer SAS — Tous droits réservés.',

    'blog.label':  'Insights',
    'blog.h2':     'Blog',
    'blog.intro':  "Articles de fond sur le management fondé sur les preuves, les opérations deeptech et l'épistémologie des décisions d'entreprise.",
    'blog.empty':  "Aucun article pour l'instant.",

    'nav.back_blog': '← Blog',

    'page.home':   'Dinnizer — Deputy CEO freelance pour le deeptech',
    'page.blog':   'Blog — Dinnizer',
  }
};

const DEFAULT_LANG = 'en';

/* ─── Cal.com inline embed init ─── */
function initCalEmbed() {
  const el = document.getElementById('cal-inline');
  if (!el) return;
  if (CAL_LINK === 'dinnizer/discovery-30min') {
    /* Cal.com not yet configured — show the fallback CTA */
    el.style.display = 'none';
    const fb = document.getElementById('cal-fallback');
    if (fb) fb.style.display = 'flex';
    return;
  }
  (function(C,A,L){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments);};const ns=ar[1];api.q=api.q||[];typeof ns==="string"?(cal.ns[ns]=api)&&p(api,ar):p(cal,ar);return;}p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");
  Cal("init","discovery",{origin:"https://cal.com"});
  Cal.ns.discovery("inline",{
    elementOrSelector:"#cal-inline",
    calLink: CAL_LINK,
    layout:"month_view",
    theme:"light",
  });
  Cal.ns.discovery("ui",{styles:{branding:{brandColor:"#2E86C1"}},hideEventTypeDetails:false});
}

/* ─── i18n engine ─── */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  document.documentElement.lang = lang;
  localStorage.setItem('dinnizer-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key];
    if (val === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(() => {
    const key = document.querySelector('[data-i18n-title]')?.getAttribute('data-i18n-title');
    const val = key && TRANSLATIONS[lang][key];
    if (val) document.title = val;
  });

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dinnizer-lang') || DEFAULT_LANG;
  setLang(saved);

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* Mobile nav */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* Smooth FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  initCalEmbed();
});
