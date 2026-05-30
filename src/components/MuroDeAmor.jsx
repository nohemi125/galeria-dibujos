import { useState } from "react"
import "../CSS/muroDeAmor.css"

const EMOJIS = ["❤️", "🎨", "✨", "🔥", "😍", "🌟", "💫", "🙌"]

const comentariosIniciales = [
  {
    id: 1,
    nombre: "Valentina",
    ciudad: "Bogotá, Colombia",
    comentario: "Tu arte me deja sin palabras, cada trazo tiene una vida propia. ¡Eres increíble!",
    emoji: "✨",
    fecha: "Mayo 2025",
  },
  {
    id: 2,
    nombre: "Carlos",
    ciudad: "Medellín, Colombia",
    comentario: "Los retratos que haces parecen fotos, es impresionante lo que logras con un lápiz.",
    emoji: "🎨",
    fecha: "Abril 2025",
  },
  {
    id: 3,
    nombre: "Sofía",
    ciudad: "Ciudad de México",
    comentario: "Encontré tu galería por casualidad y me quedé más de una hora viendo cada dibujo. ¡Talento puro!",
    emoji: "❤️",
    fecha: "Abril 2025",
  },
]

function MuroDeAmor() {
  const [comentarios, setComentarios] = useState(comentariosIniciales)
  const [form, setForm] = useState({ nombre: "", ciudad: "", comentario: "", emoji: "❤️" })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const validar = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = "Escribe tu nombre"
    if (!form.ciudad.trim()) e.ciudad = "Escribe tu ciudad"
    if (!form.comentario.trim()) e.comentario = "Escribe tu mensaje"
    else if (form.comentario.trim().length < 10) e.comentario = "El mensaje es muy corto"
    return e
  }

  const handleEnviar = () => {
    const e = validar()
    if (Object.keys(e).length > 0) { setErrores(e); return }

    const nuevo = {
      id: Date.now(),
      nombre: form.nombre.trim(),
      ciudad: form.ciudad.trim(),
      comentario: form.comentario.trim(),
      emoji: form.emoji,
      fecha: new Date().toLocaleDateString("es-CO", { month: "long", year: "numeric" }),
    }

    // Cuando conectes la base de datos, reemplaza esta línea por tu llamada a la API
    setComentarios([nuevo, ...comentarios])
    setForm({ nombre: "", ciudad: "", comentario: "", emoji: "❤️" })
    setErrores({})
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3500)
  }

  return (
    <section className="muro-de-amor">

      {/* Encabezado */}
      <div className="muro-header">
        <div className="muro-corona">💌</div>
        <h2 className="muro-titulo">Muro de Amor</h2>
        <p className="muro-subtitulo">
          ¿Cuál fue tu dibujo favorito? Me gustaría saber cual te gustó más. Cada comentario me anima a seguir creando🤍
        </p>
        <div className="muro-linea"></div>
      </div>

      {/* Formulario */}
      <div className="muro-formulario-wrapper">
        <div className="muro-formulario">
          <h3 className="form-titulo">Deja tu mensaje ✍️</h3>

          {/* Selector de emoji */}
          <div className="form-grupo">
            <label className="form-label">Elige tu reacción</label>
            <div className="emoji-selector">
              {EMOJIS.map((e) => (
                <button
                  key={e}
                  type="button"
                  className={`emoji-btn ${form.emoji === e ? "activo" : ""}`}
                  onClick={() => setForm({ ...form, emoji: e })}
                  aria-label={`Emoji ${e}`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Nombre y ciudad en fila */}
          <div className="form-fila">
            <div className="form-grupo">
              <label className="form-label">Tu nombre</label>
              <input
                className={`form-input ${errores.nombre ? "error" : ""}`}
                type="text"
                placeholder="Ej: Valentina"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                maxLength={40}
              />
              {errores.nombre && <span className="form-error">{errores.nombre}</span>}
            </div>

            <div className="form-grupo">
              <label className="form-label">Tu ciudad o país</label>
              <input
                className={`form-input ${errores.ciudad ? "error" : ""}`}
                type="text"
                placeholder="Ej: Bogotá, Colombia"
                value={form.ciudad}
                onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                maxLength={50}
              />
              {errores.ciudad && <span className="form-error">{errores.ciudad}</span>}
            </div>
          </div>

          {/* Mensaje */}
          <div className="form-grupo">
            <label className="form-label">Tu mensaje</label>
            <textarea
              className={`form-textarea ${errores.comentario ? "error" : ""}`}
              placeholder="Cuéntame qué sentiste al ver mi arte... 💬"
              value={form.comentario}
              onChange={(e) => setForm({ ...form, comentario: e.target.value })}
              maxLength={300}
              rows={4}
            />
            <span className="form-contador">{form.comentario.length}/300</span>
            {errores.comentario && <span className="form-error">{errores.comentario}</span>}
          </div>

          <button className="form-btn-enviar" onClick={handleEnviar}>
            Enviar mensaje {form.emoji}
          </button>

          {enviado && (
            <div className="form-exito">
              ¡Gracias por tu mensaje! Significa mucho para mí 🤍
            </div>
          )}
        </div>
      </div>

      {/* Muro de tarjetas */}
      <div className="muro-grid">
        {comentarios.map((c, i) => (
          <div
            key={c.id}
            className="muro-tarjeta"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="tarjeta-emoji">{c.emoji}</div>
            <p className="tarjeta-comentario">"{c.comentario}"</p>
            <div className="tarjeta-footer">
              <div className="tarjeta-autor">
                <span className="tarjeta-nombre">{c.nombre}</span>
                <span className="tarjeta-ciudad">📍 {c.ciudad}</span>
              </div>
              <span className="tarjeta-fecha">{c.fecha}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default MuroDeAmor