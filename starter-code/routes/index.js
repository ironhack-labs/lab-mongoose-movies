const express = require('express');
const router  = express.Router();

const {
  getCelebrities, getCelebrity
} = require("../controllers/celebrities.controller");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
}).get("/celebrities",getCelebrities)
  .get("/celebrities/:CelebrityId", getCelebrity);

module.exports = router;
