const Movie = require('../models/movie.model');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .populate('celebrity')
    .then((movies) => res.render('movies/index-movies', { movies }))
    // .catch(err => next(err))
    console.log("Funciona el listado de movies")
}

module.exports.create = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('movies/form-movies', { movie: new Movie(), celebrities }));
}

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie(req.body); 

  movie.save()
    .then((movie) => { res.redirect('/movies' )});
    console.log("Funciona el salvado de Movies")
}

module.exports.edit = (req, res, next) => {
    Promise.all([
      Celebrity.find(),
      Movie.findById(req.params.id)
    ])
    .then((results) => {
      const celebrities = results[0];
      const movie = results[1]
  
      res.render('movies/form-movies', { movie, celebrities })
    })
  }


module.exports.doEdit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      movie.set(req.body);

      movie.save()
        .then((movie) => { res.redirect('/movies' )});
        console.log("Funciona el doEdit")
    })
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {

    Celebrity.findById(movie.celebrity)
      .then((celebrity) => res.render('movies/detail-movies', { movie, celebrity }))
  });
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies'));
}



