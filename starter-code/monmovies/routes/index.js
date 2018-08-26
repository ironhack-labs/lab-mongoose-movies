const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Celebs by Jason'});
});

/* GET Celeb LIST */
router.get('/celebrities', (req, res, next) => {
  Celeb.find({}).then(data => { 
    // console.log(data)
    res.render('celebrities', {data, title: 'Celebrities by Jason'});
  })
});

/* Get Specific Celeb Page by ID */
router.get('/celebrities/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
  .then(data => { 
    res.render('show', {data, title: 'All about data.name'});
  })
  .catch(console.error)
});


/* Create New celebrities */ 
router.get('/new', (req, res) => {
res.render('new')
})

router.post('/new', (req, res) => {
  const {
    name, occupation, catchPhrase,
  } = req.body

  new Celeb({
    name, occupation, catchPhrase,
  })
  .save()
  .then(data => {
    res.render('show', { data, new: true})
  })
})

/* Delete A Celebrity */
router.post('/celebrities/:id/delete', (req, res) =>{
Celeb.findByIdAndRemove(req.params.id)
.then(result => {
  res.redirect('/celebrities')
})
.catch(console.error)
})


/* Iteration #5: Deleting Celebrities
Now that we have a list of celebrities, a celebrity details page, and a page to create new celebrities, we only have 2 features left to implement: editing celebrities and deleting them. Since deleting is simpler, let's start with that.

Route	HTTP Verb	Description
/celebrities/:id/delete	POST	Delete a specific celebrity
Steps we will follow in this iteration:
In the views/celebrities/index.hbs file:
As part of the loop, add a <form> tag that makes a POST request to celebrities/:id/delete where the :id is replaced by the actual id of each celebrity.
Add a <button> tag inside the form so that it can be submitted.
Create the /celebrities/:id/delete POST route in your routes/celebrities.js file
In that route's callback:
Use the Celebrity model's findByIdAndRemove method to delete the celebrity by its id.
If there's an error, call the route's next function and return the error
If there is no error, redirect to the list of celebrities page.*/

module.exports = router;
