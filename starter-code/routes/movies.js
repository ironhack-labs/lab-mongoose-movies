const express = require('express');
const router  = express.Router();
const moviesModel = require("./../models/movies.js");

// /* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index', {title : "Celebrities home page"});
// });

router.get("/movies", (req,res)=>{
  moviesModel.find({})
  .then (dbRes => {
    console.log("movies found")
    res.render("movies/index", {movies : dbRes, title: "movies"});
})
.catch ( dbErr => console.log("no movies found", dbErr))
})

router.get("/movies/:id", (req, res)=>{
  const movieFound = moviesModel.findOne({"_id" : req.params.id})
  .then (dbRes => {
    console.log("movie " + dbRes.name + " has been found")
    console.log(dbRes)
    res.render("movies/show", {movie : dbRes});
  })
  .catch (dbErr => console.log ("there have been an error", dbErr))
})

router.get("/newMovie", (req, res) => {
  res.render("movies/new")
});


router.get("/movies/:id/delete", (req, res)=>{
  const movieFound = moviesModel.findByIdAndRemove({"_id" : req.params.id})
  .then (dbRes => {
    console.log("movie " + dbRes.name + " has been deleted")
    res.redirect("/movies")
  })
  .catch (dbErr => console.log ("there have been an error", dbErr))
})


router.post("/movie", (req,res) =>{
  console.log("req.body");
  console.log(req.body);
  let movie = new moviesModel;
  if (req.body.title !==""){
    movie.title =req.body.title;
    movie.genre= req.body.genre;
    movie.plot = req.body.plot;
    movie.save()
    .then( () =>{
      res.redirect("/movies");
    })
  }else {
    console.log("the field title is mandatory, please fill it")
  }
});


router.get("/movies/:id/edit", (req, res)=>{
  const movieFound = moviesModel.findOne({"_id" : req.params.id})
  .then (dbRes => {
    console.log("movie " + dbRes.name + " has been found")
    res.render("movies/edit", {movie : dbRes, title: "movies Edition"})
  })
.catch (dbErr => console.log ("there have been an error", dbErr))
});


router.post("/movie/:id", (req,res) =>{
  console.log("req parameters")
  console.log(req.params.id);
  console.log(req.body);
  const movie = { 
    title : req.body.title,
    genre : req.body.genre,
    plot : req.body.plot 
  }
  moviesModel.findOneAndUpdate({ _id: req.params.id }, movie) 
    .then(dbRes => {
     console.log("update ok", dbRes);
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.log("there have been an error", dbErr);
    });
});

module.exports = router; 