const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: {
    type: String,
    required: true,
  },
    precio: {
    type: String,
    required: true,
  },
    talla: {
    type: String,
    required: true,
  },
    cantidad: {
    type: Number,
    required: true,
  },
    imagen: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Producto", productSchema);