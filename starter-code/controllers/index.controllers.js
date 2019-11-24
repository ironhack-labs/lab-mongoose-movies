const Celebrity = require('../models/Celebrity')

// exports.signupGet = (req, res) => {
//   res.render('')
// }

exports.showCelebs = async (req, res) => {
  const celebList = await Celebrity.find()
  res.render('celebrities/index', {
    celebList
  })
}