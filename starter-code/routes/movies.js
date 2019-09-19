const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')
const Celebrity = require('../models/Celebrity.js')

router.get('/movies', (req, res, next)=>{

    if(!req.user){
        req.flash('error', "please login to view book selection")
        res.redirect('/login');
    }

    Movie.find()
    
    .then((result)=>{
        console.log(result)
        result.forEach((eachMovie)=>{
            if(eachMovie.creator.equals(req.user._id) || req.user.isAdmin){
                eachMovie.mine = true;
            }
    })
        res.render('movies/movie', {result: result})
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/movies/details/:id', (req, res, next)=>{
    let id = req.params.id;
    console.log('><><><><><><', id)
    Movie.findById(id).populate("actor")
    .then((result)=>{
        console.log(result)
        res.render('movies/movie-details', {result})
    })
    .catch((err)=>{
        next(err)
    })
})
router.get('/movies/new-movie', (req, res, next)=>{
    Celebrity.find()
    .then((result)=>{
        res.render('movies/new-movie', {result})
    })
   .catch((err)=>{
       next(err)
   })
})
router.post('/movies/new-movie', (req, res, next)=>{
    let title = req.body.theTitle;
    let genre = req.body.theGenre
    let plot = req.body.thePlot
    let actor = req.body.celebrity
    
console.log(req.user)
    Movie.create({
        title: title,
        genre: genre,
        plot: plot,
        actor: actor,
        creator: req.user
    })
    .then((result)=>{
        console.log(result)
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
    console.log("<><><><><><><><><><><jahshfjhasfjhshfajhfhh")
    let id = req.params.id;
    Movie.findById(id)
    .then((movieResult)=>{
        Celebrity.find()
        .then((celebResult)=>{

            celebResult.forEach((Celeb)=>{
                if(Celeb._id.equals(movieResult.actor)){
                    
                    
                    // we're not allowed to use === to compare IDs
                    // just because mongoose wont let you
                    // but instead they have their own method called .equals
                    
                    Celeb.isTheChosenOne = true;
                    
                }
            })
           const data = {
                movie: movieResult,
                celebs: celebResult
            };
            console.log(data)
            res.render('movies/edit', {data})
            
        })
        .catch((err)=>{
            next(err);
        })
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
        plot: req.body.thePlot,
        actor: req.body.celebrity
    }, {new: true})
    .then((result)=>{
        res.redirect(`/movies/details/${result._id}`)
    })
    .catch((err)=>{
        next(err);
    })

})






module.exports = router;