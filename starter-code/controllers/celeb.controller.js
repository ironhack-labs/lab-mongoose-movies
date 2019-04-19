const Celebs = require('../models/celeb.model')

module.exports.list = (req, res, next) => {
  Celebs.find()
    .then ((allCelebs) => {
      res.render('celebrities/index', {allCelebs})
    })
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  Celebs.findById(req.params.id)
    .then((celeb) => {
      res.render('celebrities/show', {celeb})
    })
    .catch(error=>next(error))
}

module.exports.add = (req, res, next) => {
  console.log('hola')
  res.render('celebrities/new')
}

module.exports.doAdd = (req, res, next) => {
  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  const celeb = new Celebs (newCeleb)
  celeb.save()
  .then(() => res.redirect('/celebrities'))
  .catch((error) => {
    if(error instanceof mongoose.Error.ValidationError) {
      res.render('celebrities/new')
    } else {
      next(error)
    }
  })
}

module.exports.delete = (req, res, next) => {
  Celebs.findByIdAndRemove(req.params.id)
  .then(()=> {
    res.redirect('/celebrities')
  })
  .catch((error) => next(error))
}

module.exports.edit = (req, res, next) => {
  const celeb = req.params.id
  Celebs.findById(celeb)
  .then((cel) => {
    res.render('celebrities/edit', {cel})
  })
  .catch((error) => next(error))
}

module.exports.doEdit = (req, res, next) => {
  // const editCeleb = {
    //   name: req.body.name,
    //   occupation: req.body.occupation,
    //   catchPhrase: req.body.catchPhrase
    // }
  const celeb = req.params.id
  Celebs.findByIdAndUpdate(celeb, req.body, { new: true, runValidators: true })
  .then(()=> {
    res.redirect('/celebrities')
  })
  .catch((error) => next(error))
}