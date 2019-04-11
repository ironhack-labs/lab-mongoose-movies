const Celebrity = require('../models/celebrity.model');

module.exports.list = (req,res,next) => {
  const criteria = {};
  Celebrity.find(criteria)
  .then(celebrities => res.render('celebrities/list', {celebrities}))
  .catch(error => next(error))
}

module.exports.show = (req,res,next) => {
  const idCelebrity = req.params.id;
  Celebrity.findById(idCelebrity)
  .then(celebrity => res.render('celebrities/show', {celebrity}))
  .catch(error => next(error))
}

module.exports.new = (req,res,next) => {
  res.render('celebrities/new')
}

module.exports.add = (req,res,next) => {
  const celebrity = new Celebrity ({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  celebrity.save()
  .then(()=> {res.redirect('/celebrities')})
  .catch(error => next(error))
}

module.exports.edit = (req,res,next) => {
  const idEdit = req.params.id;
  Celebrity.findById(idEdit)
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity})
  })
  .catch(error => next(error))
  
}

module.exports.doEdit = (req,res,next) => {
  const idDoEdit = req.params.id;
  Celebrity.findByIdAndUpdate(idDoEdit, req.body, { new: true, runValidators: true})
  .then(() => {res.redirect('/celebrities')})
  .catch(error => next(error))
}

module.exports.delete = (req,res,next) => {
  const idCelebrityToDelete = req.params.id;

  Celebrity.findByIdAndDelete(idCelebrityToDelete)
  .then(() => {res.redirect('/celebrities')})
  .catch(error => next(error))
}