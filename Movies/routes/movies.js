var express = require('express');
var router = express.Router();



const Movie = require ('../models/movie');


router.get('/', function(req, res, next) {

  Movie.find({}, (err , movies)=>{
    if (err){
      next(err)
    }else{
      console.log(movies);
     res.render('movies/index', {movies: movies});
    }
  })

});

router.get('/new',(req, res, next)=>{
  res.render('movies/new')
})

router.post('/',(req, res, next)=>{
  const movieInfo = {
    tittle: req.body.tittle,
    genre: req.body.genre,
    country: req.body.country,
  }

  const newMovie = new Movie(movieInfo)
  newMovie.save ( (err) =>{
    if (err){
      next(err)
    }
      res.redirect('/movies')
  })

})

router.get('/:id',(req, res, next)=>{
  Movie.findById(req.params.id, (err, movie)=>{
    if(err){
      next(err)
    }
    res.render("movies/show", {movie});
  })
})

router.get('/:id/delete',(req,res,next)=>{
  const id = req.params.id
  Movie.deleteOne({_id: id},(err)=>{
    if (err){
      next(err)
    }
    res.redirect('/Movies')
  })

})

router.get('/:id/edit', (req,res, next)=>{
  Movie.findById(req.params.id, (err,movie)=>{
    if (err){
      next(err)
    }
    console.log(movie);
    res.render('movies/edit',{movie: movie})
  })
})

router.post('/:id', (req,res, next)=>{
  const movieInfo = {
    tittle: req.body.tittle,
    genre: req.body.genre,
    country: req.body.country,
  }

  Movie.findByIdAndUpdate(req.params.id,movieInfo ,(err,movie)=>{
    if (err){
      next(err)
    }
    console.log(movie);
    res.redirect('/movies')
  })
})





module.exports = router;
