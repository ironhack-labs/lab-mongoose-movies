const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity');



// GET /celebrities/new - renders the form
router.get('/new', (req, res, next) => {
  console.log('HELLO IM IN THE FORM');
  
  res.render('celebrities/new');
})

// POST /celebrities - handles the inputing data to create new celebrity
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



// GET /celebrities/id (details page)
router.get('/:id', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( (celebrityDetails) => {
      // console.log('CELEBRITY DETAILS', celebrityDetails);
      res.render('celebrities/show', { celebrityDetails });
    })
    .catch( (err) => console.log(err));
});



// POST /celebrities/:id/delete
router.post('/:id/delete', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId)
    .then( () => {
      res.redirect('/celebrities'); 
    })
    .catch( (err) => {
      console.log(err);
      next();
    });
})


// GET /celebrities/:id/edit - renders the form
router.get('/:id/edit', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( (oneCelebrity) => {
      console.log(oneCelebrity);
      res.render('celebrities/edit', { oneCelebrity })
    })
    .catch( (err) => {
      console.log(err);
      next();
    });
});

// POST /celebrities/:id - handles the inputing data in the edit form
router.post('/:id',  (req, res, next) => {
  console.log('PARAMS -->', req.params);
  console.log('BODY -->', req.body);
  // const body = JSON.parse(JSON.stringify(req.body))
  // console.log('BODY -->', body);
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body; 

  Celebrity.updateOne({ id }, { name, occupation, catchPhrase }, { new: true } )
    .then( () => { 
      res.redirect('/celebrities'); 
    })
    .catch( (err) => {
      console.log(err);
      next();
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

module.exports = router;