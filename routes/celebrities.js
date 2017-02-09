const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

//------------------------------2nd Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', { celebrities: celebrities });

  });
});
//------------------------------4th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of celebrities if it saves
    return res.redirect('/celebrities');
  });
});

//------------------------------3rd Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  console.log(celebrityId);
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/show', {celebrity});
  });
});

//------------------------------5th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});

//------------------------------6th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
      res.render('celebrities/edit', { celebrity });
  });
});

router.post('/:id', (req, res, next) => {
  const celebritytId = req.params.id;

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
};

Celebrity.findByIdAndUpdate(celebritytId, updates, (err, celebrity) => {
  if (err){ return next(err); }
  return res.redirect('/celebrities');
});
});


module.exports = router;
