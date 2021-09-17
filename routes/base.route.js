const router = require('express').Router()
const { checkRole } = require('../midleware')
const Festival = require('../models/festival.model')

router.get('/', (req, res, next) => {
    Festival
        .find()
        .then((festivals) => {
            console.log(festivals)
            res.render('index', { festivals })
        })
        .catch()
})

module.exports = router