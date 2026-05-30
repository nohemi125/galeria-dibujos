import { useState, useEffect } from "react"
import "../CSS/muroDeAmor.css"
import { getComentarios, addComentario } from "../api.js"

const EMOJIS = ["❤️", "🎨", "✨", "🔥", "😍", "🌟", "💫", "🙌"]

function MuroDeAmor() {
  const [comentarios, setComentarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [form, setForm] = useState({ nombre: "", ciudad: "", comentario: "", emoji: "❤️" })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    getComentarios()
      .then((data) => setComentarios(data))
      .catch((err) => console.error("Error cargando comentarios", err))
      .finally(() => setCargando(false))
  }, [])

  const validar = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = "Escribe tu nombre"
    if (!form.ciudad.trim()) e.ciudad = "Escribe tu ciudad"
    if (!form.comentario.trim()) e.comentario = "Escribe tu mensaje"
    else if (form.comentario.trim().length < 10) e.comentario = "El mensaje es muy corto"
    return e
  }

  const handleEnviar = async () => {
    const e = validar()
    if (Object.keys(e).length > 0) { setErrores(e); return }

    setEnviando(true)
    const fecha = new Date().toLocaleDateString("es-CO", { month: "long", year: "numeric" })

    try {
      const nuevo = await addComentario(
        form.comentario.trim(),
        form.nombre.trim(),
        form.ciudad.trim(),
        form.emoji,
        fecha,
      )
      setComentarios([nuevo, ...comentarios])
      setForm({ nombre: "", ciudad: "", comentario: "", emoji: "❤️" })
      setErrores({})
      setEnviado(true)
      setTimeout(() => setEnviado(false), 3500)
    } catch (err) {
      console.error("Error enviando comentario", err)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="muro-de-amor">

      {/* Encabezado */}
      <div className="muro-header">
        <div className="muro-corona">💌</div>
        <h2 className="muro-titulo">Muro de Amor</h2>
        <p className="muro-subtitulo">
          ¿Cuál fue tu dibujo favorito? Me gustaría saber cuál te gustó más. Cada comentario me anima a seguir creando 🤍
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

          {/* Nombre y ciudad */}
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

          <button className="form-btn-enviar" onClick={handleEnviar} disabled={enviando}>
            {enviando ? "Enviando..." : `Enviar mensaje ${form.emoji}`}
          </button>

          {enviado && (
            <div className="form-exito">
              ¡Gracias por tu mensaje! Significa mucho para mí 🤍
            </div>
          )}
        </div>
      </div>

      {/* Muro de tarjetas */}
      {cargando ? (
        <p style={{ textAlign: "center", color: "#aaa", padding: "2rem" }}>Cargando mensajes...</p>
      ) : (
        <div className="muro-grid">
          {comentarios.length === 0 ? (
            <p style={{ textAlign: "center", color: "#aaa", gridColumn: "1/-1" }}>
              Sé el primero en dejar un mensaje 🤍
            </p>
          ) : (
            comentarios.map((c, i) => (
              <div
                key={c._id || c.id}
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
            ))
          )}
        </div>
      )}

    </section>
  )
}

export default MuroDeAmor