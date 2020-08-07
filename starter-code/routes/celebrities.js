const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET list page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      console.log(celebritiesFromDB);
      res.render('celebrities/index', {celebrities: celebritiesFromDB});
    }).catch(err => console.log(`Error finding all celebrities: ${err}`))
  
});

/* GET details page */
router.get('/details/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityFromDB => {
      console.log(celebrityFromDB);
      res.render('celebrities/show', {celebrity: celebrityFromDB});
    }).catch(err => console.log(`Error finding celebrity by ID: ${err}`))
})

/*GET update celeb info*/
router.get('/details/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebFromDB => {
      console.log(celebFromDB);
      res.render('celebrities/edit.hbs', {celebrity: celebFromDB});
    }).catch(err => console.log(`Error finding celebrity by ID: ${err}`))
})

/*POST update celeb info*/
router.post('/details/:id/edit', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedCeleb => {
      console.log({updatedCeleb})
      res.redirect('/celebrities');
    }).catch(err => console.log(`Error updating celebrity by ID: ${err}`))
})

/* GET new page */
router.get('/new', (req, res, next) =>{
  res.render('celebrities/new');
})

/* POST add new celebrity to database*/
router.post('/new', (req, res, next) =>{
  Celebrity.create(req.body)
    .then(newCelebrity => {
      console.log(newCelebrity);
      res.redirect('/celebrities');
    }).catch(err => console.log(`Error creating new celebrity: ${err}`))
  
})

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    }).catch(err => console.log(`Error deleting celeb from database: ${err}`))
})


module.exports = router;