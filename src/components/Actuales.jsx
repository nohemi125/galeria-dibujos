"use client"

import "../CSS/galeria-estandar.css"
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


import { useState } from "react"

function Actuales() {
  const [like, setLike] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [orientacion, setOrientacion] = useState("vertical")

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setOrientacion(naturalWidth > naturalHeight ? "horizontal" : "vertical")
  }

  const dibujosActuales = [
    {
      id: 6,
      imagen: dibujo6,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
  
    {
      id: 8,
      imagen: dibujo8,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 10,
      imagen: dibujo10,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos",
      tiempo: "12 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 11,
      imagen: dibujo11,
      año: 2023,
      titulo: "Retrato Realista",
      descripcion: "Retrato de un chico gaandor de una rifa",
      tiempo: "8 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
   
    {
      id: 17,
      imagen: dibujo17,
      año: 2023,
      titulo: "retratos echo por encargos",
      descripcion: "Retrato de una bebe , ya habia mejorado mucho mas en mis tecnicas",
      tiempo: "8 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 18,
      imagen: dibujo18,
      año: 2023,
      titulo: "Retrato Realista",
      descripcion: "Retrato de una pareja, dibujo echo por encargo",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 19,
      imagen: dibujo19,
      año: 2024,
      titulo: "dibujo realista de bebe",
      descripcion: "Retrato de una bebe , echo por encargo, aqui ya habia mejorado mucho mas en mis tecnicas, lo que me tomo mucho tiempo relaizar los detalles del vestido",
      tiempo: "11 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 20,
      imagen: dibujo20,
      año: 2023,
      titulo: "Retrato en familia",
      descripcion: "Retrato de una familia, de mis primero envios fuera de mi ciudad (buenaventura)",
      tiempo: "11 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 21,
      imagen: dibujo21,
      año: 2023,
      titulo: "retratos echo por encargos",
      descripcion: "de mis primeros envios fuera de mi ciudad (buenaventura)",
      tiempo: "10 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 22,
      imagen: dibujo22,
      año: 2023,
      titulo: "Practica de sombreado",
      descripcion: "lo realice en acompañamiento de un curso, para mejorar mis tecnicas de sombreado",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 23,
      imagen: dibujo23,
      año: 2023,
      titulo: "Retrato Realista de bebe",
      descripcion: "Retrato de una bebe, fue un pedido a chigorodo",
      tiempo: "7 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 24,
      imagen: dibujo24,
      año: 2024,
      titulo: "Practica de sombreado y deatalles pulidos",
      descripcion: "referencia de pinterest, para practicar sombreado y detalles pulidos",
      tiempo: "12 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 25,
      imagen: dibujo25,
      año: 2023,
      titulo: "Retrato Realista bebe",
      descripcion: "mi primer dibujo echo en tamaño grande 50x50cm y enviado a medellin",
      tiempo: "13 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 26,
      imagen: dibujo26,
      año: 2023,
      titulo: "Retrato Realista bebe",
      descripcion: "Retrato echos por encargo de personas que ya confiaban en mi trabajo",
      tiempo: "9 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 27,
      imagen: dibujo27,
      año: 2025,
      titulo: "dibujos de practica",
      descripcion: "referencia de pinterest, para practicar sombreado y detalles de pelajes",
      tiempo: "2 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 28,
      imagen: dibujo28,
      año: 2025,
      titulo: "Rostro Realista",
      descripcion: "Refrencia de pinterest, practicar luces y sombras en el rostro",
      tiempo: "18 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 29,
      imagen: dibujo29,
      año: 2025,
      titulo: "Rostro Realista",
      descripcion: "Refrencia de pinterest, dibujos echo para practicar en ratos libres",
      tiempo: "2 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 30,
      imagen: dibujo30,
      año: 2025,
      titulo: "gusto por el arte",
      descripcion: "referencia de pinterest, dibujo echo por gusto personal en mis ratos libres",
      tiempo: "4 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 31,
      imagen: dibujo31,
      año: 2025,
      titulo: "retrato de bebe realista",
      descripcion: "retrato por encargo echo para un bebe",
      tiempo: "13 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 32,
      imagen: dibujo32,
      año: 2026,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo enviado a cartagena",
      tiempo: "14 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 33,
      imagen: dibujo33,
      año: 2026,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un bebe",
      tiempo: "8 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 34,
      imagen: dibujo34,
      año: 2026,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un detalle de cumpleaños, enviado a chigorodo",
      tiempo: "3 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 35,
      imagen: dibujo35,
      año: 2026,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un detalle especial de pareja",
      tiempo: "17 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 36,
      imagen: dibujo36,
      año: 2026,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo en confianza a mi trabajo y apoyo a mi arte, enviado a carepa",
      tiempo: "12 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 37,
      imagen: dibujo37,
      año: 2026,
      titulo: "restauracion de foto viaje",
      descripcion: "retrato echo para restaurar una foto antigua de un viaje de familiar",
      tiempo: "3 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
  ]

  const toggleLike = (id) => {
    setLike((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
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
        <h2>Mis Dibujos Actuales</h2>
        <p>Explorando el hiperrealismo y técnicas avanzadas</p>
      </div>

      <div className="galeria-grid">
  {dibujosActuales.map((dibujo) => (
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
            onClick={(e) => {
              e.stopPropagation()
              toggleLike(dibujo.id)
            }}
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
            {/* Contador — solo muestra el número si hay al menos 1 like */}
            {like[dibujo.id] && (
              <span style={{ fontSize: 13, color: "#ff6b6b", fontWeight: 500 }}>
                1
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
                ⏱ {imagenSeleccionada.tiempo}
              </span>

              <span
                onClick={(e) => { e.stopPropagation(); toggleLike(imagenSeleccionada.id); }}
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