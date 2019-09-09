const Celebrity = require('../models/Celebrity')

exports.listCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', { celebrities })
}

exports.detailCelebrity = async (req, res, next) => {
  const { id } = req.params
  const celebrity = await Celebrity.findById(id)
  res.render('celebrities/show', celebrity)
}

exports.addCelebrityForm = async(req, res) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/new', {celebrity})
}

exports.addCelebrity = async (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  await Celebrity.create({ name, occupation, catchPhrase })
  res.redirect('/celebrities')
}

exports.deleteCelebrity = async (req, res) => {
  const { id } = req.params
  await Celebrity.findByIdAndRemove(id)
  res.redirect('/celebrities')
}