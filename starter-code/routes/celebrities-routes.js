const express = require('express');
const router  = express.Router();

// Require the model for it to be accessible in the route
const Celebrity = require('../models/celebrity.js');

/* GET celebrity page */
router.get('/celebrities', (req, res) => {
    res.render('celebrities/celebrities');  
});

/* GET new celebrity page */
router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new-celebrity'); 
});

// ADDING a new celebrity to db
router.post('/celebrities/create', (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity({name, occupation, catchPhrase})
    
    //Book.create() if you use the class and .save() if you use the instance
    newCeleb.save()
    .then(  celebrity => {
        res.redirect('/celebrities');
    })
    .catch(error => {
        res.render('celebrities/new-celebrity'); 
        console.log(`An error occurred: ${error}`);
    });
  
  })
  
module.exports = router;