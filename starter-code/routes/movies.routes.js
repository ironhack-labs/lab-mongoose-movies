const express = require("express")
const router = express.Router();

const Movie = require("./../models/movie-model")

//-------------------------------------------ALL MOVIES---------------------------------------------------

router.get('/', (req, res) => {

    Movie
        .find({}, { title: 1 })
        .then(response => res.render('movies/index-movies', { response }))
        .catch(err => console.log(err))
})

//-------------------------------------------MOVIES DETAILS---------------------------------------------------

router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(response => res.render('movies/show-movies', response ))
        .catch(err => console.log(err))
})

router.use((req, res, next) => req.session.currentUser ? next() : res.render('auth/login', { errorMsg: 'Zona restringida' }))

//-------------------------------------------RESTRICTED AREA!!! --------------------------------------------------

//-------------------------------------------ADD NEW MOVIE--------------------------------------------------------

router.get('/new', (req, res) => res.render('movies/new-movies', req.session.currentUser));

router.post('/', (req, res) => {

    //const { title, genre, plot } = req.body
    const title = req.body.title
    const genre = req.body.genre.split(',')
    const plot =  req.body.plot

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))

});

//-------------------------------------------DELETE MOVIE---------------------------------------------------

router.post('/details/:movie_id/delete', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

//-------------------------------------------EDIT MOVIE---------------------------------------------------

router.get('/edit', (req, res) => {

    const movieId = req.query.movie_id

    console.log(movieId)

    Movie
        .findById(movieId)
        .then(response => res.render('movies/edit-movies', response))
        .catch(err => console.log(err))
});

router.post('/edit', (req, res) => {

    const movieId = req.query.movie_id

    //const { title, genre, plot } = req.body

    const title = req.body.title
    const genre = req.body.genre.split(',')
    const plot =  req.body.plot

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

module.exports = router