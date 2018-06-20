const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities');

// Listing Our Celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

// The Celebrity Details Page
router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
    return res.status(404).render('not-found');
  }
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      // console.log(celebrity);
      if (!celebrity) {
          return res.status(404).render('not-found');
      }
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

// Adding New Celebrities
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then((celebrity) => {
    // console.log(celebrity);
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});




module.exports = router;