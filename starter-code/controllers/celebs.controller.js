const Celeb = require('../models/Celeb')

exports.findCelebs = (req, res, next) => {
  Celeb.find()
    .then(celebs => res.render('celebs/all', { celebs }))
    .catch(err => res.render('celebs/all', err))
}

exports.findOneCeleb = (req, res, next) => {
  const { id } = req.params
  Celeb.findById(id)
    .then(celeb => res.render('celebs/one', celeb))
    .catch(err => res.render('celebs/one', err))
}
exports.viewCreateCeleb = (req, res, next) => {
  //res.send(console.log('entra'))
  res.render('celebs/create')
}
exports.createCeleb = (req, res, next) => {
  Celeb.create(req.body)
    .then(celeb => res.redirect('/celebrities'))
    .catch(err => res.send(err))
}

exports.deleteCeleb = (req, res, next) => {
  const { id } = req.params
  Celeb.findByIdAndRemove(id)
    .then(celeb => res.redirect('/celebrities'))
    .catch(err => res.send(err))
}
