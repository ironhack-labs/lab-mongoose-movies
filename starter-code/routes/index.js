const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", {
       celebrities : celebrities
      })
    })
});

// The route to display the form
router.get('/celebrities/new', (req, res, next) => {
    res.render('new');

  // Publisher.find({}, null, { sort: { name: 1 } })
  //   .then(publishers => {
  //     res.render('add-book', { publishers })
  //   })
})

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id // the id from the url
  Celebrity.findById(id)
    // .populate('_publisher')
    .then(celebrity => {
      res.render('celebrity-detail', {
        celebrity: celebrity
      })
    })
    .catch(error => {
      next(error);
    })
})

// The route to handle the form
router.post('/celebrities', (req, res, next) => {
  // If there is an empty title
  if (!req.body.name) {
    res.render('new', {
      error: "The name must be filled"
    })
    return
  }

  // Create a celebrity in the db with the information from the form
  Celebrity.create({
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

// Page to display the edit form
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    // console.log("From the edit get route:", celebrity)
    res.render("edit", {celebrity});
  })
});
// router.get('/celebrity/:id/edit', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(book => {
//       Publisher.find({}, null, { sort: { name: 1 } })
//         .then(publishers => {
//           res.render('edit-book', { book, publishers })
//         })
//     })
// })

// Route to handle the edit form submission
router.post('/celebrities/:id/edit', (req, res, next) => {
  // Find the book and update it with the info from the form
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

router.get('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(book => {
      res.redirect('/celebrities')
    })
})


//MOVIES ROUTES
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("./movies/movies", {
       movies : movies
      })
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render('./movies/new');
})

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id // the id from the url
  Movie.findById(id)
    .then(movie => {
      res.render('./movies/movie-detail', {
        movie: movie
      })
    })
    .catch(error => {
      next(error);
    })
})

router.post('/movies', (req, res, next) => {
  // If there is an empty title
  // if (!req.body.title) {
  //   res.render('./movies/new', {
  //     error: "The title must be filled"
  //   })
  //   return
  // }

  // Create a celebrity in the db with the information from the form
  Movie.create({
    title: req.body.title, 
    genre: req.body.genre,
    plot: req.body.plot
  })
  .then(movie => {
    res.redirect('/movies')
  })
})



// Page to display the edit form
router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    // console.log("From the edit get route:", movie)
    res.render("./movies/edit", {movie});
  })
});
// router.get('/movie/:id/edit', (req, res, next) => {
//   Movie.findById(req.params.id)
//     .then(book => {
//       Publisher.find({}, null, { sort: { name: 1 } })
//         .then(publishers => {
//           res.render('edit-book', { book, publishers })
//         })
//     })
// })

// Route to handle the edit form submission
router.post('/movies/:id/edit', (req, res, next) => {
  // Find the book and update it with the info from the form
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title, 
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(movie => {
      res.redirect('/movies')
    })
})

router.get('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      res.redirect('/movies')
    })
})

module.exports = router;