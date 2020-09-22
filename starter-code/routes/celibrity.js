const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
  console.log("F**k me i'm celebrity");
});

module.exports = router;