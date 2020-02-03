const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")
const Movies= require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities",async(req,res,next)=>{
  const allCelebrities= await Celebrity.find();
  res.render('celebrities/index',{allCelebrities});
})

router.get("/celebrities/:id",async(req,res,next)=>{
  const {id} = req.params;
  const celebrity = await Celebrity.findById(id);
  res.render("celebrities/show",celebrity);
})

router.get("/new",(req,res,next)=>{
  res.render("celebrities/new");
})

router.post("/celebrities",async(req,res,next)=>{
  const {name,occupation,catchPhrase}=req.body;
  await Celebrity.create({
    name:name,
    occupation:occupation,
    catchPhrase:catchPhrase
  });
  res.redirect("/celebrities");
})

router.get("/celebrities/:id/delete",async(req,res,next)=>{
  await Celebrity.findByIdAndDelete(req.params.id);
  res.redirect("/celebrities");
})

router.get("/movies",async(req,res,next)=>{
  const allMovies= await Movies.find();
  res.render('movies/index',{allMovies});
})

router.get("/movies/:id",async(req,res,next)=>{
  const {id} = req.params;
  const movie = await Movies.findById(id);
  res.render("movies/show",movie);
})

router.get("/newMovie",(req,res,next)=>{
  res.render("movies/new");
})

router.post("/movies",async(req,res,next)=>{
  const {title,genre,plot}=req.body;
  await Movies.create({
    title:title,
    genre:genre,
    plot:plot
  });
  res.redirect("/movies");
})

router.get("/movies/:id/delete",async(req,res,next)=>{
  await Movies.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
})

module.exports = router;
