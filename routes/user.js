const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
      const { mail, pass } = req.body;


      console.log(mail)
      console.log(pass)

      const existingUser = await User.findOne({ mail });
      if (existingUser) return res.status(400).json({ message: 'El usuario ya existe' });
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({ mail, contraseña: pass });
      await newUser.save();
  
      res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al registrar usuario'});
    }
  });

  module.exports = router;
  