const router = require("express").Router();

const Movie = require("../models/Movie.model");

router.get("/movies", (req, res) => {
    Movie.find() // <-- .find() method gives us always an ARRAY back
    .then((moviesFromDB) => res.render("movies/index", { movies: moviesFromDB }))
    .catch((err) => next(err));
});

router.get('/movies/new', (req, res) => {
    res.render('movies/new')
})

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params
    Movie.findById(movieId)
        .then(movieFromDb => {
            console.log('onemovie:', movieFromDb)
            res.render('movies/show', {onemovie: movieFromDb})
        })
        .catch(e => {
            console.log('error while getting Movie', e)
            next(e)
        })
})

router.post("/movies", (req, res) => {
    const { title, genre, plot } = req.body;
    Movie.create({ title, genre, plot })
    .then(() => {
        res.redirect('/movies')
    })
    .catch((err) => {
        console.log(`Error while creating a new Movie: ${err}`)
        res.render('movies/new')
    })
  });

router.post('/movies/:id/delete', (req, res) => {
    const { id } = req.params;
   
    Movie.findByIdAndDelete(id)
      .then(() => res.redirect('/movies'))
      .catch(error => next(error));
  });



module.exports = router;