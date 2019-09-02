const express = require("express");
const router  = express.Router();
const moviesModel = require("./../models/movies");

router.get("/", (req, res, next)=> {
  moviesModel.find().then(dbRes =>res.render("movies/index", {movies : dbRes})).catch(err => {next(err)});
})

router.get("/new", (req, res)=> {
  res.render("movies/new");
});

router.get("/:id", (req, res, next) =>{
  moviesModel.findOne({_id: req.params.id}).then(dbRes => {
  res.render("movies/show", {movie: dbRes});
 }).catch(err=>console.log(err))}
);

router.get("/:id/edit", (req, res, next) =>{
  moviesModel.findOne({_id:req.params.id}).then(dbRes=> {
    res.render("movies/edit", {movie: dbRes})
  })
  .catch(err => console.log(err))
});

router.post("/", (req, res)=> {
    var infos = req.body;
    console.log(infos);
    
    const movie = new moviesModel(infos);
    movie.save().then(dbRes => {
     res.redirect("/movies")
    })
    .catch(err =>
      res.render("movies/new")
    )
  });

router.post("/:id/delete", (req, res)=>{  
  moviesModel.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/movies")
  })
  .catch(err => console.log(err))
})

router.post("/:id", (req, res)=> {
  const newMovies = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  moviesModel.findOneAndUpdate({_id: req.params.id}, newMovies)
  .then(dbRes => res.redirect("/movies"))
  .catch(err => console.log(err))
});

module.exports = router;