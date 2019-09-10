const Celebrity = require('../models/Celebrity')

exports.home = async(req, res, next)=>{
  const celebrities = await Celebrity.find()
  res.render('index', {celebrities})
}

exports.celebDetails = async(req, res, next) => {
  const {id} = req.params
  const details = await Celebrity.findById(id)
  console.log(details)
  res.render('celeb-details', details)
}

exports.deleteCeleb = async(req, res) => {
  const {id} = req.params
  await Celebrity.findByIdAndDelete(id)
  res.redirect('/')
  
}

exports.createCelebForm = async(req,res)=>{
  const celebrities = await Celebrity.find()
  res.render('create-celeb', {celebrities})
}

exports.createCeleb = async(req, res) => {
  const {name, occupation, catchPhrase} = req.body
  await Celebrity.create({name, occupation, catchPhrase})
  res.redirect('/')
}

exports.updateCelebrityForm = async (req, res) => {
  const {celebritiesid} = req.query
  const celebrity = await Celebrity.findById(celebritiesid)
  res.render('update-celeb', celebrity)
  }
  
  exports.updateCelebrity= async(req, res) => {
    const {name, occupation, catchPhrase} = req.body
    const {celebritiesid} =req.query 
    await Celebrity.findByIdAndUpdate(celebritiesid, {name, occupation, catchPhrase})
    res.redirect('/')
  }

