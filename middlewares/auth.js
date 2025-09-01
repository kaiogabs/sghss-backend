const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // formato: "Bearer token"

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  jwt.verify(token, 'segredo123', (err, usuario) => {
    if (err) {
      return res.status(403).json({ erro: 'Token inválido ou expirado' });
    }

    req.usuario = usuario; // opcional: salvar o usuário logado no request
    next();
  });
}

module.exports = autenticarToken;