"use client"

import "../CSS/galeria-estandar.css"
import dibujo1 from "../assets/infancia/dibujo1.JPG"
import dibujo2 from "../assets/infancia/dibujo2.JPG"
import dibujo3 from "../assets/infancia/dibujo3.JPG"
import dibujo4 from "../assets/infancia/dibujo4.JPG"
import dibujo5 from "../assets/infancia/dibujo5.JPG"
import dibujo6 from "../assets/infancia/dibujo6.JPG"
import dibujo7 from "../assets/infancia/dibujo7.JPG"
import dibujo8 from "../assets/infancia/dibujo8.JPG"
import dibujo9 from "../assets/infancia/dibujo9.JPG"
import dibujo10 from "../assets/infancia/dibujo10.JPG"
import dibujo11 from "../assets/infancia/dibujo11.JPG"
import dibujo12 from "../assets/infancia/dibujo12.JPG"
import dibujo13 from "../assets/infancia/dibujo13.JPG"
import dibujo14 from "../assets/infancia/dibujo14.JPG"
import dibujo16 from "../assets/infancia/dibujo16.JPG"
import dibujo17 from "../assets/infancia/dibujo17.JPG"
import dibujo18 from "../assets/infancia/dibujo18.JPG"
import dibujo19 from "../assets/infancia/dibujo19.JPG"
import dibujo20 from "../assets/infancia/dibujo20.JPG"
import dibujo21 from "../assets/infancia/dibujo21.JPG"
import dibujo22 from "../assets/infancia/dibujo22.JPG"
import dibujo23 from "../assets/infancia/dibujo23.JPG"
import dibujo24 from "../assets/infancia/dibujo24.JPG"
import dibujo25 from "../assets/infancia/dibujo25.JPG"
import dibujo26 from "../assets/infancia/dibujo26.JPG"

import { useState } from "react"

function Infancia() {
  const [like, setLike] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [orientacion, setOrientacion] = useState("vertical")

  const dibujosInfancia = [
    { id: 1, imagen: dibujo1, año: 2016, titulo: "pajarillos", tecnica: "colores escolares", categoria: "imaginacion" },
    { id: 2, imagen: dibujo2, año: 2016, titulo: "Recuerdos de Infancia", tecnica: "colores escolares", categoria: "imaginacion" },
    { id: 3, imagen: dibujo3, año: 2016, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 4, imagen: dibujo4, año: 2017, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 5, imagen: dibujo5, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 6, imagen: dibujo6, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 7, imagen: dibujo7, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 8, imagen: dibujo8, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 9, imagen: dibujo9, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 10, imagen: dibujo10, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 11, imagen: dibujo11, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 12, imagen: dibujo12, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 13, imagen: dibujo13, año: 2016, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 14, imagen: dibujo14, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 15, imagen: dibujo16, año: 2018, titulo: "Técnica Basica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 16, imagen: dibujo17, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 17, imagen: dibujo18, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 18, imagen: dibujo19, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 19, imagen: dibujo20, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 20, imagen: dibujo21, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 21, imagen: dibujo22, año: 2019, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 22, imagen: dibujo23, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 23, imagen: dibujo24, año: 2018, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 24, imagen: dibujo25, año: 2017, titulo: "Técnica Básica", tecnica: "Lápiz", categoria: "pinterest" },
    { id: 25, imagen: dibujo26, año: 2017, titulo: "Técnica Básica", tecnica: "colores escolares", categoria: "imaginacion" },
  ]

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setOrientacion(naturalWidth > naturalHeight ? "horizontal" : "vertical")
  }

  const toggleLike = (id) => {
    setLike((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const abrirModal = (dibujo) => {
    setImagenSeleccionada(dibujo)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setImagenSeleccionada(null)
    setOrientacion("vertical")
  }

  return (
    <div className="contenedor-galeria infancia-theme">
      <div className="titulo-galeria">
        <h2>Dibujos de mi Infancia</h2>
        <p>Descubriendo el talento y el amor que le tenía al dibujo</p>
      </div>

      <div className="galeria-grid">
        {dibujosInfancia.map((dibujo) => (
          <div className="tarjeta-galeria" key={dibujo.id} onClick={() => abrirModal(dibujo)}>
            <div className="imagen-wrapper">
              <img src={dibujo.imagen || "/placeholder.svg"} alt={dibujo.titulo} />
              <div className="overlay-galeria">
                <div className="overlay-content">
                  <span className="tecnica-overlay">{dibujo.tecnica}</span>
                  <span className="ver-detalle">Ver Detalle</span>
                </div>
              </div>
            </div>

            <div className="info-galeria">
              <div className="meta-info">
                <span className="año-galeria">Año: {dibujo.año}</span>
              </div>
              <div className="acciones-galeria">
                <span
                  className="corazon-galeria"
                  onClick={(e) => { e.stopPropagation(); toggleLike(dibujo.id) }}
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  {like[dibujo.id] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff6b6b" stroke="#ff6b6b" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  )}
                  {like[dibujo.id] && (
                    <span style={{ fontSize: 13, color: "#ff6b6b", fontWeight: 500 }}>1</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && imagenSeleccionada && (
        <div
          onClick={cerrarModal}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              width: orientacion === "vertical" ? "min(90vw, 480px)" : "min(90vw, 700px)",
              maxHeight: "90vh",
              background: "#111",
            }}
          >
            <img
              src={imagenSeleccionada.imagen || "/placeholder.svg"}
              alt={imagenSeleccionada.titulo}
              onLoad={handleImageLoad}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />

            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 25%, transparent 60%, rgba(0,0,0,0.8) 100%)",
              pointerEvents: "none",
            }} />

            <button
              onClick={cerrarModal}
              aria-label="Cerrar"
              style={{
                position: "absolute", top: 12, right: 12,
                background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%",
                width: 34, height: 34, display: "flex", alignItems: "center",
                justifyContent: "center", cursor: "pointer", color: "#fff", fontSize: 16, padding: 0,
              }}
            >
              ✕
            </button>

            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "1.25rem 1rem 1rem",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                🖊 {imagenSeleccionada.tecnica}
              </span>

              <span
                onClick={(e) => { e.stopPropagation(); toggleLike(imagenSeleccionada.id) }}
                style={{ cursor: "pointer" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill={like[imagenSeleccionada.id] ? "#ff6b6b" : "none"}
                  stroke="#ff6b6b" strokeWidth="2"
                  width="28" height="28" viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Infancia