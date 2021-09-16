const mongoose = require('mongoose')
module.exports = {
    isLoginIn: (req, res, next) => {
        req.session.currentUser ? next() : res.render('auth/login-form', { errorMsg: "Inicia para continuar" })
    },
    checkRole: (...roles) => (req, res, next) => {
        roles.includes(req.session.currentUser.role) ? next() : res.render('index', { errorMsg: "No tienes permiso" })
    }
}