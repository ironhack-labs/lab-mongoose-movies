const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {
			return next(err)
		}
		else {
			res.render('movies/index', {
				title: "Movies",
				movies: movies
			});
		}
  });
});

router.get('/new',(req, res) => {
	res.render('movies/new')
})

router.post('/',(req,res,next) => {
	let movie = {
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot,
	}
	Movie.create(movie,(err,doc) =>{
		if (err) {
			next(err);
		}	else {
			res.redirect('/movies');
		}
	});
})


router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render("movies/show",{
			clickedMovie: movie
		});
	})
});

router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/edit', { movie: movie });
  });
});

router.post('/:id', (req, res, next) => {
  const movieId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Product
   */
  const movieToUpdate = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(movieId, movieToUpdate, (err, movie) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});

router.get('/:id/delete', (req, res, next) => {
  const id = req.params.id;
	console.log(req);

  Movie.findOneAndRemove(id, (err, movies) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });

});



module.exports = router;
