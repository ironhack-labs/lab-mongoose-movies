const movie = require('../models/movie.model');


module.exports.list = (req, res, next) => {
  const criteria = {};

  if (req.query.title) {
    criteria.title = new RegExp(req.query.title, 'i');
  }

  Movie.find(criteria)
    .sort({ _id: -1 })
    .then(movies => res.render('movies/index', { 
      movies,
      title: req.query.title 
    }))
    .catch(error => next(error));
}

module.exports.details = (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)     
        .then(movies => res.render('movies/show', { movie, movies }))
        .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
    res.render('movies/new', { movie: new movie() })
}

module.exports.doCreate = (req, res, next) => {
    const movie = new movie(req.body)
  
    Movie.save()
      .then(() => res.redirect("/movies"))
      .catch(error => next(error)) 
  }

module.exports.delete = (req, res, next) => {
    const id = req.params.id;
  
    Movie.findByIdAndRemove(id)
        .then(() =>  res.redirect('/movies'))
        .catch(error => next(error))
}


module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)     
        .then(movies => res.render('movies/edit', { movie, movies }))
        .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;
  
    Movie.findByIdAndUpdate(id, req.body, { new: true})
      .then(movie => res.redirect(`/movies/${movie._id}`))
      .catch(error =>  next(error))
}
