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

exports.celebritiesPost = async (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  const newCelebrity = { name, occupation, catchPhrase }
  const celebrityCreated = await Celebrity.create( newCelebrity )
  console.log(celebrityCreated)
  if( celebrityCreated ) return res.redirect('/celebrities')

  res.render('celebrities/new', {...newCelebrity, error: true})
}

exports.celebrityNewGet = (req, res, next) => {
  res.render('celebrities/new')
}

