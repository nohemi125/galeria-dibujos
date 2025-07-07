"use client"

import "../CSS/acercaDeMi.css"
import mifoto from "../assets/nohemi2.jpg"
import { useState, useEffect } from "react"

function SobreMi() {
  const [textoVisible, setTextoVisible] = useState(false)
  const [estadisticasVisible, setEstadisticasVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setTextoVisible(true), 500)
    const timer2 = setTimeout(() => setEstadisticasVisible(true), 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const habilidades = [
    { nombre: "realismo", nivel: 65 },
    { nombre: "Dibujo a Lápiz", nivel: 90 },
    { nombre: "Técnicas de Color", nivel: 40 },
    { nombre: "Caricaturas", nivel: 80 },
    { nombre: "Retratos", nivel: 92 },
  ]

  const estadisticas = [
    { numero: "150+", texto: "Dibujos Creados" },
    { numero: "17", texto: "Años de Experiencia dibujando" },
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
            {/* <div className="botones-hero">
              <button className="btn-primario">Ver Portfolio</button>
              <button className="btn-secundario">Contactar</button>
            </div> */}
          </div>

          <div className="imagen-hero">
            <div className="marco-artistico">
              <img src={mifoto || "/placeholder.svg"} alt="Nohemy Morelo - Artista" />
              <div className="decoracion-marco"></div>
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
                  Hola, soy Nohemy Morelo. Desde pequeña, el arte ha sido parte fundamental de mi vida. Me especializo en el hiperrealismo, una técnica que he desarrollado de forma autodidacta, y también disfruto crear caricaturas y explorar diferentes estilos.
                  <br /><br />
                  Esta galería refleja mi evolución como artista, mi dedicación y el amor que pongo en cada trazo. Gracias por acompañarme en este viaje visual.
                </p>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-fecha">2013</div>
                  <div className="timeline-contenido">
                    <h4>Primeros Trazos</h4>
                    <p>Descubrí mi pasión por el dibujo desde niña, creando caricaturas 
                      y copiando imágenes que me inspiraban.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-fecha">2018</div>
                  <div className="timeline-contenido">
                    <h4>Exploración Técnica</h4>
                    <p>Comencé a enfocarme en rostros expresivos y realistas. Me atrajo el rrealismo
                       y empecé a explorar nuevas herramientas, técnicas y materiales.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-fecha">2024</div>
                  <div className="timeline-contenido">
                    <h4>Estilo Propio</h4>
                    <p>Consolidé un estilo único que combina dibujo a lápiz, color y emociones.
                       Actualmente, comparto mi arte con el mundo mientras sigo creciendo como artista.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-fecha">Visión</div>
                  <div className="timeline-contenido">
                    <h4>Artista Profesional</h4>
                    <p>Aspiro a especializarme como artista profesional en hiperrealismo con grafito y lápices de colores. 
                      Quiero profundizar en estas técnicas y explorar nuevos medios como acuarela y óleo para enriquecer mis técnicas de dibujo</p>
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
            "Cada trazo es mi forma de acercarme a la realidad, y cada sombra, 
            una emoción que intento transmitir. Mi arte es donde se cruza lo que veo y lo que quiero lograr."
          </blockquote>
          <cite>- Nohemy Morelo</cite>
        </div>
      </div>
    </div>
  )
}

export default SobreMi
