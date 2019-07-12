const express = require('express');
const router  = express.Router();
const upload = require('../model/Fileupload');


router.get('/upload',(req,res,next)=>{
  res.render('upload');
})













module.exports = router;