const express = require('express');
const Celebrities = require('../models/celebrity');

const router  = express.Router();

  router.get('/', (req, res, next) => {
    Celebrities.find((err, celebrities) => {
      if (err) { return next(err); }

      res.render('celebrities/index', {
        celebrities: celebrities
      });
    });
  });

  router.get('/new', (req, res, next) => {
    res.render('celebrities/new', {
      celebrities: new Celebrities()
    });
  });

  router.post('/', (req, res, next) => {
    const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    };

  // Crea instancia
  const newCelebrity = new Celebrities(celebrityInfo);

//método
  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celebrities: newCelebrity
      });
    }
    return res.redirect('/celebrities');
  });
  });

  router.get('/:id', (req, res, next) => {
    let id = req.params.id;

    Celebrities.findById(id, (err, celebrities) => {
      res.render('celebrities/show', {
        celebrities: celebrities
      });
    });
  });



module.exports = router;
