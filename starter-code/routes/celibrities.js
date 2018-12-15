const express = require('express');
const router  = express.Router();
const Celibrity = require('../models/celibrity')

router.get('/celibrities', (req, res, next) => {
    Celibrity.find()
      .then(celibrity => {
        res.render("celibrities/index", { celibrity });
      })
      .catch(error => {
        res.render("index");
      })
  })

  router.get('/celibrities/news', (req, res, next) => {
    res.render("celibrities/news")
  })

  router.post('/celibrities/news', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelibrity = new Celibrity({ name, occupation, catchPhrase })
    newCelibrity.save()
    .then(celibrity => {
      res.redirect('/celibrities')
    })
    .catch((error) => {
      console.log(error)
    })
  });

  router.get('/celibrities/:id', (req, res, next) => {
    let celibrityId = req.params.id;
    Celibrity.findOne({'_id': celibrityId})
      .then(celibrity => {
        res.render("celibrities/id", { celibrity })
      })
      .catch(error => {
        console.log(error)
      })
  });


//   In that route's callback:
// Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. 
//   What were they again? Look back and review if you forgot.)
// Values for those keys should come from the form submission (req.body).
// Call the Celebrity model’s update method and use the celebrity's id to specify which 
// celebrity we are updating. Also, use the object you just created with the updated attributes 
// for the celebrity and pass this object into the update method as the second argument.
// If there is an error retrieving that celebrity, call the route's next function and return the error
// If there is no error, redirect back to the list of celebrities.

  router.post('/celibrities/:id/delete', (req, res, next) => {
    let celibrityId = req.params.id;
    Celibrity.findByIdAndRemove({'_id': celibrityId})
    .then(celibrity => {
      res.redirect('/celibrities')
    })
    .catch((error) => {
      console.log(error)
    })
  });

  router.get('/celibrities/:id/edit', (req, res, next) => {
    let celibrityId = req.params.id;
    Celibrity.findOne({'_id': celibrityId})
      .then(celibrity => {
        res.render("celibrities/edit", { celibrity })
      })
      .catch(error => {
        console.log(error)
      })
  });

  router.post('/celibrities/:id/edit', (req, res, next) => {
     let celibrityId = req.params.id;
     const { name, occupation, catchPhrase } = req.body;
    Celibrity.update({'_id': celibrityId},{ $set: { name, occupation, catchPhrase } })
      .then(celibrity => {
        res.redirect('/celibrities')
      })
       .catch(error => {
         console.log(error)
       })
   });




  //  Create a route.
  //  Create a view file (and a folder for all your movies view files).
  //  Use a database query to retrieve all the movies in your database and render the view.
  //  Use a forEach loop to display all your movies on that page
  //  Add a link to the page you just created on the home page so the user can navigate to it.


  module.exports = router;

