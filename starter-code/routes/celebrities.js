const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');

/* GET celebrities*/
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", {celebrities: celebrities});
    console.log(celebrities);
  })
  .catch(error => {
    console.log(error);
  });
});

// CREATE new Celebrity FORM
router.get('/new', (req, res, next) => {
  res.render("celebrities/new");
});

// UPDATE details of a celebrity
router.post('/:id', (req, res, next) => {
  let newObj = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  console.log('Update celeb: newObj', newObj)
  
  Celebrity.findByIdAndUpdate(req.params.id, newObj)
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    console.log(error);
  });
});

// CREATE new Celebrity
router.post('/', (req, res, next) => {
  let newObj = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  console.log('post new celeb: newObj', newObj)
  let newCelebrity = new Celebrity(newObj);
  newCelebrity.save()
  .then(()=>{
    res.redirect("/celebrities");
  })
  .catch (err => {
    console.log(err);
    res.render("celebrities/new");
  });
});

// SHOW details of a celebrity
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/show", {celebrity: celebrity});
    console.log(celebrity);
  })
  .catch(error => {
    console.log(error);
  });
});


// DELETE a celebrity
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    console.log(error);
    next();
  });
});

// EDIT a celebrity
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch(err => {
    console.log(error);
    next();
  });
});



module.exports = router;
