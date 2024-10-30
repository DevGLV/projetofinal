// models/categoryModel.js
const db = require('../config/database');

const CategoryModel = {
    createCategory(name) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO categories (name) VALUES (?)';
            db.run(sql, [name], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve(this.lastID);
            });
        });
    },
    getAllCategories() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM categories';
            db.all(sql, [], (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    },
};

module.exports = CategoryModel;
