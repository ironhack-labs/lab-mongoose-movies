let express = require('express')
let router = require('express').Router();
let Movie = require('../models/Movie');




router.post('/:id/edit', (req,res,next)=>{
    const {id} = req.params
    Movie.findByIdAndUpdate(id, req.body)
        .then(movie => res.redirect('/movies/' + id))
        .catch(e=>next(e))
})

router.get('/id:/edit', (req,res,next)=>{
     res.render('editMovie')
})

router.post('/:id/delete',(req,res,next)=>{
    Movie.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(e=> next(e))
})


router.get('/newMovie', (req,res,next)=>{
    res.render('newMovie')
})

router.post('/newMovie', (req, res, next)=>{
    Movie.create(req.body)
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(e=> next(e))
});

router.get('/:id', (req,res,next)=>{
    Movie.findById(req.params.id)
        .then(movie=>{
            res.render('showMovie', movie)})
        .catch(e=>next(e))
})

router.get('/', (req,res,next)=>{
    Movie.find()
        .then(movies=>{
            res.render('movies', {movies})
        })
        .catch(e=> next(e))
});

module.exports = router;