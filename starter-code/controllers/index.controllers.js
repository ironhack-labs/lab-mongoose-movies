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

exports.showOneCeleb = async (req, res) => {
  const {
    id
  } = req.params
  const celebs = await Celebrity.findById(id, err => console.log(err))
  res.render('celebrities/show', {
    celebs
  })
}

exports.addNewCeleb = (req, res) => {
  res.render('celebrities/new')
}



// exports.postCeleb = async (req, res) => {
//   const {
//     name,
//     occupation,
//     catchPhrase
//   } = req.body
//   Celebrity.create({
//     name,
//     occupation,
//     catchPhrase
//   })
//   await res.redirect('celebrities')
// }