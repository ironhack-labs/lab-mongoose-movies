const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity
    .find({})
    .then((celebrities) => {
      // res.json(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  var celebrityId = req.params.id
  Celebrity
    .findById({ "_id": celebrityId })
    .then((celebrity) => {
      res.json(celebrityId);
      console.log(celebrity);
      res.render("celebrities/show", { celebrity })
    })
    .catch((err) => {
      console.log(err);
    });
});








module.exports = router;







