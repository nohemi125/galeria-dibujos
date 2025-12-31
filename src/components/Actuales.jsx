"use client"

import "../CSS/galeria-estandar.css"
// import dibujo1 from "../assets/actuales/dibujo1.JPG"
import dibujo2 from "../assets/actuales/dibujo2.jpg"
import dibujo3 from "../assets/actuales/dibujo3.jpg"
import dibujo4 from "../assets/actuales/dibujo4.jpg"
import dibujo5 from "../assets/actuales/dibujo5.jpg"
import dibujo6 from "../assets/actuales/dibujo6.JPG"
import dibujo7 from "../assets/actuales/dibujo7.JPG"
import dibujo8 from "../assets/actuales/dibujo8.JPG"
// import dibujo9 from "../assets/actuales/dibujo9.JPG"
import dibujo10 from "../assets/actuales/dibujo10.jpg"
import dibujo11 from "../assets/actuales/dibujo11.jpg"
import dibujo12 from "../assets/actuales/dibujo12.JPG"
import dibujo13 from "../assets/actuales/dibujo13.JPG"
import dibujo15 from "../assets/actuales/dibujo15.JPG"
import dibujo16 from "../assets/actuales/dibujo16.JPG"
import dibujo17 from "../assets/actuales/dibujo17.jpg"
import dibujo18 from "../assets/actuales/dibujo18.jpg"
import dibujo19 from "../assets/actuales/dibujo19.jpg"
import dibujo20 from "../assets/actuales/dibujo20.jpg"
import dibujo21 from "../assets/actuales/dibujo21.jpg"
import dibujo22 from "../assets/actuales/dibujo22.jpg"
import dibujo23 from "../assets/actuales/dibujo23.jpg"
import dibujo24 from "../assets/actuales/dibujo24.jpg"
import dibujo25 from "../assets/actuales/dibujo25.jpeg"
import dibujo26 from "../assets/actuales/dibujo26.jpeg"
import dibujo27 from "../assets/actuales/dibujo27.jpg"
import dibujo28 from "../assets/actuales/dibujo28.png"
import dibujo29 from "../assets/actuales/dibujo29.png"
import dibujo30 from "../assets/actuales/dibujo30.png"
import dibujo31 from "../assets/actuales/dibujo31.png"
import dibujo32 from "../assets/actuales/dibujo32.jpeg"
import dibujo33 from "../assets/actuales/dibujo33.jpeg"
import dibujo34 from "../assets/actuales/dibujo34.png"
import dibujo35 from "../assets/actuales/dibujo35.png"
import dibujo36 from "../assets/actuales/dibujo36.png"
import dibujo37 from "../assets/actuales/dibujo37.png"
import dibujo38 from "../assets/actuales/dibujo38.png"
import dibujo39 from "../assets/actuales/dibujo39.png"
import dibujo40 from "../assets/actuales/dibujo40.png"
import dibujo41 from "../assets/actuales/dibujo41.jpeg"


import { useState } from "react"

function Actuales() {
  const [like, setLike] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const dibujosActuales = [
    // {
    //   id: 1,
    //   imagen: dibujo1,
    //   año: 2023,
    //   titulo: "Retrato Realista",
    //   tecnica: "Lapiz grafito",
    //   descripcion: "Retrato pareja",
    //   tiempo: "1 horas",
    //   categoria: "pedidos",
    // },
    {
      id: 2,
      imagen: dibujo2,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 3,
      imagen: dibujo3,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 4,
      imagen: dibujo4,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 5,
      imagen: dibujo5,
      año: 2023,
      titulo: "primeros retratos",
      descripcion: "Retrato echos por encargos ",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito", 
      categoria: "pedidos",
    },
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
      id: 7,
      imagen: dibujo7,
      año: 2024,
      titulo: "Practica de paleje animal",
      descripcion: "Paracticando los tipos de pelajes o cabellos",
      tiempo: "1 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
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
    // {
    //   id: 9,
    //   imagen: dibujo9,
    //   año: 2023,
    //   titulo: "Retrato Realista",
    //   descripcion: "Retrato de una pareja",
    //   tiempo: "1 horas",
    //   tecnica: "Lápiz grafito",
    //   categoria: "pedidos",
    // },
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
      id: 12,
      imagen: dibujo12,
      año: 2023,
      titulo: "Practca de perspectiva",
      descripcion: "Ejercico de perspectiva lineal" ,
      tiempo: "30 minutos",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 13,
      imagen: dibujo13,
      año: 2023,
      titulo: "Practica de perspectiva",
      descripcion: "Ejercicio de perspectiva oblicua",
      tiempo: "30 minutos",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 14,
      imagen: dibujo15,
      año: 2023,
      titulo: "Practica de perspectiva",
      descripcion: "Ejercicio de perspectiva aerea",
      tiempo: "30 minutos",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    // {
    //   id: 15,
    //   imagen: dibujo16,
    //   año: 2024,
    //   titulo: "Peon Rey",
    //   descripcion: "Ejercicio de sombras",
    //   tiempo: "30 minutos",
    //   tecnica: "Lápiz grafito",
    //   categoria: "practica",
    // },
    {
      id: 16,
      imagen: dibujo17,
      año: 2022,
      titulo: "retratos echo por encargos",
      descripcion: "para estas fechas ya habia mejorado mucho mas en mis tecnicas",
      tiempo: "10 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 17,
      imagen: dibujo18,
      año: 2023,
      titulo: "retratos echo por encargos",
      descripcion: "Retrato de una bebe , ya habia mejorado mucho mas en mis tecnicas",
      tiempo: "8 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 18,
      imagen: dibujo19,
      año: 2023,
      titulo: "Retrato Realista",
      descripcion: "Retrato de una pareja, dibujo echo por encargo",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 19,
      imagen: dibujo20,
      año: 2024,
      titulo: " dibujo realista de bebe",
      descripcion: "Retrato de una bebe , echo por encargo, aqui ya habia mejorado mucho mas en mis tecnicas, lo que me tomo mucho tiempo relaizar los detalles del vestido",
      tiempo: "11 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 20,
      imagen: dibujo21,
      año: 2023,
      titulo: "Retrato en familia",
      descripcion: "Retrato de una familia, de mis primero envios fuera de mi ciudad (buenaventura)",
      tiempo: "11 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 21,
      imagen: dibujo22,
      año: 2023,
      titulo: "retratos echo por encargos",
      descripcion: "de mis primeros envios fuera de mi ciudad (buenaventura)",
      tiempo: "10 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 22,
      imagen: dibujo23,
      año: 2023,
      titulo: "Practica de sombreado",
      descripcion: "lo realice en acompañamiento de un curso, para mejorar mis tecnicas de sombreado",
      tiempo: "15 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },  
    {   
      id: 23,
      imagen: dibujo24,
      año: 2023,
      titulo: "Retrato Realista de bebe",
      descripcion: "Retrato de una bebe, fue un pedido a chigorodo",
      tiempo: "7 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 24,
      imagen: dibujo25,
      año: 2024,
      titulo: "Practica de sombreado y deatalles pulidos",
      descripcion: "referencia de pinterest, para practicar sombreado y detalles pulidos, no lo termine de pulir del todo, ya que me costo mucho hacer deatalles de las verrugas y arrugas de la piel",
      tiempo: "12 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 25,
      imagen: dibujo26,
      año: 2023,
      titulo: "Retrato Realista bebe",
      descripcion: "mi primer dibujo echo en tamaño grande 50x50cm y enviado a medellin",
      tiempo: "13 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 26,
      imagen: dibujo27,
      año: 2023,
      titulo: "Retrato Realista bebe",
      descripcion: "Retrato echos por encargo de personas que ya confiaban en mi trabajo",
      tiempo: "9 horas",
      tecnica: "Lápiz grafito",
      categoria: "pedidos",
    },
    {
      id: 27,
      imagen: dibujo28,
      año: 2025,
      titulo: "dibujos de practica",
      descripcion: "referencia de pinterest, para practicar sombreado y detalles de pelajes",
      tiempo: "2 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 28,
      imagen: dibujo29,
      año: 2025,
      titulo: "Rostro Realista",
      descripcion: "Refrencia de pinterest,practicar luces y sombras en el rostro, para esta dibujo habia puesto en practica lo aprendido en mis dibujos anteriores",
      tiempo: "18 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    }, 
     {
      id: 29,
      imagen: dibujo30,
      año: 2025,
      titulo: "Rostro Realista",
      descripcion: "Refrencia de pinterest, dibujos echo para practicar en ratos libres",
      tiempo: "2 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
      {
      id: 30,
      imagen: dibujo31,
      año: 2025,
      titulo: "gusto por el arte",
      descripcion: "referenica d epinterest, dibujo echo por gusto personal en mis ratos libres",
      tiempo: "4 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
      {
      id: 31,
      imagen: dibujo32,
      año: 2025,
      titulo: "retrato de bebe realista",
      descripcion: "retrato por encargo echo para un bebe",
      tiempo: "13 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
     {
      id: 32,
      imagen: dibujo33,
      año: 2025,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo enviado a cartagena",
      tiempo: "14 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 33,
      imagen: dibujo34,
      año: 2025,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un bebbe ",
      tiempo: "8 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 34,
      imagen: dibujo35,
      año: 2025,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un detalle de cumpleaños, enviado a chigorodo",
      tiempo: "3 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 35,
      imagen: dibujo36,
      año: 2025,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo para un detalle especial de pareja",
      tiempo: "17 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 36,
      imagen: dibujo37,
      año: 2025,
      titulo: "retrato realista por encargo",
      descripcion: "dibujo por encargo en confianza a mi trabajo y apoyo a mi arte , enviado a carepa",
      tiempo: "12 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },{
      id: 37,
      imagen: dibujo38,
      año: 2025,
      titulo: "restauracion de foto viaje",
      descripcion: "retrato echo para restaurar una foto antigua de un viaje de familiar",
      tiempo: "3 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 38,
      imagen: dibujo39,
      año: 2025,
      titulo: "gusto por el arte",
      descripcion: "referencia de pinterest, dibujo echo por gusto personal en mis ratos libres para mejorar mis tecnicas",
      tiempo: "9 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 39,
      imagen: dibujo40,
      año: 2025,
      titulo: "gusto por el arte",
      descripcion: "referencia de pinterest, dibujo echo por gusto personal en mis ratos libres, aplicando nueva tecnica de dibujo (loomis)",
      tiempo: "5 horas",
      tecnica: "Lápiz grafito",
      categoria: "practica",
    },
    {
      id: 40,
      imagen: dibujo41,
      año: 2025,
      titulo: "gusto por el arte",
      descripcion: "referencia de pinterest, dibujo echo por gusto personal en mis ratos libres, aplicando nueva tecnica de dibujo",
      tiempo: "13 horas",
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
              <h4>{dibujo.titulo}</h4>
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
                <strong>Técnica:</strong> {imagenSeleccionada.tecnica}
              </p>
              <p>
                <strong>Año:</strong> {imagenSeleccionada.año}
              </p>
              <p>
                <strong>Tiempo:</strong> {imagenSeleccionada.tiempo}
              </p>

              <button onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Actuales
