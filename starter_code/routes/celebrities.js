const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/form', {
    celebrity: new Celebrity()
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  // Create a new Celebrity with the params
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/form', {
        celebrity: newCelebrity
      })
    }

    return res.redirect('/celebrities');
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrities/show', {
      celebrity: celebrity
    })
  })
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrities/form', {
      celebrity: celebrity
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchphrase,
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect(`/celebrities/${celebrity._id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
