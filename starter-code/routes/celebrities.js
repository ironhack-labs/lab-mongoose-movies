const express       = require('express');
const Celebrity     = require("../models/Celebrity");
const router        = express.Router();




// Main Celebrities List Page
router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
  .then((allTheCelebs)=>{
    res.render('celebrities/index', {celebrities: allTheCelebs})
    //above - in {}, celebrities is the array being passed to the function, and allTheCelebs is arbitrary and just has to match the argument inside the .then callback.
  })
  .catch((err)=>{
    next(err);
  })
});

// Adding New Celebrities to Database - Get
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

// Individual Celebrity Page
router.get('/celebrities/:id/details', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((theCelebrity) => {
    res.render("celebrities/details", theCelebrity)
  })
  .catch(err =>{
    next(err)
  })
});

// Adding Celebrities to Database - Post
router.post('/celebrities/new', (req, res, next)=>{
    Celebrity.create(req.body)
    .then(()=>{
      res.redirect('/celebrities');
      //above - in {}, celebrities is the array being passed to the function, and allTheCelebs is arbitrary and just has to match the argument inside the .then callback.
    })
    .catch(()=>{
      res.redirect('/celebrities/new');
    })
  });

  // Delete Celebrity
router.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.redirect('/celebrities');
      //above - in {}, celebrities is the array being passed to the function, and allTheCelebs is arbitrary and just has to match the argument inside the .then callback.
    })
    .catch((err)=>{
      next(err);
    })
  });

//  Edit Celebrity
router.get('/celebrities/:id/edit', (req, res, next)=>{
  Celebrity.findById(req.params.id)
    .then((celebrity)=>{
      res.render('celebrities/edit', {celebrity})
    })
    .catch((err)=>{
      next(err);
    })
});

router.post('/celebrities/:id/edit', (req, res, next)=>{
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch((err)=>{
      next(err);
    })
});











module.exports = router;