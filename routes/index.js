const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* C(R)UD: Retrieve -> List all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities)
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});

/* (C)RUD: Add a celebrity form */
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* (C)RUD: Create the celebrity in DB */
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase, description} = req.body;
  new Celebrity({name, occupation, catchPhrase, description})
  .save().then( celebrity => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* CRU(D): Delete the book in DB */
router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

/* CR(U)D: GET Edit the celebrities in DB */
router.get('/celebrities/edit/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrities/edit',{celebrity});;
  })
});

/* CR(U)D: POST Edit the celebrities in DB */
router.post('/celebrities/edit/:id', (req,res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{ name, occupation, catchPhrase })
      .then( celebrity => {
        res.redirect('/celebrities')
      })
})

/* C(R)UD: Retrieve -> Celebrities details */

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity })
    })
    .catch(error => {
      console.log(error)
    })
});


/////// MOVIES //////



/* C(R)UD: Retrieve -> List all movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies)
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error)
    })
});

/* (C)RUD: Add a movie form */
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

/* (C)RUD: Create the movie in DB */
router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  new Movie({ title, genre, plot })
  .save().then( movie => {
    console.log("Movie sucessfully created!");
    res.redirect('/movies');
  });
});

/* CRU(D): Delete the movie in DB */
router.get('/movies/delete/:id',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
})

/* CR(U)D: GET Edit the celebrities in DB */
router.get('/movies/edit/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit',{movie});;
  })
});

/* CR(U)D: POST Edit the movies in DB */
router.post('/movies/edit/:id', (req,res) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id,{ title, genre, plot })
      .then( movie => {
        res.redirect('/movies')
      })
})

/* C(R)UD: movies details */
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render("movies/show", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;