import { useState, useEffect } from "react";
import "./App.css";

// ─── LOGO ────────────────────────────────────────────────────
// Remplace "/logo.png" par le chemin de ton fichier (dans /public ou /src/assets)
function Logo({ size }) {
  return (
    <img
      src="/logo.png"
      alt="NoveliaTech"
      style={{ display: "block", height: size * 0.20, width: "auto" }}
    />
  );
}

// ─── DATA ─────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Accueil", page: "Accueil" },
  { label: "Solutions", page: "Solutions" },
  { label: "Couverture", page: "Couverture" },
  { label: "Actualités", page: "Actualites" },
];

const CHALLENGES = [
  {
    title: "Réservations fragmentées",
    body: "Vos canaux de vente, vos partenaires et vos stocks vivent dans des systèmes qui ne se parlent pas. NoveliaTech centralise l'ensemble sur une seule infrastructure — sans expertise requis.",
  },
  {
    title: "Intégration technique trop lourde",
    body: "Connectez-vous via API , ou utilisez notre Extranet visuel . Vous vendez dès la configuration terminée, pas dans plusieurs mois.",
  },
  {
    title: "Coûts d'acquisition qui s'envolent",
    body: "Des outils publicitaires ciblés et mesurables pour atteindre les bons voyageurs, sans gaspiller votre budget marketing.",
  },
  {
    title: "Données dispersées, décisions à l'aveugle",
    body: "Réservations, performance, partenaires : tout est réuni dans des tableaux de bord lisibles, mis à jour en temps réel.",
  },
];

const MODULES = [
  { tag: "Fournisseurs & Hôteliers", icon: "🏨", title: "Extranet & Channel Manager", body: "Gérez manuellement votre hôtel, vos disponibilités et factures via notre interface, ou laissez notre Channel Manager se synchroniser automatiquement avec vos outils." },
  { tag: "Distributeurs", icon: "🧳", title: "Booking Engine B2B", body: "Accédez à un vaste catalogue mondial de contenus de voyage et intégrez-le instantanément dans vos plateformes de vente existantes." },
  { tag: "Agrégateurs", icon: "🔗", title: "Hub de Connectivité API", body: "Centralisez diverses sources de données (OTA, GDS, Extranet) et redistribuez l'ensemble via une API unique et unifiée vers vos partenaires." },
  { tag: "Tous profils", icon: "📊", title: "Analyse Financière", body: "Un outil puissant pour piloter l'aspect financier : suivi des marges en temps réel, gestion comptable, facturation et génération de rapports personnalisés." },
  { tag: "Intégration", icon: "⚙️", title: "API & Connecteurs", body: "REST API documentée, webhooks, SDK disponibles. Intégration rapide avec vos systèmes existants (PMS, CRS, ERP)." },
  { tag: "Support", icon: "🎧", title: "Accompagnement dédié", body: "Un account manager technique à votre écoute, des SLA garantis et une équipe support réactive 5j/7." },
];

const PILLARS = [
  {
    icon: "🔌",
    title: "Connectivité hybride",
    body: "API documentée pour une automatisation totale, ou Extranet visuel pour tout gérer . La seule plateforme qui s'adapte à votre niveau technique, pas l'inverse.",
  },
  {
    icon: "⚡",
    title: "Mise en vente immédiate",
    body: " Configurez votre catalogue en quelques heures et commencez à recevoir des réservations dès le premier jour.",
  },
  {
    icon: "🌍",
    title: "Réseau B2B actif",
    body: "Accédez à un réseau de partenaires déjà opérationnel — hôtels, distributeurs, agrégateurs — dans plus de 40 pays, sans prospection à froid.",
  },
];

const PROOF_STATS = [
  { num: "150+", label: "Partenaires actifs" },
  { num: "40+", label: "Pays couverts" },
  { num: "99,9%", label: "Disponibilité SLA" },
  { num: "<200ms", label: "Temps de réponse API" },
  { num: "20 ans", label: "D'expertise B2B" },
];

const LOGOS = ["Hilton", "Tulip Inn", "Sunhotel", "Dida", "DOTW", "El Comparador", "IDH Mall", "Expedia Partner"];

const STEPS = [
  { title: "Inscrivez votre entreprise", body: "Créez votre compte partenaire en quelques minutes. Notre équipe valide votre accès sous 24 à 48h — sans engagement requis." },
  { title: "Configurez votre offre à votre rythme", body: "Connectez votre PMS via API pour une synchronisation automatique, ou saisissez vos produits via notre Extranet visuel si vous n'avez pas de système." },
  { title: "Publiez et soyez visible immédiatement", body: "Votre offre est exposée en temps réel à un réseau de 150+ partenaires actifs dans plus de 40 pays." },
  { title: "Développez votre activité avec des données claires", body: "Suivez vos ventes, votre taux de conversion et vos revenus depuis un tableau de bord unique, et ajustez votre stratégie en continu." },
];

const NEWS = [
  
  {
    date: "Mai 2026",
    title: "NoveliaTech rejoint le salon du tourisme professionnel à Alger",
    excerpt: "Présentation de la plateforme aux agences et tour-opérateurs régionaux.",
  },
  {
    date: "Avril 2026",
    title: "Nouveau partenariat avec un réseau hôtelier européen",
    excerpt: "Extension de la couverture de disponibilités pour les partenaires NoveliaTech.",
  },
];

const COVERAGE_ROWS = [
  { region: "Europe de l'Ouest", detail: "Couverture hôtelière et agences partenaires" },
  { region: "Afrique du Nord", detail: "Implantation historique du groupe IDH" },
  { region: "Moyen-Orient", detail: "Réseau de distribution en développement" },
  { region: "Reste du monde", detail: "Connectivité via partenaires API" },
];

const TESTIMONIALS = [
  {
    quote: "En tant qu'hôtelier indépendant, je n'avais pas de logiciel complexe. L'Extranet graphique de NoveliaTech m'a permis d'insérer mes chambres et mes tarifs en une matinée, sans aucune aide technique.",
    name: "Laurent Moreau",
    role: "Directeur — Le Relais Alpin",
    result: "Mise en vente en moins de 24h",
  },
  {
    quote: "La qualité de l'API est impressionnante. Notre petite équipe technique a intégré l'ensemble de notre catalogue en quelques jours, sans recrutement supplémentaire.",
    name: "María López",
    role: "Head of Tech — Travelia OTA",
    result: "Intégration complète en quelques jours",
  },
  {
    quote: "Le back-office est limpide. Nous gérons nos marges B2B et l'ensemble de notre facturation depuis un seul endroit — un vrai gain de temps pour nos équipes.",
    name: "Karim Azoulay",
    role: "Directeur Produit — VoyagesPro",
    result: "Facturation et marges centralisées",
  },
];

const FAQS = [
  { q: "Puis-je utiliser NoveliaTech si je n'ai pas de logiciel de gestion (PMS) ?", a: "Oui. Notre Extranet visuel vous permet de gérer entièrement votre offre — chambres, tarifs, disponibilités — sans système existant et sans compétence technique." },
  { q: "Comment fonctionne l'intégration si je possède déjà un système ?", a: "Vous connectez votre PMS, GDS ou ERP via notre API documentée (REST, webhooks). La synchronisation des stocks et tarifs devient automatique." },
  { q: "La facturation est-elle gérée sur la plateforme ?", a: "Oui, la facturation et le suivi des marges sont centralisés dans un tableau de bord unique, exportable en comptabilité." },
  { q: "Quels types de services voyage puis-je vendre ou distribuer ?", a: "Hôtels, vols, transferts, activités et séjours complets — en tant que fournisseur, distributeur ou agrégateur." },
  { q: "Quel est le modèle tarifaire ?", a: "Contactez notre équipe pour une offre adaptée à votre volume d'activité et à votre profil (fournisseur, distributeur, agrégateur)." },
];

// ─── NAVBAR ───────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (p) => { setPage(p); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <nav className={`nav${scrolled ? " nav--solid" : ""}`}>
      <div className="nav__wrap">
        <button className="nav__logo-btn" onClick={() => go("Accueil")}>
          <Logo size={160} />
        </button>
        <ul className={`nav__links${open ? " is-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button className={`nav__link${page === l.page ? " is-active" : ""}`} onClick={() => go(l.page)}>
                {l.label}
              </button>
            </li>
          ))}
          <li className="nav__mobile-actions">
            <button className="nav__btn nav__btn--outline" onClick={() => go("Login")}>
              S'identifier
            </button>
            <button className="nav__btn nav__btn--primary" onClick={() => go("Signup")}>
              Devenir partenaire
            </button>
          </li>
        </ul>
        <div className="nav__actions">
          <button className="nav__btn nav__btn--outline" onClick={() => go("Login")}>
            S'identifier
          </button>
          <button className="nav__btn nav__btn--primary" onClick={() => go("Signup")}>
            Devenir partenaire
          </button>
        </div>
        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer({ setPage }) {
  const links = ["Accueil", "Solutions", "Couverture", "Actualités"];
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo-wrap"><Logo size={140} /></div>
          <p>Le hub de connectivité B2B pour le voyage. Une infrastructure pensée pour les professionnels — sécurisée, connectée et déployée à l'échelle internationale.</p>
          <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social">in</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social">f</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social">▶</a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {links.map(l => (
              <li key={l}>
                <button onClick={() => setPage(l)}>{l}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Ressources</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>✉ <a href="mailto:contact@noveliatech.com">contact@noveliatech.com</a></li>
            <li>📞 <a href="tel:+33999999999">+33 1 99 99 99 99</a></li>
            <li>📍 Paris, France</li>
          </ul>
          <div className="footer__newsletter">
            <h4>Newsletter</h4>
            <div className="footer__nl">
              <input type="email" placeholder="Votre email" />
              <button onClick={() => alert("Merci pour votre inscription !")}>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 NoveliaTech. Tous droits réservés.</span>
        <span>B2B · Technologie · Voyage</span>
      </div>
    </footer>
  );
}

// ─── PAGE ACCUEIL ──────────────────────────────────────────────
function PageAccueil({ setPage }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero hero--novelia hero--centered">
        <div className="hero__background">
          <div className="hero__image-wrapper">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=1920&h=1080&fit=crop&crop=center"
              alt="Voyage d'affaires B2B"
              className="hero__image"
            />
          </div>
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__bg">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__dots" />
        </div>
        
        <div className="hero__content hero__content--center">
          <span className="hero__eyebrow">
            🔗 Plateforme B2B Travel Tech 
          </span>
          <h1 className="hero__title">
            Connectez votre offre voyage au monde,<br />
            <em>sans contrainte technique.</em>
          </h1>
          <p className="hero__sub">
            Hôtels, fournisseurs et distributeurs : connectez votre inventaire à un réseau B2B
            actif dans plus de 40 pays — via API et  notre Extranet en
            quelques clics 
          </p>
          <div className="hero__btns hero__btns--center">
            <button className="btn btn--primary" onClick={() => setPage("Signup")}>
              Devenir partenaire
            </button>
            <button className="btn btn--outline" onClick={() => setPage("Contact")}>
              Voir la démo (2 min)
            </button>
          </div>
          <div className="hero__stats hero__stats--center">
            {[["150+", "Partenaires actifs"], ["40+", "Pays couverts"], ["99,9%", "Disponibilité SLA"], ["<200ms", "Temps de réponse API"]].map(([n, l], i) => (
              <div className="hero__stat" key={i}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section section--light">
        <div className="container">
          <div className="label">Notre mission</div>
          <div className="mission-grid">
            <div>
              <h2 className="section__title">
                Nous transformons la complexité du voyage B2B en opportunité de croissance.
              </h2>
              <p className="section__lead" style={{ textAlign: "left" }}>
                Depuis plus de 20 ans, nous construisons des solutions technologiques qui
                s'attaquent directement aux défis structurels du secteur
              </p>
            </div>
            <div className="challenges-list">
              {CHALLENGES.map((c, i) => (
                <div className="challenge-item" key={i}>
                  <span className="challenge-item__num">0{i+1}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <p>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS / DIFFERENTIATION */}
      <section className="section">
        <div className="container">
          <div className="label txt-center">Pourquoi NoveliaTech</div>
          <h2 className="section__title txt-center">La seule plateforme qui s'adapte à votre niveau technique.</h2>
          <p className="section__lead txt-center" style={{ maxWidth: "680px" }}>
            Automatisation complète par API      </p>
          <div className="cards">
            {PILLARS.map((p, i) => (
              <div className="card" key={i}>
                <div className="card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          {/* SIGNATURE: dual connectivity diagram */}
          <div className="dual-mode">
            <div className="dual-mode__path">
              <div className="dual-mode__node dual-mode__node--source">Votre inventaire</div>
              <div className="dual-mode__branches">
                <div className="dual-mode__branch">
                  <span className="dual-mode__tag">Automatisé</span>
                  <div className="dual-mode__line" />
                  <div className="dual-mode__box">API REST / Webhooks<br /><small>PMS · GDS · ERP connectés</small></div>
                </div>
                <div className="dual-mode__branch">
                  <span className="dual-mode__tag">Manuel</span>
                  <div className="dual-mode__line" />
                  <div className="dual-mode__box">Extranet visuel<br /><small></small></div>
                </div>
              </div>
              <div className="dual-mode__line dual-mode__line--down" />
              <div className="dual-mode__node dual-mode__node--target">Hub NoveliaTech → 150+ partenaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section section--dark">
        <div className="container">
          <div className="proof-grid">
            {PROOF_STATS.map((s, i) => (
              <div className="proof-item" key={i}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="section logowall">
        <div className="container">
          <p className="logowall__label">Des indépendants aux grands réseaux, un écosystème de confiance</p>
        </div>
        <div className="marquee">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span className="marquee__item" key={i}>{l}</span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="label txt-center">Témoignages</div>
          <h2 className="section__title txt-center">Ce que nos partenaires en pensent.</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-card__stars">★★★★★</div>
                <p className="testi-card__quote">"{t.quote}"</p>
                <div className="testi-card__result">{t.result}</div>
                <div className="testi-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section section--light" id="coverage">
        <div className="container">
          <div className="coverage-grid">
            <div className="coverage-visual">
              <div className="coverage-map">
                <div className="coverage-map__grid" />
                {[
                  { top: "28%", left: "22%" },
                  { top: "18%", left: "48%" },
                  { top: "40%", left: "58%" },
                  { top: "55%", left: "30%" },
                  { top: "65%", left: "70%" },
                  { top: "35%", left: "78%" },
                ].map((d, i) => (
                  <span key={i} className="coverage-dot" style={{ top: d.top, left: d.left }} />
                ))}
              </div>
            </div>
            <div>
              <div className="label">Couverture</div>
              <h2 className="section__title">Une présence pensée pour l'international.</h2>
              <p className="section__lead" style={{ textAlign: "left" }}>
                Notre réseau de partenaires s'étend bien au-delà de nos marchés historiques.
              </p>
              <div className="coverage-list">
                {COVERAGE_ROWS.map((r, i) => (
                  <div className="coverage-row" key={i}>
                    <strong>{r.region}</strong>
                    <span>{r.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section" id="signup">
        <div className="container">
          <div className="label txt-center">Rejoindre NoveliaTech</div>
          <h2 className="section__title txt-center">Une mise en place simple, en quatre étapes.</h2>
          <div className="steps-grid">
            <div className="steps-list">
              {STEPS.map((s, i) => (
                <div className="step-item" key={i}>
                  <span className="step-item__num">{i+1}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="steps-visual">
              <div className="mock-card">
                <div className="mock-card__bar"><span /><span /><span /></div>
                <div className="mock-card__field" />
                <div className="mock-card__field mock-card__field--sm" />
                <div className="mock-card__field" />
                <div className="mock-card__cta">Créer mon compte professionnel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <div className="label txt-center">FAQ</div>
          <h2 className="section__title txt-center">Questions fréquentes.</h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " is-open" : ""}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-item__q">
                  <span>{f.q}</span>
                  <span className="faq-item__chevron">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <p className="faq-item__a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section" id="news">
        <div className="container">
          <div className="label">Actualités</div>
          <h2 className="section__title">Ce qui se passe chez NoveliaTech.</h2>
          <div className="news-grid">
            {NEWS.map((n, i) => (
              <article key={i} className={`news-card${n.featured ? " news-card--featured" : ""}`}>
                <div className="news-card__date">{n.date}</div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <button onClick={() => setPage("Actualites")}>Lire la suite →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section cta-section--novelia">
        <div className="container cta-inner">
          <div className="cta-deco">✦</div>
          <h2>Prêt à vendre votre offre voyage à un réseau de 150+ partenaires ?</h2>
          <p>Planifiez une démonstration de 20 minutes — sans engagement, avec ou sans intégration technique.</p>
          <div className="cta-btns">
            <button className="btn btn--primary" onClick={() => setPage("Signup")}>
              Devenir partenaire
            </button>
            <button className="btn btn--outline" onClick={() => setPage("Contact")}>
              Contacter l'équipe
            </button>
          </div>
          <div className="cta-reassurance">
            <span>✓ Démo de 20 min, sans engagement</span>
            <span>✓ Aucune expertise  requis pour démarrer</span>
            
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE SOLUTIONS ──────────────────────────────────────────
function PageSolutions({ setPage }) {
  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia">
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Nos solutions</div>
          <h1>Des solutions technologiques pour <em>chaque besoin</em></h1>
          <p>Découvrez comment NoveliaTech transforme la gestion du voyage B2B grâce à une infrastructure modulaire et connectée.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="label txt-center">Nos solutions</div>
          <h2 className="section__title txt-center">Des modules sur mesure pour votre activité</h2>
          <p className="section__lead txt-center">
            Que vous préfériez automatiser ou tout gérer à la main, nous avons l'outil qui correspond à votre fonctionnement.
          </p>
          <div className="modules-grid">
            {MODULES.map((m, i) => (
              <div className="module-card" key={i}>
                <span className="module-card__tag">{m.tag}</span>
                <div className="module-card__icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="label txt-center">Pourquoi NoveliaTech</div>
          <h2 className="section__title txt-center">La flexibilité avant tout</h2>
          <div className="cards">
            {PILLARS.map((p, i) => (
              <div className="card" key={i}>
                <div className="card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="label txt-center">Comment ça marche</div>
          <h2 className="section__title txt-center">Une approche en quatre étapes</h2>
          <div className="steps-grid">
            <div className="steps-list">
              {STEPS.map((s, i) => (
                <div className="step-item" key={i}>
                  <span className="step-item__num">{i+1}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="steps-visual">
              <div className="mock-card">
                <div className="mock-card__bar"><span /><span /><span /></div>
                <div className="mock-card__field" />
                <div className="mock-card__field mock-card__field--sm" />
                <div className="mock-card__field" />
                <div className="mock-card__cta">Démarrer maintenant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section cta-section--novelia">
        <div className="container cta-inner">
          <h2>Prêt à transformer votre activité voyage ?</h2>
          <p>Contactez notre équipe pour une démonstration personnalisée de nos solutions.</p>
          <button className="btn btn--primary" onClick={() => setPage("Contact")}>
            Demander une démo
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE COUVERTURE ─────────────────────────────────────────
function PageCouverture({ setPage }) {
  const COVERAGE_DETAILS = [
    { region: "Europe de l'Ouest", detail: "Couverture hôtelière et agences partenaires", description: "Présence renforcée en France, Allemagne, Espagne et Italie avec un réseau de plus de 5000 hôtels et agences." },
    { region: "Afrique du Nord", detail: "Implantation historique du groupe IDH", description: "Algérie, Maroc, Tunisie : notre marché historique avec une expertise locale et un réseau dense de partenaires." },
    { region: "Moyen-Orient", detail: "Réseau de distribution en développement", description: "UAE, Arabie Saoudite, Qatar : une présence en pleine expansion." },
    { region: "Reste du monde", detail: "Connectivité via partenaires API", description: "Amériques, Asie-Pacifique : une infrastructure technique qui permet de connecter des partenaires dans le monde entier." },
  ];

  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia">
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Notre couverture</div>
          <h1>Une présence internationale <em>en croissance</em></h1>
          <p>NoveliaTech s'appuie sur un réseau de partenaires et une infrastructure technique qui couvrent les principaux marchés du voyage B2B.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coverage-grid">
            <div className="coverage-visual">
              <div className="coverage-map coverage-map--large">
                <div className="coverage-map__grid" />
                {[
                  { top: "28%", left: "22%" },
                  { top: "18%", left: "48%" },
                  { top: "40%", left: "58%" },
                  { top: "55%", left: "30%" },
                  { top: "65%", left: "70%" },
                  { top: "35%", left: "78%" },
                  { top: "48%", left: "12%" },
                  { top: "25%", left: "68%" },
                ].map((d, i) => (
                  <span key={i} className="coverage-dot" style={{ top: d.top, left: d.left }} />
                ))}
              </div>
            </div>
            <div>
              <div className="label">Notre réseau</div>
              <h2 className="section__title">Une présence mondiale</h2>
              <div className="coverage-list">
                {COVERAGE_ROWS.map((r, i) => (
                  <div className="coverage-row" key={i}>
                    <strong>{r.region}</strong>
                    <span>{r.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="label txt-center">Détails de notre couverture</div>
          <h2 className="section__title txt-center">Notre réseau en détails</h2>
          <div className="coverage-details-grid">
            {COVERAGE_DETAILS.map((item, i) => (
              <div className="coverage-detail-card" key={i}>
                <h3>{item.region}</h3>
                <p className="coverage-detail-card__detail">{item.detail}</p>
                <p className="coverage-detail-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section cta-section--novelia">
        <div className="container cta-inner">
          <h2>Développez votre activité avec nous</h2>
          <p>Notre réseau international est à votre disposition pour vous aider à conquérir de nouveaux marchés.</p>
          <button className="btn btn--primary" onClick={() => setPage("Contact")}>
            Contactez-nous
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE ACTUALITES ─────────────────────────────────────────
function PageActualites({ setPage }) {
  const ALL_NEWS = [
    
    {
      date: "Mai 2026",
      title: "NoveliaTech rejoint le salon du tourisme professionnel à Alger",
      excerpt: "Présentation de la plateforme aux agences et tour-opérateurs régionaux.",
      content: "L'équipe NoveliaTech a participé au Salon International du Tourisme et des Voyages (SITV) à Alger.",
      author: "Équipe NoveliaTech",
    },
    {
      date: "Avril 2026",
      title: "Nouveau partenariat avec un réseau hôtelier européen",
      excerpt: "Extension de la couverture de disponibilités pour les partenaires NoveliaTech.",
      content: "Ce partenariat stratégique avec un réseau de plus de 300 hôtels en Europe permet à NoveliaTech d'offrir une couverture encore plus large.",
      author: "Équipe NoveliaTech",
    },
    {
      date: "Mars 2026",
      title: "NoveliaTech intègre un nouveau module de paiement sécurisé",
      excerpt: "Une solution de paiement innovante pour simplifier les transactions B2B.",
      content: "Le nouveau module de paiement permet des transactions sécurisées et traçables entre les professionnels du voyage.",
      author: "Équipe NoveliaTech",
    },
    {
      date: "Février 2026",
      title: "Croissance de 150% du nombre de partenaires sur la plateforme",
      excerpt: "NoveliaTech enregistre une croissance exceptionnelle depuis son lancement.",
      content: "En seulement 8 mois, la plateforme a attiré plus de 150 nouveaux partenaires.",
      author: "Équipe NoveliaTech",
    },
    {
      date: "Janvier 2026",
      title: "Lancement officiel de la plateforme NoveliaTech",
      excerpt: "NoveliaTech ouvre ses portes aux professionnels du voyage.",
      content: "Après plusieurs mois de développement et de tests, la plateforme NoveliaTech est officiellement lancée.",
      author: "Équipe NoveliaTech",
    },
  ];

  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia">
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Actualités</div>
          <h1>Toute l'actualité de <em>NoveliaTech</em></h1>
          <p>Restez informé des dernières innovations, partenariats et événements de notre écosystème.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="actualites-grid">
            {ALL_NEWS.map((news, i) => (
              <article key={i} className={`actualite-card${news.featured ? " actualite-card--featured" : ""}`}>
                <div className="actualite-card__date">{news.date}</div>
                <h3 className="actualite-card__title">{news.title}</h3>
                <p className="actualite-card__excerpt">{news.excerpt}</p>
                <p className="actualite-card__content">{news.content}</p>
                <div className="actualite-card__author">— {news.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section logowall">
        <div className="container">
          <p className="logowall__label">Ils nous font confiance</p>
        </div>
        <div className="marquee">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span className="marquee__item" key={i}>{l}</span>
          ))}
        </div>
      </section>

      <section className="cta-section cta-section--novelia">
        <div className="container cta-inner">
          <h2>Ne manquez aucune actualité</h2>
          <p>Abonnez-vous à notre newsletter pour recevoir nos dernières nouveautés.</p>
          <button className="btn btn--primary" onClick={() => alert("Merci pour votre abonnement !")}>
            S'abonner
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE CONTACT ────────────────────────────────────────────
function PageContact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name === "message") setCount(value.length);
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ nom: "", email: "", sujet: "", message: "" });
    setCount(0);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia">
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Contact</div>
          <h1>Parlons de votre <em>projet</em></h1>
          <p>Une question, un partenariat, une demande commerciale ? Notre équipe est à votre écoute.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form">
            <h2>Envoyez-nous un message</h2>
            <p className="contact-form__note">Nous vous répondons sous 24–48h ouvrées.</p>
            {sent ? (
              <div className="form-ok">
                <span>✅</span>
                <h3>Message envoyé !</h3>
                <p>Notre équipe vous contactera très prochainement.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="field-row">
                  <div className="field">
                    <label>Nom complet</label>
                    <input name="nom" value={form.nom} onChange={change} placeholder="Votre nom" required />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={change} placeholder="nom@exemple.com" required />
                  </div>
                </div>
                <div className="field">
                  <label>Sujet</label>
                  <input name="sujet" value={form.sujet} onChange={change} placeholder="Partenariat, demande commerciale…" required />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={change}
                    placeholder="Décrivez votre projet ou votre demande…"
                    maxLength={1000} rows={5} required />
                  <span className="field__count">{count}/1000</span>
                </div>
                <button type="submit" className="btn btn--primary btn--full">Envoyer le message</button>
              </form>
            )}
          </div>

          <div className="contact-side">
            <div className="coords-card coords-card--novelia">
              <h3>Coordonnées</h3>
              {[
                { icon: "✉", label: "Email", val: "contact@noveliatech.com", href: "mailto:contact@noveliatech.com" },
                { icon: "📞", label: "Téléphone", val: "+33 1 23 45 67 89", href: "tel:+33123456789" },
                { icon: "📍", label: "Adresse", val: "Paris, France", href: null },
              ].map((c, i) => (
                <div className="coord" key={i}>
                  <span className="coord__icon">{c.icon}</span>
                  <div>
                    <strong>{c.label}</strong>
                    {c.href ? <a href={c.href}>{c.val}</a> : <span>{c.val}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE LOGIN ──────────────────────────────────────────────
function PageLogin() {
  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia" style={{ padding: "80px 0 60px" }}>
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Connexion</div>
          <h1>Bienvenue <em>chez NoveliaTech</em></h1>
          <p>Connectez-vous à votre espace professionnel.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="auth-form" style={{ maxWidth: "480px", margin: "0 auto" }}>
            <div className="contact-form">
              <form>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="nom@exemple.com" />
                </div>
                <div className="field">
                  <label>Mot de passe</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <button type="submit" className="btn btn--primary btn--full">Se connecter</button>
                <p style={{ textAlign: "center", marginTop: "16px", fontSize: ".85rem", color: "var(--ink-soft)" }}>
                  Pas encore de compte ? <button style={{ color: "#7b3fe4", fontWeight: 600, cursor: "pointer" }}>S'inscrire</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── PAGE SIGNUP ──────────────────────────────────────────────
function PageSignup() {
  return (
    <main className="page">
      <section className="inner-hero inner-hero--novelia" style={{ padding: "80px 0 60px" }}>
        <div className="inner-hero__bg" />
        <div className="container txt-center">
          <div className="label label--light">Inscription</div>
          <h1>Créez votre <em>compte professionnel</em></h1>
          <p>Rejoignez un réseau B2B déjà actif dans plus de 40 pays.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="auth-form" style={{ maxWidth: "520px", margin: "0 auto" }}>
            <div className="contact-form">
              <form>
                <div className="field-row">
                  <div className="field">
                    <label>Prénom</label>
                    <input type="text" placeholder="Votre prénom" />
                  </div>
                  <div className="field">
                    <label>Nom</label>
                    <input type="text" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="field">
                  <label>Email professionnel</label>
                  <input type="email" placeholder="nom@entreprise.com" />
                </div>
                <div className="field">
                  <label>Mot de passe</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="field">
                  <label>Nom de l'entreprise</label>
                  <input type="text" placeholder="Votre agence ou entreprise" />
                </div>
                <button type="submit" className="btn btn--primary btn--full">Créer mon compte</button>
                <p style={{ textAlign: "center", marginTop: "16px", fontSize: ".85rem", color: "var(--ink-soft)" }}>
                  Déjà inscrit ? <button style={{ color: "#7b3fe4", fontWeight: 600, cursor: "pointer" }}>Se connecter</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── APP ROOT ──────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Accueil");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const render = () => {
    switch (page) {
      case "Accueil": return <PageAccueil setPage={setPage} />;
      case "Solutions": return <PageSolutions setPage={setPage} />;
      case "Couverture": return <PageCouverture setPage={setPage} />;
      case "Actualites": return <PageActualites setPage={setPage} />;
      case "Contact": return <PageContact />;
      case "Login": return <PageLogin />;
      case "Signup": return <PageSignup />;
      default: return <PageAccueil setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />
      {render()}
      <Footer setPage={setPage} />
    </div>
  );
}
