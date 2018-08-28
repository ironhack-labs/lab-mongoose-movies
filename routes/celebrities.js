const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDb => {
      res.render('celebrities', {
        "celebrities": celebritiesFromDb
      });
    })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  console.log("req.body", req.body);
  let newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }
  Celebrity.create(newCelebrity)
    .then(celebrity => {
      console.log("The celebrity was saved!!!");
      res.redirect('/celebrities/' + celebrity._id);
    })
});

router.post('/:id/delete', (req, res, next) => {
  // console.log("The celebrity was deleted!!!:" +celebrity);
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      console.log("The celebrity was deleted!!!:" + celebrity);
      res.redirect('/celebrities');
    })
});


router.post('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  let celebrityData = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase

  }
  Celebrity.findByIdAndUpdate(id, celebrityData)
    .then(celebrity => {
      console.log("The home was edited!!!");
      res.redirect('/celebrities/' + celebrity._id);
    })
    .catch(error => {
      console.log(error)
    })
});




router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityFromDb => {
      console.log(celebrityFromDb)
      res.render('celebrity-details', {
        "celebrity": celebrityFromDb
      });
    })
});



module.exports = router;