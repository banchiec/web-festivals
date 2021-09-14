const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('band/band')
})
router.get('/crear', (req, res) => {
    res.render('band/band-create')
})

router.post('/crear', (req, res) => {
    res.render('band/band-create')
})

module.exports = router