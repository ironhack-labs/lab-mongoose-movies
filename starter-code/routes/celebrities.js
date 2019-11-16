const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celebrities = require("../Models/Celebrity")
const hbs = require('hbs');
const path = require('path');


// router.set('views', path.join(__dirname, 'views'));
// router.set('view engine', 'hbs');
// router.use(express.static(path.join(__dirname, 'public')));
// router.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// mongoose
//   .connect('mongodb://localhost/RandomCollection', {
//     useNewUrlParser: true
//   })
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then(celebrityInDB => {
      console.log(celebrityInDB)
      res.render('celebrities/index', {
        celebrityInDB
      });
    });
    // .catch(error =>{
      
    // } )
});

module.exports = router;