const Celebrity = require('../models/Celebrity')

exports.createCelebrity = async (req,res) => {
  const {name, occupation, catchPhrase} = req.body
  const celeb = await Celebrity.create({name, occupation, catchPhrase})
  res.redirect('/')
  
}