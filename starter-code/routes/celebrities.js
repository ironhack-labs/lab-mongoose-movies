const express = require('express');
const router = express.Router();
const Celebritie = require('../models/Celebritie');

console.log("entramos");
/* CRUD -> READ ALL */
router.get('/celebrities', (req, res, next) => {
  Celebritie.find().exec((err, celebrities) => {
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});


module.exports = router;