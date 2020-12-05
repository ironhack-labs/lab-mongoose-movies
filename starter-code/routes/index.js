const express = require('express');
const router  = express.Router();

const {
  getCelebrities
} = require("../controllers/celebrities.controller");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
}).get("/celebrities",getCelebrities);

module.exports = router;
