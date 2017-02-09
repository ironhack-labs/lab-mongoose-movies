const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
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



router.get('/new', (req, res) => {
  res.render('celebrities/new')
})




router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrities)=>{
    if (err) {
      next(err)
    } else {
        res.render('celebrities/edit', { celebrities: celebrities })
    }
  })
});

router.post('/:id/update', (req, res, next) => {
  let celebrityToUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(req.params.id, celebrityToUpdate, (err, celebrities)=>{
    if (err) {
      next(err)
    } else {
      res.redirect('/celebrities');
    }
  })
});




router.get('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrities)=>{
    if (err) {
      next(err)
    } else {
      res.redirect('/celebrities')
    }
  })
});


router.get('/:celebrityId', (req, res, next) => {
  let celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId, (err, celebrities) => {
    if (err) {  next(err); }
    res.render('celebrities/show', { celebrities: celebrities });
  });
});


module.exports = router;
