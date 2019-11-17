const express = require("express");
const router = express.Router();

const Movies = require("../models/movie.model");


//List Movies
router.get('/', (req, res) => {
    Movies.find()
      .then(allMovies => res.render("movies", { movies: allMovies }))
      .catch(err => console.log("Error en el DB: ", err));
})

// Detail Movies
router.get('/movieDetail/:id', (req, res) => {
    Movies.findById(req.params.id)
      .then(movieDetail => res.render("movieDetail", { det: movieDetail }))
      .catch(err => console.log("error el DB", err));

});


//Add movies
router.get('/addMovies', (req, res) => {
    res.render('addMovies')})

router.post('/addMovies', (req, res) => {
    const { title, genre, plot } = req.body
    Movies.create({ title, genre, plot })
      .then(x => res.redirect("/movies"))
      .catch(x => res.redirect("/addMovies"));

})

    //Delete Movies
 router.get("/delete/:id", (req, res, next) => {
   Movies.findByIdAndDelete(req.params.id)
     .then(x => res.redirect("/movies"))
     .catch(err => console.log("error en el DB", err));
 });


 // Edit Movie

 router.get("/editMovies/:id", (req, res) => {
   Movies.findById(req.params.id)
     .then(movieEdit => res.render("editMovies", { edit: movieEdit }))
     .catch(err => console.log("error en el DB", err));
 });


 router.post("/editMovies/:id", (req, res) => {
   const { title, genre, plot } = req.body;

   Movies.findOneAndUpdate(req.params.id, { title, genre, plot })
     .then(res.redirect("/movies"))
     .catch(err => console.log("error en el DB", err));
 });




module.exports = router;
