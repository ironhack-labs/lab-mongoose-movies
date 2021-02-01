const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(dbUsers => {
      res.render('/celebrities/index', { dbUsers });
    })
    .catch(err => console.log(err));
});