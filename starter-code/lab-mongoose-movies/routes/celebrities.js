const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity');


/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrities.find()
  .then((celebs) => {
    res.render('Celebrities/index', {celebs});
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/new', (req, res, next) => {
  res.render('Celebrities/new');
});

router.post('/', (req, res, next) => {
  let celebrity = new Celebrities(req.body);
  celebrity.save()
  .then((result) => {
    console.log("Saved to db: ", result);
    res.redirect('/celebrities');
  })
  .catch((err) => {
    res.render('Celebrities/new', {celebrity: celebrity, error: true});
  });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.id)
  .then((result) => {
    console.log("Removed from db: ", result);
    res.redirect('/celebrities');
  })
  .catch((err) => {
    next(err);
  });
});



router.get('/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((celeb) => {
      res.render('Celebrities/show', celeb);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;