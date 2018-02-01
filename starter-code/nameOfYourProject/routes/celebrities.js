"use strict";

const express = require('express');
const router = express.Router();

// require the Celebrity model here
const Celebrity = require('../models/celebrity');


// router.get("/", (req, res) => {
//     res.redirect('/celebrities');
//   });

router.get('/celebrities', (req, res, next) => {
  // Iteration #2
  
  Celebrity.find({},(err, celebArray) => {
    if (err) {
      return next(err);
    } else {
      let celebObject = {celebritiesList: celebArray};
      res.render('celebrities/index', celebObject);
    }
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  // Iteration #2
   let parsedName = req.params.id;

  Celebrity.findOne({name:parsedName},(err, celebMatch) => {
    if (err) {
      return next(err);
    } else {
      let celebCandidate = {nameMatch: celebMatch};
      res.render('celebrities/show', celebCandidate);
    }
  });
});



module.exports = router;