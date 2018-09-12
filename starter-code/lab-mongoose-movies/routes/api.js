
const express      = require('express');
const router       = express.Router();
const Movie        = require('../models/Movie');



/* GET movies-all page for local api use */
router.get('/movies-json-view', (req, res, next) => {

    res.render('movies/movies-all')

});

// ---- local api with json file

router.get('/movies-json', (req, res, next) => {
  Movie.find()
  .then((listOfMovies)=>{

      res.json(listOfMovies)

  })
  .catch((err)=>{
      res.json(err);
  })
});



// ---- local api with json file
router.post('/movies-json/create', (req, res, next)=>{

    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        image: req.body.image
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json(err);
    })

});


module.exports = router;