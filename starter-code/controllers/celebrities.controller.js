const Celebrity = require('../models/celebrity')

exports.findCelebrities = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
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