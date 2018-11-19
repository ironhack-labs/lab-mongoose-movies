const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log("hola");
  res.render('index');
});

module.exports = router;
