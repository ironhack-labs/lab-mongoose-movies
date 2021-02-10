const Celebrity = require('../models/Celebrity.model');
require('../models/Casting.model')
const Movie = require('../models/Movie.model')


module.exports.list = (req, res, next) => {
    Celebrity.find()
        // .populate('castings')
        .populate({
            path: 'castings',
            populate: {
                path: 'movie'
            }
        })
        .then((celebrities) => {
            // console.log(celebrities[0].castings)
            res.render('celebrities/list', { celebrities, movies: false });
        })
}

module.exports.movieList = (req, res, next) => {
    Movie.find()
        .populate('castings')
        .populate({
            path: 'castings',
            populate: {
                path: 'celebrity'
            }
        })
        .then((movies) => {
            res.render('celebrities/list', { movies, moviesO: true });
        })
}

module.exports.celebrityDetail = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebrity) => {
        console.log(celebrity)
        res.render("celebrities/show", celebrity )
    })
    .catch(error => console.log(error))
}

module.exports.movieDetail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        console.log(movie.title)
        res.render("celebrities/show", movie)
    })
    .catch(error => console.log(error))
}


module.exports.createCelebrity = (req, res, next) => {
    res.render("celebrities/new", {moviesC: false})
}

module.exports.doCreateCelebrity = (req, res, next) => {
    Celebrity.create(req.body)
        .then((c) => res.redirect('/celebrities'))
        .catch((e) => next(e));
}

module.exports.createMovie = (req, res, next) => {
    res.render("celebrities/new", {moviesC: true} )
}

module.exports.doCreateMovie = (req, res, next) => {
    Movie.create(req.body)
        .then((c) => res.redirect('/movies'))
        .catch((e) => next(e));
}

module.exports.editCelebrity = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .populate({
        path: 'castings',
        populate: {
            path: 'movie'
        }
    })
        .then((celebrity) => { res.render("celebrities/new", celebrity) })
        .catch((e) => next(e));
}

module.exports.doEditCelebrity = (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect('/celebrities'))
    .catch((e) => next(e));
}

module.exports.editMovie  = (req, res, next) => {
    Movie.findById(req.params.id)
    .populate('castings')
        .populate({
            path: 'castings',
            populate: {
                path: 'celebrity'
            }
        })
        .then((movie) => {
            res.render("celebrities/new", {movie:movie, moviesC: true});
        })
        // .then((movie) => { res.render("celebrities/new", {movie:movie, moviesC: true}) })
        .catch((e) => next(e));
}

module.exports.doEditMovie = (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect('/movies'))
    .catch((e) => next(e));
}

module.exports.deleteCelebrity = (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((p) => res.render("celebrities/list", { ...p.toJSON(), delete: true, movieD: true }))
    .catch((e) => next(e));
  };
  
  module.exports.doDeleteCelebrity = (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
      .then(() => res.redirect('/celebrities'))
        .catch((e) => next(e));
  };

  module.exports.deleteMovie = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((p) => res.render("celebrities/list", { ...p.toJSON(), delete: true, movieD: true}))
    .catch((e) => next(e));
  };
  
  module.exports.doDeleteMovie = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.redirect('/movies'))
        .catch((e) => next(e));
  };
  
