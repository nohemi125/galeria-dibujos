const BASE_URL = "https://galeria-dibujos-backend.onrender.com"

export const getLikes = async () => {
  const res = await fetch(`${BASE_URL}/likes`)
  return res.json()
}

export const toggleLike = async (imagenId, accion) => {
  const res = await fetch(`${BASE_URL}/likes/${imagenId}/toggle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accion }),
  })
  return res.json()
}

export const getComentarios = async () => {
  const res = await fetch(`${BASE_URL}/comentarios`)
  return res.json()
}

export const addComentario = async (comentario, nombre, ciudad, emoji, fecha) => {
  const res = await fetch(`${BASE_URL}/comentarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comentario, nombre, ciudad, emoji, fecha }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || "Error al enviar el comentario")
  }

  return res.json()
}