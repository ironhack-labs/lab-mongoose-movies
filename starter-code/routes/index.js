const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/Celebrity', (req, res, next) => {
  res.render('Celebrity');
});

router.get('/Movie', (req, res, next) => {
  res.render('Movie');
});

/* CR(U)D: Update the book, show update form  
router.get('/books/edit/:id', (req,res) => {
  Book.findById(req.params.id).then(book => {
    res.render('book/edit',{book});;
  })
})

 CR(U)D: Update the book in DB 
router.post('/books/edit/:id', (req,res) => {
  const { title, author, description, rating} = req.body;
  Book.findByIdAndUpdate(req.params.id,{ title, author, description, rating })
      .then( book => {
        res.redirect('/books')
      })
})

 CRU(D): Update the book in DB 
router.get('/books/delete/:id',(req,res) => {
  Book.findByIdAndRemove(req.params.id, () => res.redirect('/books'));
})


 C(R)UD: Retrieve -> Get a book 
router.get('/books/:id', (req, res, next) => {
  Book.findById(req.params.id).then( book => {
    Comment.find({book: book._id}).then(comments => {

      console.log(book);
      console.log(comments);

      res.render('book/detail', {book, comments});
    })
  })
});


 C(R)UD: Retrieve -> Get a book 
router.get('/comments', (req, res, next) => {
  Comment.find({}).populate('book').then(comments  => {
    console.log(comments);
    res.render('comments/list',{comments});
  })
});

*/



module.exports = router;
