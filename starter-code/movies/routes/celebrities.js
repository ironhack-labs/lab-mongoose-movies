const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

//to get the list of celebs in our database
router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrities) => {
      if (error) {
        next(error);
      } else {
        res.render('celebrities/index', {celebrities});
      }
    });
});

//to see more info about specific celeb
router.get('/show/:celebrityId', (req, res) => {
  Celebrity.findById(req.params.celebrityId, (error, celebrity) => {
      if (error) {next(error);}
        res.render('celebrities/show', {celebrity}) ;
  });
});

//to go to create new celeb page
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


//Delete celebrity
router.post('/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id, (error, celebrity) => {
      if (error) {return next(error); }
      return res.redirect('/celebrities');
    });
});

//Edit details about celebs
router.get('/edit/:id', (req, res) => {
  Celebrity.findById(req.params.id, (error, celebrity) => {
    if (error) { next(error); }
    res.render('celebrities/edit', {celebrity});
  });
});

router.post('/:id', (req, res, next) => {

  const celebUpdates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(req.params.id, celebUpdates, (err, celebrity) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});


//Create new celebrity
router.post('/', (req, res, next) => {

  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCeleb = new Celebrity(celebInfo);

  newCeleb.save((err) => {
    if (err) { return next(err);  }
    return res.redirect('celebrities');
  });
});



module.exports = router;
