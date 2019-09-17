const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')


router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((result)=>{
        console.log("This is the list of movies")
        res.render('movies/movie', {result: result})
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/movies/details/:id', (req, res, next)=>{
    let id = req.params.id;
    console.log('><><><><><><', id)
    Movie.findById(id)
    .then((result)=>{
        console.log(result)
        res.render('movies/movie-details', {result})
    })
    .catch((err)=>{
        next(err)
    })
})
router.get('/movies/new-movie', (req, res, next)=>{
    res.render('movies/new-movie')
})
router.post('/movies/new-movie', (req, res, next)=>{
    let title = req.body.theTitle;
    let genre = req.body.theGenre
    let plot = req.body.thePlot

    Movie.create({
        title: title,
        genre: genre,
        plot: plot
    })
    .then((result)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/movies/:id/delete', (req, res, next)=>{
    let id = req.params.id;
    Movie.findByIdAndRemove(id)
    .then((result)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err);
    })
})
router.get('/movies/:id/edit', (req, res, next)=>{
    let id = req.params.id;
    Movie.findById(id)
    .then((result)=>{
        res.render('movies/edit', {result})
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/movies/:id/edit', (req, res, next)=>{
    let id = req.params.id;
    Movie.findByIdAndUpdate(id,{
        title: req.body.theTitle,
        genre: req.body.theGenre,
        plot: req.body.thePlot
    }, {new: true})
    .then((result)=>{
        res.redirect(`/movies/details/${result._id}`)
    })
    .catch((err)=>{
        next(err);
    })

})






module.exports = router;