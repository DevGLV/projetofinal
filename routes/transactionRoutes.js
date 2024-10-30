// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

// Rota para adicionar uma nova transação
router.post('/', authMiddleware, transactionController.addTransaction);

// Rota para obter transações por ID do usuário
router.get('/:userId', authMiddleware, transactionController.getTransactionsByUserId);

// Rota para atualizar uma transação
router.put('/:transactionId', authMiddleware, transactionController.updateTransaction);

// Rota para excluir uma transação
router.delete('/:transactionId', authMiddleware, transactionController.deleteTransaction);

// Rota para obter resumo de despesas por categoria
router.get('/report/:userId', authMiddleware, transactionController.getExpenseReport);


module.exports = router;

