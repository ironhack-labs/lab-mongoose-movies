const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// // router.get("/celebrities", (req, res, next) => {
// //   Celebrity.find()
// //     .then(allTheStars=> {
// //       // console.log('Retrieved books from DB:', allTheBooksFromDB);
// //       res.render("celebrities", { stars: allTheStars });
// //     })
// //     .catch(error => {
// //       console.log("Error while getting the books from the DB: ", error);
// //     });
// // });

// // router.get("/celebrities/:celebrityId", (req, res, next) => {
// //   Celebrity.findById(req.params.celebrityId)
// //     .then(theStar => {
// //       res.render("celebrities-details", { star: theStar });
// //     })
// //     .catch(error => {
// //       console.log("Error while retrieving book details: ", error);
// //     });
// // });


// // router.get('/add',(req, res, next) =>{
// //   res.render('edit')
// // });

// // router.post('/add', (req, res, next) =>{
// //   const name = req.body.nombre;
// //   const occupation = req.body.ocupacion;
// //   const catchPhrase = req.body.frase;

// //   if (name === "" || occupation === "" || catchPhrase === "") {
// //     res.render("edit", {
// //       errorMessage: "Tienes que ingresar los datos"
// //     });
// //     return;
// //   }

// //   Celebrity.findOne({name: name})
// //   .then(celebrity =>{
// //     if(celebrity != null) {
// //       res.render('edit', {
// //         errorMessage : 'Ese Actor ya existe, prueba editarlo'
// //       });
// //       return;
// //     }

// //     Celebrity.create({
// //       name,
// //       occupation,
// //       catchPhrase
// //     })
// //     .then(() => {
// //       res.redirect('/celebrities');
// //     })
// //     .catch(errr => {
// //       console.log(error);
// //     })
// //   })
// //  .catch(error =>{
// //    next(error);
// //   });
// // });

// // router.post('/:celebrityId', (req, res, next) => {
// //   Celebrity.findById(req.params.celebrityId, (error, celebrity) => {
// //     if(error){
// //       next(error);
// //     }else{
// //       celebrity.name = req.body.nombre;
// //       celebrity.occupation = req.body.occupation;
// //       celebrity.catchPhrase = req.body.frase;
// //       celebrity.save(error => {
// //         if (error) {
// //           next(error);
// //         }else{
// //           res.redirect(`/celebrities/${req.params.celebrityId}`);
// //         }
// //       });
// //     }
// //   });
// // });


// // router.get('/:celebrityId/delete', (req, res, next) => {
// //   Celebrity.remove({_id: req.params.celebrityId}, (error, celebrity) =>{
// //     if(error) {
// //       next(error);
// //     }else {
// //       res.redirect('/celebrities');
// //     }
// //   });
// // });

// router.get("/movies", (req, res, next) => {
//   Movie.find()
//     .then(allTheMovies => {
//       // console.log('Retrieved books from DB:', allTheBooksFromDB);
//       res.render("./movies-views/movies", { movies: allTheMovies });
//     })
//     .catch(error => {
//       console.log("Error while getting the books from the DB: ", error);
//     });
// });



// router.get("/movies/:movieId", (req, res, next) => {
//   Movie.findById(req.params.movieId)
//     .then(theMovie => {
//       res.render("./movies-views/movies-details", { movie: theMovie });
//     })
//     .catch(error => {
//       console.log("Error while retrieving book details: ", error);
//     });
// });

// router.get("/add-movie", (req, res, next) => {
//   res.render("./movies-views/movies-edit");
// });

// router.post("/add-movie", (req, res, next) => {
//   const title = req.body.title;
//   const genre = req.body.genre;
//   const plot = req.body.plot;

//   if (title === "" || genre === "" || plot === "") {
//     res.render("./movies-views/movies-edit", {
//       errorMessage: "Tienes que ingresar los datos"
//     });
//     return;
//   }

//   Movie.findOne({ name: name })
//     .then(movie => {
//       if (movie != null) {
//         res.render("./movies-views/movies-edit", {
//           errorMessage: "This movie alredy exists"
//         });
//         return;
//       }

//       Movie.create({
//         title,
//         genre,
//         plot
//       })
//         .then(() => {
//           res.redirect("/movies");
//         })
//         .catch(errr => {
//           console.log(error);
//         });
//     })
//     .catch(error => {
//       next(error);
//     });
// });

// router.post("/:movieId", (req, res, next) => {
//   Movie.findById(req.params.movieId, (error, movie) => {
//     if (error) {
//       next(error);
//     } else {
//       movie.title = req.body.title;
//       movie.genre = req.body.genre;
//       movie.plot = req.body.plot;
//       movie.save(error => {
//         if (error) {
//           next(error);
//         } else {
//           res.redirect(`/movies/${req.params.movieId}`);
//         }
//       });
//     }
//   });
// });

// router.get("/:movieId/delete", (req, res, next) => {
//   Movie.remove({ _id: req.params.movieId }, (error, movie) => {
//     if (error) {
//       next(error);
//     } else {
//       res.redirect("/movies");
//     }
//   });
// });


module.exports = router;
