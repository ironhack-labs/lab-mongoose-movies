const express = require('express');
const router  = express.Router();
const Celeb = require("../model/Celeb")
const Movie =require("../model/Movie")

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

//celebrities//
router.get("/celebrities/index", async(req, res)=>{
  const allcelebs = await Celeb.find();
  allcelebs.forEach(ele=>{
    console.log(`llamando a todos que son ${ele.name}`)
  })
  res.render("celebrities/index", {allcelebs})
})

//detail celebrities
router.get("/celebrities/show/:celebrityId", async(req, res)=>{
  const {celebrityId} =  req.params;
  const celeb = await Celeb.findById(celebrityId);
  console.log("logrando...")
  res.render("celebrities/show", celeb)
})

//create celebrites
router.get("/celebrities/new", (req, res)=>{
  res.render("celebrities/new")
})

router.post("/celebrities/new", async(req, res)=>{
  const {name, occupation, catchPhrase} = req.body;
  if(name === "" || occupation === "" || catchPhrase === ""){
    res.render("celebrities/new", {error:"Faltan los datos."})
  }else{
    await Celeb.create({
      name, occupation, catchPhrase
    })
    res.redirect("/celebrities/index")
  }
})

//removing celebrity
router.post("/celebrities/index", async(req, res)=>{
  const {name, occupation, catchPhrase} = req.body;
  if(name === "" || occupation === "" || catchPhrase === ""){
    res.render("celebrities/index", {error:"Falta los datos"})
  }else{
    await Celeb.findOneAndDelete({name, occupation, catchPhrase});
  }
  res.redirect("/celebrities/index")
})



//About movies
router.get("/movie/index", async(req, res)=>{
  const pelis = await Movie.find();
  pelis.forEach(ele=>{
    console.log(`llamando las pelis que son ${ele.name}`)
  })
  res.render("movie/index", {pelis})
})

//show detail of movie
router.get("/movie/show/:movieId", async(req, res)=>{
  const {movieId} = req.params;
  const peli = await Movie.findById(movieId);
  res.render("movie/show", peli)
})

//create movie
router.get("/movie/new",(req, res)=>{
  res.render("movie/new");
})

router.post("/movie/new", async(req, res)=>{
  const {title, genre, plot} = req.body;
  if(title === "" || genre=== "" || plot=== ""){
    res.render("movie/new", {error:"Faltan los datos."})
  }else{
    await Movie.create({
      title, genre, plot
    })
    res.redirect("/movie/index")
  }
})

//removing celebrity
router.post("/movie/index", async(req, res)=>{
  const {title, genre, plot} = req.body;
  if(title === "" || genre=== "" || plot=== ""){
    res.render("movie/index", {error:"Faltan los datos"})
  }else{
    await Movie.findOneAndDelete({title, genre, plot});
  }
  res.redirect("/movie/index")
})





module.exports = router;
