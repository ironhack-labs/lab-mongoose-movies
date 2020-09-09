const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/',(rq,res,next)=>{
    Movie.find()
    .then(allmoviesDB=>{
        res.render('movies/index',{movies:allmoviesDB})
    })
    .catch(err=>{
        next(err)
    })
})

router.get('/create',(req,res,next)=>{
    res.render('movies/new');
})

router.get('/:id',(req,res,next)=>{
    //console.log("hello");
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('movies/show',{movie})
    })
    .catch(err=>{
        next(err)
    })

})

router.post('/create',(req,res,next)=>{
    const {title,genre,plot} = req.body;
    Movie.create({
        title: title,
        genre: genre,
        plot: plot
    })
    .then(movie =>{
        return movie.save()
    })
    .then(movie=>{
        console.log('A new movie was added');
        res.redirect('/movies');
    })
    .catch(err=>console.log(err))
})

router.post('/:id/delete',(req,res,next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(movie =>{
        console.log('The movie was deleted',movie);
        res.redirect('/movies');
    })
    .catch(err=>{
        next(err)
    })
})

router.get('/:id/edit',(req,res,next)=>{
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('/movies/edit',{movie})
    })
    .catch(err=>{
        next(err)
    })
})

router.post('/:id',(req,res,next)=>{
    const {title,genre,plot} = req.body;
    Movie.updateOne(
        {_id:req.params.id},
        {$set:{title,genre,plot}}
    )
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(err=>next(err))
})

module.exports = router;