const express = require('express');
const router  = express.Router();
const Celebrity= require("../models/Celebrity");
const Movie=require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities",(req,res,next)=>{
  Celebrity.find()
  .then((celebrities)=>{
    res.render("Celebrities/index",{celebrities})
  }).catch((e)=>{
    console.log(e);
  })
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post("/celebrities/new",(req,res,next)=>{
  const {name,occupation,catchPhrase} =req.body;
  new Celebrity({name,occupation,catchPhrase})
  .save()
  .then( celebrities => {
    console.log("Celebritie sucessfully created!");
    res.redirect('/celebrities');
  });
});

router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
});

router.get('/celebrities/edit/:id', (req,res) => {
  Celebrity.findById(req.params.id).then(celebrities => {
    res.render('celebrities/edit',{celebrities});
  })
})

router.post('/celebrities/edit/:id', (req,res) => {
  const {name,occupation,catchPhrase} =req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name,occupation,catchPhrase})
      .then( () => {
        res.redirect('/celebrities')
      })
})


router.get("/celebrities/:id",(req,res,next)=>{
  Celebrity.findById(req.params.id).then(celebrities=>{
    res.render("Celebrities/show",{celebrities})
  }).catch((e)=>console.log(e))
})

router.get("/movies",(req,res,next)=>{
  Movie.find().then((movies)=>{
    res.render("Movies/index",{movies})
  })
})

router.get("/movies/new",(req,res,next)=>{
  res.render("Movies/new")
})

router.post("/movies/new",(req,res,next)=>{
  const {title,genre,plot} = req.body;
  new Movie({title,genre,plot})
  .save()
  .then(()=>{
    res.redirect("/movies")
  })
})

router.get("/movies/delete/:id",(req,res,next)=>{
  Movie.findByIdAndRemove(req.params.id,()=> res.redirect("/movies"))
})

router.get("/movies/edit/:id",(req,res,next)=>{
  Movie.findById(req.params.id).then(movies=>{
    res.render("Movies/edit",{movies})
  })
})

router.post("/movies/edit/:id",(req,res,next)=>{
  const {title,genre,plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id,{title,genre,plot})
  .then(()=>{
    res.redirect("/movies");
  })
})


router.get("/movies/:id",(req,res,next)=>{
  Movie.findById(req.params.id).then(movies=>{
    res.render("Movies/show",{movies})
  })
})









module.exports = router;
