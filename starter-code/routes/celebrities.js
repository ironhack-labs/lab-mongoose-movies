const express = require('express');
const router  = express.Router();
const celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  celebrity.findOne({'_id':celebrityId})
    .then(celebrity => {
      // console.log(celebrities);
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.get('/new', (req, res) => {
  res.render("celebrities/new");
});

router.post('/', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new celebrity ({name, occupation, catchPhrase});
  newCelebrity.save()
  .then(celebrity => {
    // console.log(celebrities);
    res.redirect("/celebrities");
  })
  .catch(error => {
    console.log(error);
    next();
  })
})

module.exports = router;