const express = require('express');
const router = express.Router();
const Movies = require('../models/movie');

/* GET movies page */
router.get('/', (req, res, next) => {
    Movies.find()
        .then((result) => {
            res.render('movies/index', {allMovies: result});
        })
        .catch(err => next(err));
});

router.get('/:movie_id/delete', (req, res, next) => {
    Movies.findByIdAndRemove(req.params.movie_id)
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
});

router.get('/create-new', (req, res, next) => {
    res.render('movies/create-new');
});

router.post('/create-new', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movies ({ title, genre, plot });

    newMovie.save()
    .then(() => res.redirect('/movies'))
    .catch(err => {
        console.log(`An error has occurred while adding a new celebrity: ${err}`)
        res.redirect('movies/new');
    });
});

router.get('/:movie_id', (req, res, next) => {
    Movies.findById(req.params.movie_id)
        .then(result => {
            res.render('movies/show', {
                oneMovie: result
            });
        })
        .catch(err => console.log(`An error has occurred while searching for the details: ${err}`))
});
// router.get('/movie_id/delete', (req, res, next) => {
//     res.redirect('/movies/index');
// });




module.exports = router;