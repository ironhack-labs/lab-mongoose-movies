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
  console.log(id);
  Celebrity.findById(id)
    .then( celebrity => { 
      res.render( 'celebrities/show', { celebrity } )} )
    .catch( error => next(error) )
}