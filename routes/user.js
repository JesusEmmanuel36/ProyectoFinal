const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../modelos/User");

function id() {
  return crypto.getRandomValues(new Uint32Array(8)).join("");
}

router.post("/login", async (req, res) => {
  console.log("LOGIN LLAMADO");
  const body = req.body;

  mail = body.correo;
  pass = body.contraseña;

  try {
    const user = await User.findOne({ correo: mail });
    if (!user) return res.status(500).json({ error: "Usuario no encontrado" });
    if (!bcrypt.compareSync(pass, user.contraseña))
      return res.status(500).json({ error: "correo o contraseña incorrecta" });

    let UserId = user.userid;

    res.status(200).json({ message: "Iniciaste Sesión!", userId: UserId });

    console.log("INICIANDO SESION: " + " " + user.contraseña);
  } catch (error) {
    return res.status(500).json({ error: error.message });
    console.log("d");
  }
});

router.post("/signup", async (req, res) => {
  //const { mail, pass } = req.body;

  const body = req.body;

  mail = body.correo;
  pass = body.contraseña;
  let userId = id();

  try {
    const existingUser = await User.findOne({ correo: mail });
    if (existingUser)
      return res.status(500).json({ message: "El usuario ya existe" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);

    console.log("si");
    console.log(mail);
    console.log(pass);

    const newUser = new User({
      correo: mail,
      contraseña: hashedPassword,
      userid: userId,
    });
    await newUser.save();

    res.status(200).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
