const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');
const genericCelebrity = new Celebrity();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', { celebrities })
    })
    .catch(error => console.log("Error to find celebrities" + error))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/:_id', (req, res, next) => {
  Celebrity.findById(req.params._id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity })
    })
    .catch(error => console.log("Error to find a celebrity" + error))
})

router.post('/:_id/delete', (req, res, next) => {
  console.log("hola")
  Celebrity.findByIdAndRemove(req.params._id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => console.log("Error to remove a celebrity" + error))
})

router.post('/', (req, res, next) => {
  genericCelebrity.name = req.body.name;
  genericCelebrity.occupation = req.body.occupation;
  genericCelebrity.catchPhrase = req.body.catchPhrase;
  genericCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log("Error to add a new celebrity" + error)
      res.redirect('celebrities/new')
    })
})

module.exports = router;