const express = require('express');
const router  = express.Router();

const title = "Celebrities and Movies";

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title});
});

module.exports = router;
