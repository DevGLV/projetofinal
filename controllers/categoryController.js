// controllers/categoryController.js
const CategoryModel = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const categoryId = await CategoryModel.createCategory(name);
        res.status(201).json({ id: categoryId });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar categoria' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao recuperar categorias' });
    }
};
