const Movie = require('../models/Movie.model');

module.exports.list = (req, res, next) => {
  Movie.find({})
    .then(movies => res.render('movies/list', {movies}))
    .catch(e => console.error(e));
};

module.exports.details = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', {movie}))
    .catch(e => console.error(e));
};

module.exports.renderCreate = (req, res, next) => res.render('movies/new');

module.exports.doCreate = (req, res, next) => {
  Movie.create(req.body)
    .then(() => res.redirect('/movie/list'))
    .catch((e) => {
      console.error(e);
      res.redirect('/movies/new');
    });
};
  
module.exports.delete = (req,res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movie/list'))
    .catch((e) => console.error(e));
};

module.exports.renderEdit = (req, res, next) => {
  const celeb = Movie.findById(req.params.id)
  .then(movie => res.render('movies/edit', movie))
  .catch(e => console.error(e));
};

module.exports.doEdit = (req, res, next) => {
  Movie.findByIdAndUpdate({_id :req.params.id}, req.body)
    .then(() => res.redirect('/movie/list'))
    .catch(() => res.redirect('/movie/edit-' + req.params._id));
};