const Celebrity = require('../models/Celebrity')

// Como dice Wes Bos, no hay errores
exports.getCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', { celebrities })
}

exports.getCelebrity = async (req, res, next) => {
  const { id } = req.params
  const celebrity = await Celebrity.findById(id)
  res.render('celebrities/show', celebrity)
}

exports.newCelebrityForm = (req, res) => {
  res.render('celebrities/new')
}

exports.newCelebrity = async (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  await Celebrity.create({ name, occupation, catchPhrase })
  res.redirect('/celebrities')
}

exports.deleteCelebrity = async (req, res) => {
  const { id } = req.params
  await Celebrity.findByIdAndRemove(id)
  res.redirect('/celebrities')
}
