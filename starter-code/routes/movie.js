const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
  console.log("F**k it's my movie");
});

module.exports = router;