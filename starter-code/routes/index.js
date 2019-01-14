const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie     = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res) =>{
  Celebrity.find()
  .then(celebrities =>{
    res.render('../views/celebrities/index', {celebrities})
  })
  .catch(err =>{
    console.log(err)
  })
})


router.get("/celebrities/new", (req, res)=>{
  res.render("../views/celebrities/new");
})

router.post("/celebrities",(req,res) =>{
  const {name, occupation, catchPhrase} = req.body
  const newArtist = new Celebrity ({name, occupation, catchPhrase})
  newArtist.save()
  .then((celebrity) =>{
    res.redirect(301, '/celebrities')
  })
  .catch((err)=>{
    console.log(err);
    res.render("../views/error")
  })
})

router.post("/celebrities/:id/delete", (req, res) =>{
  let celebrityId = req.params.id;
  Celebrity.deleteOne({"_id" : celebrityId})
  .then(
    res.redirect(301, "/celebrities")
  )
  .catch(err => console.log(err))
})

router.get("/celebrities/:id/edit", (req, res) =>{
  let celebId = req.params.id;
  //console.log(celebId);
  Celebrity.findById({"_id": celebId})
  .then(celebrity =>{
    res.render("celebrities/edit", { celebrity })
  })
  .catch(err => console.log(err))
})

router.post("/celebrities/:id", (req, res) =>{
  let celebrityIdent = req.params.id
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.updateOne({"_id": celebrityIdent}, {$set: {name, occupation, catchPhrase}})
  .then(celebrity =>{
    res.redirect(301, "/celebrities")
  })
  .catch(err => console.log(err))
})



router.get("/celebrities/:id", (req, res) =>{
  let celebrityId = req.params.id
  // console.log(celebrityId);
  Celebrity.findOne({'_id': celebrityId})
  .then((celebrity)=>{
    res.render('../views/celebrities/show', { celebrity })
  })
  .catch((err)=>{
    console.log(err);
  })
})


router.get("/movies", (req, res) =>{
  Movie.find()
  .then(movies =>{
    res.render("../views/movies/index", {movies})
  })
  .catch(err => console.log(err))
})

router.get("/movies/add", (req, res) =>{
  res.render("../views/movies/new")
})

router.post("/movies", (req, res) =>{
  const { title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot})
  newMovie.save()
  .then(movie =>{
    res.redirect(301, "movies")
  })
  .catch(err => console.log(err))
})

router.post("/movies/:id/delete" , (req, res) =>{
  let movieId = req.params.id;
  Movie.deleteOne({"_id" : movieId})
  .then(
    res.redirect(301, "/movies")
  )
  .catch(err => console.log(err))
})

router.get("/movies/:id/edit", (req, res) =>{
  let movieId = req.params.id;
  Movie.findById({"_id" : movieId})
  .then( movie =>{
    res.render("movies/edit", { movie })
  })
})

router.post("/movies/:id", (req, res) =>{
  let movieId = req.params.id;
  const {title, genre, plot } = req.body;
  Movie.updateOne({"_id" : movieId}, {$set: {title, genre, plot}})
  .then(movie =>{
    res.redirect(301, "/movies")
  })
  .catch(err => console.log(err))
})

router.get("/movies/:id", (req, res) =>{
  let movieId = req.params.id;
  //console.log(movieId);
  Movie.findOne({"_id": movieId})
  .then((movie) =>{
    res.render("../views/movies/details", {movie})
  })
  .catch(err => console.log(err))
})




module.exports = router;
