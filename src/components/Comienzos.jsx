"use client"

import "../CSS/galeria-estandar.css"
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
import dibujo26 from "../assets/Comienzos/dibujo26.JPG"
import dibujo27 from "../assets/Comienzos/dibujo27.JPG"
import dibujo28 from "../assets/Comienzos/dibujo28.JPG"
import dibujo29 from "../assets/Comienzos/dibujo29.JPG"
import dibujo30 from "../assets/Comienzos/dibujo30.jpg"
import dibujo31 from "../assets/Comienzos/dibujo31.jpg"

import { useState } from "react"

function Comienzos() {
  const [like, setLike] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [filtroActivo, setFiltroActivo] = useState("todos")

  const dibujosComienzos = [
    {
      id: 1,
      imagen: dibujo1,
      año: 2023,
      titulo: "practica de rostro",
      descripcion: "practica de rostro, tome la imagen de pinterest",
      tiempo: "3 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 2,
      imagen: dibujo2,
      año: 2023,
      titulo: "Retrato ",
      descripcion: "Dibujos que realice como reto de una hora",
      tiempo: "1 horas",
      tecnica: "Lápiz 2B-6B",
      categoria: "pedidos",
    },
    {
      id: 3,
      imagen: dibujo4,
      año: 2023,
      titulo: "practica de rostro",
      descripcion: "reto de dibujos retrato en una hora",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 4,
      imagen: dibujo5,
      año: 2023,
      titulo: "practica de tiempo",
      descripcion: "practica de tiempo, tome la imagen de pinteres",
      tiempo: "1 minuto",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 5,
      imagen: dibujo6,
      año: 2023,
      titulo: "practica de animales",
      descripcion: "practica de posicion de potros",
      tiempo: "20 minuto",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 6,
      imagen: dibujo7,
      año: 2023,
      titulo: "practica de felinos",
      descripcion: "dibunjando los distintos felinos",
      tiempo: "20 minuto",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 7,
      imagen: dibujo8,
      año: 2023,
      titulo: "Regalo para amiga",
      descripcion: "dibujo que realice para una amiga por su cumpleaños",
      tiempo: "2 horas",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 8,
      imagen: dibujo9,
      año: 2023,
      titulo: "regalo para amiga",
      descripcion: "dibujo que realice para una amiga que quieria su retrato",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 9,
      imagen: dibujo10,
      año: 2023,
      titulo: "regalo para amiga",
      descripcion: "dibujo que realice para una amiga que quieria su retrato",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 10,
      imagen: dibujo11,
      año: 2023,
      titulo: "Dibujo de la abuela",
      descripcion: "detalle que realice para la abuela de mi novio",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 11,
      imagen: dibujo12,
      año: 2022,
      titulo: "regalo para amigo",
      descripcion: "dibujo que realice para una amiga que quieria su retrato",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 12,
      imagen: dibujo13,
      año: 2022,
      titulo: "regalo para amiga",
      descripcion: "dibujo que realice para una amiga que quieria su retrato",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 13,
      imagen: dibujo14,
      año: 2022,
      titulo: "regalo para amigo",
      descripcion: "dibujo que realice para una amiga que quieria su retrato",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 14,
      imagen: dibujo15,
      año: 2023,
      titulo: "Dibujo al bebe",
      descripcion: "detalle que realice para un primo",
      tiempo: "2 hora",
      tecnica: "Lápiz grafito",
      categoria: "regalos",
    },
    {
      id: 15,
      imagen: dibujo16,
      año: 2023,
      titulo: "practica de bebe",
      descripcion: "practica para mejorar mi tecnica, tome la imagen de pinteres",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 16,
      imagen: dibujo17,
      año: 2022,
      titulo: "practica de rostro",
      descripcion: "primeros retratos que realice sin usar ninguna tecnica de dibujo",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 17,
      imagen: dibujo18,
      año: 2022,
      titulo: "practica de rostro",
      descripcion: "primeros retratos que realice sin usar ninguna tecnica de dibujo",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 18,
      imagen: dibujo19,
      año: 2022,
      titulo: "retrato para una amiga",
      descripcion: "primeros retratos que realice sin usar ninguna tecnica de dibujo",
      tiempo: " horas",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 19,
      imagen: dibujo20,
      año: 2022,
      titulo: "practica de bebe",
      descripcion: "practicando para mejorar, y tomando imagenes de refencia de pinterst",
      tiempo: "30 minutos",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 20,
      imagen: dibujo21,
      año: 2022,
      titulo: "practica",
      descripcion: "practicando para mejorar, y tomando imagenes de refencia de pinterst",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 21,
      imagen: dibujo22,
      año: 2022,
      titulo: "Anne Hathaway",
      descripcion: "practica rostros, despues de descubrir mi talento",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 22,
      imagen: dibujo23,
      año: 2022,
      titulo: "Mama",
      descripcion: "Primer dibujo realista despues de descubrir que podia dibujar",
      tiempo: "3 hora",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 23,
      imagen: dibujo24,
      año: 2022,
      titulo: "primer pedido",
      descripcion: "primer dibujo que me pidieron, lo hice sin realizar ninguna tecnica de dibujo",
      tiempo: "4 horas",
      tecnica: "Lápiz grafito",
      categoria: "Primeros pedidos",
    },
    {
      id: 24,
      imagen: dibujo25,
      año: 2023,
      titulo: "practica",
      descripcion: "practica de dibujo tomando referencia de pinterst",
      tiempo: "20 minutos",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 25,
      imagen: dibujo26,
      año: 2023,
      titulo: "dibujo amiga",
      descripcion: "para este dibujo ya tenia conocimientos en tecnicas de dibujo",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "primeros pedidos",
    },
    {
      id: 26,
      imagen: dibujo27,
      año: 2023,
      titulo: "rostro boligrafo",
      descripcion: "primer dibujo hecho con boligrafo",
      tiempo: "20 minuto",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 27,
      imagen: dibujo28,
      año: 2023,
      titulo: "pez Koi",
      descripcion: "este dibujo lo hice tomando referencias de pinterst",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 28,
      imagen: dibujo29,
      año: 2023,
      titulo: "pedido para amigo",
      descripcion: "un amigo me pidio dibujar a su esposa",
      tiempo: "1 hora",
      tecnica: "Lápiz grafito",
      categoria: "detalles",
    },
    {
      id: 29,
      imagen: dibujo30,
      año: 2023,
      titulo: "primer retrato",
      descripcion: "de mis primeros pedidos despues te tener mas tecticas y tacticas de dibujo",
      tiempo: "10 horas",
      tecnica: "Lápiz grafito",
      categoria: "primeros pedidos",
    },
    {
      id: 30,
      imagen: dibujo3,
      año: 2022,
      titulo: "practica detalles",
      descripcion: "de mis primeros pedidos despues te tener mas tecticas y tacticas de dibujo",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "Primeros Retratos",
    },
    {
      id: 31,
      imagen: dibujo31,
      año: 2022,
      titulo: "primeros",
      descripcion: "de mis primeros pedidos despues te tener mas tecticas y tacticas de dibujo",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "primeros pedidos",
    },



  ]

  const categorias = ["todos", "Primeros Retratos", "primeros pedidos", "regalos"]

  const dibujosFiltrados =
    filtroActivo === "todos" ? dibujosComienzos : dibujosComienzos.filter((dibujo) => dibujo.categoria === filtroActivo)

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
    <div className="contenedor-galeria comienzos-theme">
      <div className="titulo-galeria">
        <h2>Mis Comienzos en el Realismo</h2>
        <p>Los primeros pasos hacia el dominio de la técnica realista</p>
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
                <strong>Descripcion:</strong> {imagenSeleccionada.descripcion}
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

export default Comienzos
