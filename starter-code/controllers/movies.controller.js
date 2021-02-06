const Movie = require('../models/Movie.model')

console.log('MOVIE CONTROLLER')

module.exports.list = (req, res, next) => {
  console.log("LIST")
  Movie
    .find({})
    .then((movies) => {
      console.log(movies)
      res.render('movies', { movies })
    })
    .catch(e => next(e))
}

module.exports.show = (req, res, next) => {
  console.log("SHOW")
  Movie
    .findById(req.params.id)
    .then((movie) => {
      if (movie) {
        res.render('celebrities/show', { movie })
      } else {
        next()
      }
    })
    .catch(e => next(e))
}

module.exports.new = (req, res, next) => {
  console.log("NEW")
  Movie
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
  Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(e => next(e))
}

module.exports.renderEdit = (req, res, next) => {
  console.log("--->RENDEREDIT")
  Movie
    .findById(req.params.id)
    .then((movie) => {
      res.render('celebrities/edit', { movie })
    })
    .catch(e => next(e))
}

module.exports.update = (req, res, next) => {
  console.log("--->EDIT")
  const editedMovie = req.body
  console.log(editedMovie)
  Movie
    .findByIdAndUpdate(req.params.id, editedMovie, { new: true })
    .then((movie) => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
}