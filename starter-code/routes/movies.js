const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");
const app_name = require("../package.json").name;

router.get("/movies", (req, res, next) => {
  Movies.find()
  .then(movies => {
    res.render("movies/index", { movies });
  })
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});


router.post('/movies/new' ,(req,res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot= req.body.plot;

  Movies.create({title,genre,plot}).then(movie => {
    console.log(`Se ha creado la pelicula ${movie._id} ${movie.title}`);
    res.redirect('/movies');
  });
})

router.get('/movies/:id/edit/', (req,res) => {
  Movies.findById(req.params.id).then( movie =>{
    res.render('movies/edit',{movie})
  })
});

router.post('/movies/:id/edit/', (req,res) => {
  const {title,genre,plot} = req.body;
  const id = req.params.id;
  Movies.findByIdAndUpdate(id,{title,genre,plot})
     .then(() =>  res.redirect(`/movies/${id}`))
})

router.get('/movies/:id/delete/', (req,res) => {
  Movies.findByIdAndDelete(req.params.id).then(()=> {
    res.redirect('/movies');
  })
});



router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id)
  .then(movie => {
    res.render("movies/show", { movie });
  })
});






module.exports = router;
