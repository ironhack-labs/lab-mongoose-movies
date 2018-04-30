const Celebrity = require('../models/celebrity');
const express = require('express');
const celebrityRouter  = express.Router();


// List all celebrities
celebrityRouter.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities/index', {celebrity: celebrity})
  })
  .catch(error => {
    console.log("There is an error listing celebrities:", error);
  });
});


// Go to add page and create new celebrities
celebrityRouter.get('/add-new', (req, res, next) => {
  res.render('celebrities/add-new');
})

celebrityRouter.post('/create', (req, res) => {
  const newCelebrity = new Celebrity ({
    name : req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body. thePhrase
  })
  newCelebrity.save()
  .then(celebrity => {
  })
  .catch(theError => {res.redirect('/celebrities/new/') })
res.redirect('/celebrities')
})


// Edit
celebrityRouter.get('/edit/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
  .then(celebrity => {
    res.render('celebrities/edit-view', {celebrity: celebrity})
  })
  .catch(error => {
    console.log("There is an error editing celebrities:", error);
  })
})

celebrityRouter.post('/update/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndUpdate(celebrityId, {
    name : req.body.theEditedName,
    occupation: req.body.theEditedOccupation,
    catchPhrase: req.body. theEditedPhrase
  })
    .then(celebrity => {
    })
    .catch(error => {console.log("There is an error posting the updated information:", error) })
  res.redirect('/celebrities/'+ req.params.id)
})


// Delete
celebrityRouter.post('/:id/delete', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
  .then(celebrity => {
  })
  .catch(error => {
    console.log("There is an error deleting the celebrity:", error);
  })
  res.redirect('/celebrities')
})


// Find all the celebrity IDs
celebrityRouter.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
  .then(celebrity => {
    res.render('celebrities/show', {celebrity: celebrity})
  })
  .catch(error => {
    console.log("There is an error getting the celebrity details:", error);
  })
});


module.exports = celebrityRouter;