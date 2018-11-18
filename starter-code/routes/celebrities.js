const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

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

router.get('/:_id/edit', (req, res, next) => {
  Celebrity.findById(req.params._id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity })
    })
    .catch(error => console.log("Error to edit the celebrity" + error))
})

router.get('/:_id', (req, res, next) => {
  Celebrity.findById(req.params._id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity })
    })
    .catch(error => console.log("Error to find a celebrity" + error))
})

router.post('/', (req, res, next) => {
  const genericCelebrity = new Celebrity();
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

router.post('/:_id', (req, res, next) => {
  celebrityEdited = {}
  celebrityEdited.name = req.body.name;
  celebrityEdited.occupation = req.body.occupation;
  celebrityEdited.catchPhrase = req.body.catchPhrase;
  Celebrity.findByIdAndUpdate(req.params._id, celebrityEdited)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => console.log("Error to update a celebrity" + error))
})

router.post('/:_id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params._id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => console.log("Error to remove a celebrity" + error))
})



module.exports = router;