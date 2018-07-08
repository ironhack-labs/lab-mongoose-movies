const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> List all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).sort({name: 1}).then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});
  });
});

/* (C)RUD: Add a celebrities form */
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* (C)RUD: Create the celebrity in DB */
router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
  .save().then(celebrities => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* CR(U)D: Update the celebrity, show update form  */
router.get('/celebrities/edit/:id', (req,res) => {
  Celebrity.findById(req.params.id).then(celebrities => {
    res.render('celebrities/edit',{celebrities});
  });
});

///* CR(U)D: Update the celebrity in DB */
router.post('/celebrities/edit/:id', (req,res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name, occupation, catchPhrase})
  .then( celebrities => {
    res.redirect('/celebrities');
  });
});

/* CRU(D): Update the deleted Celebrity in DB */
router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
});

/* C(R)UD: Retrieve -> List the choosen celebrity */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/show', {celebrities});
  });
});

module.exports = router;
