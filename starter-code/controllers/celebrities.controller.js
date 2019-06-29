const Celebrity = require('../models/Celebrity')

exports.findCelebrities = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/all', { celebrities }))
    .catch(err => res.render('celebrities/all', err))
}

exports.findOneCelebrity = (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/show', celebrity))
    .catch(err => res.render('celebrities/show', err))
}

exports.viewCreateCelebrity = (req, res, next) => res.render('celebrities/new')

exports.createNewCelebrity = (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => res.render('celebrities/new', err))
}

exports.deleteCelebrity = (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndRemove(id)
    .then(res.redirect('/celebrities'))
    .catch(err => next())
}
