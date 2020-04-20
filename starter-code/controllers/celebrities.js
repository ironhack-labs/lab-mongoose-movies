const Celebrity = require('../models/Celebrity')

exports.listCelebrityNames = async (req, res) => {
  const allCelebrities = await Celebrity.find()
  // console.log('Array Celebs')
  // console.log(allCelebrities)
  res.render('celebrities/index', { allCelebrities })
}

exports.specificCelebrity = async (req, res) => {
  const { id } = req.params
  const selectedCelebrity = await Celebrity.findById(id)
  //console.log(selectedCelebrity)
  res.render('celebrities/show', { selectedCelebrity })
}

exports.newCelebrity = (req, res) => res.render('celebrities/new')

exports.createCelebrity = async (req, res) => {
  let { name, occupation, catchPhrase } = req.body
  occupation = occupation.split(' ')
  // console.log(name, occupation, catchPhrase)
  // console.log(req.body)
  await Celebrity.create({ name, occupation, catchPhrase })
  res.redirect('/celebrities')
}

exports.deleteCelebrity = async (req, res) => {
  const { id } = req.params
  console.log(req.params)
  console.log(id)
  await Celebrity.findByIdAndDelete(id)
  res.redirect('/celebrities')
}
