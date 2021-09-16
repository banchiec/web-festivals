const router = require('express').Router()
const Festival = require('../models/festival.model')
const Band = require('../models/band.model')
const { isLoginIn } = require('../midleware')
const { CDNupload } = require('../config/upload.config')

router.get('/crear', isLoginIn, (req, res, next) => {
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
router.get('/', isLoginIn, (req, res, next) => {
  Festival
    .find()
    // .populate('Comment')
    // .populate('FestivalDate')
    .then(festivals => res.render('festivals/festivals', { festivals }))
    .catch(err => next(new Error(err)))
})

router.get('/:id', isLoginIn, (req, res, next) => {
  res.send("festival details")
})






module.exports = router
