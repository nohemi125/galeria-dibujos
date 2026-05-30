from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

MONGO_URI = os.environ.get("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["galeria"]

likes_col = db["likes"]
comentarios_col = db["comentarios"]

# ─── LIKES ────────────────────────────────────────────────

@app.route("/likes/<imagen_id>", methods=["GET"])
def get_likes(imagen_id):
    doc = likes_col.find_one({"imagen_id": imagen_id})
    count = doc["count"] if doc else 0
    return jsonify({"imagen_id": imagen_id, "count": count})

@app.route("/likes/<imagen_id>/toggle", methods=["POST"])
def toggle_like(imagen_id):
    data = request.json
    accion = data.get("accion", "like")
    doc = likes_col.find_one({"imagen_id": imagen_id})
    if not doc:
        likes_col.insert_one({"imagen_id": imagen_id, "count": 0})
        doc = likes_col.find_one({"imagen_id": imagen_id})
    nuevo = doc["count"] + (1 if accion == "like" else -1)
    nuevo = max(0, nuevo)
    likes_col.update_one({"imagen_id": imagen_id}, {"$set": {"count": nuevo}})
    return jsonify({"imagen_id": imagen_id, "count": nuevo})

@app.route("/likes", methods=["GET"])
def get_all_likes():
    docs = likes_col.find({})
    result = {doc["imagen_id"]: doc["count"] for doc in docs}
    return jsonify(result)

# ─── COMENTARIOS ──────────────────────────────────────────

@app.route("/comentarios", methods=["GET"])
def get_comentarios():
    docs = list(comentarios_col.find({}).sort("_id", -1))
    for doc in docs:
        doc["_id"] = str(doc["_id"])
    return jsonify(docs)

@app.route("/comentarios", methods=["POST"])
def add_comentario():
    data = request.json
    texto = data.get("comentario", "").strip()
    nombre = data.get("nombre", "Visitante").strip() or "Visitante"
    ciudad = data.get("ciudad", "").strip()
    emoji = data.get("emoji", "❤️")
    fecha = data.get("fecha", "")

    if not texto or len(texto) < 10:
        return jsonify({"error": "El mensaje es muy corto"}), 400

    result = comentarios_col.insert_one({
        "comentario": texto,
        "nombre": nombre,
        "ciudad": ciudad,
        "emoji": emoji,
        "fecha": fecha,
    })
    return jsonify({
        "id": str(result.inserted_id),
        "comentario": texto,
        "nombre": nombre,
        "ciudad": ciudad,
        "emoji": emoji,
        "fecha": fecha,
    }), 201

if __name__ == "__main__":
    app.run(debug=True)