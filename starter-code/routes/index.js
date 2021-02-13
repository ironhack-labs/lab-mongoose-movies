const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();

const Celebrities = require("../models/Celebrity.model.js")
const Movies = require("../models/Movies.model.js")



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", async (req , res, next) =>{
   const celeb = await Celebrities.find({})
   res.render("celebrities",{celeb})
})

router.get("/celebrities/:id", async (req , res, next) =>{
  const celebID = req.params.id
  const celeb = await Celebrities.findById(celebID)
  res.render("show",{celeb})
})

router.get("/new", (req , res, next) =>{
  res.render("new")
})

router.post("/create", async (req , res, next) =>{
  const newCeleb = req.body
  await Celebrities.create(newCeleb)
  res.redirect("celebrities")
})

router.get("/delete/:id", async (req , res, next) =>{
  const id = req.params.id
  await Celebrities.findOneAndDelete(id)
  res.redirect("/celebrities")
})

router.get("/edit/:id", async (req , res, next) =>{
  const id = req.params.id
  const info = await Celebrities.findById(id)
  console.log(info)
  res.render("edit",{info})
})

router.post("/edit/:id",async (req , res, next) =>{
  const idUptd = req.params.id
  const infoUptd = req.body
  console.log(idUptd,infoUptd)
  await Celebrities.findByIdAndUpdate(idUptd , infoUptd ,{new:true})
  res.redirect("/celebrities")
})

//  MOVIES
router.get("/movies" , async (req,res,next)=>{
  const listMovies = await Movies.find({})
  console.log(`Esto sale ${listMovies}`)
  res.render("movies/lista", {listMovies})
})

router.get("/movie/create" ,(req,res,next)=>{
  res.render("movies/newCreate")
})

router.post("/movie/create" , async (req,res,next)=>{
  const info = req.body
  await Movies.create(info)
  res.redirect("/movies")
  
})

//vista individual 
router.get("/movie/:id" , async (req,res,next)=>{
  const idM = req.params.id
  const movieInd = await Movies.findById(idM)
  console.log(movieInd)
  res.render("movies/info-movie" , {movieInd})
})

//Editar


router.get("/movie/edit/:id", async (req , res, next) =>{
  const id = req.params.id
  const info = await Movies.findById(id)
  res.render("movies/editMovie",{info})
})

router.post("/movie/edit/:id",async (req , res, next) =>{
  const idUptd = req.params.id
  const infoUptd = req.body
  await Movies.findByIdAndUpdate(idUptd , infoUptd ,{new:true})
  console.log(idUptd ,infoUptd)
  res.redirect("/movies")
})

//borrar
router.get("/movie/delete/:id" , async (req,res,next)=>{
  const id = req.params.id
  await Movies.findOneAndDelete(id)
  res.redirect("/movies")
})

module.exports = router;
