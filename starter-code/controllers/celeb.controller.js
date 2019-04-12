const Celebs = require('../models/celeb.model')

module.exports.list = (req, res, next) => {
  Celebs.find()
    .then ((allCelebs) => {
      console.log(`Estas son todas las Celebs: ${allCelebs}`)
      res.render('celebrities/index', {allCelebs})
    })
    .catch(error => next(error))
}