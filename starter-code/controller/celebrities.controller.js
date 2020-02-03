const Celebrity = require('../models/celebrity')

exports.celebritiesGet = async (req, res, next) => {
  const celebrities = await Celebrity.find().catch(err => next(err))
  res.render('celebrities/', {
    celebrities
  })
}

exports.celebritiesPost = async (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  const newCelebrity = {
    name,
    occupation,
    catchPhrase
  }
  await Celebrity.create(newCelebrity)
    .catch(err => next(err))
  res.redirect('/celebrities')
}

exports.celebrityGet = async (req, res, next) => {
  const celebrity = await Celebrity.findById(req.params.id)
    .catch(err => next(err))
  res.render('celebrities/show', celebrity)

}

exports.celebrityDelGet = async (req, res, next) => {
  await Celebrity.findByIdAndDelete(req.params.id)
    .catch(err => next(err))
  res.redirect('/celebrities')
}

exports.celebrityNewGet = (req, res, next) => res.render('celebrities/new')