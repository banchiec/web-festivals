const router = require('express').Router()
const bcrypt = require('bcrypt')

// cloudinary
const { CDNupload } = require('../config/upload.config')
const User = require('../models/User.model')


// registro
router.get('/registro', (req, res, next) => {
    res.render('auth/signup')
})

router.post("/registro", CDNupload.single('photo'), (req, res) => {
    const { firstName, lastName, email, username, userPwd } = req.body
    if (userPwd.length === 0) {
        res.render('auth/signup-form', { errorMsg: "Contraseña obligatoria" })
        return
    }
    const bcryptSalt = 10
    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(userPwd, salt)

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.render('auth/signup-form', { errorMsg: "El usuario ya existe" })
                return
            }
            User
                .create({ firstName, lastName, email, photo: req.file.path, username, password: hashPass })
                .then(() => {
                    res.redirect('/')
                })
                .catch(error => console.log(error))
        })
        .catch(err => console.log(err))
});

// iniciar-sesion
router.get('/iniciar-sesion', (req, res, next) => {
    res.render('auth/login-form')
})


router.post('/iniciar-sesion', (req, res, next) => {
    const { username, userPwd } = req.body
    if (userPwd.length === 0 || username.length === 0) {
        res.render('auth/login-form', { errorMsg: "Todos los campos deben ser rellenados" })
        return
    }
    User
        .findOne({ username })
        .then(user => {
            if (!user) {
                res.render('auth/login-form', { errorMsg: "El usuario no existe" })
                return
            }
            if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login-form', { errorMsg: "Contraseña incorrecta" })
                return
            }
            req.session.currentUser = user
            let currentUser = req.session.currentUser
            req.app.locals.currentSession = currentUser
            res.redirect('/')
        })
        .catch(err => console.log(err))
})
router.get('/cerrar-sesion', (req, res) => {
    delete req.app.locals.currentSession
    req.session.destroy(() => res.redirect('/'))
})
module.exports = router