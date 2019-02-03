const express = require('express');
const router = express.Router();
const celebritiesSchema = require('../models/celebrity');

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/', (req, res, next) => {
  celebritiesSchema
    .find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.get('/:id', (req, res, next) => {
  celebritiesSchema
    .findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(err => console.log('An error ocurred: ', err));
});

//Something wrong happens here uncomment this line and comment line 5 to 7

/* router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});
 */

router.get('/:id/edit', (req, res, next) => {
  celebritiesSchema
    .findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', { celebrity }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/', (req, res, next) => {
  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') {
    res.render('celebrities/new', {
      errorMessage: 'Please fill all the fields'
    });
  }
  celebritiesSchema
    .create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(done => {
      console.log(done);
      res
        .render('celebrities/new', {
          successMessage: 'Celebrity saved successfully'
        })
        .catch(err => console.log('An error ocurred:', err));
    });
});

router.post('/:id/delete', (req, res, next) => {
  celebritiesSchema
    .findByIdAndRemove(req.params.id)
    .then(done => {
      console.log('The next element was deleted from database: ', done);
      res.redirect('/celebrities');
    })
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/:id', (req, res, next) => {
  const celebrityModification = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebritiesSchema
    .findByIdAndUpdate(req.params.id, celebrityModification)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;
