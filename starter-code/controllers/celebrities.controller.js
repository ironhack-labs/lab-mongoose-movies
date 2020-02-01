const Celebrity = require('../models/Celebrity')

exports.celebritiesGet = async (req, res, next) => {
  const celebrities = await Celebrity.find()

  if( celebrities.length === 0) {
    res.render('celebrities/', {error: true})
    next()
  }

  res.render('celebrities/', {celebrities})
}


exports.celebrityGet = async (req, res, next) => {
  const celebrity = await Celebrity.findById(req.params.id)
  if( !celebrity ){
    res.render('celebrities/show', {error: true})
    next()
  }

  res.render('celebrities/show', {celebrity})

}