const mongoose = require('mongoose')
const Celebrities = require('../models/Celebrity.model')

const express = require('express');

const router = express.Router();

module.exports.home = (req, res, next) => {
  res.render('index')
}
module.exports.showCelebrities = (req, res, next) => {
  Celebrities.find({})
    .then(allCelebs => res.render('celebrities/index', { allCelebs }))
    .catch(error => console.log('Error found'))
}

module.exports.showDetails = (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(ceb => res.render('celebrities/show', ceb))
    .catch(error => console.log(`Founded error in detail page`, error))
};

module.exports.createCeb = (req, res, next) => {
  res.render('celebrities/new')
}

module.exports.doCreateCeb = (req, res, next) => {
  const celebrity = new Celebrities(req.body)
  celebrity.save()
    .then(() => res.redirect('/celebrities'))
    .catch((e) => res.send('algohaidomalqueputada'))
}

module.exports.editCeb = (req, res, next) => {
  Celebrities.findById(req.params.id)
  .then(ceb => res.render('celebrities/edit', ceb))
  .catch(error => console.log(`Founded error in editing page`, error))
};


module.exports.doEditCeb = (req, res, next) => {
  console.log('hola')
  Celebrities.findByIdAndUpdate(req.params.id, req.body)
    .then(ceb => res.redirect('/celebrities'))
    .catch(error => console.log(`Error when editing`))
}

module.exports.deleteCeb = (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
  .then(ceb => {
    console.log('Celebrity succesfully deleted')
    res.redirect('/celebrities')
})
  .catch(error => console.log(`Founded error in delete page`, error))
}
