const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrities =>{
        console.log(celebrities)
      res.render('./celebrities/index', {celebrities})
    })
    .catch(err =>{
        console.log(err)
    })
  } )

  router.get('/celebrities/:id',(req, res, next) => {
      let celebrityId = req.params.id;
      Celebrity.findOne({"_id": celebrityId})
      .then(celebrity => {
          console.log('celebrity')
          res.render('celebrities/show', celebrity)
      })
      .catch(err => {
          console.log(err)
      })
  })

  router.get('/new', (req, res, next) => {
    res.render("celebrities/new")
  });

  router.post('/new', (req, res) => {
    const {name,occupation,description} = req.body;
    const product = new Product({name,occupation,description});
    product.save( err => {
      if (err) { return next(err) }
      res.redirect('/');
    })
  });
  

module.exports = router;