const express = require('express');
const router  = express.Router();
const celibrityRoute = require("./celebrities");
const movieRoute = require("./movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

celibrityRoute(router);
movieRoute(router);

module.exports = router;


