const Celebrity = require('../models/Celebrity.model')

module.exports.list = (req, res, next) => {
    Celebrity
        .find({})
        .then((celebs) => {
        console.log('Celebs:' + celebs)
        res.render('celebs/listCelebs', { celebs })
        })
        .catch(e => console.log(e))
}

module.exports.detail = (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .then((celeb) => {
            res.render('celebs/detailCelebs', { celeb })
        })
        .catch(e => console.log(e))
}

module.exports.createView = (req, res, next) => {
    res.render('celebs/newCelebs')
}

module.exports.create = (req, res, next) => {
    Celebrity
        .create(req.body)
        .then((celeb) => {
            console.log(celeb)
            res.redirect('../celebrities') // .. para niveles de anidación en la url
        })
        .catch(e => console.log(e))
}