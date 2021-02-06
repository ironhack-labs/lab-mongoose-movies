const Celebrity = require('../models/Celebrity.model')

console.log('CELEB CONTROLLER')

module.exports.list = (req, res, next) => {
  console.log("LIST")
  Celebrity
    .find({})
    .then((celebrities) => {
      res.render('celebrities', { celebrities })
    })
    .catch(e => next(e))
}

module.exports.show = (req, res, next) => {
  console.log("SHOW")
  Celebrity
    .findById(req.params.id)
    .then((celebrity) => {
      if (celebrity) {
        res.render('celebrities/show', { celebrity })
      } else {
        next()
      }
    })
    .catch(e => next(e))
}

module.exports.new = (req, res, next) => {
  console.log("NEW")
  Celebrity
    .create(req.body)
    .then((celebrity) => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
}

module.exports.renderNew = (req, res, next) => {
  console.log("RENDERNEW")
  res.render('celebrities/new')
}

module.exports.delete = (req, res, next) => {
  Celebrity
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(e => next(e))
}

module.exports.renderEdit = (req, res, next) => {
  console.log("--->RENDEREDIT")
  Celebrity
    .findById(req.params.id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity })
    })
    .catch(e => next(e))
}

module.exports.update = (req, res, next) => {
  console.log("--->EDIT")
  const editedCeleb = req.body
  console.log(editedCeleb)
  Celebrity
    .findByIdAndUpdate(req.params.id, editedCeleb, { new: true })
    .then((celebrity) => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
}