const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/Movie');



router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((eachMovie)=>{   
        
        res.render('movies/index', {movies : eachMovie});
    })
    .catch((err)=>{
        next(err)
    })
});



router.get('/movies/new', (req,res,next)=>{
    res.render('movies/newMovie')
})

router.post('/movies/new', (req, res, next)=>{
Movie.create(req.body)
.then(()=>{
    res.redirect('/movies')
})
.catch((err)=>{
    next(err);
})

})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((eachMovie)=>{   
        res.render('movies/showMovie', {pickedMovie : eachMovie});
    })
    .catch((err)=>{
        next(err)
    })
});




router.post('/movies/:id/delete' , (req,res,next)=>[
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err)
    })
 ])




 router.get('/movies/:id/edit', (req,res,next)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render('movies/edit' , {theMovie: theMovie})
    })
    .catch((err)=>{
        next(err)
    })
})


 router.post('/movies/:id/edit' , (req,res,next)=>{
    Movie.findByIdAndUpdate(req.params.id , req.body)
    .then(()=>{
        res.redirect('/movies/'+req.params.id);
    })
    .catch((err)=>{
        next(err)
    })
})





module.exports = router;