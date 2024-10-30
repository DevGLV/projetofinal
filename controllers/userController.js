// controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    
    try {
        const userId = await UserModel.createUser(email, passwordHash);
        res.status(201).json({ id: userId });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error); // Log do erro
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error); // Log do erro
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
