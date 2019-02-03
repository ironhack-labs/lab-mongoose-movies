const express = require('express');

// router can be any name like celebrityRouter
const router = express.Router();
// require Celebrity model
const Celebrity = require('../models/celebrity-model');

// .get() to display the form to create a new celebrity
// now it is router because it is in the router file, not app for "app.get"
// now the app.js file sends us to the celebrity-route file and we do not need to show localhost:3000/celebrity because
// we go straight to the '/new' since it is being directed below to the form
// router.get needs '/' because it is the URL
// localhost:3000/celebrity/create => because we prefixed in app.js
router.get('/create', (req, res, next) => {
  // make sure to see all the folders that are inside the views
  res.render('celebrity-views/new-celebrity')
})


// .post() to send the data user put in the form to the database
// from new-celebrity.hbs {/* <form action="/celebrity/create" method="post"> */}
router.post('/create', (req, res, next) => {
  // console.log("Data the user put in the form: ", req.body); // <= works fine! now we "create"
  // if we don't use the same names in the form as the ones we have in our model, (like <input name="differentNameThanTheOneInTheModel">)
  // we would have to do something like this:

  // Celebrity.create ({
  //   name: req.body.whatEverNameIsInTheFrom,
  //   occupation: req.body.whatEverNameIsInTheFrom,
  //   catchPhrase: req.body.whatEverNameIsInTheFrom,
  // })

  Celebrity.create(req.body)
  .then(newCelebrity => {
    // console.log("New celebrity created: ", newCelebrity); // <= needed to update my celeb-model to firstName/lastName and then worked fine.

    // take us to the page that already exists in our application
    // this is the URL so it HAS to start with '/'
    res.redirect('/celebrity/allcelebrities');
  })
  .catch(err => {
    console.log("Error while creating a new celebrity: ", err)
  })
})

// router.get() gets all the celebrities from the database 
router.get('/allcelebrities', (req, res, next) => {
// and celebrity.find will find the celebrities looked for and goes to ".then"
  Celebrity.find()
  // allCelebrities can be any name
  .then(allCelebrities => {
    res.render('celebrity-views/all-celebrities', { celebrity: allCelebrities })
  })
  .catch(err => {
    console.log("Error while getting the celebrities: ", err)
  })
})



module.exports = router;