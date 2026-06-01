"use client"

import "../CSS/acercaDeMi.css"
import mifoto from "../assets/nohemi2.jpg"
import fotomia2 from "../assets/fotomia2.jpeg"
import { useEffect, useRef, useState } from "react"

function SobreMi() {
  const [textoVisible, setTextoVisible] = useState(false)
  const [estadisticasVisible, setEstadisticasVisible] = useState(false)
  const heroImgRef = useRef(null)
  const heroImg2Ref = useRef(null)

  useEffect(() => {
    const timer1 = setTimeout(() => setTextoVisible(true), 500)
    const timer2 = setTimeout(() => setEstadisticasVisible(true), 1000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  useEffect(() => {
    const imgs = [heroImgRef.current, heroImg2Ref.current].filter(Boolean)
    if (!imgs.length) return

    let parallaxInstance = null

    import("simple-parallax-js")
      .then(({ default: SimpleParallax }) => {
        const validImgs = [heroImgRef.current, heroImg2Ref.current].filter(Boolean)
        if (!validImgs.length) return
        parallaxInstance = new SimpleParallax(validImgs, {
          scale: 1.1,
          delay: 0.2,
          transition: "cubic-bezier(0,0,0,1)",
        })
      })
      .catch((err) => {
        console.error("Error cargando simple-parallax-js", err)
      })

    return () => {
      if (parallaxInstance?.destroy) {
        parallaxInstance.destroy()
      }
    }
  }, [])

  const habilidades = [
    { nombre: "Realismo", nivel: 65 },
    { nombre: "Dibujo a Lápiz", nivel: 90 },
    { nombre: "Técnicas de Color", nivel: 40 },
    { nombre: "Caricaturas", nivel: 80 },
    { nombre: "Retratos", nivel: 92 },
  ]

  const estadisticas = [
    { numero: "150+", texto: "Dibujos Creados" },
    { numero: "5", texto: "Años de Experiencia dibujando" },
    { numero: "30+", texto: "Retratos Realizados" },
    { numero: "100%", texto: "Autodidacta" },
  ]

  return (
    <div className="sobre-mi-mejorado">

      {/* Sección Hero */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="texto-hero">
            <h1 className="titulo-principal">
              <span className="nombre-artista">Nohemy Morelo</span>
              <span className="subtitulo">Artista Autodidacta</span>
            </h1>
            <p className={`descripcion-hero ${textoVisible ? "visible" : ""}`}>
              Transformando emociones en arte a través del realismo
            </p>

            {/* Redes sociales — junto al nombre, como firma artística */}
            <div className="hero-redes">
              <a
                href="https://www.tiktok.com/@nohemi_dibuja?_r=1&_t=ZS-96mdGxUYwLc" 
                target="_blank"
                rel="noopener noreferrer"
                className="hero-red-social tiktok"
                aria-label="TikTok de Nohemy Morelo"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
                <span>TikTok</span>
              </a>

              <a
                href="https://www.facebook.com/share/17YyLGmixv/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="hero-red-social facebook"
                aria-label="Facebook de Nohemy Morelo"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Dos fotos flotando juntas */}
          <div className="imagen-hero">
            <div className="fotos-duo">
              <div className="marco-artistico foto-principal">
                <img
                  ref={heroImgRef}
                  src={mifoto || "/placeholder.svg"}
                  alt="Nohemy Morelo - Artista"
                />
                <div className="decoracion-marco"></div>
              </div>
              <div className="marco-artistico foto-secundaria">
                <img
                  ref={heroImg2Ref}
                  src={fotomia2 || "/placeholder.svg"}
                  alt="Nohemy Morelo - Artista"
                />
                <div className="decoracion-marco"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Acerca de Mí */}
      <div className="seccion-acerca">
        <div className="contenedor-acerca">
          <div className="columna-izquierda">
            <h2 className="titulo-seccion">Mi Historia Artística</h2>
            <div className="historia-contenido">
              <div className="parrafo-destacado">
                <p>
                  Hola! soy Nohemy Morelo. Desde pequeña, el arte ha sido parte de mi vida. pero fue a partir del 2019
                  cuando descubrí mi talento para el realismo y los retratos, una técnica que he desarrollado de forma
                  autodidacta, y también disfruto crear caricaturas y explorar diferentes estilos.
                  <br />
                  <br />
                  Esta galería refleja mi evolución como artista, mi dedicación y el amor que pongo en cada trazo.
                  Gracias por acompañarme en este viaje visual.
                </p>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-fecha">2013</div>
                  <div className="timeline-contenido">
                    <h4>Primeros Trazos</h4>
                    <p>Descubrí mi pasión por el dibujo desde niña, creando caricaturas y copiando imágenes que llamaban mi atencion.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-fecha">2018</div>
                  <div className="timeline-contenido">
                    <h4>Exploración Técnica</h4>
                    <p>Comencé a enfocarme en rostros expresivos y realistas. Me atrajo el realismo y empecé a explorar nuevas herramientas, técnicas y materiales.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-fecha">2024</div>
                  <div className="timeline-contenido">
                    <h4>Estilo Propio</h4>
                    <p>Consolidé un estilo único que es dibujo a lápiz. Actualmente, comparto mi arte con el mundo mientras sigo creciendo como artista.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-fecha">Visión</div>
                  <div className="timeline-contenido">
                    <h4>Artista Profesional</h4>
                    <p>Aspiro a especializarme como artista profesional en hiperrealismo con grafito y lápices de colores. y profundizar en estas técnicas y explorar nuevos medios como acuarela, boligrafo y dibujo digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columna-derecha">
            <div className="tarjeta-habilidades">
              <h3>Mis Especialidades</h3>
              <div className="habilidades-lista">
                {habilidades.map((habilidad, index) => (
                  <div key={index} className="habilidad-item">
                    <div className="habilidad-header">
                      <span className="habilidad-nombre">{habilidad.nombre}</span>
                      <span className="habilidad-porcentaje">{habilidad.nivel}%</span>
                    </div>
                    <div className="barra-progreso">
                      <div
                        className="progreso-fill"
                        style={{
                          width: textoVisible ? `${habilidad.nivel}%` : "0%",
                          transitionDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Estadísticas */}
      <div className={`seccion-estadisticas ${estadisticasVisible ? "visible" : ""}`}>
        <div className="estadisticas-grid">
          {estadisticas.map((stat, index) => (
            <div key={index} className="estadistica-item">
              <div className="estadistica-numero">{stat.numero}</div>
              <div className="estadistica-texto">{stat.texto}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Filosofía */}
      <div className="seccion-filosofia">
        <div className="filosofia-contenido">
          <blockquote className="cita-artistica">
            "Cada trazo es mi forma de acercarme a la realidad, y cada sombra, una emoción que intento transmitir.
            Mi arte es donde se cruza lo que veo y lo que quiero lograr."
          </blockquote>
          <cite>- Nohemy Morelo</cite>
        </div>
      </div>


    </div>
  )
}

export default SobreMi