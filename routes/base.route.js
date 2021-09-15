const router = require('express').Router()
const bcrypt = require('bcrypt')
const app = require('../app')

// cloudinary
const { CDNupload } = require('../config/upload.config')
const User = require('../models/User.model')

router.get('/', (req, res, next) => {
    res.render('index', { isAdmin: req.session.currentUser?.role == 'admin' })
})

module.exports = router