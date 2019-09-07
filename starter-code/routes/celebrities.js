const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js')

router.get('/', (req, res, next) => {
  console.log("schritt 1")
  Celebrity.find()
    .then((celebrityList) => {
      console.log("schritt 2")
      console.log(celebrityList)

      res.render('celebrities/index', { celebrityList })
    })
    .catch(err => next(err))
})

// Users/chanty/Desktop/labs/lab-mongoose-movies/starter-code/views

//#4: Adding New Celebrities GET
//celebrities/new or /new?
router.get('/new', (req, res, next) => {
  console.log("schritt 3")
  res.render('celebrities/new')
})
//#4 POST celebrities/new
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  console.log("schritt 4")
  newCelebrity.save()
    .then(() =>
      res.redirect('/celebrities')
    )
    .catch((err) =>
      res.render('celebrities/new'))
})



//Create the /celebrities/:id GET route in routes/celebrities.js.
//#3 Show Details:
//? :id = details
// /celebrities/879369876234ziu
// /celebrities/new
router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celebrityDetails) => {
      res.render('celebrities/show', celebrityDetails)
    })
    .catch(err => next(err))
})


//#5 DELETE
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(() =>
      res.redirect('/celebrities')
    )
    .catch(err => next(err))
})


//#6
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(
      (celebrityDetails) => {
        res.render('.../views/celebrities/edit', celebrityDetails)
      })
    .catch(err => next(err))
})
//#6 STep 5

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  //req.params or .query?? new: true?
  Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } }, { new: true })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => next(err))
})

/*Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. What were they again? Look back and review if you forgot.)
Values for those keys should come from the form submission (req.body).
Call the Celebrity model’s update method and use the celebrity's id to specify which celebrity we are updating. Also, use the object you just created with the updated attributes for the celebrity and pass this object into the update method as the second argument.
If there is an error retrieving that celebrity, call the route's next function and return the error
If there is no error, redirect back to the list of celebrities. */
module.exports = router
