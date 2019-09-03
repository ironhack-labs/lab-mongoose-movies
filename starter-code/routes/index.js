const express = require('express');
const router  = express.Router();
let Celebrity = require("../models/celebrity")
let Movies = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(dbRes => {
      res.render('celebrities/index', { celebrities:dbRes });
    })
    .catch(dbErr => {
      next(dbErr)
    })
});

router.post('/celebrities/delete/:id', (req, res, next) => {

  Celebrity.findByIdAndDelete(req.params.id)
    .then((dbRes) => res.redirect('/celebrities/'))
    .catch((err) => console.log(err))

})

router.post('/celebrities', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((dbRes) => res.redirect('/celebrities/'))
    .catch((err) => console.log(err))
  
})


router.get('/celebrities/new', (req, res, next) => {
    res.render("celebrities/new")
});


router.post('/celebrities/:name/edit', (req, res, next) => {

  let update = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase:req.body.catchPhrase
  }

  Celebrity.findOneAndUpdate({name:req.params.name},update)
    .then((dbRes) => {
      console.log("someone was edited!")
      res.redirect('/celebrities')
    })
    .catch((err) => console.log("did not work"))
})


router.get('/celebrities/:name', (req, res, next) => {
    
  Celebrity.findOne({ "name": req.params.name })
    .then(dbRes => {
      console.log(`found: ${req.params.name}`)
      res.render('celebrities/show',dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});

router.get('/celebrities/:name/edit', (req, res, next) => {
  Celebrity.findOne({ "name": req.params.name })
    .then(dbRes => {
      console.log(`found: ${req.params.name}`)
      res.render('celebrities/edit', dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});


//movies


router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(dbRes => {
      console.log("all good for movies")
      res.render('movies/index', { movies: dbRes });
      console.log("All movies found!")
    })
    .catch(dbErr => {
      next(dbErr)
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render("movies/new")
});

router.post('/movies/:title/edit', (req, res, next) => {

  let update = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movies.findOneAndUpdate({ title: req.params.title }, update)
    .then((dbrs) => {
      console.log("someone was edited: " + dbrs)
      res.redirect('/movies')
    })
    .catch((err) => console.log("did not work : "+err))
})

router.get('/movies/:title', (req, res, next) => {

  Movies.findOne({ "title": req.params.title })
    .then(dbRes => {
      console.log(`found: ${req.params.title}`)
      res.render('movies/show', dbRes);
    })
    .catch(dbErr => {
      console.log("NOTHING HAPPENING : "+dbErr)
    })
});


router.post('/movies/delete/:id', (req, res, next) => {

  Movies.findByIdAndDelete(req.params.id)
    .then((dbRes) => res.redirect('/movies'))
    .catch((err) => console.log(err))

})

router.post('/movies', (req, res, next) => {

  const { title, plot, genre } = req.body;

  Movies.create({ title, plot, genre })
    .then((dbRes) => res.redirect('/movies'))
    .catch((err) => console.log(err))

})

router.get('/movies/:title/edit', (req, res, next) => {
  Movies.findOne({ "title": req.params.title })
    .then(dbRes => {
      console.log(`found: ${req.params.title}`)
      res.render('movies/edit', dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});








module.exports = router;

