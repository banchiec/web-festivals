const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.render('index')
})

// registro
router.get('/registro', (req, res, next) => {

    res.render('signup')
})

router.post("/registro", (req, res) => {

    console.log(req.body)

    // const { username, userPwd } = req.body

    //   if (userPwd.length === 0) {
    //     res.render('signup-form', { errorMsg: "Contraseña obligatoria" })
    //     return
    //   }

    //   const bcryptSalt = 10
    //   const salt = bcrypt.genSaltSync(bcryptSalt)
    //   const hashPass = bcrypt.hashSync(userPwd, salt)

    //   User
    //     .findOne({ username })
    //     .then(user => {
    //       if (user) {
    //         res.render('signup-form', { errorMsg: "El usuario ya existe" })
    //         return
    //       }

    //       User
    //         .create({ username, password: hashPass })
    //         .then(() => {
    //           res.redirect('/')
    //         })
    //         .catch(error => console.log(error))
    //     })
    //     .catch(err => console.log(err))

});

// iniciar-sesion
router.get('/iniciar-sesion', (req, res, next) => {
    res.render('login')
})
router.post('/iniciar-sesion', (req, res, next) => {
    res.send('iniciar-session')
})

module.exports = router