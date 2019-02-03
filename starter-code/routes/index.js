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

router.get('/celebrities/:id/edit', (req, res, next) => {
  celebritiesSchema
    .findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', { celebrity }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/celebrities', (req, res, next) => {
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

router.post('/celebrities/:id/delete', (req, res, next) => {
  celebritiesSchema
    .findByIdAndRemove(req.params.id)
    .then(done => {
      console.log('The next element was deleted from database: ', done);
      res.redirect('/celebrities/index');
    })
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/celebrities/:id', (req, res, next) => {
  const celebrityModification = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebritiesSchema
    .findByIdAndUpdate(req.params.id, celebrityModification)
    .then(() => res.redirect('/celebrities/index'))
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;

/*
Locate the /celebrities/:id POST route in the routes/celebrities.js file.
In that route's callback:
Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. What were they again? Look back and review if you forgot.)
Values for those keys should come from the form submission (req.body).
Call the Celebrity model’s update method and use the celebrity's id to specify which celebrity we are updating. Also, use the object you just created with the updated attributes for the celebrity and pass this object into the update method as the second argument.
If there is an error retrieving that celebrity, call the route's next function and return the error
If there is no error, redirect back to the list of celebrities.
 */
