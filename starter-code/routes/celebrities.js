const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");


router.get("/",(req,res)=>{
    Celebrity.find()
.then(celebrities =>{
  res.render("celebrities", {celebrities});
})
.catch(err=>{
  console.log(err);
})
});

router.get("/detail/:id",(req,res)=>{
    const {id} = req.params;
    Celebrity.findById(id)
.then((celebrity) =>{
  res.render("detailcelebrities",celebrity);
})
.catch(err=>{
  console.log(err);
})
});

router.get("/new",(req,res)=>{
    res.render("newcelebrity");
  });

router.post("/new",(req,res)=>{
    console.log(req.body);
    Celebrity.create(req.body)
    .then(()=>{
    res.redirect("/celebrities")})
    .catch(err=>{
        console.log(err)
    })
    });

router.get("/:id/edit",(req,res) =>{
    const {id} = req.params;
     Celebrity.findById(id)
     .then(celebrity=>{ ;
       res.render("newcelebrity",celebrity);
     })
   });

router.post("/:id/edit",(req,res) =>{
    const {id} = req.params;
     Celebrity.findByIdAndUpdate(id,{$set:{...req.body}}) 
     .then(celebrity =>{
       console.log(celebrity)
       res.redirect(`/celebrities`)
     })
   })


router.post("/detail/:id",(req,res)=>{
    const {id} = req.params;
    console.log(id);
    Celebrity.findByIdAndDelete(id)
    .then(celebrity =>{
        console.log(celebrity)
        res.redirect(`/celebrities`)
      })
})

module.exports = router;
