import { useEffect, useState } from "react";
import Button from "./components/ui/Button.jsx";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0r8a3Ej3kf3VABHjRSWlyVk99oTxnRdDZ7ZuOgGAVU667rA/viewform";

const navLinks = [
  { label: "Nuestra historia", href: "#historia" },
  { label: "Qué es", href: "#que-es" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Participar", href: "#participar" },
  { label: "Vista previa", href: "#producto" },
];

const heroPoints = [
  "Más visibilidad local para actividades de calidad.",
  "Una presentación clara para que las familias entiendan rápido tu propuesta.",
  "Un proceso simple para empezar a formar parte del proyecto.",
];

const featureItems = [
  "Tipo de actividad y edades recomendadas.",
  "Ubicación, horarios y zona de trabajo.",
  "Descripción breve y visual de la propuesta.",
  "Imágenes y forma de contacto.",
];

const activityExample = {
  category: "Arte",
  title: "Taller de pintura creativa",
  ages: "7 a 12 años",
  center: "Espai Creatiu Ribes",
  locality: "Sant Pere de Ribes",
  cta: "Ver más",
};

const activityPreview = {
  description:
    "Sesiones creativas para peques que quieren experimentar con color, composición y materiales en un entorno guiado y cercano.",
  schedule: "Martes y jueves, 17:30 a 19:00",
  price: "Desde 42 EUR al mes",
  venue: "Espai Creatiu Ribes",
  address: "Carrer de la Pintura, 12",
  city: "Sant Pere de Ribes",
  contactTitle: "Contactar",
  contactCopy:
    "Puedes escribir directamente al centro si quieres confirmar si esta actividad encaja con tu familia.",
  contactCta: "Contactar",
};

const benefits = [
  {
    title: "Más visibilidad",
    description:
      "Tu actividad aparece en un espacio centrado en planes y servicios para peques y familias.",
  },
  {
    title: "Más claridad",
    description:
      "La propuesta se presenta de forma ordenada para que una familia entienda rápido si encaja.",
  },
  {
    title: "Más oportunidades de contacto",
    description:
      "Facilitamos que nuevos interesados descubran tu actividad y quieran saber más.",
  },
];

const audienceItems = [
  "Academias y centros formativos.",
  "Actividades extraescolares y deportivas.",
  "Talleres artísticos, creativos y culturales.",
  "Espacios familiares, casales y propuestas de temporada.",
  "Profesionales o entidades que trabajen con peques y familias.",
];

const requiredInfo = [
  "Quién eres o qué entidad representas.",
  "Qué actividad o servicio ofreces.",
  "En qué zona trabajas.",
  "Para qué edades está pensada tu propuesta.",
  "Una forma de contacto.",
];

const futureSignals = [
  "Qué tipos de actividades despiertan más interés.",
  "Qué zonas concentran más búsquedas.",
  "Qué fichas generan más clics o contactos.",
];

const storyIntroParagraphs = [
  "Somos una familia a la que le encanta hacer planes. Siempre estamos buscando nuevas actividades, propuestas diferentes y experiencias que nos permitan descubrir cosas, compartir tiempo de calidad y, sobre todo, regalarle a nuestro hijo oportunidades para aprender, disfrutar y vivir algo nuevo.",
];

const storyChallengeParagraphs = [
  "Con el tiempo fuimos notando algo que seguramente le pasa a muchas familias: encontrar actividades interesantes no siempre es fácil.",
  "Muchas veces la información está dispersa, incompleta o cuesta muchísimo llegar a propuestas distintas a las de siempre.",
];

const storyPromptIntro =
  "También nos pasó que, casi sin querer, empezamos a convertirnos en una especie de referencia para otras familias.";

const storyPrompts = [
  '"Ustedes que siempre están haciendo cosas... ¿qué nos recomendáis?"',
  '"¿Tenéis alguna idea para este finde?"',
  '"¿Dónde encontrasteis esa actividad?"',
];

const storyOriginBridge =
  "Y así, entre mensajes, recomendaciones y enlaces compartidos, vimos una necesidad muy clara: ¿por qué no crear un sitio donde todo esto pueda encontrarse de forma más fácil y ordenada?";

const storyClosingParagraphs = [
  "Por eso NensGo nace con una idea muy simple: ayudar a las familias a descubrir actividades cerca de ellas, dar visibilidad a pequeños proyectos, talleres, espacios y propuestas locales, y reunir en un solo lugar opciones para disfrutar con hijos y en familia.",
  'Queremos facilitar la búsqueda, inspirar nuevos planes y hacer que encontrar algo para hacer no dependa de tener "el contacto correcto" o de que justo alguien te pase la información.',
  "Porque creemos que hay muchísimo por descubrir, y que compartirlo también es una forma de construir comunidad.",
];

const storyMissionPoints = [
  "Ayudar a las familias a descubrir actividades cerca de ellas.",
  "Dar visibilidad a pequeños proyectos, talleres, espacios y propuestas locales.",
  "Reunir en un solo lugar opciones para disfrutar con hijos y en familia.",
];

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-heading stack">
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  );
}

function PreviewInfoCard({ label, value, accent = false }) {
  return (
    <article
      className={`preview-card ${accent ? "preview-card--accent" : ""}`.trim()}
    >
      <p className="preview-card__label">{label}</p>
      <p className="preview-card__value">{value}</p>
    </article>
  );
}

function ActivityPreviewModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div
        className="preview-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="preview-modal__topbar">
          <button
            className="preview-modal__back"
            type="button"
            onClick={onClose}
          >
            ← Volver
          </button>

          <button
            className="preview-modal__close"
            type="button"
            aria-label="Cerrar vista previa"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="preview-modal__scroll">
          <figure className="preview-modal__media">
            <img
              src="/kidspainting.png"
              alt="Tres niños pintando en un caballete, vistos de espaldas."
            />
          </figure>

          <div className="preview-modal__content stack">
            <p className="preview-modal__category">
              {activityExample.category}
            </p>
            <h2 id="preview-modal-title" className="preview-modal__title">
              {activityExample.title}
            </h2>

            <section className="preview-modal__section stack">
              <p className="preview-modal__eyebrow">Descripción</p>
              <p className="preview-modal__text">
                {activityPreview.description}
              </p>
            </section>

            <section className="preview-modal__section stack">
              <p className="preview-modal__eyebrow">Información clave</p>
              <h3 className="preview-modal__subheading">Evalúa si encaja</h3>
              <div className="preview-modal__grid">
                <PreviewInfoCard label="Edad" value={activityExample.ages} />
                <PreviewInfoCard
                  label="Horario"
                  value={activityPreview.schedule}
                />
                <PreviewInfoCard
                  label="Precio"
                  value={activityPreview.price}
                  accent
                />
              </div>
            </section>

            <section className="preview-modal__section stack">
              <p className="preview-modal__eyebrow">Ubicación</p>
              <h3 className="preview-modal__subheading">Referencia práctica</h3>
              <div className="preview-modal__grid">
                <PreviewInfoCard label="Centro" value={activityPreview.venue} />
                <PreviewInfoCard
                  label="Dirección"
                  value={activityPreview.address}
                />
                <PreviewInfoCard label="Ciudad" value={activityPreview.city} />
              </div>
            </section>

            <section className="preview-modal__contact stack">
              <p className="preview-modal__eyebrow">Acción principal</p>
              <h3 className="preview-modal__subheading">
                {activityPreview.contactTitle}
              </h3>
              <p className="preview-modal__text">
                {activityPreview.contactCopy}
              </p>
              <Button className="preview-modal__contact-button">
                {activityPreview.contactCta}
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <main className="page-shell landing-page">
        <header className="landing-header">
          <div className="container landing-header__inner">
            <a
              className="brand"
              href="#inicio"
              aria-label="Ir al inicio de NensGo"
            >
              <img
                className="brand__mark"
                src="/nensgo-navbar-mark.png"
                alt="Logotipo de NensGo"
              />
              <span className="brand__copy">
                <strong>NensGo</strong>
                <span>Actividades infantiles y familiares</span>
              </span>
            </a>

            <nav className="landing-nav" aria-label="Secciones principales">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="landing-nav__link"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button href={FORM_URL} target="_blank">
              Unirme al proyecto
            </Button>
          </div>
        </header>

        <section id="inicio" className="section hero-section">
          <div className="container hero">
            <div className="hero__content stack">
              <p className="section-kicker">
                ¿Ofreces actividades para peques o familias?
              </p>
              <h1 className="hero__title">
                Haz que tu propuesta llegue mejor a las familias.
              </h1>
              <p className="hero__description">
                NensGo quiere reunir en un solo lugar propuestas infantiles y
                familiares que hoy están dispersas entre redes, grupos y canales
                poco claros. Si ofreces talleres, deporte, arte, cultura o
                espacios para peques, este proyecto también es para ti.
              </p>

              <ul className="hero-points">
                {heroPoints.map((point) => (
                  <li key={point} className="hero-point">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="hero__visual">
              <div className="hero-panel stack">
                <div className="hero-panel__brand">
                  <img
                    className="hero-panel__logo"
                    src="/nensgo-navbar-mark.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="hero-panel__intro">
                    <strong>Un escaparate digital claro</strong>
                    <p>
                      Tu propuesta se muestra de forma simple, visual y fácil de
                      entender.
                    </p>
                  </div>
                </div>

                <ul className="simple-list simple-list--compact">
                  {featureItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="historia" className="section section--soft">
          <div className="container content-grid content-grid--feature history-layout">
            <div className="history-copy stack">
              <SectionHeading
                kicker="Nuestra historia"
                title="Así nació NensGo"
                description="NensGo nace de una necesidad muy concreta: encontrar actividades bien explicadas, cercanas y distintas a las de siempre."
              />

              <div className="history-narrative stack">
                <div className="history-block stack">
                  {storyIntroParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="history-block stack">
                  {storyChallengeParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <article className="summary-card summary-card--accent history-callout stack">
                  <p className="summary-card__eyebrow">
                    Lo empezamos a oír una y otra vez
                  </p>
                  <p className="history-callout__lead">{storyPromptIntro}</p>

                  <ul className="history-prompts">
                    {storyPrompts.map((prompt) => (
                      <li key={prompt}>{prompt}</li>
                    ))}
                  </ul>

                  <p className="history-callout__footer">{storyOriginBridge}</p>
                </article>

                <div className="history-block stack">
                  {storyClosingParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <aside className="summary-card history-summary stack">
              <p className="summary-card__eyebrow">Lo que queremos construir</p>
              <h3 className="summary-card__title">
                Un lugar más claro para descubrir planes en familia
              </h3>

              <ul className="simple-list">
                {storyMissionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="que-es" className="section">
          <div className="container content-grid content-grid--feature">
            <div className="stack">
              <SectionHeading
                kicker="La idea base"
                title="Una forma clara, moderna y práctica de descubrir actividades"
                description="Cada propuesta se presenta en una ficha visual y ordenada para que una familia entienda rápido si encaja con lo que está buscando."
              />

              <div className="copy-stack stack">
                <p>
                  NensGo quiere ser ese lugar donde descubrir planes resulte
                  sencillo: una experiencia pensada para ver en pocos segundos
                  qué es cada actividad, para qué edades está pensada y dónde
                  encontrarla.
                </p>
                <p>
                  La ficha que ves aquí resume esa idea: una propuesta bien
                  presentada, con la información importante a la vista y una
                  estructura que ayuda a decidir sin tener que rebuscar entre
                  mensajes, redes o enlaces sueltos.
                </p>
                <p>
                  Buscamos una solución moderna, organizativa y práctica: un
                  espacio cuidado para las familias y, al mismo tiempo, una
                  forma clara de mostrar cada proyecto con orden, contexto y
                  utilidad real.
                </p>
              </div>
            </div>

            <article className="summary-card summary-card--preview stack">
              <p className="summary-card__eyebrow">Así se verá una actividad</p>

              <article className="activity-example activity-example--card stack">
                <figure className="activity-example__media">
                  <img
                    src="/kidspainting.png"
                    alt="Tres niños pintando en un caballete, vistos de espaldas."
                  />
                </figure>

                <div className="activity-example__content stack">
                  <p className="activity-example__category">
                    {activityExample.category}
                  </p>
                  <h3 className="activity-example__title">
                    {activityExample.title}
                  </h3>
                  <p className="activity-example__meta">
                    {activityExample.ages}
                  </p>
                  <p className="activity-example__meta">
                    {activityExample.center}
                  </p>
                  <p className="activity-example__meta">
                    {activityExample.locality}
                  </p>

                  <div className="activity-example__actions">
                    <Button
                      className="activity-example__button"
                      onClick={() => setIsPreviewOpen(true)}
                    >
                      {activityExample.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </article>
          </div>
        </section>

        <section id="beneficios" className="section section--soft">
          <div className="container stack">
            <SectionHeading
              kicker="¿Qué gana tu proyecto?"
              title="Más visibilidad, más claridad y más oportunidades de contacto"
              description="NensGo está pensado para que proyectos reales ganen presencia sin perder tiempo en una web compleja."
            />

            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="benefit-card stack">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>

            <article className="future-strip">
              <strong>Más adelante</strong>
              <p>
                También queremos compartir señales útiles para ayudarte a
                entender mejor el interés que genera tu actividad:
              </p>
              <ul className="future-strip__list">
                {futureSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="participar" className="section">
          <div className="container content-grid">
            <article className="summary-card stack">
              <SectionHeading
                kicker="¿A quién va dirigido?"
                title="A centros, actividades y proyectos pensados para peques y familias"
                description="Si tu propuesta aporta valor a familias y niños, nos interesa conocerla."
              />

              <ul className="simple-list">
                {audienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="summary-card summary-card--accent stack">
              <SectionHeading
                kicker="¿Qué necesitamos de ti?"
                title="Solo unos pocos datos para valorar tu propuesta"
                description="Solo pedimos una primera información básica para entender el proyecto y poder hablar contigo."
              />

              <ul className="simple-list simple-list--checks">
                {requiredInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="producto" className="section section--tight">
          <div className="container product-layout">
            <div className="trust-copy stack">
              <SectionHeading
                kicker="¿Qué tipo de espacio queremos crear?"
                title="Un espacio útil, cuidado y de valor real"
                description="NensGo no quiere ser un listado sin criterio. Queremos crear un espacio donde las familias encuentren propuestas confiables y donde quienes organizan actividades puedan mostrarse de forma clara."
              />

              <p className="trust-copy__text">
                Por eso nos interesa contar con proyectos reales, bien
                explicados y con ganas de formar parte de una plataforma pensada
                para conectar mejor la oferta con la demanda.
              </p>
            </div>

            <figure className="product-shot">
              <div className="product-shot__frame">
                <img
                  src="/muestra.png"
                  alt="Vista previa de la aplicación NensGo con buscador, filtros y tarjetas de actividades."
                />
              </div>
              <figcaption>
                Vista real de la aplicación que guiará a las familias a
                descubrir actividades de forma más clara.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--tight">
          <div className="container">
            <article className="cta-band">
              <div className="cta-band__content stack">
                <p className="section-kicker section-kicker--light">
                  ¿Quieres unirte al proyecto?
                </p>
                <h2 className="cta-band__title">
                  Tu actividad puede formar parte de NensGo.
                </h2>
                <p className="cta-band__text">
                  Déjanos tus datos en el formulario y te contactaremos si así
                  lo deseas.
                </p>
              </div>

              <div className="cta-band__actions">
                <Button href={FORM_URL} target="_blank" variant="secondary">
                  Quiero participar
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>

      <ActivityPreviewModal
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}

export default App;
