const Celebs = require('../models/celeb.model')

module.exports.list = (req, res, next) => {
  Celebs.find()
    .then ((allCelebs) => {
      console.log(`Estas son todas las Celebs: ${allCelebs}`)
      res.render('celebrities/index', {allCelebs})
    })
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  Celebs.findById(req.params.id)
    .then((celeb) => {
      console.log("vamos")
      res.render('celebrities/show', {celeb})
    })
    .catch(error=>next(error))
}