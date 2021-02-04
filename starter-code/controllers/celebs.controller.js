
const Celebrity = require("../models/celebrity.model")

//Celebrities list 
module.exports.list = (req, res, next) => {
    Celebrity.find()
    .then((foundCelebrities) => {
    res.render('celebrities/index', {celebrities: foundCelebrities})})
    .catch((e) => next(e));
  }

//Celebritie detail 
module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((foundCelebritie) => {
        console.log(req.body)
    res.render('celebrities/show', {celebrities: foundCelebritie})})
    .catch((e) => next(e));
  }

  //Create a new celebritie

  //get
  module.exports.new = (req, res, next) => {
      res.render('celebrities/new')
  }
  //post
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
        res.redirect('/celebrities/new')
    })
    
  }   

  //Edit a Celebritie

  module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebritieToEdit) => {
        res.render('celebrities/edit', {celebrities: celebritieToEdit})
    })
    .catch((e) => next(e))
  }

  module.exports.editP = (req, res, next) => {
    const {name, occupation, catchPhrase, image} = req.body

    Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase, image}, {new: true})
    .then((editedCeleb) => {
        console.log(`The celebritie has been updated sucessfully`)
        res.redirect('/celebrities')
    })
    .catch((e) => next(e))
  }

  //Delete a Celebritie

  module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
        console.log(`The celebritie was deleted succesfully`)
        res.redirect('/celebrities')
    })
    .catch((e) => next (e))
}