const mongoose = require("mongoose");

const unidadesSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },

  unidades: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Unidades", unidadesSchema);
