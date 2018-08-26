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



// Route	HTTP Verb	Description
// /celebrities/:id	GET	Show a specific celebrity
// Steps we will follow in this iteration:
// Create the /celebrities/:id GET route in routes/celebrities.js.
// In the route callback:
// Call the Celebrity model's findOne or findById method to retrieve the details of a specific celebrity by its id.
// If there's an error, call the route's next function and return the error.
// If there isn't an error, render the celebrities/show view.
// Pass the variable with the celebrity's details into the view.
// Create the show.hbs view file inside the views/celebrities/ folder.
// In the views/celebrities/show.hbs view file:
// Add an <h2> for the page's heading.
// Display tags with the celebrity's name, occupation and catchPhrase.
// In the views/celebrities/index.hbs view file:
// As part of the loop that displays each celebrity's name, add a link that goes to the /celebrities/:id route with the :id replaced by the actual celebrity's id.


module.exports = router;
