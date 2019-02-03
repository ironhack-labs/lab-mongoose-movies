const express = require('express');
const router = express.Router();
const celebritiesSchema = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/index', (req, res, next) => {
  celebritiesSchema
    .find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.get('/celebrities/:id', (req, res, next) => {
  celebritiesSchema
    .findById(req.params.id, { _id: 0 })
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/celebrities', (req, res, next) => {
  if (req.body.name == '' || req.body.occupation == '' || req.body.catchphrase == '') {
    res.render('celebrities/new', {
      errorMessage: 'Please fill all the fields'
    });
  }
  celebritiesSchema
    .create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchphrase: req.body.catchphrase
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

router.post('/celebrities/:id/delete', (req, res, next) => {
  celebritiesSchema
    .findByIdAndRemove(req.params.id)
    .then(done => {
      console.log('The next element was deleted from database: ', done);
      res.redirect('/celebrities/index');
    })
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;

/*
 */
