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

router.get('/:id/edit', (req, res, next) => {
  Celebrities.findById(req.params.id)
  .then((celebrity) => {
    res.render('Celebrities/edit', {celebrity: celebrity})
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/:id', (req, res, next) => {
  Celebrities.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((result) =>{
    console.log("Updated db entry: ", result);
    res.redirect('/celebrities/' + req.params.id);
  })
  .catch((err) => {
    next(err);
  })
});

router.get('/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((celebrity) => {
      res.render('Celebrities/show', celebrity);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;