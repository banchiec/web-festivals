const FestivalDate = require('../models/festivalDate.model')
const Festival = require('../models/festival.model')
const { route } = require('./festival.route')

const router = require('express').Router()

router.post("/create", (req, res, next) => {
    FestivalDate.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.get("/create", (req, res, next) => {
    FestivalDate.find()
        .then(data => res.json(data))
        .catch(err => next(err))
})

router.get("/festivals", (req, res, next) => {
    Festival
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch(err => next(new Error(err)))
})


module.exports = router