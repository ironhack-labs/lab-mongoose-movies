const express = require('express');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')
const CelebrityMovieLink = require('../models/celebrity_movie')

const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Get celebritys page*/
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesfromDB => {
      res.render('celebrities', {
        listOfCelebrities: celebritiesfromDB
      })
    })
    .catch(err => console.log(err))
})

/*Get the movies page*/
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesfromDB => {
      res.render('movies', {
        listOfMovies: moviesfromDB
      })
    })
    .catch(err => console.log(err))
})

// /*Get celebrity details*/
// router.get('/celebrities/:id', (req, res, next) => {
//   let id = req.params.id
//   Celebrity.findById(id)
//     .then(celeb => {
//       res.render('celebrity-detail', {
//         celebrity: celeb
//       })
//     })
//     .catch(err => console.log(err))
// })
/* Get celebrity with movies*/
router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  // Celebrity.findById(id)
  //   .then(celeb => {
  //     var movies = []
  //     CelebrityMovieLink.find({ celebrity_id: id })
  //       .then(movie_celeb_link => {
  //         movie_celeb_link.forEach(obj => {
  //           Movie.findById(obj.movie_id)
  //             .then(movie => {
  //               movies.push(movie)
  //             })
  //         })
  //       })
  //       .then(sth => {
  //         res.render('celebrity-detail', {
  //           celebrity: celeb, movies: movies
  //         })
  //       })
  //       .catch(err => console.log(err))
  //   })
  //   .catch(err => { console.log(err) })

  // promise1
  // .then(x => {
  //   return Promise.all(arrayOfPromises)
  // })
  // .then(y => {
  //   return promise3
  // })


  Promise.all([
    Celebrity.findById(id),
    CelebrityMovieLink.find({ celebrity_id: id }).populate("movie_id")
  ])
    .then(([celeb, movie_celeb_link]) => {
      console.log("movie_celeb_link", movie_celeb_link);

      res.render('celebrity-detail', {
        celebrity: celeb,
        movies: movie_celeb_link.map(x => x.movie_id)
      })
    })
    .catch(err => { console.log(err) })
})

/*Get movie details*/
router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  // Movie.findById(id)
  //   .then(movie => {
  //     var celebrities = []
  //     CelebrityMovieLink.find({ movie_id: id })
  //       .then(celeb_movie_link => {
  //         celeb_movie_link.forEach(obj => {
  //           Celebrity.findById(obj.celebrity_id)
  //             .then(celebrity => {
  //               celebrities.push(celebrity)
  //             })
  //         })
  //       })
  //       .then(sth => {
  //         res.render('movie-detail', {
  //           movie: movie, celebs: celebrities
  //         })
  //       })
  //       .catch(err => { console.log(err) })
  //   })
  //   .catch(err => console.log(err))
  Promise.all([
    Movie.findById(id),
    CelebrityMovieLink.find({ movie_id: id }).populate("celebrity_id")
  ])
    .then(([movie, movie_celeb_link]) => {
      console.log("movie_celeb_link", movie_celeb_link);

      res.render('movie-detail', {
        movie: movie,
        celebs: movie_celeb_link.map(x => x.celebrity_id)
      })
    })
    .catch(err => { console.log(err) })
})

/*Call Add new celebrity page*/
router.get('/new-celebrities', (req, res, next) => {
  res.render('add-celebrity')
})

/*Create new celebrity*/
router.post('/new-celebrities', (req, res, next) => {
  if (!req.body.name) {
    res.render('add-celebrity', {
      error: "The name must be filled"
    })
    return
  }
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

/*Call Add new movie page*/
router.get('/new-movies', (req, res, next) => {
  res.render('add-movie')
})

/*Create new movie*/
router.post('/new-movies', (req, res, next) => {
  if (!req.body.title) {
    res.render('add-movie', {
      error: "The title must be filled"
    })
    return
  }
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then(movie => {
      res.redirect('/movies')
    })
})

/* Add a link to a movie or celebrity */
router.get('/add-actor', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      Movie.find()
        .then(movies => {
          res.render('add-actor-to-movie', {
            celebrities: celebs, movies: movies
          })
        })
    })
})

/*Update the link to the actors and movies */
router.post('/add-actor', (req, res, next) => {
  // console.log(req.body)
  CelebrityMovieLink.create([req.body])
    .then(link => {
      console.log(`Created ${link.length} Celebrity Movie links`)
      res.redirect('/')
    })
})

/*Delete a celebrity*/
router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect('/celebrities')
    })
})

/*Delete movies*/
router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.params.id
  Movie.findByIdAndRemove(id)
    .then(movie => {
      res.redirect('/movies')
    })
})

/*Call Edit a celebrity Page*/
router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id)
    .then(celebrity => { res.render('edit-celebrity', { celebrity: celebrity }) })
    .catch(err => { console.log(err) })
})
/*Edit the celebrity*/
router.post('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndUpdate(id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(something => { res.redirect('/celebrities') })
})

/*Call Edit a movie Page*/
router.get('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id)
    .then(movie => { res.render('edit-movie', { movie: movie }) })
    .catch(err => { console.log(err) })
})
/*Edit the movie*/
router.post('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id
  Movie.findByIdAndUpdate(id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then(something => { res.redirect('/movies') })
})

/*Search for movies by genre */
router.get('/search-movie', (req, res, next) => {
  if (req.query.genre) {
    let genre = req.query.genre
    let options = {}
    if (req.query.sort) {
      options = {
        sort: {
          title: req.query.sort === "asc" ? 1 : -1
        }
      }
    }
    Movie.find({ genre }, null, options)
      .then(movies => {
        res.render('search-movie', {
          movies: movies,
          linkAsc: `/search-movie?genre=${genre}&sort=asc`,
          linkDesc: `/search-movie?genre=${genre}&sort=desc`,
        })
      })
  }
  else {
    res.render('search-movie')
  }
})

module.exports = router;
