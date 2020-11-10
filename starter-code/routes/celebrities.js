const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
    .then((celebritiesFindDB) => res.render("./celebrities/index",{celebritiesFindDB}))
    .catch((err) => next(err))
  });

  router.get('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
    .then ((celebFromDb) => res.render("./celebrities/show", celebFromDb))
    .catch((err) => next(err))    
  });


module.exports = router;