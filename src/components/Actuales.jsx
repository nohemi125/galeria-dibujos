"use client"

import "../CSS/galeria-estandar.css"
import { useState, useEffect } from "react"
import { getLikes, toggleLike as apiToggleLike } from "../api.js"

import dibujo6 from "../assets/actuales/dibujo6.JPG"
import dibujo8 from "../assets/actuales/dibujo8.JPG"
import dibujo10 from "../assets/actuales/dibujo10.jpg"
import dibujo11 from "../assets/actuales/dibujo11.jpg"
import dibujo17 from "../assets/actuales/dibujo17.jpg"
import dibujo18 from "../assets/actuales/dibujo18.jpg"
import dibujo19 from "../assets/actuales/dibujo19.jpg"
import dibujo20 from "../assets/actuales/dibujo20.jpg"
import dibujo21 from "../assets/actuales/dibujo21.jpg"
import dibujo22 from "../assets/actuales/dibujo22.jpg"
import dibujo23 from "../assets/actuales/dibujo23.jpg"
import dibujo24 from "../assets/actuales/dibujo24.jpg"
import dibujo25 from "../assets/actuales/dibujo25.JPG"
import dibujo26 from "../assets/actuales/dibujo26.jpg"
import dibujo27 from "../assets/actuales/dibujo27.jpg"
import dibujo28 from "../assets/actuales/dibujo28.JPG"
import dibujo29 from "../assets/actuales/dibujo29.jpg"
import dibujo30 from "../assets/actuales/dibujo30.jpg"
import dibujo31 from "../assets/actuales/dibujo31.jpg"
import dibujo32 from "../assets/actuales/dibujo32.jpeg"
import dibujo33 from "../assets/actuales/dibujo33.jpeg"
import dibujo34 from "../assets/actuales/dibujo34.jpeg"
import dibujo35 from "../assets/actuales/dibujo35.jpeg"
import dibujo36 from "../assets/actuales/dibujo36.jpeg"
import dibujo37 from "../assets/actuales/dibujo37.jpeg"
import dibujo38 from "../assets/actuales/dibujo38.jpeg"
import dibujo39 from "../assets/actuales/dibujo39.jpeg"
import dibujo40 from "../assets/actuales/dibujo40.jpeg"
import dibujo41 from "../assets/actuales/dibujo41.jpeg"
import dibujo42 from "../assets/actuales/dibujo42.jpeg"
import dibujo43 from "../assets/actuales/dibujo43.jpeg"
import dibujo44 from "../assets/actuales/dibujo44.jpeg"
import dibujo45 from "../assets/actuales/dibujo45.jpeg"
import dibujo46 from "../assets/actuales/dibujo46.jpeg"
import dibujo47 from "../assets/actuales/dibujo47.jpeg"
import dibujo48 from "../assets/actuales/dibujo48.jpeg"

function Actuales() {
  const [like, setLike] = useState({})
  const [likeCounts, setLikeCounts] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [orientacion, setOrientacion] = useState("vertical")

  useEffect(() => {
  // Cargar likes de MongoDB
  getLikes().then((data) => {
    const counts = {}
    Object.entries(data).forEach(([key, count]) => {
      if (key.startsWith("actuales-")) {
        const id = parseInt(key.split("-")[1])
        counts[id] = count
      }
    })
    setLikeCounts(counts)
  })

  // Cargar qué imágenes likeó este usuario desde localStorage
  const savedLikes = JSON.parse(localStorage.getItem("actuales-likes") || "{}")
  setLike(savedLikes)
}, [])

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setOrientacion(naturalWidth > naturalHeight ? "horizontal" : "vertical")
  }

  const handleToggleLike = async (id) => {
  const imagenId = `actuales-${id}`
  const accion = like[id] ? "unlike" : "like"

  // Actualizar estado local
  const newLike = { ...like, [id]: !like[id] }
  setLike(newLike)

  // Guardar en localStorage
  localStorage.setItem("actuales-likes", JSON.stringify(newLike))

  // Guardar en MongoDB
  const data = await apiToggleLike(imagenId, accion)
  setLikeCounts((prev) => ({ ...prev, [id]: data.count }))
}


  const dibujosActuales = [
    { id: 6,  imagen: dibujo6,  año: 2023, tiempo: "1 hora", categoria: "Dibujo por encargo" },
    { id: 8,  imagen: dibujo8,  año: 2023, tiempo: "1 hora", categoria: "Dibujo por encargo" },
    { id: 10, imagen: dibujo10, año: 2023, tiempo: "12 horas", categoria: "Dibujo por encargo" },
    { id: 11, imagen: dibujo11, año: 2023, tiempo: "8 horas", categoria: "Dibujo por encargo" },
    { id: 17, imagen: dibujo17, año: 2023, tiempo: "8 horas", categoria: "Dibujo por encargo" },
    { id: 18, imagen: dibujo18, año: 2023, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 19, imagen: dibujo19, año: 2024, tiempo: "11 horas", categoria: "Dibujo por encargo" },
    { id: 20, imagen: dibujo20, año: 2023, tiempo: "9 horas", categoria: "Dibujo por encargo" },
    { id: 21, imagen: dibujo21, año: 2023, tiempo: "11 horas", categoria: "Dibujo por encargo" },
    { id: 22, imagen: dibujo22, año: 2023, tiempo: "15 horas", categoria: "Dibujo por encargo" },
    { id: 23, imagen: dibujo23, año: 2023, tiempo: "10 horas", categoria: "Proyecto personal" },
    { id: 24, imagen: dibujo24, año: 2024, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 25, imagen: dibujo25, año: 2023, tiempo: "6 horas", categoria: "Inspirado en foto" },
    { id: 26, imagen: dibujo26, año: 2023, tiempo: "9 horas", categoria: "Dibujo por encargo" },
    { id: 27, imagen: dibujo27, año: 2025, tiempo: "5 horas", categoria: "Dibujo por encargo" },
    { id: 28, imagen: dibujo28, año: 2025, tiempo: "1 horas", categoria: "Inspirado en foto" },
    { id: 29, imagen: dibujo29, año: 2025, tiempo: "12 horas", categoria: "Reto" },
    { id: 30, imagen: dibujo30, año: 2025, tiempo: "2 horas", categoria: "Inspirado en foto" },
    { id: 31, imagen: dibujo31, año: 2025, tiempo: "3 horas", categoria: "Inspirado en foto" },
    { id: 32, imagen: dibujo32, año: 2026, tiempo: "14 horas", categoria: "Reto" },
    { id: 33, imagen: dibujo33, año: 2026, tiempo: "2 horas", categoria: "Inspirado en foto" },
    { id: 34, imagen: dibujo34, año: 2026, tiempo: "3 horas", categoria: "Inspirado en foto" },
    { id: 35, imagen: dibujo35, año: 2026, tiempo: "17 horas", categoria: "Reto" },
    { id: 36, imagen: dibujo36, año: 2026, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 37, imagen: dibujo37, año: 2026, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 38, imagen: dibujo38, año: 2026, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 39, imagen: dibujo39, año: 2026, tiempo: "12 horas", categoria: "Dibujo por encargo" },
    { id: 40, imagen: dibujo40, año: 2026, tiempo: "9 horas", categoria: "Dibujo por encargo" },
    { id: 41, imagen: dibujo41, año: 2026, tiempo: "7 horas", categoria: "Dibujo por encargo" },
    { id: 42, imagen: dibujo42, año: 2026, tiempo: "8 horas", categoria: "Dibujo por encargo" },
    { id: 43, imagen: dibujo43, año: 2026, tiempo: "9 horas", categoria: "Dibujo por encargo" },
    { id: 44, imagen: dibujo44, año: 2026, tiempo: "7 horas", categoria: "Inspirado en foto" },
    { id: 45, imagen: dibujo45, año: 2026, tiempo: "7 horas", categoria: "Restauracion de Foto" },
    { id: 46, imagen: dibujo46, año: 2026, tiempo: "7 horas", categoria: "Inspirado en foto" },
    { id: 47, imagen: dibujo47, año: 2026, tiempo: "7 horas", categoria: "Reto" },
    { id: 48, imagen: dibujo48, año: 2026, tiempo: "7 horas", categoria: "Dibujo por encargo" },


  ]

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
        <h2>Mis Dibujos Actuales</h2>
        <p>Explorando el hiperrealismo y técnicas avanzadas</p>
      </div>

      <div className="galeria-grid">
        {dibujosActuales.map((dibujo) => (
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
                <span className="categoria-tag">{dibujo.categoria}</span>
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

export default Actuales