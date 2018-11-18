const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');


router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
      next(err);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => {
      console.error(err);
    })
});

router.post('/celebrities', (req, res, next) => {
  const newCelebrity = new Celebrity();

  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') {
    res.redirect('/celebrities/new');
  }

  newCelebrity.name = req.body.name;
  newCelebrity.occupation = req.body.occupation;
  newCelebrity.catchPhrase = req.body.catchPhrase;

  newCelebrity.save()
    .then(celebrity => {
      console.log(celebrity);
      res.redirect('/celebrities');
    })
    .catch(err => console.log(err));
});


router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celebrity => {
    console.log(celebrity);
    res.redirect('/celebrities');
  })
  .catch(err => console.log(err));

});

module.exports = router;