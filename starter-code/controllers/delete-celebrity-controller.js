const Celebrity = require('../models/Celebrity')

exports.deleteCelebrity = async (req,res,next) => {
  const {celebid} = req.params
  const celeb = await Celebrity.findByIdAndRemove(celebid) 
  res.redirect('/')
}