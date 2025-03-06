const express = require("express");
const router = express.Router();
const Unidades = require("../modelos/Unidades");

router.post("/agregar-unidades", async (req, res) => {
  const { userid, unidades } = req.body;

  try {
    // Busca el carrito del usuario
    let usuarioExistente = await Unidades.findOne({ userid });

    if (usuarioExistente) {
      console.log("Ya existe el usuario con unidades.");
      // Si ya existe, actualiza el carrito
      usuarioExistente.unidades = unidades;
      await usuarioExistente.save();
      return res.status(200).json({ message: "unidades actualizadas" });
    } else {
      console.log("El usuario no existe, creando nuevo usuario.");
      // Si no existe, crea uno nuevo
      const nuevoUsuario = new Unidades({
        userid,
        unidades,
      });
      await nuevoUsuario.save();
      return res.status(200).json({ message: "usuario creado" });
    }
  } catch (error) {
    console.error("Error en la creación o actualización del carrito:", error);
    return res.status(500).json({ message: "Error al procesar el carrito" });
  }
});

router.post("/get-unidades", async (req, res) => {
  const { userid } = req.body;

  try {
    const unidades = await Unidades.findOne({ userid });

    if (unidades) {
      console.log("Unidades encontradas:", unidades.unidades);
      return res.status(200).json({
        message: "Unidades encontradas",
        unidades: unidades.unidades,
      });
    } else {
      return res.status(200).json({
        message: "Unidades no encontradas",
        unidades: 0,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener las unidades" });
  }
});

module.exports = router;
