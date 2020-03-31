const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Celebrity')




/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// -------- CELEBRITY -----------

// lista celebridades na home
router.get('/celebrities/index', (req, res) => {
  Celebrity
  .find()
  .then(celebrity => {
    console.log(celebrity)
    res.render('celebrities/index', {celebrity})})
  .catch(error => console.log(error))
});

// info sobre cada celebridades 
router.get('/celebrities/show/:celebrityId', (req, res) => {
  const {
    celebrityId
  } = req.params;

  Celebrity
    .findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/show', {
        celebrity
      });
    })
    .catch(error => console.log(error));
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
})

//add nova celebridade
router.post('/celebrities/new', (req, res) => {
  console.log('body: ', req.body);

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
    })
    .then(response => {
      // console.log(response);
      res.redirect('/celebrities/index');
    })
    .catch(error => console.log(error));
});



// deletar celebridade
router.post('/celebrities/:celebrityId/delete', (req, res) => {
  const {
    celebrityId
  } = req.params;
    console.log(celebrityId);
  Celebrity
    .findByIdAndRemove(celebrityId)
    .then(response => {
    res.redirect('/celebrities/index');
    })
    .catch(error => console.log(error));
});



// celebrity edit
router.get('/celebrities/edit/:celebritiesId', (req, res) => {
  const {
    celebritiesId
  } = req.params;
  Celebrity
    .findById(celebritiesId)
    .then(celebrity => {
      // console.log(book);
      res.render('celebrities/edit', {
        celebrity 
      });
    })
    .catch(error => console.log(error));
});



//POST edit
router.post('/celebrities/edit', (req, res) => {
  const {
    celebritiesId, name, occupation, catchPhrase
  } = req.body

  Celebrity
  .findByIdAndUpdate(celebritiesId, {$set: {
    name, occupation, catchPhrase}
  }, {
    new: true
  })
  .then(response => {
    // console.log(response);
    res.redirect(`/celebrities/show/${celebritiesId}`);
  })
  .catch(error => console.log(error));
});



// -------- MOVIES -----------

// lista filmes na home
router.get('/movies/index', (req, res) => {
  Movie
  .find()
  .then(movies => {
    // console.log(celebrity)
    res.render('movies/index', {movies})})
  .catch(error => console.log(error))
});


// / info sobre o filme
router.get('/movies/show/:moviesId', (req, res) => {
  const {
    moviesId
  } = req.params;

  Movie
    .findById(moviesId)
    .then(movies=> {
      res.render('movies/show', {
        movies
      });
    })
    .catch(error => console.log(error));
});

router.get('/movies/new', (req, res) => {
  res.render('movies/new');
})


//add novo filme
router.post('/movies/new', (req, res) => {
  console.log('body: ', req.body);

  const {
    title,
    genre,
    plot
  } = req.body;

  Movie.create({
    title,
    genre,
    plot
    })
    .then(response => {
      // console.log(response);
      res.redirect('/movies/index');
    })
    .catch(error => console.log(error));
});



// deletar filme
router.post('/movies/:moviesId/delete', (req, res) => {
  const {
    moviesId
  } = req.params;
    console.log(moviesId);
  Movie
    .findByIdAndRemove(moviesId)
    .then(response => {
    res.redirect('/movies/index');
    })
    .catch(error => console.log(error));
});


// movie edit
router.get('/movies/edit/:moviesId', (req, res) => {
  const {
    moviesId
  } = req.params;
  Movie
    .findById(moviesId)
    .then(movies => {
      // console.log(book);
      res.render('movies/edit', {
        movies
      });
    })
    .catch(error => console.log(error));
});


//POST edit
router.post('/movies/edit', (req, res) => {
  const {
    moviesId, title, genre, plot
  } = req.body

  Movie
  .findByIdAndUpdate(moviesId, {$set: {
    title, genre, plot}
  }, {
    new: true
  })
  .then(response => {
    // console.log(response);
    res.redirect(`/movies/show/${moviesId}`);
  })
  .catch(error => console.log(error));
});




module.exports = router;
