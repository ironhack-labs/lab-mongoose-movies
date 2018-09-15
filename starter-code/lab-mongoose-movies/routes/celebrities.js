const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')


//GET CREATE
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})
//POSt CREATE
router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase}).then(celeb => {
    console.log("Created OK ", celeb);
    res.redirect('/celebrities')
  }).catch(e => console.log(e))
});


// GET READ LIST
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.render('celebrities/index', { celebs })
    }).catch( e => next.render(e))
})

//GET READ CELEBRITY
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render('celebrities/show', {celeb})
    }).catch(next)
    
})

module.exports = router;