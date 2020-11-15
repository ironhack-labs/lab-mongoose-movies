const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


//CELEBRITIES LIST
router.get('/', (req, res) => {

    Movie
        .find({}, { title: 1 })
        .sort({ title: 1 })
        .then(allMovies => {
            res.render('movies/list', { allMovies })
        })
})


//CELEBRITIES DETAILS
router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => {
            res.render("movies/movie-details", theMovie)
        })

})

//NEW MOVIE
router.get('/new', (req, res) => res.render('movies/new'))

// //NEW MOVIE POST


router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body
    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
})


// //DELETE

router.get('/delete/:movie_id', (req, res) => {

    const movieId = req.params.movie_id
    console.log(movieId)


    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))

}
)

// //EDIT CELEBRITY GET
router.get('/edit/:movie_id', (req, res) => {


    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => {
            res.render("movies/edit", theMovie)
        })
})

// //EDIT CELEBRITY POST


router.post('/edit/:movie_id', (req, res) => {

    const { title, genre, plot } = req.body
    const movieId = req.params.movie_id
    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
})



module.exports = router