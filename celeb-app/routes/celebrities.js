const express = require('express');
const Celebrity = require('../model/celebrity');
const router = express.Router();

router.get('/celebs', (req, res, next) => {
  Celebrity.find((err, celebs) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/index',
    {celebrities: celebs,
    title: 'Home Celeb Page'
  });
  });
});


router.get('/celebs/new', (req, res, next) => {
  res.render('celebrities/new',
  { title: 'add new Celeb'
});
});

router.get('/celebs/:id/edit', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/edit', {
      celebrity: celebs,
      title: 'Edit the Celeb'
    });
  });
});

router.post('/celebs/:id',(req, res, next) => {
  let celebId = req.params.id;
  const update = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(celebId, update, (err, celebs) => {
    if (err) {
      next (err);
      return;
    }
    res.redirect('/celebs');
  });
});

router.get('/celebs/:id',(req, res, next) => {
  let celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/show', {
      celebrity: celebs,
      title: 'Details of Celeb'
    });
  });
});

router.post('/celebs/:id/delete', (req, res, next) => {
  let celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/celebs');
  });
});


module.exports = router;
