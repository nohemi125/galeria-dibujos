"use client"

import "../CSS/galeria-estandar.css"
import dibujo1 from "../assets/acolor/dibujo1.jpg"
import dibujo2 from "../assets/acolor/dibujo2.jpg"
import dibujo3 from "../assets/acolor/dibujo3.jpg"
import dibujo4 from "../assets/acolor/dibujo4.jpg"
import dibujo5 from "../assets/acolor/dibujo5.jpg"
import dibujo6 from "../assets/acolor/dibujo6.jpg"
import dibujo7 from "../assets/acolor/dibujo7.jpg"
import dibujo8 from "../assets/acolor/dibujo8.jpg"
import dibujo9 from "../assets/acolor/dibujo9.jpg"
import { useState } from "react"

function AColor() {
  const [like, setLike] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [filtroActivo, setFiltroActivo] = useState("todos")

  const dibujosColor = [
    {
      id: 1,
      imagen: dibujo1,
      año: 2023,
      titulo: "Ave Tucan",
      descripcion: "Referencia tomada de pinterest",
      tiempo:"3 horas",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "naturaleza",
    },
    {
      id: 2,
      imagen: dibujo2,
      año: 2023,
      titulo: "Will Smith",
      descripcion: "mi segundo intento, sin ninguna instruccion a seguir ",
      tiempo: "15+ horas",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "retrato",
    },
    {
      id: 3,
      imagen: dibujo3,
      año: 2024,
      titulo: "Bad Bunny",
      descripcion: "referencia tomada de pinterest, mi tercer intento",
      tiempo:" 2horas",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "retrato",
    },
    {
      id: 4,
      imagen: dibujo4,
      año: 2023,
      titulo: "Morgan Freeman",
      descripcion: "mi primer dibujo con colores, viendo videos del curso soy danny ",
      tiempo: "15+ horas",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "retrato",
    },
    {
      id: 5,
      imagen: dibujo5,
      año: 2025,
      titulo: "Practica de Lápices de colores",
      descripcion: "practica que uso para manejar degrado en color",
      tiempo: "1 hora",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "objeto",
    },
    {
      id: 6,
      imagen: dibujo6,
      año: 2025,
      titulo: "Manzana Verde - Practica de Lápices de colores",
      descripcion: "practica que uso para manejar degrado en color",
      tiempo: "1 hora",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "objeto",
    },
    {
      id: 7,
      imagen: dibujo7,
      año: 2025,
      titulo: "Uva - Practica de Lápices de colores",
      descripcion: "practica que uso para manejar degrado en color",
      tiempo: "1 hora",
      tecnica: "Marcadores Touch y lapices de colores",
      categoria: "objeto",
    },
    {
      id: 8,
      imagen: dibujo8,
      año: 2024,
      titulo: "Amarilla - Practica de Lápices de colores",
      descripcion: "practica que uso para manejar degrado en color",
      tiempo: "1 hora",
      tecnica: "Lápices de colores Prisma Color",
      categoria: "objeto",
    },
    {
      id: 9,
      imagen: dibujo9,
      año: 2025,
      titulo: "Casa - Practica de Marcadores Touch",
      descripcion: "practica que uso para manejar degrado en color",
      tiempo: "1 hora",
      tecnica: "Marcadores Touch",
      categoria: "objeto",
    }
  ]

  const categorias = ["todos", "retrato", "objeto", "naturaleza"]

  const dibujosFiltrados =
    filtroActivo === "todos" ? dibujosColor : dibujosColor.filter((dibujo) => dibujo.categoria === filtroActivo)

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
  }

  return (
    <div className="contenedor-galeria color-theme">
      <div className="titulo-galeria">
        <h2>Dibujos a Color</h2>
        <p>Explorando el mundo del color y las técnicas mixtas</p>
      </div>

      {/* Filtros */}
      <div className="filtros-galeria">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`filtro-btn ${filtroActivo === categoria ? "activo" : ""}`}
            onClick={() => setFiltroActivo(categoria)}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {dibujosFiltrados.map((dibujo) => (
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
              <h4>{dibujo.titulo}</h4>
              <p className="descripcion-galeria">{dibujo.descripcion}</p>
              <div className="meta-info">
                <span className="año-galeria">Año: {dibujo.año}</span>
                <span className="categoria-tag">{dibujo.categoria}</span>
              </div>
              <div className="acciones-galeria">
                <span
                  className="corazon-galeria"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(dibujo.id)
                  }}
                >
                  {like[dibujo.id] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ff6b6b"
                      stroke="#ff6b6b"
                      strokeWidth="2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#ff6b6b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal estandarizado */}
      {modalAbierto && imagenSeleccionada && (
        <div className="modal-galeria" onClick={cerrarModal}>
          <div className="modal-contenido-galeria" onClick={(e) => e.stopPropagation()}>
            <div className="modal-imagen">
              <img src={imagenSeleccionada.imagen || "/placeholder.svg"} alt={imagenSeleccionada.titulo} />
            </div>
            <div className="modal-info">
              <h3>{imagenSeleccionada.titulo}</h3>
              <p>
                <strong>Descripción:</strong> {imagenSeleccionada.descripcion}
              </p>
              <p>
                <strong>Tiempo:</strong> {imagenSeleccionada.tiempo}
              </p>
              <p>
                <strong>Técnica:</strong> {imagenSeleccionada.tecnica}
              </p>
              <p>
                <strong>Año:</strong> {imagenSeleccionada.año}
              </p>
              <p>
                <strong>Categoría:</strong> {imagenSeleccionada.categoria}
              </p>
              <button onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AColor
