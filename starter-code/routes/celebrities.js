const express = require('express');
const Celebrities = require('../models/celebrities');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {

  Celebrities.find({}, (err, listacelebrities) => {
      if (err) { return next(err); }
    res.render('celebrities/index', {
      listacelebrities: listacelebrities
    });
  });
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => { console.log("hola");
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const newCelebrities = new Celebrities(celebrityInfo);

  newCelebrities.save((err) => {
    if (err) { return next(err); }

    return res.redirect('/celebrities/celebrities');
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  Celebrities.findById(id, (err, famousperson) => {
    res.render('celebrities/show', {
      famousperson: famousperson
    });
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Celebrities.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities/celebrities');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Celebrities.findById(id, (err, famousperson) => {
    res.render('celebrities/edit', {
      famousperson: famousperson
    });
  });
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;

  const updates = {
    name: req.body.name,
    price: req.body.occupation,
    imageUrl: req.body.catchPhrase,
  };
  Celebrities.findByIdAndUpdate(id, updates, (err, famousperson) => {
    if (err){ return next(err); }

    return res.redirect(`/celebrities/celebrities/${famousperson._id}`);
  });
});



module.exports = router;
