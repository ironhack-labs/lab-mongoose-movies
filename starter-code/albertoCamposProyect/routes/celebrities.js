const express = require('express');

 const celebrityModel = require('../models/celebrity.js');
 const router = express.Router();


router.get('/', (req, res, next) => {
  celebrityModel.find({}, (err, listOfCelebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: listOfCelebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  console.log("HEY");
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const celebritiesInfoNew = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new celebrityModel(celebritiesInfoNew);

   newCelebrity.save((err) => {
     if (err) {
       return res.render('celebrities/new', {
         celebrity: newCelebrity

       })
     }
 return res.redirect('/celebrities');
 });
 });

router.get('/:id', (req, res, next) => {
  celebrityModel.findById(req.params.id, (err, idCelebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/show', {
      idCelebrity: idCelebrity
    });
  });
});
  module.exports = router;
