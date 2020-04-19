const Celebrity = require('../models/Celebrity')

exports.listView = async (req, res) => {
  const celebs = await Celebrity.find()
  res.render('celebrities/list', { celebs })
}

exports.addView = (req, res) => {
  res.render('celebrities/add')
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

exports.detailView = async (req, res) => {
  const celeb = await Celebrity.findById(req.params.id)
  res.render('celebrities/detail', celeb)
}
