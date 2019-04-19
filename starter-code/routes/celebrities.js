const express = require('express');
const router  = express.Router();
const app = express();
const Celebrity = require('../models/Celebrity.js')

// /* GET celebrities page */
// /* GET create celebrity to display the form to add a celebrity */
// router.get("/new-celebrity", (req, res, next) => {
//   console.log("New celebrity to create");
//   res.render("new-celebrity");
// });

// /* Route POST create celebrity to receive the form submission */
// router.post("/new-celebrity", (req, res, next) => {
//   //because the info was sent with a post form, we can access the body with a req.body
//   console.log("My celebrity was created", req.body);
//   console.log("req.body", req.body);
//   Celebrity.create({
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase
//   }).then(createdCelebrity => {
//     res.redirect("/celebrities/" + createdCelebrity._id);
//   });
// });


// // http://localhost:3000/celebrities/5caf71777412fd8c8759ce80
// router.get("/celebrities/:celebId", (req, res, next) => {
//   console.log("The id is", req.params.celebId);
//   Celebrity.findById(req.params.celebId).then(celebFromDb => {
//     res.render("celebrities/show", {
//       celeb: celebFromDb
//     });
//   });
// });

// router.get("/celebrities/:celebId/delete", (req, res, next) => {
//   //Delete the celebrity and redirect the user to the home page when it's done
//   Celebrity.findByIdAndDelete(req.params.celebId) //SOlution 2
//     .then(deletedCeleb => {
//       //Redirect to the home page with a req.query.msg
//       res.redirect(
//         `/celebrities?msg=The celebrity "${deletedCeleb.name}" has been deleted`
//       );
//     });
// });

// router.get("/celebrities/:celebId/edit", (req, res, next) => {
//   //because the info was sent with a post form, we can access the body with a req.body
//   Celebrity.findById(req.params.celebId).then(celebFromDb => {
//     res.render("celebrities/edit-celebrity", {
//       celeb: celebFromDb
//     });
//   });
// });
// //     // Render "views/index.hbs" and give a variable "celebrities" that is "celebs" (from then)
// //     res.render('create-celebrity', { celeb: celebFromDb })
// //   })
// // );
// //Route POST
// router.post("/celebrities/:celebId/edit", (req, res, next) => {
//   //because the info was sent with a post form, we can access the body with a req.body
//   Celebrity.findByIdAndUpdate(req.params.celebId, {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase
//   }).then(() => {
//     //Redirect to the detail page of the celebrity
//     res.redirect("/celebrities/" + req.params.celebId);
//   });
// });

// // /* Route POST create movie to receive the form submission */
// // router.post("/new-movie", (req, res, next) => {
// //   //because the info was sent with a post form, we can access the body with a req.body
// //   console.log("My movie was created", req.body);
// //   console.log("req.body", req.body);
// //   Movie.create({
// //     title: req.body.title,
// //     genre: req.body.genre,
// //     plot: req.body.plot
// //   }).then(createdMovie => {
// //     res.redirect("/movies/" + createdMovie._id);
// //   });
// // });

// // /* GET create movie to display the form to add a movie */
// // router.get("/new-movie", (req, res, next) => {
// //   console.log("New movie to create");
// //   Movie.find().then(movies => {
// //     // Render "views/index.hbs" and give a variable "movie" that is "movies" (from then)
// //     res.render("new-movie", {
// //       movie: movies
// //     });
// //   });
// // });

// // /* GET celebrities page */
// // router.get("/movies", (req, res, next) => {
// //   // res.render('celebrities/index');
// //   // console.log('test');
// //   Movie.find()
// //     .then(movies => {
// //       res.render("movies/index", {
// //         listMovies: movies
// //       });
// //     })
// //     .catch(err => {
// //       console.log("The error while searching movies occurred: ", err);
// //     });
// // });

// // // http://localhost:3000/movies/5caf71777412fd8c8759ce80
// // router.get("/movies/:movieId", (req, res, next) => {
// //   console.log("The id is", req.params.movieId);
// //   Movie.findById(req.params.movieId).then(movieFromDb => {
// //     res.render("movies/show", {
// //       movie: movieFromDb
// //     });
// //   });
// // });

// // router.get("/movies/:movieId/delete", (req, res, next) => {
// //   //Delete the movie and redirect the user to the home page when it's done
// //   Movie.findByIdAndDelete(req.params.movieId) //Solution 2
// //     // .then(deletedMovie => {
// //     //Redirect to the home page with a req.query.msg
// //     .then(deletedMovie => {
// //       res.redirect(`/?msg=The movie "${deletedMovie.title}" has been deleted`);
// //     });
// // });

// // router.get("/movies/:movieId/edit", (req, res, next) => {
// //   //because the info was sent with a post form, we can access the body with a req.body
// //   Movie.findById(req.params.movieId).then(movieFromDb => {
// //     res.render("movies/edit-movie", {
// //       movie: movieFromDb
// //     });
// //   });
// // });
// // //     // Render "views/index.hbs" and give a variable "celebrities" that is "celebs" (from then)
// // //     res.render('create-movie', { movie: celebFromDb })
// // //   })
// // // );
// // //Route POST
// // router.post("/movies/:movieId/edit", (req, res, next) => {
// //   //because the info was sent with a post form, we can access the body with a req.body
// //   Movie.findByIdAndUpdate(req.params.movieId, {
// //     title: req.body.title,
// //     genre: req.body.genre,
// //     plot: req.body.plot
// //   }).then(() => {
// //     //Redirect to the detail page of the celebrity
// //     res.redirect("/movies/" + req.params.movieId);
// //   });
// // });

module.exports = router;