const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render('celebrities/index', {celebrity});
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const celebrity = req.params.id;
  Celebrity.findById(celebrity)
    .then((celebrityDetails) => {
      res.render('celebrities/show', celebrityDetails);
    })
    .catch(err => console.log(`Fire!${err}`));
});



router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(() => {
    res.render('/new');
  });

});

router.post('/:id/delete', (req, res, next) => {
  const celebrity = req.params.id;
  Celebrity.findByIdAndDelete(celebrity)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => console.log(`Fire!${err}`));


});

module.exports = router;