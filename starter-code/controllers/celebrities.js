const Celebrity = require('../models/Celebrity')

exports.createCelebritiesPage = async (req, res, next) => {
  const celebrities = await Celebrity.find()
  .then((celebrities) => {
    res.render('celebrities', {celebrities})
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}

exports.createCelebritiesDetailPage = async (req, res, next) => {
  const celebrityid = req.params.id
  const celebrity = await Celebrity.findById({_id: celebrityid})
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}

exports.createCelebrityForm = (req, res, next) => {
  res.render('celebrities/new')
}

exports.createCelebrity = (req, res, next) => {
  const newObject = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  const modelInstance = new Celebrity(newObject)
  modelInstance.save()
  .then( () => {
    res.redirect('/celebrities/')
  })
  .catch((err) => {
    console.log('well this was a mistake')
    res.redirect('/celebrities/new')
  })
}

exports.deleteCelebrities = async (req, res, next) => {
  const celebrityid = req.params.id
  const celebrity = await Celebrity.findByIdAndRemove({_id: celebrityid})
  .then(celebrity => {
    console.log(`yas`)
    res.redirect('/celebrities')
  })
  .catch((err) => {
    console.log(`está entrando a error ${err}`)
    next()
  })
}