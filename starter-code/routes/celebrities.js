const express = require('express');

const Celebrity = require('../models/Celebrity.model')

const router = express.Router();


// route /celebrities
router.get('/', (req, res, next) => {

  Celebrity.find().then((celebritiesFromDB) => {
    // console.log(celebritiesFromDB);
    res.render('celebrities/index', { allTheCelebrities: celebritiesFromDB })
  })
});


// show form to the user
// GET /celebrities/new
// tricky case: remember to keep it above the code rendering /:id route! in other case browser will try to render "new" as an id and it will cause an error
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});


// route /celebrities/:id
router.get('/:id', (req, response, next) => {

  Celebrity.findById(req.params.id).then((celebrity) => {
    response.render('celebrities/show', celebrity) // 
  })

});


// pick up data from submitted form
// POST /celebrities/new
// name: req.body.name = ModelPropertyName.req.body.formInputFieldName
router.post('/new', (req, res, next) => {

  console.log(req.body);
  Celebrity.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
    res.redirect('/celebrities')
  })
});


// POST /celebrities/id/delete
router.post('/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/celebrities')
  })
});


// GET celebrities/id/edit
router.get('/:id/edit', (req, res, next) => {

  Celebrity.findById(req.params.id).then((celebrity) => {
    res.render('celebrities/edit', celebrity)
  })
});


// POST celebrities/id/edit
router.post('/:id/edit', (req, res, next) => {

  Celebrity.findByIdAndUpdate(req.params.id, { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
    res.redirect('/celebrities')
  })
});



module.exports = router;