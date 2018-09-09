

const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')



/* GET celebrities page */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((movieData)=>{
        //console.log(theStuffWeGetBack);
        res.render('movies/movies', {movieData: movieData})
    })
    .catch((err)=>{
        next(err);
    })

});

router.get('/movies/new', (req, res, next)=>{
  res.render('movies/new');
})

/*   Creating new movie page */
router.post('/movies/new', (req, res, next)=>{

  //----------------------------------- movie example
  //     title : "Black Panther",
  //     genre: "Ryan Coogler",
  //     plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
  //     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  
        const theTitle    = req.body.title;
        const theGenre    = req.body.genre;
        const thePlot     = req.body.plot;
        const theImageSrc = req.body.image;
      
           Movie.create({
              title: theTitle,
              genre: theGenre,
              plot: thePlot,
              image: theImageSrc
          })
          .then((response)=>{
              res.redirect('/movies') // why it not work?????????????  (all redirecting)
          })
          .catch((err)=>{
             next(err);
          })
      })

/* GET /movieInfo page */
router.get('/movies/:movieID', (req, res, next) => {

  Movie.findById(req.params.movieID)
  .then((oneMovie)=>{
      console.log(oneMovie);
      res.render('movies/show', {oneMovie: oneMovie})
  })
  .catch((err)=>{
      next(err);
  })
});

router.post('/movies/edit/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
      res.render('movies/edit', {movie: theMovie});
  })
  .catch((err)=>{
      next(err);
  })
})

/*   Editing A celeb page */
router.post('/movies/update/:id', (req, res, next)=>{

//----------------------------------- movie example
//     title : "Black Panther",
//     genre: "Ryan Coogler",
//     plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
 
     const theTitle    = req.body.title;
     const theGenre    = req.body.genre;
     const thePlot     = req.body.plot;
     const theImageSrc = req.body.image;
  
       Movie.findByIdAndUpdate(req.params.id, {
          title: theTitle,
          genre: theGenre,
          plot: thePlot,
          image: theImageSrc
      })
      .then((response)=>{
          res.redirect('/movies/'+req.params.id)
      })
      .catch((err)=>{
         next(err);
      })
  })

  router.post('/movies/delete/:id', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
       next(err);
    })

})

module.exports = router;