const Celebrity = require('../models/celebrity')

exports.findCelebrities = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities}) 
    })
    .catch(err =>  {
      res.render('celebrities/index', err)
    })
} 

exports.findOneCelebrity = (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => {
      res.render('celebrities/index', err)
    })
}

exports.getCreateOneCelebrity = (req, res, next) => {
  res.render('celebrities/new')
}

exports.postCreateOneCelebrity = (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => {
      console.log(celebrity)
      res.redirect('/celebrities')
    })
    .catch(err => {
      res.render('celebrities/new', err)
    })
}

exports.deleteOneCelebrity = (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndRemove(id)
    .then(deleteOne => {
      console.log(deleteOne);
      res.redirect('/celebrities')
    })
    .catch(err => {
      next()
      console.log(err);
    })
}

exports.getUpdateOneCelebrity = (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', celebrity)
    })
    .catch(err => {
      next()
      return err
    })
}

exports.updateOneCelebrity = (req, res, next) => {
  const { id } = req.params
  const {name, occupation, catchPhrase} = req.body
  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
    .then(updateCelebrity => {
      console.log(updateCelebrity)
      res.redirect('/celebrities')
    })
    .catch(err => {
      next()
      console.log(err)
    })
}