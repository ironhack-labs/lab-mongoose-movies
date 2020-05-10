const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(arrCelebrity => {
      res.render('celebrities/index', {arrCelebrity});
    })
    .catch(err => console.log(`error: ${err}`));
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(theCelebrity => {
      res.render('celebrities/show', {theCelebrity});
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    });
});


router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrities = new Celebrity({name, occupation, catchPhrase});
  newCelebrities
    .save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log('Error in delete celebrities: ', error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', {celebrity});
    })
    .catch(error => {
      console.log('Error in edit celebrities: ', error);
    });
});

router.post('/:id', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.updateOne({_id: req.params.id}, {name, occupation, catchPhrase})
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log('Error in edit celebrities: ', error);
    });
});

module.exports = router;
