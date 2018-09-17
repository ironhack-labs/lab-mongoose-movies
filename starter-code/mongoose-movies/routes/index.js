const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/prueba', (req, res, next) => {

//   res.render("prueba", {cat: "celebrities", status: "rich"});

// });

module.exports = router;
