const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");





router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {
      celebrities: celebrities
    }))
    .catch(err => console.log(`error getting the data from db ${err}`))
});


router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrities => {
      res.render('celebrities/show', celebrities)
    })
    .catch(res.redirect('/celebrities', {

    }));
});


// router.get('/', (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       res.json(celebrities);
//     })
// });

module.exports = router;