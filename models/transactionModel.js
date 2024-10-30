// models/transactionModel.js
const db = require('../config/database');

const TransactionModel = {
    createTransaction(userId, amount, categoryId, type) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO transactions (user_id, amount, category_id, type) VALUES (?, ?, ?, ?)';
            db.run(sql, [userId, amount, categoryId, type], function(err) {
                if (err) return reject(err);
                resolve(this.lastID);
            });
        });
    },
    
    getTransactionsByUserId(userId) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM transactions WHERE user_id = ?';
            db.all(sql, [userId], (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    
    updateTransaction(transactionId, amount, categoryId, type) {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE transactions SET amount = ?, category_id = ?, type = ? WHERE id = ?';
            db.run(sql, [amount, categoryId, type, transactionId], function(err) {
                if (err) return reject(err);
                resolve(this.changes); // Número de linhas alteradas
            });
        });
    },
    
    deleteTransaction(transactionId) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM transactions WHERE id = ?';
            db.run(sql, [transactionId], function(err) {
                if (err) return reject(err);
                resolve(this.changes); // Número de linhas excluídas
            });
        });
    },
    
    getExpenseReport(userId) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT category_id,
                       SUM(amount) AS total_amount
                FROM transactions
                WHERE user_id = ?
                GROUP BY category_id`;
            
            db.all(sql, [userId], (err, rows) => {
                if (err) return reject(err);
                resolve(rows); // Retorna os totais agrupados por categoria
            });
        });
    },
    
};

module.exports = TransactionModel;
