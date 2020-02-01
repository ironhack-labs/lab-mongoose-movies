const Celebrity = require('../models/Celebrity')

exports.celebritiesGet = async (req, res, next) => {
  const celebrities = await Celebrity.find()
  
  if( celebrities.length === 0) {
    res.render('celebrities/', {error: true})
    next()
  }

  res.render('celebrities/', {celebrities})
}