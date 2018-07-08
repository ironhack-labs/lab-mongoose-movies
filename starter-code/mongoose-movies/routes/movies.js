const express       = require('express');
const router        = express.Router();

const Movie         = require('../models/movie');

// GET ROUTE TO DISPLAY LISTING OF ALL MOVIES

router.get('/movies', (req,res,next)=>{

    Movie.find()
    .then((moviesArray)=>{

        res.render('movies/index', {moviesArray:moviesArray});

    })
    .catch((err)=>{

        next(err);

    });
});

// GET ROUTE FOR 'CREATE NEW MOVIE' PAGE

router.get('/movies/new', (req,res,next)=>{

    res.render('movies/new');

});

// POST ROUTE FOR 'CREATE NEW MOVIE' FORM FIELDS

router.post('/movies/create', (req,res,next)=>{

    const newMovie = new Movie(req.body);
    
    Movie.create(newMovie)
        .then((response)=>{

            res.redirect('/movies');

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE FOR 'EDIT MOVIE' PAGE

router.get('/movies/:id/edit', (req,res,next)=>{

    Movie.findById(req.params.id)
        .then((theMovie)=>{

            res.render('movies/edit', theMovie);

        })
        .catch((err)=>{

            next(err);

        });

});

// POST ROUTE FOR UPDATING MOVIE INFO

router.post('/movies/:id/update', (req,res,next)=>{

    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then((response)=>{

            res.redirect('/movies');

        })
        .catch((err)=>{

            next(err);

        });

});

// POST ROUTE FOR DELETING A MOVIE (ONLY EVER USED BY THE MOVIE DETAILS PAGE DELETE BUTTON)

router.post('/movies/:id/delete', (req,res,next)=>{

    Movie.findByIdAndRemove(req.params.id)
        .then((response)=>{

            res.redirect('/movies');

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE TO DISPLAY DETAILS OF ONE MOVIE

router.get('/movies/:id', (req,res,next)=>{

    const theID = req.params.id;
    
    Movie.findById(theID)
        .then((theMovie)=>{

            res.render('movies/show', theMovie);

        })
        .catch((err)=>{

            next(err);

        });

});

module.exports = router;