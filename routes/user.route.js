const router = require('express').Router()
const User = require('../models/User.model')


router.get('/', (req, res) => {
    User
        .find()
        .then((users) => {
            res.render('user/users', { users })
        })
        .catch(error => console.error(error))
})

module.exports = router