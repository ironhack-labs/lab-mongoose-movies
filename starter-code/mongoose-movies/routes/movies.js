// REQUIRING IN EXPRESS

const express       = require('express');

// ASSIGNING A VAR TO THE EXPRESS METHOD 'ROUTER' WHICH WILL DO
// THE HEAVY LIFTING OF CONNECTING ALL THE PAGES

const router        = express.Router();

const Celebrity     = require('../models/celebrity')

// REQURING IN THE MOVIE CONSTRUCTOR CLASS

const Movie         = require('../models/movie');

// GET ROUTE TO DISPLAY LISTING OF ALL MOVIES

router.get('/movies', (req,res,next)=>{

    Movie.find()
    .populate('celebrities')
    .then((moviesArray)=>{
        console.log(moviesArray);
        res.render('movies/index', {moviesArray:moviesArray});

    })
    .catch((err)=>{

        next(err);

    });
});

// GET ROUTE FOR 'CREATE NEW MOVIE' PAGE

router.get('/movies/new', (req,res,next)=>{
    Celebrity.find()
    .then((allCelebs)=>{

        res.render('movies/new', {allCelebs});

    })
    .catch((err)=>{

        next(err);

    });

});

// POST ROUTE FOR 'CREATE NEW MOVIE' FORM FIELDS

router.post('/movies/create', (req,res,next)=>{

    const newMovie = new Movie(req.body);
    
    Movie.create(newMovie)
        .then((response)=>{

            res.redirect(`/movies/${response._id}`);

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE FOR 'EDIT MOVIE' PAGE

router.get('/movies/:id/edit', (req,res,next)=>{

    Movie.findById(req.params.id)
        .then((theMovie)=>{
            Celebrity.find()
            .then((allCelebs)=>{
                console.log(theMovie);
                console.log(allCelebs);
                res.render('movies/edit', {theMovie: theMovie, allCelebs: allCelebs});

            });
        })
        .catch((err)=>{

            next(err);

        });
});

// POST ROUTE FOR UPDATING MOVIE INFO

router.post('/movies/:id/update', (req,res,next)=>{

    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then((response)=>{

            res.redirect(`/movies/${response._id}`);

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
        .populate('celebrities')
        .then((theMovie)=>{
            console.log(theMovie);
            res.render('movies/show', theMovie);

        })
        .catch((err)=>{

            next(err);

        });

});

// USING MODULE.EXPORTS TO MAKE OUR ROUTES AVAILABLE ACROSS THE APP
// POSSIBLY ALSO TO ENABLE FUNCTIONALITY OF "NEXT"

module.exports = router;