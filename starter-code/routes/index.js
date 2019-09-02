const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../models/celebrity");
// const moviesModel = require("./../models/movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Celebrities
router.get("/celebrities", (req, res, next)=> {
  CelebrityModel.find().then(dbRes =>res.render("celebrities/index", {celebrities : dbRes})).catch(err => {next(err)});
})

router.get("/celebrities/new", (req, res)=> {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) =>{
  CelebrityModel.findOne({_id: req.params.id}).then(dbRes => {
    res.render("celebrities/show", {celebrity: dbRes});
    
  }).catch(err=>console.log(err))}
);

router.get("/celebrities/:id/edit", (req, res, next) =>{
  CelebrityModel.findOne({_id:req.params.id}).then(dbRes=> {
    res.render("celebrities/edit", {celebrity: dbRes})
  })
  .catch(err => console.log(err))
});

router.post("/celebrity", (req, res)=> {
  var infos = req.body
  const celebrity = new CelebrityModel(infos);
  celebrity.save().then(dbRes => {
   res.redirect("/celebrities")
  })
  .catch(err =>
    res.render("celebrities/new")
  )
});

router.post("/celebrities/:id/delete", (req, res)=>{
  console.log("coucou", req.params.id);
  
  CelebrityModel.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrities")
  })
  .catch(err => console.log(err))
})

router.post("/celebrities/:id", (req, res)=> {
  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    cachPhrase: req.body.cachPhrase
  }
  CelebrityModel.findOneAndUpdate({_id: req.params.id}, newCelebrity)
  .then(dbRes => res.redirect("/celebrities"))
  .catch(err => console.log(err))
})

//Movies

// router.get("/movies", (req, res, next)=> {
//   moviesModel.find().then(dbRes =>res.render("movies/index", {movies : dbRes})).catch(err => {next(err)});
// })

// router.get("/movies/new", (req, res)=> {
//   res.render("movies/new");
// });

// router.get("/movies/:id", (req, res, next) =>{
//   moviesModel.findOne({_id: req.params.id}).then(dbRes => {
//   res.render("movies/show", {movie: dbRes});
//  }).catch(err=>console.log(err))}
// );

// router.get("/movies/:id/edit", (req, res, next) =>{
//   moviesModel.findOne({_id:req.params.id}).then(dbRes=> {
//     res.render("movies/edit", {movie: dbRes})
//   })
//   .catch(err => console.log(err))
// });

// router.post("/movies", (req, res)=> {
//     var infos = req.body;
//     console.log(infos);
    
//     const movie = new moviesModel(infos);
//     movie.save().then(dbRes => {
//      res.redirect("/movies")
//     })
//     .catch(err =>
//       res.render("movies/new")
//     )
//   });

// router.post("/movies/:id/delete", (req, res)=>{  
//   moviesModel.findByIdAndRemove(req.params.id).then(() => {
//     res.redirect("/movies")
//   })
//   .catch(err => console.log(err))
// })

// router.post("/movies/:id", (req, res)=> {
//   const newMovies = {
//     title: req.body.title,
//     genre: req.body.genre,
//     plot: req.body.plot
//   }
//   moviesModel.findOneAndUpdate({_id: req.params.id}, newMovies)
//   .then(dbRes => res.redirect("/movies"))
//   .catch(err => console.log(err))
// })

module.exports = router;
