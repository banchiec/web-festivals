const router = require('express').Router()
const Festival = require('../models/festival.model')
const Band = require('../models/band.model')
const FestivalDate = require('../models/festivalDate.model')
const { CDNupload } = require('../config/upload.config')

router.get('/crear', (req, res, next) => {
  Band
    .find()
    .then(bands => {
      res.render('festivals/new-festival', { bands })
    })
    .catch(err => next(new Error(err)))
})

router.post('/crear', CDNupload.single('photo'), (req, res, next) => {

  const { name, lat, lng, city, country, ranking, billboard } = req.body
  console.log(req.body)
  console.log(req.body.billboard)
  console.log(req.file)

  const location = {
    type: 'Point',
    coordinates: [lat, lng]
  }

  Festival
    .create({ name, location, city, country, photo: req.file.path, ranking, billboard })
    .then(() => res.redirect('/'))
    .catch(err => next(new Error(err)))

})

//list
router.get('/', (req, res, next) => {
  Festival
    .find()
    // .populate('Comment')
    // .populate('FestivalDate')
    .then(festivals => res.render('festivals/festivals', { festivals }))
    .catch(err => next(new Error(err)))
})

router.get('/:id', (req, res, next) => {
  res.send("festival details")
})






module.exports = router
