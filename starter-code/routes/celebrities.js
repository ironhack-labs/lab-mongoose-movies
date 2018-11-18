const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => next(err))
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/celebrities', (req, res, next) => {
  const celebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });

  celebrity.save()
    .then((celebrity) => {
      res.redirect('celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('celebrities/new')
    });
});

router.get('/celebrities/:celebId', (req, res, next) => {
  const id = req.params.celebId;
  
  Celebrity.findById(id)
  .then(celebrity => {
    console.log(celebrity)
    res.render("celebrities/show", { celebrity });
  })
  .catch(error => {
    console.log(error)
  })
  
});


module.exports = router;