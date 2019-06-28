const Celeb = require('../Models/Celebrity')

exports.findCelebs = (req, res, next) => {
  Celeb.find()
  .then(celebArr => res.render('celebrities/index',{celebArr}))
  .catch(err => res.render('celebrities/index', err))
}