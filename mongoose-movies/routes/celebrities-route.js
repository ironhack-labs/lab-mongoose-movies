const express        = require('express');
const Celebrity      = require('../models/celebrity-model.js');
const router         = express.Router();

router.get('/celebrities',(req, res, next)=>{
  Celebrity.find((err, celebrityList)=>{
    //is like a db.find
    //.find will give you an array of objects even if theres only one thing in the database
    //productList comes from the database
      if(err){
        next(err);
        //delegating this to the error handler
        return;
        //return to avoid doing an else
        //next is a function that you can call to evoke the next middleware in line
      }
    res.render('celebrities/celebrities-list-view.ejs',{
      celebrities: celebrityList
    });
  });
});

module.exports = router;
