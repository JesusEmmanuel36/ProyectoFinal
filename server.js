const express = require("express");

const path = require("path");
require("dotenv").config();
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/producto");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());  

mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/api/users", userRoutes);
app.use("/api/carrito", productRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html")); // Carga inicio.html primero
    console.log("ola");
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "carrito.html")); // Carga inicio.html primero
    console.log("ola");
});

app.listen(3000, () =>
    console.log("Servidor corriendo en http://localhost:3000"),
);
