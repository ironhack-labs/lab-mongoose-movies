const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> List all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then( celebrities => {
    res.render('celebrity/list', {celebrities});
  })
  .catch(err => {console.log("Error!!!")})
});


/* (C)RUD: Add a celebrity form */
router.get('/celebrities/add', (req, res, next) => {
  res.render('celebrity/add');
});

/* (C)RUD: Create the celebrity in DB */
router.post('/celebrities/add', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
  .save().then( celebrity => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  });
});

/* CR(U)D: Update the celebrity, show update form  */
router.get('/celebrities/edit/:id', (req,res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrity/edit',{celebrity});;
  })
})

/* CR(U)D: Update the celebrity in DB */
router.post('/celebrities/edit/:id', (req,res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name, occupation, catchPhrase})
      .then( celebrity => {
        res.redirect('/celebrities')
      })
})

/* CRU(D): Update the celebrity in DB */
router.get('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})


/* C(R)UD: Retrieve -> Get a celebrity */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then( celebrity => {

      console.log(celebrity);
      res.render('celebrity/detail', {celebrity});
    })
  });

module.exports = router;
