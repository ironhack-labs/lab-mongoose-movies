const Celebrity = require('../models/Celebrity')

exports.findCelebrity = (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/all', { celebrities })
  })
  .catch(err => {
    next(error)
  })
}