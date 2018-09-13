

const express     = require('express');
const router      = express.Router();
const Movie       = require('../models/Movie')
const Celebrity   = require('../models/Celebrity')
const ensureLogin = require("connect-ensure-login");
const uploadCloud = require('../config/cloudinary.js');


/* GET movies page */
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

router.get('/movies/new', ensureLogin.ensureLoggedIn("/login"), (req, res, next)=>{

    Celebrity.find()
    .then((allTheCelebs)=>{
        res.render('movies/new', {actors: allTheCelebs});
    })
    .catch((err)=>{
        next(err);
    })

})

/*   Creating new movie page */
router.post('/movies/new', uploadCloud.single('photo'), (req, res, next)=>{

  //----------------------------------- movie example
//   const movieSchema = new Schema({
//     creator: String,
//     title: String,
//     actors: [{type: Schema.Types.ObjectId, ref: "Celebrity"}],
//     genre: String,
//     plot: String,
//     image: String,
//     imgName: String,
//     imgPath: String
//   },
  
        const theCreator   = req.user._id;
        const theTitle     = req.body.title;
        const theActors    = req.body.actors
        const theGenre     = req.body.genre;
        const thePlot      = req.body.plot;
        const theImageSrc  = req.body.image;
        const theImageName = req.file.originalname;
        const theImgPath   = req.file.url;
      
           Movie.create({
              creator: theCreator,
              title:  theTitle,
              actors: theActors,
              genre:  theGenre,
              plot:   thePlot,
              image:  theImageSrc,
              imgName: theImageName,
              imgPath: theImgPath

          })
          .then((response)=>{
              res.redirect('/movies') 
          })
          .catch((err)=>{
             next(err);
          })
      })

/* GET /movieInfo page */
router.get('/movies/:movieID', (req, res, next) => {
   
  Movie.findById(req.params.movieID).populate('actors')
  .then((oneMovie)=>{
      console.log(oneMovie);
      res.render('movies/show', {oneMovie: oneMovie})
  })
  .catch((err)=>{
      next(err);
  })
});



router.post('/movies/edit/:id', (req, res, next)=>{

  Celebrity.find()
    .then((allTheCelebs)=>{
        Movie.findById(req.params.id)
        .then((theMovie)=>{
            res.render('movies/edit', {movie: theMovie, actors: allTheCelebs});

            })
            .catch((err)=>{
                next(err);
            })
        })
        .catch((err)=>{
            next(err);
        })
})

/*   Editing A celeb page */
router.post('/movies/update/:id', uploadCloud.single('photo'), (req, res, next)=>{

  //----------------------------------- movie example
//   const movieSchema = new Schema({
//     creator: String,  //-- we dont want to change this!!!
//     title: String,
//     actors: [{type: Schema.Types.ObjectId, ref: "Celebrity"}],
//     genre: String,
//     plot: String,
//     image: String,
//     imgName: String,
//     imgPath: String
//   },
 

   const movieObject = {
      title    : req.body.title,
      genre    : req.body.genre,
      plot     : req.body.plot,
      image    : req.body.image,
      $push: {actors: req.body.actors}
    }
    if(req.file){
        movieObject.imgName = req.file.originalname;
        movieObject.imgPath = req.file.url;
      }
//--------- before useing the better methed of object!!!!
    //  const theTitle     = req.body.title;
    //  const theActors    = req.body.actors;
    //  const theGenre     = req.body.genre;
    //  const thePlot      = req.body.plot;
    //  const theImageSrc  = req.body.image;
    //  let theImageName   = "originalname";
    //  let theImgPath     = "url"; 
    //  if(req.file){
    //  theImageName = req.file.originalname;
    //  theImgPath   = req.file.url;
    // }
//----------- End old methed

       Movie.findByIdAndUpdate(req.params.id, movieObject )
      .then((response)=>{

            Celebrity.findByIdAndUpdate(req.body.actors, {
                $push:  {movies: req.params.id}
            })
            .then((response)=>{
                res.redirect('/movies/'+req.params.id)
            })
            .catch ((err)=>{
                next(err);
            })
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