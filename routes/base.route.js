const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.render('index', { isAdmin: req.session.currentUser?.role == 'admin' })
})

module.exports = router