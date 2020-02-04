
const express = require('express');
const celebrityRouter = express.Router();

// ********* require Celebrity model in order to use it for CRUD *********
const Celebrity = require('../models/celebrity');

//   localhost:3000/celebrities/new
celebrityRouter.get('/celebrities/new', (req, res) => res.render('celebrities/new-celebrity'));

// ****************************************************************************************
// POST route to create a new author in the DB
// ****************************************************************************************

// <form action="/celebrities/create" method="POST">
celebrityRouter.post('/celebrities/create', (req, res) => {
  
  Celebrity.create(req.body)
    .then(savedCelebrity => {
      console.log('Successfully saved: ', savedCelebrity;

      // take us to the page that already exist in our app
      //      ^       ->  this is the URL so it HAS to start with '/'
      //      |      |
      //      |      |
      res.redirect('/celebrities/new-celebrity');
    })
    .catch(err => console.log(`Error while saving celebrity in the DB: ${err}`));
});

// ****************************************************************************************
// GET all authors from the DB
// ****************************************************************************************

// authorRouter.get('/authors', (req, res) => {
//   Author.find() // <-- .find() method gives us always an ARRAY back
//     .then(authorsFromDB => {
//       // console.log('Authors from DB: ========', authorsFromDB);
//       res.render('authors-views/authors-list', { authors: authorsFromDB });
//     })
//     .catch(err => console.log(`Error while getting authors from DB: ${err}`));
// });

// module.exports = authorRouter;
