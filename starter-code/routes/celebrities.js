const express = require('express');
const Celebrity = require('../models/celebrities');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      celebs : celebs
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {
    celeb: new Celebrity()
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id, (err, celeb) => {
    res.render('celebrities/show', {
      celeb : celeb
    })
  })
});

router.post('/', (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation : req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const newCelebrity = new Celebrity(celebInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celeb: newCelebrity
      })
    }

    return res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celeb) => {
    res.render('celebrities/edit', {
      celeb : celeb
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    occupation : req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, celeb) => {
    if (err){ return next(err); }

    return res.redirect(`/celebrities/${celeb._id}`);
  });
});



module.exports = router;
