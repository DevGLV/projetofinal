// models/userModel.js
const db = require('../config/database');

const UserModel = {
    createUser(email, passwordHash) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
            db.run(sql, [email, passwordHash], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve(this.lastID);
            });
        });
    },
    findUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE email = ?';
            db.get(sql, [email], (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row);
            });
        });
    },
};

module.exports = UserModel;
