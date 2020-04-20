const Celebrity = require('../models/Celebrity')

exports.celebrityView = async (req, res) => {
  const celebrity = await Celebrity.find({}).sort({ name: 1 })
  res.render('celebrities/celebrities', { celebrity })
}

exports.celebrityDetail = async (req, res) => {
  const celebrityDet = await Celebrity.findById(req.params.id)
  res.render('celebrities/celebrityDetail', celebrityDet)
}

exports.newCelebrity = (req, res) => {
  res.render('celebrities/new')
}

exports.newCelebrityProcess = async (req, res) => {
  const { name, occupation, catchPhrase } = req.body

  await Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })

  res.redirect('/celebrity')
}

exports.celebrityDelete = async (req, res) => {
  const borrar = req.params.id
  await Celebrity.findByIdAndRemove(borrar)
  console.log(borrar)
  res.redirect('/celebrity')
}

exports.editCeleGet = async (req, res) => {
  const edit = req.params.id
  const celebre = await Celebrity.findById(edit)
  res.render('celebrities/edit', celebre)
}

exports.editCelePost = async (req, res) => {
  const edit = req.params.id
  console.log(edit)
  await Celebrity.findByIdAndUpdate(edit, { $set: { ...req.body } }, { new: true })
  res.redirect(`/celebrity/${edit}`)
}
