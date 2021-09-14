
const router = require('express').Router()

const Festival = require('../models/festival.model')

router.get('/crear', (req, res, next) => {
  Festival.find()
    .then(allFestivals => res.render('festivals/new-festival', { festivals: allFestivals }))
    .catch(err => next(new Error(err)))
})

router.post('/crear', (req, res, next) => {

  const { name, lat, lng, city, country, ranking, billboard } = req.body

  // const location = {
  //   type: 'Point',
  //   coordinates: [lat, lng]
  // }

  // Festival.create({ name, location, city, country, ranking, billboard: date })
  //   .then(() => res.redirect('/'))
  //   .catch(err => next(new Error(err)))
})

//list
router.get('/', (req, res) => {

  Festival.find()
    .populate('Comment')
    .populate('FestivalDate')
    .then(allfestivals => res.render('festivals/festivals-index', { festivals: allfestivals }))
    .catch(err => next(new Error(err)))

})








module.exports = router
