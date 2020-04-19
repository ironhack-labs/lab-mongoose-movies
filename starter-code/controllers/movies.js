const Movie = require('../models/Movie');

exports.listMovie = async (req, res) => {
  const movs = await Movie.find();
  res.render('movies', {movs});
};

exports.showNewMovieform = (req, res) => {
  res.render('movies/new');
};

exports.addMovie = async (req, res) => {
  const { title, genre, plot } = req.body;
  console.log('sijalo wacha,',req.body)
  await Movie.insertMany({ title, genre, plot });
  res.redirect('/movies');
};

exports.showMovie = async (req, res) => {
  const mov = await Movie.findById(req.params.id);
  res.render('movies/show', mov);
};

exports.deleteMovie = async (req, res) => {
 
  await Movie.findByIdAndRemove(req.params.id)
  res.redirect('/movies')
}
