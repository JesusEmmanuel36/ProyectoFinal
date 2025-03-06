const express = require("express");
const router = express.Router();
const Producto = require("../modelos/Producto");

router.post("/agregar-producto", async (req, res) => {
    const { userid, carrito } = req.body;

    try {
        // Busca el carrito del usuario
        let usuarioExistente = await Producto.findOne({ userid });

        if (usuarioExistente) {
            console.log("Ya existe el usuario con carrito.");
            // Si ya existe, actualiza el carrito
            usuarioExistente.carrito = carrito;
            await usuarioExistente.save();
            return res.status(200).json({ message: "Carrito actualizado" });
        } else {
            console.log("El usuario no existe, creando nuevo carrito.");
            // Si no existe, crea uno nuevo
            const nuevoUsuario = new Producto({
                userid,
                carrito,
            });
            await nuevoUsuario.save();
            return res.status(200).json({ message: "Carrito creado" });
        }
    } catch (error) {
        console.error(
            "Error en la creación o actualización del carrito:",
            error,
        );
        return res
            .status(500)
            .json({ message: "Error al procesar el carrito" });
    }
});

router.post("/ver-carrito", async (req, res) => {
    const { userid } = req.body;
    try {
        let usuarioExistente = await Producto.findOne({ userid });

        if (usuarioExistente) {
            return res.status(200).json({
                message: "Carrito encontrado",
                carrito: usuarioExistente.carrito,
            });
        } else {
            console.log("NO EXISTE");
            return res
                .status(200)
                .json({ message: "Carrito vacío", carrito: [] });
        }
    } catch (error) {
        return res.status(500).json({ message: "No funciono" });
    }
});

module.exports = router;
