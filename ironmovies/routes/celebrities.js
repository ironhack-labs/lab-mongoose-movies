const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }
    // res.send('ok');
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new', {celebrity: new Celebrity()});
});

//Take info from the form to create new celebrity
router.post('/celebrities', (req, res, next) => {
  let celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  console.log(celebrityInfo);

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save(err => {
    // Show form again if error
    if (err) { return res.render('celebrities/new'); }
    // Show all celebrities if OK
    return res.redirect('/celebrities');
  });
});


// router.get('celebrities/:id', (req, res, next) => {
//   let celebrityId = req.params.id;
//   Celebrity.findById(celebrityId, (err, celebrity) => {
//     if (err) { return next(err); }
//     console.log(celebrity);
//     res.render('celebrities/show', celebrity);
//   });
// });

module.exports = router;
