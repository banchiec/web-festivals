const FestivalDate = require('../models/festivalDate.model')
const Festival = require('../models/festival.model')

const router = require('express').Router()

router.post("/create", (req, res) => {
    FestivalDate.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
})
router.get("/create", (req, res) => {
    FestivalDate.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})


module.exports = router