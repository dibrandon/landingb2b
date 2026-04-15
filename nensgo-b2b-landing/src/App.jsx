import Button from "./components/ui/Button.jsx";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0r8a3Ej3kf3VABHjRSWlyVk99oTxnRdDZ7ZuOgGAVU667rA/viewform";

const navLinks = [
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

function App() {
  return (
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
              <a key={link.href} className="landing-nav__link" href={link.href}>
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

            <div className="hero__actions">
              <Button href={FORM_URL} target="_blank">
                Unirme al proyecto
              </Button>
            </div>

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

      <section id="que-es" className="section">
        <div className="container content-grid content-grid--feature">
          <div className="stack">
            <SectionHeading
              kicker="¿Por qué nace NensGo?"
              title="Para reunir en un solo lugar actividades que hoy están dispersas"
              description="Muchas familias no llegan a tiempo a propuestas que sí encajan con ellas porque la información aparece repartida, desordenada o poco actualizada."
            />

            <div className="copy-stack stack">
              <p>
                Nuestro objetivo es hacerlo más fácil: ayudar a las familias a
                encontrar opciones cerca de ellas y dar más visibilidad a
                quienes ofrecen buenas actividades.
              </p>
              <p>
                La idea no es complicarte con una presencia digital enorme, sino
                darte un lugar claro donde tu proyecto se explique bien y pueda
                generar interés real.
              </p>
            </div>
          </div>

          <article className="summary-card summary-card--preview stack">
            <p className="summary-card__eyebrow">Ejemplo de ficha</p>

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
                <h3 className="activity-example__title">{activityExample.title}</h3>
                <p className="activity-example__meta">{activityExample.ages}</p>
                <p className="activity-example__meta">{activityExample.center}</p>
                <p className="activity-example__meta">{activityExample.locality}</p>

                <div className="activity-example__actions">
                  <Button
                    href={FORM_URL}
                    target="_blank"
                    className="activity-example__button"
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
              También queremos compartir señales útiles para ayudarte a entender
              mejor el interés que genera tu actividad:
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

            <div className="summary-card__actions">
              <Button href={FORM_URL} target="_blank" variant="secondary">
                Enviar mis datos
              </Button>
            </div>
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
              Por eso nos interesa contar con proyectos reales, bien explicados
              y con ganas de formar parte de una plataforma pensada para
              conectar mejor la oferta con la demanda.
            </p>

            <div className="trust-copy__actions">
              <Button href={FORM_URL} target="_blank">
                Quiero formar parte
              </Button>
            </div>
          </div>

          <figure className="product-shot">
            <div className="product-shot__frame">
              <img
                src="/muestra.png"
                alt="Vista previa de la aplicación NensGo con buscador, filtros y tarjetas de actividades."
              />
            </div>
            <figcaption>
              Vista real de la aplicación que guiará a las familias a descubrir
              actividades de forma más clara.
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
                Déjanos tus datos en el formulario y te contactaremos para
                conocer tu propuesta.
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
  );
}

export default App;
