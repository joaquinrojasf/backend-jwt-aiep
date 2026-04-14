const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Usuarios ficticios
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'abcd' }
];

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validación básica
  if (!username || !password) {
    return res.status(400).json({
      message: 'Debe ingresar usuario y contraseña.'
    });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
    message: 'Credenciales incorrectas. No autorizado.'
  });
}

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  });

  return res.json({
    message: 'Login exitoso'
  });
});

// Ruta privada
router.get('/privado', verifyToken, (req, res) => {
  return res.json({
    message: 'Acceso permitido a ruta privada',
    user: req.user
  });
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({
    message: 'Sesión cerrada correctamente'
  });
});


module.exports = router;
