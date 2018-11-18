const express = require('express');
const router  = express.Router();



// const celebrities = require('./celebrities/index');
// router.use('/celebrities', celebrities);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities/', (req,res,next) => {
//   res.render('celebrities/index');
// })

module.exports = router;
