const Celebrity = require('../models/Celebrity')

exports.getCelebInfo = async (req,res) => {
  const {celebid} = req.params
  const celeb = await Celebrity.findById(celebid)
  res.render('celebrity', {celeb})
}