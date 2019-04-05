const createError = require('http-errors')
const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model');

module.exports.list = ((req, res, next) => {
  Celebrity.find({})
    .then( celebrities => {
      res.render('celebrities/index.hbs', {celebrities})
    })
    .catch(error => next(error))
})

module.exports.detail = ((req, res, next) => {
  const criteria = req.params.id
  Celebrity.findById(criteria)
    .then( celebrity => {
      res.render('celebrities/detail.hbs', {celebrity})
    })
    .catch(error => next(error))
})

module.exports.new = ((req, res, next) => {
  res.render('celebrities/new.hbs')
})

module.exports.create = ((req, res, next) => {
  const celebrity = new Celebrity(req.body)
  console.log(celebrity)
  celebrity.save()
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('celebrities/new.hbs')
      }})
})

module.exports.delete = ((req, res, next) => {
  const id = req.params.id
  Celebrity.deleteOne({_id: id})
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch(error => next(error))
})

module.exports.edit = ((req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
    .then( celebrity => {
      res.render('celebrities/:id/edit.hbs', {celebrity})
    })
    .catch(error => next(error))
})

module.exports.doEdit = ((req, res, next) => {
  const id = req.params.id
  const update = req.body
  Celebrity.findByIdAndUpdate(id, req.body)
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch(error => next(error))
})