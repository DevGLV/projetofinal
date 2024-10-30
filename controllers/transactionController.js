// controllers/transactionController.js
const TransactionModel = require('../models/transactionModel');

exports.addTransaction = async (req, res) => {
    const { userId, amount, categoryId, type } = req.body;

    try {
        const transactionId = await TransactionModel.createTransaction(userId, amount, categoryId, type);
        res.status(201).json({ id: transactionId });
    } catch (error) {
        console.error('Erro ao adicionar transação:', error);
        res.status(500).json({ error: 'Erro ao adicionar transação' });
    }
};

exports.getTransactionsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const transactions = await TransactionModel.getTransactionsByUserId(userId);
        res.json(transactions);
    } catch (error) {
        console.error('Erro ao recuperar transações:', error);
        res.status(500).json({ error: 'Erro ao recuperar transações' });
    }
};

exports.updateTransaction = async (req, res) => {
    const { transactionId } = req.params;
    const { amount, categoryId, type } = req.body;

    try {
        await TransactionModel.updateTransaction(transactionId, amount, categoryId, type);
        res.status(200).json({ message: 'Transação atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar transação:', error);
        res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
};

exports.deleteTransaction = async (req, res) => {
    const { transactionId } = req.params;

    try {
        await TransactionModel.deleteTransaction(transactionId);
        res.status(200).json({ message: 'Transação excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir transação:', error);
        res.status(500).json({ error: 'Erro ao excluir transação' });
    }
};

exports.getExpenseReport = async (req, res) => {
    const { userId } = req.params;

    try {
        const reportData = await TransactionModel.getExpenseReport(userId);
        res.json(reportData); // Retorna os dados do relatório
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        res.status(500).json({ error: 'Erro ao gerar relatório' });
    }
};
