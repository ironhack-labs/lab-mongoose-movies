const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities',  {celebrity})
  })
  .catch(err => console.log(err));
});


/* GET celebrities detail's page */
router.get('/celebrities/:id', (req, res, next) => {

  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(celebrity => {
    res.render('celebrities/show', {celebrity})
    })
  .catch(error => console.log(error)) 
});

/* GET new celebrities page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.post('/new', (req, res, next) => {
 
  const newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

  
  newCelebrity.save()
    .then((newCelebrity) => {
      res.redirect('celebrities');
  })
    .catch(error => res.redirect('new'));
})

