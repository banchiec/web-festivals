const router = require('express').Router()

const { CDNupload } = require('../config/upload.config')
const Festival = require('../models/festival.model')
const Comment = require('../models/comment.model')
const Band = require('../models/band.model')


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

  Festival.find()
    .then(festivals => res.render('festivals/festivals', { festivals }))
    .catch(err => next(new Error(err)))
})


router.post('/detalles/:festivalId', (req, res) => {
  const { festivalId } = req.params
  console.log(festivalId)
  const { description, user_id } = req.body

  //PASO 3
  Comment
    .create({ user_id, description })
    .then(comment => {

      Festival.findByIdAndUpdate(festivalId, { $push: { comments: comment.id } })
        .then(festival => {
          res.redirect(`/festivales/detalles/${festivalId}`)
        })
        .catch(err => console.log(err))

      console.log(comment.user_id, comment.description, comment)
    })
    .catch(err => console.log(err))
})

router.get('/detalles/:id', (req, res) => {

  const { id } = req.params
  Festival
    .findById(id)
    .populate({
      path: 'comments',
      populate: {
        path: 'user_id'
      }
    })
    .then(festival => {
      console.log(festival)
      res.render('festivals/festival-details', { festival, user: req.session.currentUser })
    })
    .catch(err => console.log(err))
})

module.exports = router
