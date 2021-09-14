
const router = require('express').Router()
router.get('/', (req, res) => {
  res.send('festivales')
})

router.post('/', (req, res) => {
  res.redirect('/festivales/nuevo')
})

router.get('/', (req, res) => {

})

module.exports = router
