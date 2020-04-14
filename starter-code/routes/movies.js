const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');

router.get('/', (req, res, next) => {
    Movies.find()
    .then((data) => {
        console.log('All my movies:' + data + "========> movieData"); 
        res.render('movies/index', {movies: data });    
    })
})


// Add new movie
router.get('/new', (req,res,next) => {
    res.render('movies/new')
})


// Save the information / POST

router.post('/', (req,res, next) => {
    console.log("req.body", req.body)

    let movie = new Movies ({ title: req.body.title, genre: req.body.genre, plot: req.body.plot })

    movie.save().then(() => {
        res.redirect('/movies')
      })

      .catch((error) => {
        console.log('Error while getting the movies from the DB: ', error);
    }
    )
})


// delete movie
//DELETE
router.post('/:id/delete', (req, res) => {

    console.log(req.params.id)
  
    Movies.findByIdAndDelete(req.params.id).then(() => {
      res.redirect('/movies')
    })
  
  })



//EDIT movies
router.get('/:id/edit', (req,res, next) => {

    Movies.findById(req.params.id)
  .then((movie) => {
    res.render('movies/edit', {movie});
  })
  .catch(error =>{
    console.log('Error while deleting the movie from the DB: ', error);
  })
});


router.post('/:id/edit', (req,res,next) => {

    console.log("req.body", req.body)


    Movies.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
      }).then(() => {
        res.redirect('/movies')
      })
    
    })


//find id and show details

router.get('/:id', (req,res,next) => {
Movies.findById (req.params.id).then((data) =>  {

    res.render('movies/show', data);
})
.catch((error) => 
    {console.log('Error while getting the celebrities from the DB: ', error);}
    )

})







module.exports = router;