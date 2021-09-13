const express = require('express')
const router = express.Router()

const Festival = require('../models/festival.model')


router.get('/', (req, res, next) => {
  res.send('ok')
  console.log('123')


  // Festival.find()

  // .populate('')
  // .then(allfestivals => res.render('coasters/coasters-index', { coasters: allCoasters }))
  // .catch(err => next(new Error(err)))
})

module.exports = router
