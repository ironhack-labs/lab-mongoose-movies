const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.model');

/* GET books page */
router.get('/books', (req, res, next) => {
  Book
    .find()
    .then(books => {
      res.render('books/index', { books });
    })
    .catch(err => console.error('Error getting the books', err));
});

/* GET new book form page */
router.get('/books/new', (req, res, next) => {
  res.render('books/new');
});

/* POST new book */
router.post('/books', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Book.create({
    title,
    genre,
    plot
  })
  .then(newBook => {
    console.log('new book created', newBook);
    res.redirect('/books'); 
  })
  .catch(err => {
    console.log('Error creating new book', err);
    res.redirect('/books/new');
  })
});

/* GET books details page by ID */
router.get('/books/:id', (req, res, next) => {
  const id = req.params.id;
  Book
    .findById(id)
    .then(book => {
      res.render('books/show', { book });
    })
    .catch(err => console.error('Error getting one book by ID', err));
});

/* GET books edit page by ID */
router.get('/books/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Book
    .findById(id)
    .then(book => {
      res.render('books/edit', { book });
    })
    .catch(err => console.error('Error going to book edit page', err));
});

/* POST update book */
router.post('/books/:id', (req, res, next) => {
  const id = req.params.id; 
  const { title, genre, plot } = req.body;
  Book
    .findByIdAndUpdate(id, {
      title,
      genre,
      plot
    }, { new: true })
    .then(() => {
      res.redirect('/books'); 
    })
    .catch(err => console.error('Error updating the book', err));
});

/* POST delete book */
router.post('/books/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Book
    .findByIdAndRemove(id)
    .then(() => {
      res.redirect('/books'); 
    })
    .catch(err => console.error('Error deleting the book', err));
});

module.exports = router;