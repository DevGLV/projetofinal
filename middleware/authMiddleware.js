// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const authMiddleware = (req, res, next) => {
    // Obtém o token do cabeçalho Authorization
    const token = req.headers['authorization']?.split(' ')[1]; // Pega o token do cabeçalho

    // Se não houver token, retorna um erro 403 (Forbidden)
    if (!token) {
        return res.status(403).json({ error: 'Token não fornecido' });
    }

    // Verifica o token usando a chave secreta
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            // Se o token for inválido, retorna um erro 401 (Unauthorized)
            return res.status(401).json({ error: 'Token inválido' });
        }
        // Armazena o ID do usuário decodificado na requisição para uso posterior
        req.userId = decoded.id; 
        next(); // Chama o próximo middleware ou rota
    });
};

module.exports = authMiddleware;
