// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rota de verificação de saúde
app.get('/health', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Rotas da API
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro no servidor:', err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
