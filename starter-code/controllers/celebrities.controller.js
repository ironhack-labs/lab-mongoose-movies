const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

module.exports.list = (req, res, next) => {
    Celebrity
        .find({})
        .then((celebs) => {
            if(celebs){
                res.render('celebs/listCelebs', { celebs })
            } else {
                next()
            }
        })
        .catch(e => next(e))
}

module.exports.detail = (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .populate("movies")
        .then((celeb) => {
            if(celeb){
                res.render('celebs/detailCelebs', { celeb })
            } else {
                next()
            }
        })
        .catch(e => next(e))
}

module.exports.createView = (req, res, next) => {
    res.render('celebs/newCelebs')
}

module.exports.create = (req, res, next) => {
    Celebrity
        .create(req.body)
        .then((celeb) => {
            res.redirect('../celebrities') // .. para niveles de anidación en la url
        })
        .catch(e => next(e))
}

module.exports.updateView = (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then((celeb) => {
        res.render('celebs/update-form', { celeb })
    })
    .catch(e => next(e))
}

module.exports.update = (req, res, next) => {
    const celebData = req.body
    Celebrity
        .findByIdAndUpdate(req.params.id, celebData, { new: true })
        .then((celeb) => {
            res.redirect('../../celebrities')
        })
        .catch(e => next(e))
}

module.exports.delete = (req, res, next) => {
    Celebrity
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('../../celebrities'))
    .catch(e => next(e))
}