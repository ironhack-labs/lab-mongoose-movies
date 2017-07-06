const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if(err){
      next();
      return err;
    } else {
      res.render('celebrities/index', {celebrities: celebrities});
    }
  });
});

router.get('/:id', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, celeb) => {
    if(err){
      next();
      return err;
    }
    res.render('celebrities/show', {celebrity: celeb});
  });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
    let celebrityNew = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchFrase: req.body.catchFrase
    });

    celebrityNew.save( (err, obj) => {
      if (err) {
        res.render('celebrities/new');
      } else {
        res.redirect('/celebrities');
      }
    });
});

router.get('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/celebrities");
  });
});

router.get('/:id/edit', function(req, res, next) {
  Celebrity.findById(req.params.id, (err, celeb) => {
    if(err){
      next();
      return err;
    }
    res.render('celebrities/edit', {celebrity: celeb});
  });
});

router.post('/:id', function(req, res, next) {
  let {name, occupation, catchFrase} = req.body;
  let edits = {
    name,
    occupation,
    catchFrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, edits, (err, celeb) => {
    if(err){
      next();
      return err;
    }
    res.redirect(`/celebrities/${celeb._id}`);
  });
});

module.exports = router;
