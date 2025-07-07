"use client"

import "../CSS/SesionTiempo.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function SesionTiempo() {
  const [tarjetasVisible, setTarjetasVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTarjetasVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const etapas = [
    {
      id: "infancia",
      titulo: "Infancia",
      subtitulo: "Los Primeros Trazos",
      descripcion: "Donde todo comenzó, mis primeros dibujos llenos de inocencia y creatividad",
      ruta: "/infancia",
      imagen: "infancia.jpg",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icono: "🎨",
      años: "2015-2019",
      cantidad: "25+ dibujos",
    },
    {
      id: "comienzos",
      titulo: "Mis Comienzos",
      subtitulo: "Descubriendo el Realismo",
      descripcion: "Mis primeros intentos en el realismo, donde comenzé a desarrollar mi técnica",
      ruta: "/comienzos",
      imagen: "Alapiz.jpg",
      color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      icono: "🌱",
      años: "2018-2020",
      cantidad: "30+ dibujos",
    },
    {
      id: "actuales",
      titulo: "Actuales",
      subtitulo: "Técnica Perfeccionada",
      descripcion: "Mis obras más recientes donde demuestro mi avance desde mi infancia hasta la actualidad, y como he mejorado",
      ruta: "/actuales",
      imagen: "nohemi.jpg",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icono: "✏️",
      años: "2021-2024",
      cantidad: "20+ dibujos",
    },
    {
      id: "color",
      titulo: "A Color",
      subtitulo: "Explosión Cromática",
      descripcion: "Explorando el mundo del color con técnicas mixtas, es una tectica que apenas y estoy logrando desarrollar",
      ruta: "/color",
      imagen: "a color.jpg",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icono: "🌈",
      años: "2023-2025",
      cantidad: "9 dibujos",
    },
  ]

  return (
    <div className="sesion-tiempo-mejorada">
      <div className="contenedor-etapas">
        {/* Header de la sección */}
        <div className="header-etapas">
          <h2 className="titulo-etapas">Mi Evolución Artística</h2>
          <p className="subtitulo-etapas">Descubre mi crecimiento a través de diferentes períodos creativos</p>
          <div className="linea-decorativa"></div>
        </div>

        {/* Grid de tarjetas */}
        <div className={`grid-etapas ${tarjetasVisible ? "visible" : ""}`}>
          {etapas.map((etapa, index) => (
            <Link
              key={etapa.id}
              to={etapa.ruta}
              className="tarjeta-etapa"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="tarjeta-contenido">
                {/* Imagen de fondo */}
                <div
                  className="imagen-fondo"
                  style={{
                    backgroundImage: `url('/GaleriaArte/Galeria-dibujos/src/assets/${etapa.imagen}')`,
                  }}
                ></div>

                {/* Overlay con gradiente */}
                <div
                  className="overlay-gradiente"
                  style={{
                    background: etapa.color,
                  }}
                ></div>

                {/* Contenido de la tarjeta */}
                <div className="contenido-tarjeta">
                  <div className="header-tarjeta">
                    <span className="icono-etapa">{etapa.icono}</span>
                    <div className="info-periodo">
                      <span className="años">{etapa.años}</span>
                      <span className="cantidad">{etapa.cantidad}</span>
                    </div>
                  </div>

                  <div className="texto-tarjeta">
                    <h3 className="titulo-tarjeta">{etapa.titulo}</h3>
                    <h4 className="subtitulo-tarjeta">{etapa.subtitulo}</h4>
                    <p className="descripcion-tarjeta">{etapa.descripcion}</p>
                  </div>

                  <div className="footer-tarjeta">
                    <span className="btn-explorar">
                      Explorar Galería
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Efectos decorativos */}
                <div className="efectos-decorativos">
                  <div className="circulo-decorativo circulo-1"></div>
                  <div className="circulo-decorativo circulo-2"></div>
                  <div className="circulo-decorativo circulo-3"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sección adicional */}
        <div className="seccion-adicional">
          <div className="caja-inspiracion">
            <h3>{"Cada etapa cuenta una historia única"}</h3>
            <p>
            Mi arte ha recorrido distintas etapas, desde los primeros dibujos de mi infancia,
             donde solo buscaba que se parecieran a lo que veía, hasta retratos que expresan 
             emociones y desafíos técnicos. Con el tiempo, descubrí la magia del color, creando
              obras que parecen irreales por su detalle, pero que nacen de trazos hechos a mano.
               Cada etapa refleja mi crecimiento, mi pasión y ese deseo constante de acercarme a 
               la realidad a través del arte..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SesionTiempo
