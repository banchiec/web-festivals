const router = require('express').Router()
const Band = require('../models/band.model')

const { CDNupload } = require('../config/upload.config')




router.get('/', (req, res) => {
    res.render('band/band')
})



router.get('/crear', (req, res) => {
    res.render('band/band-create')
})

router.post('/crear', CDNupload.array('photos', 2), (req, res) => {
    console.log(req.body)

    const files = []
    req.files.forEach(element => files.push(element))
    console.log(files[0])
    console.log(files[1])


    // const { firstName, lastName, email, username, userPwd } = req.body

    // if (userPwd.length === 0) {
    //     res.render('signup-form', { errorMsg: "Contraseña obligatoria" })
    //     return
    // }

    // const bcryptSalt = 10
    // const salt = bcrypt.genSaltSync(bcryptSalt)
    // const hashPass = bcrypt.hashSync(userPwd, salt)

    // User
    //     .findOne({ username })
    //     .then(user => {
    //         if (user) {
    //             res.render('signup-form', { errorMsg: "El usuario ya existe" })
    //             return
    //         }
    //         User
    //             .create({ firstName, lastName, email, username, password: hashPass })
    //             .then(() => {
    //                 res.redirect('/')
    //             })
    //             .catch(error => console.log(error))
    //     })
    //     .catch(err => console.log(err))

    // res.render('band/band-create')
})

module.exports = router