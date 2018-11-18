const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

const genericCelebrity = new Celebrity();

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(error => {
      console.log(error)
    })
});


router.post('/', (req, res, next) => {
  genericCelebrity.name = req.body.name;
  genericCelebrity.occupation = req.body.occupation;
  genericCelebrity.catchPhrase = req.body.catchPhrase;
  genericCelebrity.save()
    .then(() => {
      res.redirect('/');
    })
    .catch(() => {
      res.redirect('/new');
  })
})




module.exports = router;