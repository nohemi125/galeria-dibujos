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
  const [filtroActivo, setFiltroActivo] = useState("todos")

  const dibujosInfancia = [
    {
      id: 1,
      imagen: dibujo1,
      año: 2016,
      titulo: "pajarillos",
      tecnica: "colores eescolares",
      categoria: "imaginacion",
    },
    {
      id: 2,
      imagen: dibujo2,
      año: 2016,
      titulo: "Recuerdos de Infancia",
      tecnica: "colores escolares",
      categoria: "imaginacion",
    },
    {
      id: 3,
      imagen: dibujo3,
      año: 2016,
      titulo: "Técnica Básica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 4,
      imagen: dibujo4,
      año: 2017,
      titulo: "tecnica Basica",
      tecnica: "Lápiz ",
      categoria: "pinterest",
    },
    {
      id: 5,
      imagen: dibujo5,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 6,
      imagen: dibujo6,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },  
    {
      id: 7,
      imagen: dibujo7,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 8,
      imagen: dibujo8,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 9,
      imagen: dibujo9,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 10,
      imagen: dibujo10,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 11,
      imagen: dibujo11,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 12,
      imagen: dibujo12,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 13,
      imagen: dibujo13,
      año: 2016,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 14,
      imagen: dibujo14,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 15,
      imagen: dibujo16,
      año: 2018,
      titulo: "Técnica Basica",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 16,
      imagen: dibujo17,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Practicando con diferentes tipos de papel",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 17,
      imagen: dibujo18,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Explorando técnicas de dibujo a mano alzada",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 18,
      imagen: dibujo19,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Mejorando la precisión en los detalles",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 19,
      imagen: dibujo20,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Desarrollando mi técnica personal",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 20,
      imagen: dibujo21,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Practicando con referencias variadas",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 21,
      imagen: dibujo22,
      año: 2019,
      titulo: "Técnica Básica",
      descripcion: "Evolucionando en mi técnica de dibujo",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 22,
      imagen: dibujo23,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Practicando con diferentes estilos",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 23,
      imagen: dibujo24,
      año: 2018,
      titulo: "Técnica Básica",
      descripcion: "Mejorando la técnica de sombreado",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 24,
      imagen: dibujo25,
      año: 2017,
      titulo: "Técnica Básica",
      descripcion: "Dibujo experimental con técnicas mixtas",
      tecnica: "Lápiz",
      categoria: "pinterest",
    },
    {
      id: 25,
      imagen: dibujo26,
      año: 2017,
      titulo: "Técnica Básica",
      descripcion: "Primeros experimentos con colores escolares",
      tecnica: "colores escolares",
      categoria: "imaginacion",
    },
  ]

  const categorias = ["todos", "imaginacion", "pinterest"]

  const dibujosFiltrados =
    filtroActivo === "todos" ? dibujosInfancia : dibujosInfancia.filter((dibujo) => dibujo.categoria === filtroActivo)

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
    <div className="contenedor-galeria infancia-theme">
      <div className="titulo-galeria">
        <h2>Dibujos de mi Infancia</h2>
        <p>Descubriendo el talento y el amor que le tenía al dibujo</p>
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

export default Infancia
