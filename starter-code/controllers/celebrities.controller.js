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

exports.findOneCelebrity = (req, res, next) =>{
  const { id } = req.params
  Celebrity.findById(id)
}