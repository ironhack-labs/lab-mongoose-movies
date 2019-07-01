const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity")
const Movie = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

//Iteration #2: Listing Our Celebrities
router.get('/celebrities/index', (req, res, next) => {
    Celebrity
        .find()
        .then((allCelebrities) => {
            res.render('celebrities/index', { allCelebrities });
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #4: Adding New Celebrities
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new_celebrity', (req, res, next) => {
    Celebrity
        .create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(newCeleb => {
            res.redirect("/celebrities/index")
        }).catch(error => res.redirect("/celebrities/new"))
});

//Iteration #3: The Celebrity Details Page
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .then(celeb => {
            res.render("celebrities/show", { celeb })
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #5: Deleting Celebrities
router.post('/celebrities/:id/delete', (req, res, next) => {
    console.log(req.params.id)
    Celebrity
        .findByIdAndDelete(req.params.id)
        .then(delCeleb => {
            res.redirect("/celebrities/index")
        }).catch(error => {
            next(error);
        })
});

// Iteration #6 (Bonus): Editing Celebrities
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity
        .findById(req.params.id)
        .then(celeb => {
            res.render("celebrities/edit", { celeb })
        }).catch(error => {
            console.log(error);
        })
});

router.post('/celebrities/:id', (req, res, next) => {
    Celebrity
        .updateOne({ _id: req.params.id }, {
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(celeb => {
            console.log("respuesta del update:" + celeb.catchPhrase)
            res.redirect("/celebrities/index")
        }).catch(error => {
            console.log("error de update")
            next(error);
        })
});

//Iteration #:8 Listing Our Movies
router.get('/movies/index', (req, res, next) => {
    Movie
        .find()
        .then((allMovies) => {
            res.render('movies/index', { allMovies });
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #10: Adding New Movies
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/movies/new_movie', (req, res, next) => {
    Movie
        .create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(newMovie => {
            res.redirect("/movies/index")
        }).catch(error => res.redirect("/movies/new"))
});

//Iteration #9: The Movie Details Page
router.get('/movies/:id', (req, res, next) => {
    Movie
        .findById(req.params.id)
        .then(onemovie => {
            res.render("movies/show", { onemovie })
        }).catch(error => {
            console.log(error);
        })
});

//Iteration #11: Deleting movies
router.post('/movies/:id/delete', (req, res, next) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then(delMovie => {
            res.redirect("/movies/index")
        }).catch(error => {
            next(error);
        })
});

// Iteration #12 (Bonus): Editing Movies
router.get('/movies/:id/edit', (req, res, next) => {
    Movie
        .findById(req.params.id)
        .then(onemovie => {
            res.render("movies/edit", { onemovie })
        }).catch(error => {
            console.log(error);
        })
});

router.post('/movies/:id', (req, res, next) => {
    Movie
        .updateOne({ _id: req.params.id }, {
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(onemovie => {
            res.redirect("/movies/index")
        }).catch(error => {
            console.log("error de update")
            next(error);
        })
});

module.exports = router;