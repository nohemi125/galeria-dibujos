"use client"

import "../CSS/galeria-estandar.css"
import { useState, useEffect } from "react"
import { getLikes, toggleLike as apiToggleLike } from "../api.js"

import dibujo1 from "../assets/Comienzos/dibujo1.JPG"
import dibujo2 from "../assets/Comienzos/dibujo2.JPG"
import dibujo3 from "../assets/Comienzos/dibujo3.jpg"
import dibujo4 from "../assets/Comienzos/dibujo4.JPG"
import dibujo5 from "../assets/Comienzos/dibujo5.JPG"
import dibujo6 from "../assets/Comienzos/dibujo6.JPG"
import dibujo7 from "../assets/Comienzos/dibujo7.JPG"
import dibujo8 from "../assets/Comienzos/dibujo8.JPG"
import dibujo9 from "../assets/Comienzos/dibujo9.JPG"
import dibujo10 from "../assets/Comienzos/dibujo10.JPG"
import dibujo11 from "../assets/Comienzos/dibujo11.JPG"
import dibujo12 from "../assets/Comienzos/dibujo12.JPG"
import dibujo13 from "../assets/Comienzos/dibujo13.JPG"
import dibujo14 from "../assets/Comienzos/dibujo14.JPG"
import dibujo15 from "../assets/Comienzos/dibujo15.JPG"
import dibujo16 from "../assets/Comienzos/dibujo16.JPG"
import dibujo17 from "../assets/Comienzos/dibujo17.JPG"
import dibujo18 from "../assets/Comienzos/dibujo18.JPG"
import dibujo19 from "../assets/Comienzos/dibujo19.JPG"
import dibujo20 from "../assets/Comienzos/dibujo20.JPG"
import dibujo21 from "../assets/Comienzos/dibujo21.JPG"
import dibujo22 from "../assets/Comienzos/dibujo22.JPG"
import dibujo23 from "../assets/Comienzos/dibujo23.JPG"
import dibujo24 from "../assets/Comienzos/dibujo24.JPG"
import dibujo25 from "../assets/Comienzos/dibujo25.JPG"
import dibujo27 from "../assets/Comienzos/dibujo27.JPG"
import dibujo28 from "../assets/Comienzos/dibujo28.JPG"
import dibujo29 from "../assets/Comienzos/dibujo29.JPG"
import dibujo30 from "../assets/Comienzos/dibujo30.jpg"
import dibujo31 from "../assets/Comienzos/dibujo31.jpg"
import dibujo32 from "../assets/Comienzos/dibujo32.JPG"
import dibujo33 from "../assets/Comienzos/dibujo33.JPG"
import dibujo34 from "../assets/Comienzos/dibujo34.JPG"
import dibujo35 from "../assets/Comienzos/dibujo35.jpg"
import dibujo36 from "../assets/Comienzos/dibujo36.jpg"
import dibujo37 from "../assets/Comienzos/dibujo37.jpg"
import dibujo38 from "../assets/Comienzos/dibujo38.jpg"

function Comienzos() {
  const [like, setLike] = useState({})
  const [likeCounts, setLikeCounts] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [orientacion, setOrientacion] = useState("vertical")

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("comienzos-likes") || "{}")
    setLike(savedLikes)

    getLikes().then((data) => {
      const counts = {}
      Object.entries(data).forEach(([key, count]) => {
        if (key.startsWith("comienzos-")) {
          const id = parseInt(key.split("-")[1])
          counts[id] = count
        }
      })
      setLikeCounts(counts)
    })
  }, [])

  const dibujosComienzos = [
    { id: 1,  imagen: dibujo1,  año: 2023, tiempo: "3 horas" },
    { id: 2,  imagen: dibujo2,  año: 2023, tiempo: "1 hora" },
    { id: 3,  imagen: dibujo4,  año: 2023, tiempo: "1 hora" },
    { id: 4,  imagen: dibujo5,  año: 2023, tiempo: "1 minuto" },
    { id: 5,  imagen: dibujo6,  año: 2023, tiempo: "1 hora" },
    { id: 6,  imagen: dibujo7,  año: 2023, tiempo: "1 hora "},
    { id: 7,  imagen: dibujo8,  año: 2023, tiempo: "3 horas" },
    { id: 8,  imagen: dibujo9,  año: 2023, tiempo: "2 hora" },
    { id: 9,  imagen: dibujo10, año: 2023, tiempo: "2 hora" },
    { id: 10, imagen: dibujo11, año: 2023, tiempo: "3 hora" },
    { id: 11, imagen: dibujo12, año: 2022, tiempo: "2 hora" },
    { id: 12, imagen: dibujo13, año: 2022, tiempo: "2 hora" },
    { id: 13, imagen: dibujo14, año: 2022, tiempo: "2 hora" },
    { id: 14, imagen: dibujo15, año: 2023, tiempo: "2 horas" },
    { id: 15, imagen: dibujo16, año: 2023, tiempo: "2 hora" },
    { id: 16, imagen: dibujo17, año: 2022, tiempo: "2 hora" },
    { id: 17, imagen: dibujo18, año: 2022, tiempo: "2 hora" },
    { id: 18, imagen: dibujo19, año: 2022, tiempo: "2 hora" },
    { id: 19, imagen: dibujo20, año: 2022, tiempo: "3 minutos" },
    { id: 20, imagen: dibujo21, año: 2022, tiempo: "1 hora" },
    { id: 21, imagen: dibujo22, año: 2022, tiempo: "1 hora" },
    { id: 22, imagen: dibujo23, año: 2022, tiempo: "6 horas" },
    { id: 23, imagen: dibujo24, año: 2022, tiempo: "4 horas" },
    { id: 24, imagen: dibujo25, año: 2023, tiempo: "20 minutos" },
    { id: 26, imagen: dibujo27, año: 2023, tiempo: "20 minutos" },
    { id: 27, imagen: dibujo28, año: 2023, tiempo: "1 hora" },
    { id: 28, imagen: dibujo29, año: 2023, tiempo: "1 hora" },
    { id: 29, imagen: dibujo30, año: 2023, tiempo: "10 horas" },
    { id: 30, imagen: dibujo3,  año: 2022, tiempo: "15 horas" },
    { id: 31, imagen: dibujo31, año: 2022, tiempo: "15 horas" },
    { id: 32, imagen: dibujo32, año: 2022, tiempo: "15 horas" },
    { id: 33, imagen: dibujo33, año: 2022, tiempo: "1 horas" },
    { id: 34, imagen: dibujo34, año: 2023, tiempo: "1 horas" },
    { id: 35, imagen: dibujo35, año: 2023, tiempo: "1 horas" },
    { id: 36, imagen: dibujo36, año: 2023, tiempo: "1 horas" },
    { id: 37, imagen: dibujo37, año: 2023, tiempo: "1 horas" },
    { id: 38, imagen: dibujo38, año: 2023, tiempo: "1 horas" },
  ]

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setOrientacion(naturalWidth > naturalHeight ? "horizontal" : "vertical")
  }

  const handleToggleLike = async (id) => {
    const imagenId = `comienzos-${id}`
    const accion = like[id] ? "unlike" : "like"
    const newLike = { ...like, [id]: !like[id] }
    setLike(newLike)
    localStorage.setItem("comienzos-likes", JSON.stringify(newLike))
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
    <div className="contenedor-galeria comienzos-theme">
      <div className="titulo-galeria">
        <h2>Mis Comienzos en el Realismo</h2>
        <p>Los primeros pasos hacia el dominio de la técnica realista</p>
      </div>

      <div className="galeria-grid">
        {dibujosComienzos.map((dibujo) => (
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

export default Comienzos