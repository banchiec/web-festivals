const router = require('express').Router()
const Band = require('../models/band.model')

const { CDNupload } = require('../config/upload.config')

router.get('/', (req, res) => {
    Band
        .find()
        .then((bands) => {
            console.log(bands)
            res.render('band/band', { bands })
        })
        .catch(error => console.error(error))

})

router.get('/crear', (req, res) => {
    res.render('band/band-create')
})

router.post('/crear', CDNupload.single('photo'), (req, res) => {
    const { name, description, stream } = req.body
    Band
        .findOne({ name })
        .then(band => {
            if (band) {
                res.render('signup-form', { errorMsg: "La banda ya existe" })
                return
            }
            Band
                .create({ name, description, photo: req.file.path, stream })
                .then(() => {
                    res.redirect('/bandas')
                })
                .catch(error => console.log(error))
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    Band
        .findById(req.params.id)
        .then((band) => {
            res.render('band/band-details', band)
        })
        .catch(error => console.error(error))
})

module.exports = router