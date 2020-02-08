// Routes file needs to be required in the app.js in order not to give 404
// App needs to know you created a new route file, that's the only way for it to know which routes you want to hit.

const express = require('express');
const celebrityRouter = express.Router();


// Require Celebrity model in order to use it for CRUD

const Celebrity = require('.../models/celebrity');


// ****************************************************************************************
// GET - to display the form for creating the celebrities
// ****************************************************************************************

//                                         make sure you see all the folders that are inside the "views" folder,
//                                         but you don't have to specify "views" folder tho
//                                         in res.render() we don't use '/' 🚨 before we put the the path to the hbs file we want to render
//   localhost:3000/celebrity-input

celebrityRouter.get('/celebrities/new', (req, res) => res.render('celebrities/new-celebrity'));

// ****************************************************************************************
// POST route to create a new author in the DB
// ****************************************************************************************

// <form action="/authors" method="POST">
celebrityRouter.post('/celebrities/create', (req, res) => {
  // console.log(req.body);

  Celebrity.create(req.body)
    .then(savedCelebrity => {
     

      // take us to the page that already exist in our app
      //      ^       ->  this is the URL so it HAS to start with '/'
      //      |      |
      //      |      |
      res.redirect('/celebrities/create');
    })
    .catch(err => console.log(`Error while saving author in the DB: ${err}`));
});
// ****************************************************************************************
// GET all celebrities from the DB
// ****************************************************************************************

celebrityRouter.get('/celebrities/create', (req, res) => {
  Celebrity.find() // <-- .find() method gives us always an ARRAY back
    .then(celebritiesFromDB => {
      
      res.render('celebrities/celebrities', { celebrities: celebritiesFromDB });
    })
    .catch(err => console.log(`Error while getting celebrities from DB: ${err}`));
});

module.exports = celebrityRouter;