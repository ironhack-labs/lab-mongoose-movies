const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity');


router.get('/new', (req, res, next) =>{
  res.render("celebrities/new");
});

// Add element into the database
router.post('/', (req, res, next) => {
  console.log("Request body: ",req.body);
  const {name, occupation, catchPhrase} = req.body;
  
  Celebrity.create({name, occupation, catchPhrase})
  .then( (celeb) => {
    res.redirect("/celebrities");
  })
  .catch( (err) => console.log(err));
});

// Remove a element by ID
router.post('/:id/delete', (req, res, next) => {
  console.log("Request body: ",req.body);
  
  Celebrity.deleteOne(req.body.id)
  .then( (celeb) => {
    res.redirect("/celebrities");
  })
  .catch( (err) => console.log(err));
});


router.post('/add', (req, res, next) => {
  console.log(req.body);

  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then(book => {
      res.redirect('/books');
    })
    .catch(err => console.log(err));
});






// GET   /celebrities by id for detail
router.get('/:id', function(req, res, next) {
         
    Celebrity.findById(req.params.id)
    .then( (oneCelebrity) => {
        res.render("celebrities/show", { oneCelebrity })
    })
    .catch( (err) => console.log(err));
});


router.get('/', function(req, res, next) {
    Celebrity.find()
      .then(allCelebritiesFromDB => {
        res.render('celebrities', { allCelebritiesFromDB });
      })
      .catch(err => console.log(err));
  });

  

  module.exports = router;