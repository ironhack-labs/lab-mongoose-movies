const Celebrity = require('../models/Celebrity.model')

console.log('CELEB CONTROLLER')

module.exports.list = (req, res, next) => {
  console.log("LIST")
  Celebrity
    .find({})
    .then((celebrities) => {
      console.log(celebrities)
      res.render('celebrities', { celebrities: celebrities })
    })
    .catch(e => next(e))
}