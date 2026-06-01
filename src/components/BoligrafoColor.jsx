"use client"

import "../CSS/galeria-estandar.css"
import { useState, useEffect } from "react"
import { getLikes, toggleLike as apiToggleLike } from "../api.js"

import dibujo1 from "../assets/boligrafo/dibujo1.jpeg"
import dibujo2 from "../assets/boligrafo/dibujo2.jpeg"
import dibujo3 from "../assets/boligrafo/dibujo3.jpeg"
import dibujo4 from "../assets/boligrafo/dibujo4.jpeg"
import dibujo5 from "../assets/boligrafo/dibujo5.jpeg"
import dibujo6 from "../assets/boligrafo/dibujo6.jpeg"
import dibujo7 from "../assets/boligrafo/dibujo7.jpeg"

function BolígrafoColor() {
  const [like, setLike] = useState({})
  const [likeCounts, setLikeCounts] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [orientacion, setOrientacion] = useState("vertical")

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("boligrafo-likes") || "{}")
    setLike(savedLikes)

    getLikes().then((data) => {
      const counts = {}
      Object.entries(data).forEach(([key, count]) => {
        if (key.startsWith("boligrafo-")) {
          const id = parseInt(key.split("-")[1])
          counts[id] = count
        }
      })
      setLikeCounts(counts)
    })
  }, [])

  const dibujos = [
    { id: 1, imagen: dibujo1, año: 2025, tiempo: "1 hora" },
    { id: 2, imagen: dibujo2, año: 2026, tiempo: "1:30 horas" },
    { id: 3, imagen: dibujo3, año: 2026, tiempo: "3 horas" },
    { id: 4, imagen: dibujo4, año: 2026, tiempo: "1 hora" },
    { id: 5, imagen: dibujo5, año: 2026, tiempo: "4 horas" },
    { id: 6, imagen: dibujo6, año: 2026, tiempo: "5 hora" },
    { id: 7, imagen: dibujo7, año: 2026, tiempo: "2 horas" },
  ]

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setOrientacion(naturalWidth > naturalHeight ? "horizontal" : "vertical")
  }

  const handleToggleLike = async (id) => {
    const imagenId = `boligrafo-${id}`
    const accion = like[id] ? "unlike" : "like"
    const newLike = { ...like, [id]: !like[id] }
    setLike(newLike)
    localStorage.setItem("boligrafo-likes", JSON.stringify(newLike))
    const data = await apiToggleLike(imagenId, accion)
    setLikeCounts((prev) => ({ ...prev, [id]: data.count }))
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
    <div className="contenedor-galeria actuales-theme">
      <div className="titulo-galeria">
        <h2>Bolígrafo Color</h2>
        <p>Explorando el color con bolígrafo de 10 tintas</p>
      </div>

      <div className="galeria-grid">
        {dibujos.map((dibujo) => (
          <div className="tarjeta-galeria" key={dibujo.id} onClick={() => abrirModal(dibujo)}>
            <div className="imagen-wrapper">
              <img src={dibujo.imagen || "/placeholder.svg"} alt={`dibujo-${dibujo.id}`} />
              <div className="overlay-galeria">
                <div className="overlay-content">
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
                  onClick={(e) => { e.stopPropagation(); handleToggleLike(dibujo.id) }}
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
                  {(likeCounts[dibujo.id] > 0 || like[dibujo.id]) && (
                    <span style={{ fontSize: 13, color: "#ff6b6b", fontWeight: 500 }}>
                      {likeCounts[dibujo.id] || 0}
                    </span>
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
              alt={`dibujo-${imagenSeleccionada.id}`}
              onLoad={handleImageLoad}
              style={{
                display: "block", width: "100%", height: "auto",
                maxHeight: "90vh", objectFit: "contain",
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
                ⏱ {imagenSeleccionada.tiempo}
              </span>

              <span
                onClick={(e) => { e.stopPropagation(); handleToggleLike(imagenSeleccionada.id) }}
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

export default BolígrafoColor