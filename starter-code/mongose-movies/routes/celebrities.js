const express = require('express');
const Celebrity =require ('../models/celebrity');
const router = express.Router();

/* GET Celebrities listing. */
router.get('/celebrities', (req, res, next)=> {
  Celebrity.find({},(err,data)=>{
    if(err){
      return next(err);
    }
    console.log("/celebrities GET");
    res.render('celebrities/index',{data : data});
  });
});
module.exports = router;
