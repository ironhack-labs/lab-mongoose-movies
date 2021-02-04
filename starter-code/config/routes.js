const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//================list celebrities=======================================
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render("celebrities/index", {
      celebrities
    });
  })
  .catch((e) => next(e));

})

//============================Create======================================

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
  
})

router.post("/celebrities/new", (req, res, next) => {

  const celebrity = req.body
 
   Celebrity.create(celebrity)
     .then(() => res.redirect("/celebrities"))
     .catch((error) => `Error while creating a new celebrity: ${error}`);  
})
//=========================Create alternative=======================================
/* router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
  
})

router.post("/celebrities/new", (req, res, next) => {

  const celebrity = req.body
  const newCelebrity = new Celebrity(celebrity) 
   newCelebrity.save()
    .then(()=>  res.redirect("/celebrities"))
    .then(() => console.log(`New celebrity created: ${celebrity.name}.`))
    .catch(error => `Error while creating a new celebrity: ${error}`);  
})
 */
//=====================DETAILS=============================


router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch((e) => next(e));
  });
//=============== DELETE ========================================

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities" );
    })
    .catch((e) => next(e));
});
//==================================================================

//======================EDIT============================================

router.get("/celebrities/:id/edit", (req, res, next) =>{
  const id = req.params.id
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render("celebrities/edit", celebrity)
    })
    .catch((e) => next(e));
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id
  const celebrity = req.body;

  Celebrity.findByIdAndUpdate(id, celebrity, {new: true})
    .then(() => {
      console.log("actualizando info")
      res.redirect("/celebrities")
    })
    .catch((e) => next(e));
  });
//=======================================================================
//================list Movies=======================================
router.get("/movies", (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.render("movies/index", {
      movies
    });
  })
  .catch((e) => next(e));

})
//============================Create======================================

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
  
})

router.post("/movies/new", (req, res, next) => {

  const movie = req.body
 
   Movie.create(movie)
     .then(() => res.redirect("/movies"))
     .catch((error) => `Error while creating a new movie: ${error}`);  
})
//=====================Movie details=============================


router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then(movie => {
      res.render("movies/show", movie);
    })
    .catch((e) => next(e));
  });
//============================================================

//====================== Movie edit============================================

router.get("/movies/:id/edit", (req, res, next) =>{
  const id = req.params.id
  Movie.findById(id)
    .then((movie) => {
      res.render("movies/edit", movie)
    })
    .catch((e) => next(e));
});

router.post("/movies/:id/edit", (req, res, next) => {
  const id = req.params.id
  const movie = req.body;

  Movie.findByIdAndUpdate(id, movie, {new: true})
    .then(() => {
      console.log("actualizando info")
      res.redirect("/movies")
    })
    .catch((e) => next(e));
  });
//=============== DELETE ========================================

router.post("/movies/:id/delete", (req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/movies" );
    })
    .catch((e) => next(e));
});
//==================================================================

  module.exports = router;


  
