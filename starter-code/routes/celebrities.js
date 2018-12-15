const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      //console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});

/* ADD new celebrities - GET */
router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new");
});

/* ADD new celebrities - POST  */
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

/* EDIT Documents */
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id})
  .then((celebrity) => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch((error) => {
    console.log(error);
  })
});



/* GET celebrities details page */
router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({_id: celebrityId})
    .then(celebrity => {
      res.render("celebrities/show", { celebrity })
    })
    .catch(error => {
      console.log(error)
    })
});

/* POST route to delete celebrity */
router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove({_id: celebrityId})
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error)
    })
});

/* POST route to edit celebrity */
router.post('/celebrities/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate({_id: req.params.id}, {name, occupation, catchPhrase})
  // Celebrity.update({_id: req.params.id}, { $set: {name, occupation, catchPhrase }})
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
