const express = require('express');
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
  res.render('index');
});

router.get("/index",(req, res, next) => {
  Celebrity.find().then(celebrities => {
    
    res.render("celebrities/index",{celebrities});
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;