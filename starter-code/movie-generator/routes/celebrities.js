var express = require('express');
var router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/celebrities',(req,res,next) =>{
  Celebrity.find({},(err,celebrities)=>{
    if(err){
      next(err);
    }
    res.render('index',{celebrities: celebrities,
      title: "My celebrities"});
  });

});

module.exports = router;
