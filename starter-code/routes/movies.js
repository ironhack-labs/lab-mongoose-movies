const express = require('express');
const router  = new express.Router();
const Movie = require('../models/Movie');

router.get('/index', (req, res) => {
    Movie
    .find()
    .then(movies => {
        res.render('movies/index', {movies});
    })
    .catch(dbErr => dbErr)
});

router.get('/new', (req, res) => {
    res.render('movies/new');
})

router.post('/new', (req,res) => {
    const {title, genre, plot} = req.body;
    Movie.create({
        title,
        genre,
        plot
    })
    .then(dbRes => res.redirect('/movies/index'))
    .catch(dbErr => {
        res.send('An Error Occurred, Try Again')
        res.render('movies/new')
        console.log(dbErr);

    });
});

router.get('/:id/edit', (req, res) => {
    Movie
    .findById(req.params.id)
    .then(dbRes => {
        console.log(dbRes)
        res.render('movies/edit', { movie: dbRes });
    })
    .catch(dbErr => {
        next;
        return dbErr;
    });
})

router.post('/:id/edit', (req,res) => {
    const { title, genre, plot } = req.body;
    Movie.findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot
    })
    .then(dbRes => {
        res.redirect('/movies/index')
    })
    .catch(dbErr => {
        next;
        return dbErr;
    })
})

router.post('/:id/delete', (req, res, next) => {
    Movie
    .findByIdAndRemove(req.params.id)
    .then(dbRes => {
        res.redirect('/movies/index')
    })
    .catch(dbErr => {
        next;
        console.log(dbErr);
        return dbErr;
    })
})

router.get('/:id', (req,res,next) => {
    Movie
    .findById(req.params.id)
    .then(movie => {
        res.render('movies/show', {
            movie
        })
    })
    .catch(error => {
        next;
        return error;
    })
})

module.exports = router;