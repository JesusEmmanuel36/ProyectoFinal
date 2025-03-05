const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Producto = require("../modelos/Producto");

router.post("/agregar-producto", async (req, res) =>{
    console.log("API LLAMADA")
    try {
        //console.log("API LLAMADA")
        //producto = req.body    
        console.log(producto)
         
        const nuevoProducto = new Producto({
            nombre: producto.nombre,
            precio: producto.precio,
            talla: producto.talla,
            cantidad: producto.cantidad,
            imagen: producto.imagen
        })

        nuevoProducto.save()

        
        return res.status(200)
        
    }catch(error){
        return res.status(500)
    }
});
 
module.exports = router