const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity');

// ITERATION 2 - GET /celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then( (allCelebrities) => {
      res.render('celebrities/index', {allCelebrities});
    })
    .catch( (err) => console.log('Error ocurred:', err));
})

// ITERATION 4 - Adding New Celebrities
// GET /celebrities/new
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
})

// POST data from the form
router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCeleb = new Celebrity({name, occupation, catchPhrase});
  newCeleb.save()
    .then(newItem => {
      if (newCeleb.name != "" || newCeleb.occupation != "" || newCeleb.catchPhrase != "") {
        res.redirect('/celebrities');
      } else {
        res.redirect('/celebrities/new');
      }
    })
    .catch( (err) => res.redirect('/celebrities/new'));
})

// ITERATION 3 - GET /celebrities/id
router.get('/:_id', (req, res, next) => {
  const celebId = req.params;
  Celebrity.findById(celebId)
    .then((celebrity) => {
      res.render('celebrities/show', {celebrity});
    })
    .catch((err) => console.log("There's been an error loading the celebrity", err));
});

// ITERATION 5 - POST celebrities/:id/delete
router.post('/:_id/delete', (req, res, next) => {
  const celebId = req.params
  
  Celebrity.findByIdAndDelete(celebId)
    .then(() => {
      console.log('Celebrity killed successfuly');
      
      res.redirect('/celebrities');
    })
})



module.exports = router;