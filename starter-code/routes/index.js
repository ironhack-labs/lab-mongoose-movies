const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const Movies = require('../models/Movies.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* 
*************************************
Celebridades
************************************
*/


router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
    .then(celebridades => {
      res.render('Celebrity/celebrity-list', {
        celebrity: celebridades
      });
    }).catch((e) => {
      next(e);
    })
});

router.post('/celebrities', (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
  }).then(prueba => {

    res.redirect("/celebrities")

  }).catch((error) => {
    next(error)
  })


});
router.get('/celebrities/new', (req, res, next) => {
  res.render("Celebrity/new");
});

router.get('/celebrities/:id', (req, res, next) => {

  const {
    id
  } = req.params

  Celebrity.findById(id)
    .then(celebridades => {
      res.render('Celebrity/celebrity-details', celebridades);
    }).catch((e) => {
      next(e);
    })
});

router.post('/celebrities/:id', (req, res, next) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  const {
    id
  } = req.params

  Celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    })
    .then(() => {
      res.redirect(`/celebrities/${id}`);

    }).catch((e) => {
      next(e);
    })
});

router.get('/celebrities/:id/delete', (req, res, next) => {

  const {
    id
  } = req.params

  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
});

router.get('/celebrities/:id/edit', (req, res, next) => {

  const {
    id
  } = req.params

  Celebrity.findById(id)
    .then((celebridadEdicion) => {
      console.log(celebridadEdicion);
      res.render("Celebrity/edit", {
        celebridad: celebridadEdicion
      });
    }).catch((e) => {
      next(e)
    })
});


/* 
*************************************
Cierre Celebridades
************************************
*/



/* 
*************************************
Movies
************************************
*/

router.get('/movies', (req, res, next) => {

  Movies.find()
    .then(movies => {
      res.render('Movies/movies-list', {
        movies: movies
      });
    }).catch((e) => {
      next(e);
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render("Movies/new");
});

router.post('/movies/:id', (req, res, next) => {

  const {
    title,
    genre,
    plot
  } = req.body;

  const {
    id
  } = req.params

  Movies.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    })
    .then(() => {
      res.redirect(`/movies/${id}`);

    }).catch((e) => {
      next(e);
    })
});

router.get('/movies/:id', (req, res, next) => {

  const {
    id
  } = req.params

  Movies.findById(id)
    .then(Movie => {
      res.render('Movies/movies-details', Movie);
    }).catch((e) => {
      next(e);
    })
});


router.post('/movies', (req, res, next) => {

  const {
    title,
    genre,
    plot
  } = req.body;

  const {
    id
  } = req.params


  Movies.create({
    title,
    genre,
    plot
  }).then(prueba => {

    res.redirect("/movies")

  }).catch((error) => {
    next(error)
  })
});


router.get('/movies/:id/delete', (req, res, next) => {

  const {
    id
  } = req.params

  Movies.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(e => next(e))
});

router.get('/movies/:id/edit', (req, res, next) => {

  const {
    id
  } = req.params

  Movies.findById(id)
    .then((celebridadEdicion) => {
      console.log(celebridadEdicion);
      res.render("movies/edit", {
        movies: celebridadEdicion
      });
    }).catch((e) => {
      next(e)
    })
});




/* 
*************************************
Cierre de Movies
************************************
*/

module.exports = router;