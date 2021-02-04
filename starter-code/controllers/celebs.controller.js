
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
    Celebrity.find()
    .then((foundCelebrities) => {
    res.render('celebrities/index', {celebrities: foundCelebrities})})
    .catch((e) => next(e));
  }
