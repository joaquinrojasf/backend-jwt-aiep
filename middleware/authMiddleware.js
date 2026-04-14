const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
   return res.status(401).json({
    error: 'Token requerido',
    message: 'No se encontró un token de autenticación válido.',
    code: 'AUTH_TOKEN_MISSING'
  });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido o expirado.'
    });
  }
}

module.exports = verifyToken;
