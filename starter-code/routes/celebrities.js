const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// READ 
router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrities) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/:id', (req,res,next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId).exec((err,celebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { celebrity: celebrity });
  })
})

// CREATE
router.get('/new', (req, res) => {
  console.log("new")
  res.render('celebrities/new');
});

// router.post('/new', (req, res) => {
//   const {name,occupation,catchPhrase} = req.body;
//   const celebrity = new Product({name,occupation,catchPhrase});
//   product.save( err => {
//     if (err) { return next(err) }
//     res.redirect('/');
//   })
// });

module.exports = router;