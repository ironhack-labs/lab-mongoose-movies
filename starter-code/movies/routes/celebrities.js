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
  console.log('jfkdsjfsk heere');
  Celebrity.findById(req.params.celebrityId, (error, celebrity) => {
      if (error) {
        console.log('im heere');
        next(error);
      } else {

        res.render('celebrities/show', {celebrity}) ;
      }
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});



router.post('/', (req, res, next) => {

  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCeleb = new Celebrity(celebInfo);

  newCeleb.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('celebrities');
  });
});



module.exports = router;
