const express = require('express');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    console.log(celebrities);
  
    res.render('celebrities/celebrities-list', { celebrities });
    
  } catch (error) {
    next(error);

    return error;
  }
});

router.get('/celebrities/new', async (req, res, next) => {
  res.render('celebrities/add-celebrities');
});

router.get('/celebrities/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
  
    const celebrity = await Celebrity.findById(id);
  
    console.log((await celebrity).toJSON());
  
    res.render('celebrities/celebrities-detail', celebrity)
    
  } catch (error) {
    next(error);

    return error;
  }
});

router.post('/celebrities', async (req, res, next) => {
  try {
    //console.log(req.body);

    const {name, occupation, catchPhrase} = req.body;

    if (!name || !occupation || !catchPhrase) {
      res.render('celebrities/add-celebrities', {errorMessage: 'Favor preencher todos os campos'});

      return;
    }

    const newCelebrity = new Celebrity({name, occupation, catchPhrase});

    await newCelebrity.save();

    res.redirect('/celebrities');

  } catch (error) {
    return next(error);
  }  
});

router.post('/celebrities/:id/delete', async (req, res, next) => {
  try {
    //console.log(req.params.id);
    const {id} = req.params;

    await Celebrity.findByIdAndDelete(id);

    res.redirect('/celebrities');

  } catch (error) {
    return next(error);
  }

})

router.get('/celebrities/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;

    const celebrity = await Celebrity.findById(id);

    res.render('celebrities/edit-celebrity', {celebrity});

  } catch (error) {
    
  }

});

router.post('/celebrities/:id', async (req, res, next)=>{
  try {
    const {name, occupation, catchPhrase} = req.body;
    const {id} = req.params;

    if (!name || !occupation || !catchPhrase) {
      const celebrity = await Celebrity.findById(id);

      res.render('celebrities/edit-celebrity', {celebrity, errorMessage: 'Favor preencher todos os campos'});

      return;
    }
    
    await Celebrity.findByIdAndUpdate(id, {$set: {name, occupation, catchPhrase} });

    res.redirect('/celebrities');

  } catch (error) {
    
  }
});

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
  
    res.render('movies/movies-list', { movies });
    
  } catch (error) {
    next(error);

    return error;
  }
});

router.get('/movies/new', async (req, res, next) => {
  res.render('movies/add-movies');
});

router.get('/movies/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
  
    const movies = await Movie.findById(id);
  
    //console.log((await celebrity).toJSON());
  
    res.render('movies/movies-detail', movies)
    
  } catch (error) {
    next(error);

    return error;
  }
});

router.post('/movies', async (req, res, next) => {
  try {
    //console.log(req.body);

    const {title, genre, plot} = req.body;

    if (!title || !genre || !plot) {
      res.render('movies/add-movies', {errorMessage: 'Favor preencher todos os campos'});

      return;
    }

    const newMovie = new Movie({title, genre, plot});

    await newMovie.save();

    res.redirect('/movies');

  } catch (error) {
    return next(error);
  }  
});

router.post('/movies/:id/delete', async (req, res, next) => {
  try {
    //console.log(req.params.id);
    const {id} = req.params;

    await Movie.findByIdAndDelete(id);

    res.redirect('/movies');

  } catch (error) {
    return next(error);
  }
})

router.get('/movies/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;

    const movie = await Movie.findById(id);

    res.render('movies/edit-movie', {movie});

  } catch (error) {
    
  }

});

router.post('/movies/:id', async (req, res, next)=>{
  try {
    const {title, genre, plot} = req.body;
    const {id} = req.params;

    if (!title || !genre || !plot) {
      const movie = await Movie.findById(id);

      res.render('movies/edit-movie', {movie, errorMessage: 'Favor preencher todos os campos'});

      return;
    }
    
    await Movie.findByIdAndUpdate(id, {$set: {title, genre, plot} });

    res.redirect('/movies');

  } catch (error) {
    
  }
});

module.exports = router;
