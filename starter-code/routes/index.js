const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> List all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});
  });
});

/* (C)RUD: Add a celebrities form */
router.get('/celebrities/add', (req, res, next) => {
  res.render('celebrities/add');
});

/* (C)RUD: Create the celebrity in DB */
router.post('/celebrities/add', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
  .save().then(celebrities => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* C(R)UD: Retrieve -> List the choosen celebrity */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/show', {celebrities});
  });
});




// /* CR(U)D: Update the celebrity, show update form  */
// router.get('/books/edit/:id', (req,res) => {
//   Book.findById(req.params.id).then(book => {
//     res.render('book/edit',{book});;
//   })
// })

// /* CR(U)D: Update the celebrity in DB */
// router.post('/books/edit/:id', (req,res) => {
//   const { title, author, description, rating} = req.body;
//   Book.findByIdAndUpdate(req.params.id,{ title, author, description, rating })
//       .then( book => {
//         res.redirect('/books')
//       })
// })

module.exports = router;
