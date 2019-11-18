const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');



// GET /celebrities/new - renders the form
router.get('/new', (req, res, next) => {
  console.log('HELLO IM IN THE FORM');
  
  res.render('celebrities/new');
})


// POST /celebrities - handles the inputing data
router.post('/',  (req, res, next) => {
  console.log(req.body); 
  const { name, occupation, catchPhrase } = req.body; // destructuring

  Celebrity.create( { name, occupation, catchPhrase } )
    .then( celebrity => { 
      res.redirect('/celebrities'); 
    })
    .catch( (err) => {
      console.log(err);
      res.render('celebrities/new');
    });
})



// GET /celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then( (allCelebritiesFromDB) => { 
      //console.log(allCelebritiesFromDB)
      res.render('celebrities/index', { allCelebritiesFromDB }); 
  })
  .catch( (err) => console.log(err));
});

// GET /celebrities/id
router.get('/:id', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( (celebrityDetails) => {
      console.log('CELEBRITY DETAILS', celebrityDetails);
      
      res.render('celebrities/show', { celebrityDetails });
    })
    .catch( (err) => console.log(err));
});


module.exports = router;