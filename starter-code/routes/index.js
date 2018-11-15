const express = require('express');
const router  = express.Router();

/* GET home page */

// router.get('/homepage', (req, res, next)=>{
//   res.render('homepage')
// })

router.get('/', (req, res, next) => {
  res.render('homepage');
});

module.exports = router;
