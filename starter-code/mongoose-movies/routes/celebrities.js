const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", {celebrities})
    })
});

module.exports = router;
