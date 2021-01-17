const createError = require('http-errors');
const mongoose = require('mongoose');
const { reset } = require('nodemon');
const Celebrity = require('../models/celebrity.model');

module.exports.home = (req, res, next) => {
    res.render('index')
  }
;

module.exports.list = (req, res, next) => {
    Celebrity.find()      
      .then(celebritiesFromDB => {
        res.render('celebrities/index', { celebrities: celebritiesFromDB })
      })
      .catch(next);
  };

  module.exports.show = (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebritiesFromDB => {
        if(celebritiesFromDB) {
          res.render('celebrities/show', { celebritiesFromDB })
        } else { 
          next(createError(404, 'Celebrity does not exists'));
        
        }
      })
      .catch(next)
  }
  module.exports.create = (req, res, next) => {
      res.render('celebrities/create')
  }
   
 module.exports.doCreate = (req, res, next) => {
      Celebrity.create(req.body)      
        .then(celebrity => res.redirect(`/celebrities`))
        .catch(error => {
          res.render('celebrities/create')})
 }

 module.exports.delete = (req, res, next) => {
      Celebrity.findByIdAndDelete(req.params.id)
        .then(celebrity => {
          if(celebrity) {
            res.redirect('/celebrities')
          } else {
            next(createError(404, 'Celebrity does not exist'))
          }
        })
        .catch(next)
 }