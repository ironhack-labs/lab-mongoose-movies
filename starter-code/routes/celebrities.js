const express = require ('express');
const router = express.Router ();
const Celebrity = require ('../models/celebrity');

router.get ('/celebrities', (req, res, next) => {
  Celebrity.find ()
    .then (celebritiesDB => {
      res.render ('celebrities/index', {celebritiesDB});
    })
    .catch (error => {
      console.log (error);
    });
});

router.get ('/celebrities/:id', (req, res, next) => {
  Celebrity.findById (req.params.id)
    .then (celebrities_id => {
      res.render ('celebrities/show', {celebrities_id});
    })
    .catch (error => {
      next ();
      console.log (error);
    });
});

router.get ('/celebrities/new', (req, res, next) => {
  res.render ('celebrities/new');
});

router.post ('/celebrities', (req, res, next) => {
  if (!req.body.name) {
    res.render ('new', {
      error: 'The name must be filled',
    });
    return;
  }
  Celebrity.create ({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then (celebritiesCreate => {
      res.redirect ('/celebrities');
    })
    .catch (error => {
      console.log (error);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celebritiesdelete => {
    res.redirect ('/celebrities');
  })
  .catch (error => {
    console.log (error);
})
})
module.exports = router;
