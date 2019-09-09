const Celebrity = require('../models/Celebrity')

exports.allCelebrities = async(req,res) =>{
  const {celebs} = await Celebrity.find()
  res.render('index', celebs)
}