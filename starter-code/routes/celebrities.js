const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrities.find()
    .then((celebrity) => {
      res.render('celebrities/index', { celebrity });
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.get('/new', (req, res, next) => { // learn why the position is so relevant 
  res.render('celebrities/new');
});

router.post('/:id/delete', (req, res, next) => {
  const search = req.params.id;
  Celebrities.findByIdAndRemove(search)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => console.log(`Fire!${err}`));

});

router.get('/:id/edit', (req, res, next) => {
  const search = req.params.id;
  Celebrities.findById(search)
    .then((celebrities) => {
      console.log(celebrities)
      res.render('celebrities/edit', { celebrities });
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase, image } = req.body;
  const { id } = req.params; 
  Celebrities.update({ _id: id }, { $set: { name, occupation, catchPhrase, image } })
    .then((celeb) => {
      res.redirect('/celebrities');
    })
    .catch(err => console.log(`Fire!${err}`));

});

router.get('/:celebritiesID', (req, res, next) => {
  const search = req.params.celebritiesID;
  Celebrities.findById(search)
    .then((celebrity) => {
      res.render('celebrities/show', celebrity);
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase, image } = req.body;
  const newCeleb = new Celebrities({ name, occupation, catchPhrase, image });

  newCeleb.save()
    .then(() => {
      res.redirect('/celebrities');
    })

    .catch((error) => {
      res.render('celebrities/new');
    });
});

module.exports = router;