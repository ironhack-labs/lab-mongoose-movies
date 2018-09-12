const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  // res.render('index');
  // console.log(req.user) // req.user contains _id username & password
  res.render('index', {message: req.flash('success')}); // message set up from app.js
});

module.exports = router;
