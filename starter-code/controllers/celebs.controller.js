
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
    Celebrity.find()
    .then((foundCelebrities) => {
    res.render('celebrities/index', {celebrities: foundCelebrities})})
    .catch((e) => next(e));
  }

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((foundCelebritie) => {
        console.log(req.body)
    res.render('celebrities/show', {celebrities: foundCelebritie})})
    .catch((e) => next(e));
  }

  module.exports.new = (req, res, next) => {
      res.render('celebrities/new')
  }

  module.exports.newP = (req, res, next) => {

    const {name, occupation, catchPhrase, image} = req.body;
    
    const newCelebritie = new Celebrity({name, occupation, catchPhrase, image})

    newCelebritie
    .save()
        .then(() => {
            console.log('Celebrity added')
            res.redirect('/celebrities') 
        })
        .catch(() => {
            console.log('Error adding the celebritie')
            res.redirect('celebrities/new')
        })
    
}