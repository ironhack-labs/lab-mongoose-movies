const express = require('express');
const Celebrity = require("../models/celebrity");
const router = express.Router();
// const Movie =require('..models/Movie');



// Main Celebrities List Page
router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
  .then((allTheCelebs)=>{
    res.render('celebrities/index', {celebrities: allTheCelebs});
    //above - in {}, celebrities is the array being passed to the function, and allTheCelebs is arbitrary and just has to match the argument inside the .then callback.
  })
  .catch((err)=>{
    next(err);
  })
});

// Individual Celebrity Page
router.get('/celebrities/:id', (req, res, next) => {
      Celebrity.findById(req.params.id)
          .then((theCelebrity) => {
            res.render("celebrities/details", theCelebrity)
          })
          .catch(err =>{
            next(err)
          })
});


// Adding New Celebrities to Database
// router.get('/new', (req, res, next) => {

// })

// req.body.description

// Book.create
// ({ req.body.author, })

















module.exports = router;