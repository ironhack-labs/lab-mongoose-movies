const express = require('express');
const router  = express.Router();

const Movies = require('./../models/Movies');


// Remove a element by ID
router.post('/:id/delete', (req, res, next) => {
    
    Movies.deleteOne(req.body.id)
    .then( (movie) => {
      res.redirect("/movies");
    })
    .catch( (err) => console.log(err));
  });


router.get("/new", (req, res, next) => {
    res.render("movies/new");
})

router.post("/", (req, res, next)=>{
    const {title, genre, actor} = req.body;

    Movies.create({title, genre, actor})
    .then(() =>{
        res.redirect("/movies");
    })
    .catch( (err) => console.log(err));
})

router.get("/:id", (req, res, next) =>{
    Movies.findById(req.params.id)
    .then( (oneMovie) =>{
        res.render("movies/show", {oneMovie}); 
    } )
    .catch( (err) => console.log(err));
})

router.get('/', function(req, res, next) {
    Movies.find()
      .then(allMoviesFromDB => {
        res.render('movies', { allMoviesFromDB });
      })
      .catch(err => console.log(err));
  });



module.exports = router;