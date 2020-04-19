const Celebrity = require('../models/Celebrity')

exports.listCelebrityNames = async (req, res) => {
  const allCelebrities = await Celebrity.find()
  console.log('Array Celebs')
  console.log(allCelebrities)
  res.render('celebrities/index', { allCelebrities })
}

exports.specificCelebrity = async (req, res) => {
  const { id } = req.params
  const selectedCelebrity = await Celebrity.findById(id)
  console.log(selectedCelebrity)
  res.render('celebrities/show', { selectedCelebrity })
}
