const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");


router.use("/celebrities", Celebrity);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = router;
