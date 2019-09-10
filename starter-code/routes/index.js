const express = require('express');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET Celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(celebrities => {
    //console.log(celebrities);
    res.render('celebrities/index', { celebrities });
  })
    .catch(err => {
      next(err);
    });
})

//NEW Celebrity
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})


//Celebrity
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      //console.log(celebrities);
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => {
      next(err);
    });
})

/* ADD Celebrities */
router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next(err);
    });
})

//DELETE Celebrity
router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next(err);
    });
})

//EDIT
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(err => {
      next(err);
    });

})

//UPDATE
router.post('/celebrities/:id/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate((req.params.id), {
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next(err);
    });
})




//________________MOVIES___________________________


/* GET Movies */
router.get('/movies', (req, res, next) => {
  Movie.find().then(movies => {
    //console.log(movies);
    res.render('movies/index', { movies });
  })
    .catch(err => {
      next(err);
    });
})

//NEW Movie
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
})

//Movie
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      //console.log(movies);
      res.render('movies/show', { movie });
    })
    .catch(err => {
      next(err);
    });
})

/* ADD Movies */
router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({
    title,
    genre,
    plot
  })
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => {
      next(err);
    });
})

//DELETE Movie
router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => {
      next(err);
    });
})

//EDIT
router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(err => {
      next(err);
    });

})

//UPDATE
router.post('/movies/:id/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  console.log(title);
  Movie.findByIdAndUpdate((req.params.id), {
    title,
    genre,
    plot
  })
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => {
      next(err);
    });
})




module.exports = router;
