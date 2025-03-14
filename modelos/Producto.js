const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },

  carrito: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Producto", productSchema);
