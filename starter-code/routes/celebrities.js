const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')




//Celebrities routes

//show index
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
        res.render('celebrities/index', { celebrities });
    })
    .catch(err => console.log(err));
});
// show all
router.get('/celebrity/:celebrityID', (req, res) => {
  const celebrity = req.params.celebrityID;
  Celebrity.findById(celebrity)
      .then(celebrity => {
          // console.log(celebrity);
          res.render('celebrities/show', celebrity);
      })
      .catch(err => console.log(err));
});

// go to edit page
router.get('/celebrity/:celebrityID/edit', (req, res) => {
  const celebrity = req.params.celebrityID;
  Celebrity.findById(celebrity)
      .then(celebrity => {
          
          res.render('celebrities/edit', celebrity);
      })
      .catch(err => console.log(err));
});

// recieve edit info and update
router.post('/celebrity/:celebrityID/edit', (req, res, next) => {
  const { id, name, occupation, catchPhrase } = req.body;
  console.log({ id});
  Celebrity.updateOne({_id: id}, { $set: { name, occupation, catchPhrase }})
  .then(() => {
    console.log(id);
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});
// delete 
router.post('/celebrity/delete', (req, res) => {
  const {id} = req.body;
  
  Celebrity.findByIdAndRemove(id)
      .then(celebrity => {
          
          res.redirect('/celebrities');
      })
      .catch(err => console.log(err));
});

// go to new page
router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new");
});

// recieve new info and create
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  // console.log(req.body);
  const newCeleb = new Celebrity({ name, occupation, catchPhrase })
  
  newCeleb.save()
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch((error) => {
          console.log(error);
      })
});


module.exports = router;
