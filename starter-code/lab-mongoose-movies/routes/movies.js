const express = require("express");
const router = express.Router();
const Movie = require('../models/movie')

router.get('/movies', (req, res, next) => {
  Movie.find({}).then( movies => {
    res.render('movies/index', {movies});
  })
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.post('/movies/new', (req, res, next) => {
  const {title,genre,plot} = req.body;
  new Movie({title,genre,plot})
  .save().then( movie => {
    console.log("Movie sucessfully created!");
    res.redirect('/movies');
  });
});


router.get('/movies/edit/:id', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit',{movie});;
  })
})
router.post('/movies/edit/:id', (req, res, next) => {
  const {title,genre,plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id,{title,genre,plot})
      .then( movie => {
        res.redirect('/movies')
      })
});

router.get("/movies/delete/:id", (req,res,next) =>{
  Movie.findByIdAndRemove(req.params.id,() => res.redirect("/movies"))
});
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movies/show", { movie });
  });
});

module.exports = router;