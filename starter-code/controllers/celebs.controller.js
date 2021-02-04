
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
    Celebrity.find()
    .then((foundCelebrities) => {
    res.render('celebrities/index', {celebrities: foundCelebrities})})
    .catch((e) => next(e));
  }

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((foundCelebritie) => {
        console.log(req.body)
    res.render('celebrities/show', {celebrities: foundCelebritie})})
    .catch((e) => next(e));
  }
