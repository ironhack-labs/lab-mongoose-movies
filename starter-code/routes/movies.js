const express = require('express');
const router = express.Router();


const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')




//GET : /movies ----> this one shows all the movies

router.get('/', (req, res, next) => {

    Movie.find().populate('cast').then((movies) => {
        res.render('movies/movies', { allMovies: movies });
    }).catch(error => {
        console.log("something went wrong with catching all celebrities", error)
    })

});

//GET : /movies/new ---> this one allows you to insert a new movie

router.get('/new', (req, res, next) => {
    Celebrity.find().then((celebrities) => {
        res.render('movies/new-movie', { allCelebrities: celebrities });
      })
})

//POST : /movies/new ---> this one takes the datas and store them into the database

router.post('/new', (req, res, next) => {
    let movie=new Movie({ title : req.body.title, genre: req.body.genre , plot : req.body.plot, cast : req.body.celebrity })
    movie.save().then(() => {
        res.redirect("/movies")
    })
})

// GET : /celebrities/id  ---> this shows the details of one celebrity
router.get('/:id', (req , res, next) => {
    Movie.findById(req.params.id).then((movie) => {
        console.log(movie)
        res.render("movies/movie-details", movie)
    })
})


module.exports = router