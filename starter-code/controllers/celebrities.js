const Celebrity = require('../models/Celebrity')

exports.celebViews = async (req, res) => {
  const celebs = await Celebrity.find()
  res.render('celebrities', { celebs })
}

exports.addCeleb = (req, res) => {
  res.render('celebrities/new')
}

exports.sendCeleb = async (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  await Celebrity.create({ name, occupation, catchPhrase })
  res.redirect('celebrities')
}

exports.detailGet = async (req, res) => {
  const detail = await Celebrity.findById(req.params.id)
  res.render('celebrities/show', detail)
}

exports.deleteMethod = async (req, res) => {
  await Celebrity.findByIdAndRemove(req.params.id)
  res.redirect('/celebrities')
}
