var express = require('express');
var router = express.Router();
const Celebrity = require("../models/Celebrity.js")



//route for list view
  router.get('/', (req, res)=> {
    Celebrity.find({},(err,docs)=>{
        if(err){
          res.render("error");
        }else{
            res.render("celebrities/index",{celebridades:docs});
         }
    });
  });

  router.get('/details/:id', (req, res)=> {
    const id=req.params.id;
      Celebrity.findById(id,(err,doc)=>{
      res.render("celebrities/details",{celebridad:doc});
    });
  }); 
  


module.exports = router;
