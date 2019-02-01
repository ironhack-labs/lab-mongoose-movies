const express = require('express');

const celebritiesRouter = express.Router();

const CelebrityModel = require('../models/Celebrity');

celebritiesRouter.get('/celebrities/:id', (req, res, next) => {
  const celetribyId = req.params.id;
  CelebrityModel.findOne({ _id: celetribyId })
    .then((celebrity) => {
      res.render('celebrity-details', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = celebritiesRouter;
