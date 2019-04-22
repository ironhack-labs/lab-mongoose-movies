const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/celebrity', (req, res, next) => {
  console.log(res);
  Celebrity.find()
    .then((results) => {
      res.render('celebrities-pages', { celebrityList: results });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/celebrity/:_id', (req, res, next) => {
  const celebrityId = req.query.celebrity_id;
  Celebrity.findOne({ _id: celebrityId })
    .then(err) => {
      next(err); Error;
    })
    .catch((results) => {
      res.render('celebrities/show', { celebrityId: results });
    });
});


// Create the /celebrities/:id GET route in routes/celebrities.js.
// In the route callback:
// Call the Celebrity model's findOne or findById method to retrieve the details of a specific celebrity by its id.
// If there's an error, call the route's next function and return the error.
// If there isn't an error, render the celebrities/show view.
// Pass the variable with the celebrity's details into the view.

// router.get('/books', (req, res, next) => {
//   Book.find()
//     .then((results) => {
//       res.render('books', { booksList: results, msg: req.query.msg });
//     })
//     .catch((err) => {
//       throw Error(err);
//     });
// });

// router.get('/book/:_id', (req, res, next) => {
//   console.log(req.params._id);
//   Book.findOne({ _id: req.params._id })
//     .then((book) => {
//       res.render('book', { booksList: book });
//     })
//     .catch((err) => {
//       throw Error(err);
//     });
// });

// router.get('/books/del/:bookId', (req, res, next) => {
//   Book.findByIdAndDelete(req.params.bookId)
//     .then((result) => {
//       result.redirect('/books?msg=Book+Removed&title=$res.title');
//     })
//     .catch((err) => {
//       throw Error(err);
//     });
// });


// router.post('/books/edit', (req, res, next) => {
//   const bookId = req.query.book_id;
//   Book.findByIdAndUpdate(bookId, { $set: req.body })
//     .then(() => {
//       res.redirect('/books');
//     })
//     .catch((err) => {
//       throw Error(err);
//     });
// });

// router.get('/books/add', (req, res, next) => {
//   res.render('book-add');
// });

// router.post('/books/add', (req, res, next) => {
//   const {
//     title, author, description, rating,
//   } = req.body;
//   // instancio o model:
//   const newBook = new Book({
//     title, author, description, rating,
//   });
//   // necessario gravar:
//   newBook.save()
//     .then((book) => {
//       res.redirect('/books');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

module.exports = router;
