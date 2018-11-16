const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/Movie');



router.get('/movies', (req, res, next) => {
    if(!req.user){

        req.flash('error', 'page not available');
        res.redirect('/login')
        return;

    }
    Movie.find().populate('celebrity')
    .then((eachMovie)=>{   
        
        res.render('movies/index', {movies : eachMovie , message : req.flash('error')});
    })
    .catch((err)=>{
        next(err)
    })
});



router.get('/movies/new', (req,res,next)=>{
    if(!req.user){
        req.flash('error', 'sorry you must be loggeed in to create movie');
        res.redirect('login')
        return;
    }
    Celebrity.find()
    .then((allStars)=>{
        res.render('movies/newMovie',{allStars});

    })
    .catch((err)=>{
        next(err);
    })


})

router.post('/movies/new', (req, res, next)=>{

    const NewMovie = req.body;
    NewMovie.watcher = req.user._id;

Movie.create(NewMovie)
.then(()=>{
    res.redirect('/movies')
})
.catch((err)=>{
    next(err);
})

})

router.get('/movies/:id', (req, res, next) => {
    
    Movie.findById(req.params.id).populate('celebrity').populate('watcher')
    .then((eachMovie)=>{   
        res.render('movies/showMovie', {pickedMovie : eachMovie});
    })
    .catch((err)=>{
        next(err)
    })
});




router.post('/movies/:id/delete' , (req,res,next)=>{
    if(req.user.admin){
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err)
    })
    }
    else{
        req.flash('error', "you have to be admin to delete movie")
        res.redirect('/movies')

    }

})




 router.get('/movies/:id/edit', (req,res,next)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        Celebrity.find()
        .then((allStars)=>{
            allStars.forEach((star)=>{
                if(star._id.equals(theMovie.celebrity)){
                    star.yes = true;
                }
            })

            console.log(allStars)
            res.render('movies/edit' , {theMovie: theMovie, allStars: allStars })

        })
        .catch((err)=>{
            next(err)
        })


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