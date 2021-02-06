const Celebrity = require('../models/Celebrity.model')

console.log('CELEB CONTROLLER')

module.exports.list = (req, res, next) => {
  console.log("LIST")
  Celebrity
    .find({})
    .then((celebrities) => {
      res.render('celebrities', { celebrities })
    })
    .catch(e => next(e))
}

module.exports.show = (req, res, next) => {
  console.log("SHOW")
  Celebrity
    .findById(req.params.id)
    .then((celebrity) => {
      if (celebrity) {
        res.render('celebrities/show', { celebrity })
      } else {
        next()
      }
    })
    .catch(e => next(e))
}