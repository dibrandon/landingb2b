import Button from "./components/ui/Button.jsx";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0r8a3Ej3kf3VABHjRSWlyVk99oTxnRdDZ7ZuOgGAVU667rA/viewform";

const navLinks = [
  { label: "Que es", href: "#que-es" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Participar", href: "#participar" },
  { label: "Vista previa", href: "#producto" },
];

const heroPoints = [
  "Mas visibilidad local para actividades de calidad.",
  "Una presentacion clara para que las familias entiendan rapido tu propuesta.",
  "Un proceso simple para empezar a formar parte del proyecto.",
];

const featureItems = [
  "Tipo de actividad y edades recomendadas.",
  "Ubicacion, horarios y zona de trabajo.",
  "Descripcion breve y visual de la propuesta.",
  "Imagenes y forma de contacto.",
];

const benefits = [
  {
    title: "Mas visibilidad",
    description:
      "Tu actividad aparece en un espacio centrado en planes y servicios para peques y familias.",
  },
  {
    title: "Mas claridad",
    description:
      "La propuesta se presenta de forma ordenada para que una familia entienda rapido si encaja.",
  },
  {
    title: "Mas oportunidades de contacto",
    description:
      "Facilitamos que nuevos interesados descubran tu actividad y quieran saber mas.",
  },
];

const audienceItems = [
  "Academias y centros formativos.",
  "Actividades extraescolares y deportivas.",
  "Talleres artisticos, creativos y culturales.",
  "Espacios familiares, casales y propuestas de temporada.",
  "Profesionales o entidades que trabajen con peques y familias.",
];

const requiredInfo = [
  "Quien eres o que entidad representas.",
  "Que actividad o servicio ofreces.",
  "En que zona trabajas.",
  "Para que edades esta pensada la propuesta.",
  "Una forma de contacto.",
];

const futureSignals = [
  "Que tipos de actividades despiertan mas interes.",
  "Que zonas concentran mas busquedas.",
  "Que fichas generan mas clics o contactos.",
];

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-heading stack">
      <p className="section-kicker">{kicker}</p>
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
            <p className="section-kicker">NensGo para centros y actividades</p>
            <h1 className="hero__title">
              Haz que tu actividad llegue mejor a las familias.
            </h1>
            <p className="hero__description">
              NensGo quiere reunir en un solo lugar propuestas infantiles y
              familiares que hoy estan dispersas entre redes, grupos y canales
              poco claros. Si ofreces talleres, deporte, arte, cultura o
              espacios para peques, este proyecto tambien es para ti.
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
                    Tu propuesta se muestra de forma simple, visual y facil de
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
        <div className="container content-grid">
          <div className="stack">
            <SectionHeading
              kicker="Que es NensGo"
              title="Un solo lugar para descubrir actividades que hoy estan dispersas"
              description="Muchas familias no llegan a tiempo a propuestas que si encajan con ellas porque la informacion aparece repartida, desordenada o poco actualizada."
            />

            <div className="copy-stack stack">
              <p>
                Nuestro objetivo es hacerlo mas facil: ayudar a las familias a
                encontrar opciones cerca de ellas y dar mas visibilidad a
                quienes ofrecen buenas actividades.
              </p>
              <p>
                La idea no es complicarte con una presencia digital enorme, sino
                darte un lugar claro donde tu proyecto se explique bien y pueda
                generar interes real.
              </p>
            </div>
          </div>

          <article className="summary-card stack">
            <h3 className="summary-card__title">Asi se vera tu actividad</h3>
            <ul className="simple-list">
              {featureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="beneficios" className="section section--soft">
        <div className="container stack">
          <SectionHeading
            kicker="Por que participar"
            title="Lo importante es que tu propuesta se entienda y se descubra mejor"
            description="NensGo esta pensado para que proyectos reales ganen presencia sin perder tiempo en una web compleja."
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
            <strong>A futuro</strong>
            <p>
              Tambien queremos compartir senales utiles para ayudarte a entender
              mejor el interes que genera tu actividad:
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
              kicker="Quien puede participar"
              title="Centros, actividades y proyectos pensados para peques y familias"
              description="Si tu propuesta aporta valor a familias y ninos, nos interesa conocerla."
            />

            <ul className="simple-list">
              {audienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="summary-card summary-card--accent stack">
            <SectionHeading
              kicker="Que necesitamos para empezar"
              title="Muy poco para valorar tu propuesta"
              description="Solo pedimos una primera informacion basica para entender el proyecto y poder hablar contigo."
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
              title="Queremos construir algo util, cuidado y de valor real"
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
                alt="Vista previa de la aplicacion NensGo con buscador, filtros y tarjetas de actividades."
              />
            </div>
            <figcaption>
              Vista real de la webapp que guiara a las familias a descubrir
              actividades de forma mas clara.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <article className="cta-band">
            <div className="cta-band__content stack">
              <p className="section-kicker section-kicker--light">CTA final</p>
              <h2 className="cta-band__title">
                Te gustaria que tu actividad forme parte de NensGo?
              </h2>
              <p className="cta-band__text">
                Dejanos tus datos en el formulario y te contactaremos para
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
