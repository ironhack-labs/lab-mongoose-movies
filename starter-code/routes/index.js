const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index' , {message : req.flash('error')});
});




router.get('/api-users', (req, res, next)=>{

  res.render('api-users')
  
  })


module.exports = router;
