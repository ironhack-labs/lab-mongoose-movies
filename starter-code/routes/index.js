const express = require('express');
const router  = express.Router();


const Celebrity = require('../models/celebrity')
const Movies = require('../models/movies')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res) => {

  Celebrity.find()
  .then((celeb) => {
    res.render('celebrities', { celeb });
  })
  .catch((error) => {
    console.log(error);
  });
})

router.get('/celebrities/:celebID', (req, res) => {
  const infoCeleb = req.params.celebID
  Celebrity.findById(infoCeleb)
  .then((infoCeleb) => {
    res.render('celebrity-info', { infoCeleb });
  })
  .catch((error) => {
    console.log(error);
  });
})

router.get('/new', (req, res) => {
  res.render('new')
});

router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  // obtendo os dados do form e criando um novo Book
  const newCeleb = new Celebrity({ name, occupation, catchPhrase})
  // salvando o newBook (pode usar save ou create, por tras do save existe um insertOne - o create pode inserir varios dados)
  newCeleb.save()
  .then((celebADD) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
    res.redirect('/new');

  })
});

router.post('/celebrities/:celebID/delete', (req, res) => {
  Celebrity.findByIdAndRemove({ _id: req.params.celebID })
  .then((infoCeleb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/celebrities/:celebID/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebID)
  .then((infoCeleb) => {
    res.render("edit", {infoCeleb});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/celebrities/:celebID/edit', (req, res, next) => {
  const {  name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.params.celebID}, { $set: { name, occupation, catchPhrase}})
  .then((infoCeleb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

// movies route ------------------------------

router.get('/movies', (req, res) => {

  Movies.find()
  .then((films) => {
    res.render('movies', { films });
  })
  .catch((error) => {
    console.log(error);
  });
})


router.get('/movies/:movieID', (req, res) => {
  const infoMovie = req.params.movieID
  Movies.findById(infoMovie)
  .then((infoMovie) => {
    res.render('movies-info', { infoMovie });
  })
  .catch((error) => {
    console.log(error);
  });
})


router.get('/moviesAdd', (req, res) => {
  res.render('moviesAdd')
});

router.post('/moviesAdd', (req, res) => {
  const { title, genre, plot } = req.body;
  // obtendo os dados do form e criando um novo Book
  const newMovie = new Movies({ title, genre, plot})
  // salvando o newBook (pode usar save ou create, por tras do save existe um insertOne - o create pode inserir varios dados)
  newMovie.save()
  .then((moviesADD) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
    res.redirect('/moviesAdd');

  })
});

router.post('/movies/:movieID/delete', (req, res) => {
  Movies.findByIdAndRemove({ _id: req.params.movieID })
  .then((infoMovie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/movies/:movieID/edit', (req, res) => {
  Movies.findById(req.params.movieID)
  .then((infoMovie) => {
    res.render("moviesEdit", {infoMovie});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/movies/:movieID/edit', (req, res, next) => {
  const {  title, genre, plot } = req.body;
  Movies.update({_id: req.params.movieID}, { $set: { title, genre, plot}})
  .then((infoCeleb) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
