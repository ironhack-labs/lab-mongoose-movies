const Celebrity = require('../models/celebrity.model');

module.exports.list = (req,res,next) => {
  const criteria = {};
  Celebrity.find(criteria)
  .then(celebrities => res.render('celebrities/list', {celebrities}))
  .catch(error => next(error))
}

module.exports.show = (req,res,next) => {
  const idCelebrity = req.params.id;
  Celebrity.findById(idCelebrity)
  .then(celebrity => res.render('celebrities/show', {celebrity}))
  .catch(error => next(error))
}