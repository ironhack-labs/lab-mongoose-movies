const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

//GET CREATE
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})
//POST CREATE
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

//GET EDIT
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render('celebrities/edit', {celeb})
    }).catch(next)  
})
//POST EDIT
router.post('/:id', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {name :name, occupation: occupation, catchPhrase: catchPhrase})
    .then(celeb => {
      let stringId = encodeURIComponent(celeb._id);
      res.redirect('/celebrities/' + stringId);
    }).catch(next) 
})

//POST DELETE
router.post('/:id/delete', (req, res, next) => {
  const {celebId} = req.body;
  Celebrity.findByIdAndRemove(celebId)
    .then(removed => {
      console.log('Removed Celebrity', removed);
      res.redirect('/celebrities');
    }).catch(next)  
})

module.exports = router;