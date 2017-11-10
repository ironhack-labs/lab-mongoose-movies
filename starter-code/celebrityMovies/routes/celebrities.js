const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

// (app.js) drones --> /drones/ (drones.js) ==> /
router.get('/', (req, res, next) => {
  // Iteration #2
  Celebrity.find({}, (err, listOfCelebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: listOfCelebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  // Iteration #4
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  // Iteration #4
  let addCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(addCelebrity);
  newCelebrity.save((err) => {
    if (err) {
      console.log("ERROR!!!");
      return res.render('celebrities/new', {
        celebrity: newCelebrity
      });
    }

    return res.redirect('/celebrities/');
  });
});

router.get('/:id', (req, res, next) => {
  // Iteration #3
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err){ return next(err); }
    res.render('celebrities/show',{
      celebrity: celebrity
    });
  });
});

router.post('/:id/delete', (req, res, next) =>{
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrity) =>{
    if (err) { return next(err);}
    return res.redirect('/celebrities');
  });
});

router.get('/:id/edit', (req,res,next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) { return next(err);}
    res.render('celebrities/edit', {
      celebrity: celebrity
    });
  });
});
router.post('/:id', (req, res, next) => {
  let actualId = req.params.id;
  let editCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(actualId, editCelebrity, (err, product) => {
    if (err){ return next(err); }
      console.log(actualId);
      return res.redirect('/celebrities/'+actualId);
  });
});
module.exports = router;
