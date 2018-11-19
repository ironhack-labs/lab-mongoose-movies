const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch((error) => {
      console.log(`Error finding celebrities ${error}`);
    })
});


router.get('/celebrity/:id', (req, res, next) => {
  let cID = req.params.id;
  Celebrity.findById(cID)
    .then(celebrity => {
      res.render('celebrities/celebrity', {
        celebrity
      })
    })
    .catch(err => console.log(err))
});

// GET new celebrity page
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

// POST new Celebrity
router.post('/new', (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCelebrity.save()
    .then(newCelebrity => {
      console.log(newCelebrity);
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
      res.render('celebrities/new');
    })
});

// Post delete a Celebrity
router.post('/celebrity/:id/delete', (req, res, next) => {
  let cID = req.params.id;
  Celebrity.findByIdAndRemove(cID)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log(err))
});


// Get celebrity Page
// GET edit celebrity page
router.get('/celebrity/:id/edit', (req, res, next) => {
  let cID = req.params.id;
  Celebrity.findById(cID)
  .then(celebrity => {
    res.render('celebrities/edit', {celebrity})
  })
  .catch(err => console.log(err))
});

// POST 
router.post('/celebrity/:id/edit', (req, res, next) => {
  let cID = req.params.id;
  Celebrity.update(cID,
     { $set: {name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase }})
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;