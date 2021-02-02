const Celebrity = require("../models/Celebrity.model")

module.exports.list = (req, res, next) => {
  Celebrity.find()
   .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((e) => next(e));
}

module.exports.create = (req, res, next) => {
  res.render("celebrities/new")
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity (req.body)
  celebrity.save()
  .then(c => res.redirect("/celebrities/index"))
  .catch(e => res.redirect("/celebrities/new"))
}

module.exports.edit = (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render ('celebrities/new', celebrity)
  })
  .catch((e) => next(e))
}

module.exports.doEdit = (req, res, next) => {
  const celebrity = req.body
  Celebrity.findByIdAndUpdate(req.params.id, celebrity, { new: true })
  .then((c) => res.render('celebrities/show', c))
  .catch((e) => next(e))
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities/index"))
    .catch((e) => next(e))
}

module.exports.details = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
    res.render ("celebrities/show", celebrity)
    })
    .catch((e) => next(e))
}