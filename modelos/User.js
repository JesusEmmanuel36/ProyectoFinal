const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);