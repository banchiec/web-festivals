const router = require('express').Router()
const User = require('../models/User.model')
const { isLoginIn, checkRole } = require('../midleware')

router.get('/', isLoginIn, checkRole("admin"), (req, res) => {
    User
        .find()
        .then((users) => {
            res.render('user/users', { users })
        })
        .catch(error => console.error(error))
})

module.exports = router