const express = require('express');
const moviesRouter = express.Router();
const Movie = require('./../models/Movie');

moviesRouter.get("/", (req, res, next) => {    
    Movie.find()                          
    .then(allMovies => {
        const data = {movies: allMovies}
        res.render("movies", data);
    })                                  
    .catch(err => console.log(err))    
});

// Add new movies
moviesRouter.get('/new', (req, res) => {
    res.render('./../views/movies/new');
})

moviesRouter.post("/new", (req, res) => {
    const {title, genre, plot} = req.body

    Movie.create( {title, genre, plot})
    .then((movie) => {
        res.redirect('/movies');
    })
    .catch(err => console.log(err))
});

// GET for editing
moviesRouter.get('/edit/:id', (req, res) => { 
    const {id } = req.params;
        Movie.findOne( {_id: id})
        .then (oneMovie => {
            console.log('oneMovie :', oneMovie);
            const data = {
                movie: oneMovie
            }
            res.render('movies/edit', data);
        })
        .catch(err => console.log(err));
});

// POST for editing
moviesRouter.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { title, genre, plot} = req.body
    console.log('req.body :', req.body);
    console.log('req.params.id :', req.params.id);

    Movie.update({_id: id}, {title, genre, plot})
    .then( data => {
        res.redirect('/movies');
    })
    .catch( (err) => console.log(err));
})


//DELETE
moviesRouter.get("/delete/:id", (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
    .then((movieToDelete) => {
        res.redirect('/movies');
    })
    .catch(err => console.log(err))
});

// GET by id
moviesRouter.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
    .then(oneMovie => {
        const data = {
            oneMovie: oneMovie
        }
        res.render("movies/show", data)
    })
    .catch( (err) => console.log(err))
})    



module.exports = moviesRouter;