const createError = require('http-errors');
const mongoose    = require('mongoose');
const Celebrity   = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then( celebrities => res.render('celebrities/index', {
      title: 'Celebrities List',
      celebrities
    }) )
    .catch( error => next(error) );
}

module.exports.details = (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then( celebrity => { 
      res.render( 'celebrities/show', { celebrity } )} )
    .catch( error => next(error) )
}

module.exports.create = (req, res, next) => { res.render('celebrities/new') }

// DGG: Vamos por aquí

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then( () => res.redirect(`celebrities/${celebrity.id}`) )
    .catch( error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('celebrities/new', {celebrity, ...error} )
      }
      else {
        next(error)
      }
    } )
}

module.exports.doEdit = (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndUpdate(id, req.body, { new: true, runValidators: true})
    .then( celebrity => {
      if (celebrity) { res.redirect(`celebrities/${celebrity.id}`) }
      else {  next(createError(404, 'Celebrity not found')) }
    } )
    .catch( error => {
      if (error instanceof mongoose.Error.ValidationError) {
        const celebrity = new Celebrity({ ...req.body, _id: id })
        celebrity.isNew = false;
        res.render('celebrities/new', { celebrity, ...error })
      }
      else { next(error) }
    } )
}
