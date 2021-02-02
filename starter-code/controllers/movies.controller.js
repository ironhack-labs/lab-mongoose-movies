const Movie = require("../models/Movie.model")

module.exports.list = (req, res, next) => {
  Movie.find()
   .then((movies) => {
      res.render("movies/index", { movies });
    })
    .catch((e) => next(e));
}

module.exports.create = (req, res, next) => {
  res.render("movies/new")
}

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie (req.body)
  movie.save()
  .then(m => res.redirect("/movies/index"))
  .catch(e => res.redirect("/movies/new"))
}

module.exports.edit = (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    res.render ('movies/new', movie)
  })
  .catch((e) => next(e))
}

module.exports.doEdit = (req, res, next) => {
  const movie = req.body
  Movie.findByIdAndUpdate(req.params.id, movie, { new: true })
  .then((m) => res.render('movies/show', m))
  .catch((e) => next(e))
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/movies/index"))
    .catch((e) => next(e))
}

module.exports.details = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
    res.render ("movies/show", movie)
    })
    .catch((e) => next(e))
}