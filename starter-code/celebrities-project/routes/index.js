const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  res.render('index');
})

/*EDIT*/

router.get('/celebrities/:id/edit', (req,res,next) => {
  const celebId = req.params.id;
  Celebrity.findOne({_id: celebId})
    .then(celeb => {
      res.render("celebrities/edit", celeb);
    })
    .catch(error => {
      console.log(error)
    })
});



router.post('/celebrities/:id', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
  .then((celeb) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error);
  })
});



/*ADD NEW*/

router.post('/celebrities', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase}).save()
  .then( celeb => {
    Celebrity.find()
      .then(celebs => {
        res.render("celebrities", {celebs});
      })
      .catch(error => {
        console.log(error)
      })
  })
  .catch(e => {
    console.log(e);
  })
});

/*DELETE*/

router.post('/celebrities/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
});

/*LIST */

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.render("celebrities", {celebs});
    })
    .catch(error => {
      console.log(error)
    })
});

/*FORM*/

router.get('/celebrities/new', (req, res, next) => { 
  res.render('celebrities/new');
});

/*DETAIL */

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findOne({_id: celebId})
    .then(celeb => {
      res.render("celebrities/show", {celeb});
    })
    .catch(error => {
      console.log(error)
    })
});

/******MOVIES********/

router.get('/movies', (req,res,next) =>{
  Movie.find()
    .then(movies => {
      res.render("movies", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movies/new', (req, res, next) => { 
  res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findOne({_id: movieId})
    .then(movie => {
      res.render("movies/show", {movie});
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/movies', (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot}).save()
  .then( movie => {
    Movie.find()
      .then(movies => {
        res.render("movies", {movies});
      })
      .catch(error => {
        console.log(error)
      })
  })
  .catch(e => {
    console.log(e);
  })
});

router.post('/movies/delete/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
});

router.get('/movies/:id/edit', (req,res,next) => {
  const movieId = req.params.id;
  Movie.findOne({_id: movieId})
    .then(movie => {
      console.log(movie);
      res.render("movies/edit", movie);
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/movies/:id', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot})
  .then((movie) => {
    console.log(movie);
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error);
  })
});





module.exports = router;
