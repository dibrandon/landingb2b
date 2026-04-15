import Button from "./components/ui/Button.jsx";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0r8a3Ej3kf3VABHjRSWlyVk99oTxnRdDZ7ZuOgGAVU667rA/viewform";

const navLinks = [
  { label: "Qué es", href: "#que-es" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Participar", href: "#participar" },
  { label: "Valor", href: "#valor" },
];

const heroHighlights = [
  "Más visibilidad local para propuestas de calidad.",
  "Una presentación clara para que las familias entiendan rápido tu actividad.",
  "Un proceso simple para empezar a formar parte del proyecto.",
];

const discoveryPainPoints = [
  "Instagram y grupos de WhatsApp concentran mucha información, pero no siempre ordenada ni fácil de encontrar.",
  "Las familias acaban descubriendo tarde actividades que sí encajan con sus intereses, edades o ubicación.",
  "Muchos proyectos valiosos tienen buenas propuestas, pero poca visibilidad digital o una presencia dispersa.",
];

const showcaseItems = [
  {
    title: "Tipo de actividad",
    description:
      "Para que las familias identifiquen rápido si hablas de deporte, arte, cultura o apoyo formativo.",
  },
  {
    title: "Edades recomendadas",
    description:
      "Una referencia clara para entender a quién va dirigida la propuesta antes de hacer clic.",
  },
  {
    title: "Ubicación y horarios",
    description:
      "Información práctica para valorar cercanía, compatibilidad y momento ideal.",
  },
  {
    title: "Descripción e imágenes",
    description:
      "Una ficha visual y bien explicada que transmita mejor el valor real de la actividad.",
  },
  {
    title: "Forma de contacto",
    description:
      "El siguiente paso debe ser fácil para que una familia interesada pueda consultarte sin fricción.",
  },
  {
    title: "Lectura rápida",
    description:
      "La idea es que se entienda de inmediato qué ofreces, para quién es y por qué merece la pena.",
  },
];

const benefits = [
  {
    title: "Más visibilidad local",
    description:
      "Te ayudamos a estar presente en un espacio donde las familias buscan propuestas para sus hijos y para compartir en familia.",
  },
  {
    title: "Una presentación más clara",
    description:
      "Mostramos tu actividad de forma ordenada para que el valor de tu propuesta se entienda mejor.",
  },
  {
    title: "Más oportunidades de contacto",
    description:
      "Facilitamos que nuevas familias descubran tu actividad y den el paso de pedir más información.",
  },
  {
    title: "Un entorno especializado",
    description:
      "NensGo no es una plataforma genérica: está centrada en actividades infantiles y familiares.",
  },
  {
    title: "Presencia digital sin complicaciones",
    description:
      "Queremos que participar también sea simple para proyectos pequeños, locales o con poco tiempo.",
  },
];

const audienceTypes = [
  "Academias y centros formativos",
  "Actividades extraescolares",
  "Talleres artísticos y creativos",
  "Propuestas deportivas",
  "Actividades culturales",
  "Espacios familiares",
  "Casales y actividades de temporada",
  "Profesionales o entidades que trabajen con peques y familias",
];

const requiredInfo = [
  "Quién eres o qué entidad representas.",
  "Qué servicio o actividad ofreces.",
  "En qué zona trabajas.",
  "Para qué edades está pensada tu propuesta.",
  "Una forma de contacto para poder hablar contigo.",
];

const currentValue = [
  "Mayor visibilidad para propuestas valiosas.",
  "Una presentación más profesional y fácil de entender.",
  "Más posibilidades de ser descubierta por familias afines.",
  "Más oportunidades de generar interés real y conversaciones de calidad.",
];

const futureSignals = [
  "Qué tipos de actividades generan más interés.",
  "Qué zonas muestran más búsquedas.",
  "Qué propuestas reciben más visitas.",
  "Qué fichas generan más clics o contactos.",
  "Tendencias útiles para entender mejor qué buscan las familias.",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading stack">
      <span className="eyebrow">{eyebrow}</span>
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
          <a className="brand" href="#inicio" aria-label="Ir al inicio de NensGo">
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

      <section id="inicio" className="section section--tight hero-section">
        <div className="container hero">
          <div className="hero__content stack">
            <span className="eyebrow">Landing B2B para centros y actividades</span>
            <h1 className="hero__title">
              NensGo nace para conectar a las familias con actividades de
              calidad.
            </h1>
            <p className="hero__description">
              Si ofreces talleres, deporte, arte, cultura o propuestas para
              peques, este espacio también es para ti. Queremos ayudarte a que
              tu actividad se descubra mejor, se entienda mejor y genere más
              interés real.
            </p>

            <div className="hero__actions">
              <Button href={FORM_URL} target="_blank">
                Unirme al proyecto
              </Button>
            </div>

            <ul className="hero__highlights">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="hero__highlight">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero-card">
              <div className="hero-card__logo-wrap">
                <img
                  className="hero-card__logo"
                  src="/nensgo-navbar-mark.png"
                  alt=""
                />
              </div>

              <div className="hero-card__body stack">
                <span className="hero-card__eyebrow">
                  Un escaparate claro para propuestas con valor
                </span>
                <div className="hero-card__panel">
                  <strong>Actividades infantiles y familiares</strong>
                  <span>Arte, deporte, cultura, apoyo y ocio en familia.</span>
                </div>
                <div className="hero-card__metrics">
                  <div className="hero-card__metric">
                    <strong>+ claridad</strong>
                    <span>para que las familias entiendan rápido qué ofreces</span>
                  </div>
                  <div className="hero-card__metric">
                    <strong>+ visibilidad</strong>
                    <span>para proyectos locales, centros y profesionales</span>
                  </div>
                </div>
              </div>

              <div className="hero-card__floating hero-card__floating--top">
                Pensado para proyectos reales
              </div>
              <div className="hero-card__floating hero-card__floating--bottom">
                Participar debe ser simple
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="que-es" className="section">
        <div className="container story-grid">
          <div className="stack">
            <SectionHeading
              eyebrow="Qué es NensGo"
              title="Reunir en un solo lugar actividades para peques y familias"
              description="NensGo nace para ordenar una oferta valiosa que hoy aparece dispersa, poco actualizada o difícil de descubrir a tiempo."
            />

            <div className="copy-stack stack">
              <p>
                Muchas propuestas interesantes están repartidas entre Instagram,
                grupos de WhatsApp, carteles, recomendaciones informales o webs
                poco cuidadas. Eso complica que las familias encuentren rápido
                actividades que sí encajan con ellas.
              </p>
              <p>
                Nuestro objetivo es hacerlo más fácil: ayudar a las familias a
                descubrir opciones cerca de ellas y dar más visibilidad a quienes
                ofrecen buenas propuestas.
              </p>
            </div>
          </div>

          <aside className="insight-panel">
            <span className="eyebrow">El problema hoy</span>
            <ul className="bullet-list">
              {discoveryPainPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="ofrecemos" className="section section--soft">
        <div className="container stack">
          <SectionHeading
            eyebrow="Qué ofrecemos"
            title="Un escaparate digital pensado para tu actividad"
            description="Queremos ofrecerte un espacio donde tu propuesta pueda verse de forma clara, atractiva y fácil de descubrir para las familias."
          />

          <div className="showcase-grid">
            {showcaseItems.map((item, index) => (
              <article key={item.title} className="showcase-card-item stack">
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="section">
        <div className="container stack">
          <SectionHeading
            eyebrow="Por qué te interesa participar"
            title="¿Por qué sumarte a NensGo?"
            description="Muchas familias ya están buscando actividades como la tuya, pero no siempre llegan a encontrarlas a tiempo o de forma sencilla."
          />

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="benefit-card stack">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="participar" className="section section--soft">
        <div className="container split-grid">
          <article className="content-panel stack">
            <SectionHeading
              eyebrow="A quién va dirigido"
              title="¿Quién puede participar?"
              description="Queremos contar con propuestas variadas y de calidad para construir una oferta útil, cuidada y diversa."
            />

            <ul className="pill-list">
              {audienceTypes.map((item) => (
                <li key={item} className="pill-list__item">
                  {item}
                </li>
              ))}
            </ul>

            <p className="content-panel__note">
              Si tu propuesta aporta valor a familias y niños, queremos
              conocerla.
            </p>

            <div>
              <Button href={FORM_URL} target="_blank">
                Quiero formar parte
              </Button>
            </div>
          </article>

          <article id="empezar" className="content-panel content-panel--accent stack">
            <SectionHeading
              eyebrow="Qué necesitamos de ti"
              title="¿Qué necesitamos para empezar?"
              description="Muy poco. Solo una primera información básica para entender tu propuesta y poder hablar contigo."
            />

            <ul className="check-list">
              {requiredInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="content-panel__note">
              Con eso podremos conocer mejor tu proyecto y ponernos en contacto
              contigo.
            </p>

            <div>
              <Button href={FORM_URL} target="_blank" variant="secondary">
                Enviar mis datos
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section id="valor" className="section">
        <div className="container stack">
          <SectionHeading
            eyebrow="Qué gana tu proyecto"
            title="Más que presencia: una oportunidad para crecer"
            description="Estar en NensGo no es solo aparecer en una plataforma. La idea es ayudarte a formar parte de un ecosistema donde las familias puedan descubrir mejor lo que haces."
          />

          <div className="value-grid">
            <article className="value-card stack">
              <span className="value-card__eyebrow">Valor desde el inicio</span>
              <ul className="value-list">
                {currentValue.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="value-card value-card--future stack">
              <span className="value-card__eyebrow">Y a futuro, también</span>
              <p>
                Nuestra idea no es solo darte visibilidad. Con el tiempo,
                también queremos compartir información útil para ayudarte a
                entender mejor el interés que genera tu actividad.
              </p>
              <ul className="value-list">
                {futureSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="section-cta">
            <Button href={FORM_URL} target="_blank">
              Quiero unirme desde ahora
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <article className="trust-band">
            <div className="trust-band__content stack">
              <SectionHeading
                eyebrow="Mensaje de confianza"
                title="Queremos construir algo útil, cuidado y de valor real"
                description="NensGo no quiere ser un simple listado sin criterio. Queremos crear un espacio donde las familias encuentren propuestas confiables y donde quienes organizan actividades puedan mostrarse de manera clara, cercana y útil."
              />
              <p className="trust-band__text">
                Por eso nos interesa contar con proyectos reales, bien
                explicados y con ganas de formar parte de una plataforma pensada
                para conectar mejor la oferta con la demanda.
              </p>
            </div>

            <div className="trust-band__summary">
              <strong>Lo importante:</strong>
              <p>
                que las buenas actividades no se pierdan entre el ruido digital
                de siempre.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <article className="cta-band">
            <div className="cta-band__content stack">
              <span className="eyebrow eyebrow--light">CTA final</span>
              <h2 className="cta-band__title">
                ¿Te gustaría que tu actividad forme parte de NensGo?
              </h2>
              <p className="cta-band__text">
                Déjanos tus datos en el formulario y te contactaremos para
                conocer tu propuesta si así lo deseas.
              </p>
            </div>

            <div className="cta-band__actions">
              <Button
                href={FORM_URL}
                target="_blank"
                variant="secondary"
                className="button--cta-light"
              >
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
