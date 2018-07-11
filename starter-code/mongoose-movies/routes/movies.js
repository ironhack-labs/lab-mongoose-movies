// REQUIRING IN EXPRESS

const express       = require('express');

// ASSIGNING A VAR TO THE EXPRESS METHOD 'ROUTER' WHICH WILL DO
// THE HEAVY LIFTING OF CONNECTING ALL THE PAGES

const router        = express.Router();

const Celebrity     = require('../models/celebrity');

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

    const theID = req.params.id;
    Movie.findById(theID)
        .then((theMovie)=>{
            Celebrity.find()
            .then((allCelebs)=>{
                // for (i = 0; i < allCelebs.length; i++) {
                //     if (theMovie.celebrities.includes(allCelebs[i].name)){
                //         console.log(allCelebs[i].name);
                //     }
                // };
                console.log(`theMovie.celebrities: ${theMovie.celebrities}`);
                console.log(`allCelebs.name: ${allCelebs.name}`);
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

// POST ROUTE FOR CREATING REVIEWS AND APPENDING TO MOVIES

router.post('/movies/:id/review/create', (req,res,next)=>{

    const theID = req.params.id;

    Movie.findByIdAndUpdate(theID,{$push: {reviews: req.body}})
        .then((response)=>{
            
            console.log(`----------------------------- ${theID}`);
            res.redirect(`/movies/${theID}`);

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE FOR PAGE TO ADD A REVIEW

router.get('/movies/:id/review/add', (req,res,next)=>{

    Movie.findById(req.params.id)
        .populate('celebrities')
        .then((theMovie)=>{

            res.render('movies/addReview',theMovie);

        });

});

// GET ROUTE TO GET TO EDIT REVIEW PAGE

router.get('/movies/reviews/:movieID/:reviewIndex/edit', (req,res,next)=>{

    const theID = req.params.movieID;
    const reviewIndex = req.params.reviewIndex;

    Movie.findById(theID)
        .then((theMovie)=>{

            const theReview = theMovie.reviews[reviewIndex];
            console.log(theReview);
            res.render('movies/editReview', {theMovie,theReview,reviewIndex});

        })
        .catch((err)=>{

            next(err);

        });

});

// POST ROUTE FOR EDITING A REVIEW

router.post('/movies/:movieID/reviews/:reviewIndex/update', (req,res,next)=>{

    const movieID = req.params.movieID;
    const reviewIndex = req.params.reviewIndex;
    const updatedReview = req.body;

    Movie.findById(movieID)
        .then((theMovie)=>{
            
            theMovie.reviews[reviewIndex] = updatedReview;
                
            theMovie.save()
                .then((response)=>{

                    res.redirect('/movies/'+movieID);

                });

        })
        .catch((err)=>{

            next(err);

        });

});

// POST ROUTE FOR DELETING REVIEWS

router.post('/movies/:movieID/review/delete/:reviewIndex', (req,res,next)=>{

    const movieID = req.params.movieID;
    const reviewIndex = req.params.reviewIndex;

    Movie.findById(movieID)
        .then((theMovie)=>{

            // console.log(theMovie);

            theMovie.reviews.splice(reviewIndex,1);

            // theMovie.reviews[reviewIndex] = {reviewer: "review name", content: "review content"}

            theMovie.save()
                .then((response)=>{

                    res.redirect(`/movies/${movieID}`);

            })
            .catch((err)=>{

                next(err);

            });

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
            // console.log('---------------------------------------',theMovie.reviews);
            
            res.render('movies/show', theMovie);

        })
        .catch((err)=>{

            next(err);

        });

});

// USING MODULE.EXPORTS TO MAKE OUR ROUTES AVAILABLE ACROSS THE APP
// POSSIBLY ALSO TO ENABLE FUNCTIONALITY OF "NEXT"

module.exports = router;