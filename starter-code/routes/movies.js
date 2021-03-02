const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

/* GET celeb page */
router.get('/index', (req, res, next) => {
  
Movie.find()
    .then((movies) => {res.render('movies/index', {movies})})
    .catch(err => next(err))
});

/* GET celeb details  page */ 

router.get('/:id([a-z0-9]{24})', (req, res, next) => {
  
Movie.findById(req.params.id)
    .then((movie) => {res.render('movies/show', movie)})
    .catch(err => next(err))
});

// ------- create -------

// GET add page 

router.get('/add', (req, res) => {
    res.render('movies/add')
})

// POST add page

router.post('/', (req, res, next) => {
    const newMovie = {...req.body}

    Movie.create(newMovie)
    .then(res.redirect("/movies/index"))
    .catch(err => next(err))

})


// ------------ delete --------------

router.get('/:id([a-z0-9]{24})/delete', (req, res, next) => {
  
    Movie.findByIdAndDelete(req.params.id)
        .then(res.redirect('/movies/index'))
        .catch(err => next(err))
    });


// ------------ edit ----------------

// GET edit page

router.get("/:id([a-z0-9]{24})/edit", (req, res, next) => {

    Movie.findByIdAndUpdate(req.params.id)
    .then(movie => {res.render('movies/edit', movie)})
    .catch(err => next(err));

})


// POST edit page
        

router.post('/:id', (req, res, next) => {

    const updateMovie = {...req.body}

    Movie.findByIdAndUpdate(req.params.id, updateMovie)
    .then(res.redirect("/movies/index"))
    .catch(err => next(err))

})



module.exports = router;
