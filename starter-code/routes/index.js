const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-model.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then(celebrityResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/celebrities-list.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.get("/celebrities/show/:celebrityId", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { celebrityId } = req.params;

  Celebrity.findById(celebrityId)
  .then(celebrityDoc => {
      // send the database query results to the HBS file as "bookItem"
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/show.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.post("/process-celebrities/new",(req,res,next)=>{
  const{name,occupation,catchPhrase}=req.body;

  Celebrity.create({name,occupation,catchPhrase})
  .then(celebrityDoc=>{
    res.redirect("/celebrities")
  })
  .catch(err=>next(err));
})

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { celebrityId } = req.params;

  // delete the document from the database
  Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrityDoc => {
      // redirect ONLY to URLs - "/books" instead of "book-list.hbs"
      res.redirect("/celebrities");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { celebrityId } = req.params;

  Celebrity.findById(celebrityId)
    .then(celebrityDoc => {
      // send the database query results to the HBS file as "bookItem"
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/edit.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.post("/celebrities/:celebrityId/process-edit",(req,res,next)=>{
  const{celebrityId} = req.params;

  const{name,occupation,catchPhrase} = req.body;

  Celebrity.findByIdAndUpdate(
    celebrityId,
    {$set:{name,occupation,catchPhrase}},
    {runValidators:true}
  )
  
  .then(celebrityDoc=>{
    res.redirect(`/celebrities/show/${celebrityId}`);
  })
  .catch(err =>next(err));
})

router.get("/movies", (req, res, next) => {
  Movies.find()
  .then(movieResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.movieArray = movieResults;
      res.render("movies/movie-list.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});







module.exports = router;
