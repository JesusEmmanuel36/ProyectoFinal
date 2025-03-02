const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); // Carga inicio.html primero
    console.log("ola")
});


app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
