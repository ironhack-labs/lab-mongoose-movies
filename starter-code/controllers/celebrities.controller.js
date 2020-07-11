const Celebrity = require('../models/Celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find({})
    .then(celebs => res.render('celebrities/index', {celebs}))
    .catch(e => console.error(e));
};

module.exports.renderCreate = (req, res, next) => res.render('celebrities/new');

module.exports.doCreate = (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => res.redirect('/celebrity/list'))
    .catch((e) => {
      console.error(e);
      res.redirect('/celebrity/new');
    });
};

module.exports.details = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => res.render('celebrities/show', {celeb}))
    .catch(e => console.error(e));
};

module.exports.delete = (req,res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrity/list'))
    .catch((e) => console.error(e));
};

module.exports.renderEdit = (req, res, next) => {
  const celeb = Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/edit', celebrity))
  .catch(e => console.error(e));
};

module.exports.doEdit = (req, res, next) => {
  Celebrity(findByIdAndUpdate(res.body.id, res.body))
    .then(() => res.redirect('celebrity/list'))
    .catch(() => res.redirect('/celebrity/edit-' + res.body.id));
};