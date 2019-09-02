const express = require('express');
const router  = express.Router();
const celebritiesModel = require("./../models/celebrities.js");


router.get("/celebrities", (req,res)=>{
  celebritiesModel.find({})
  .then (dbRes => {
    console.log("celebrities found")
    res.render("celebrities/index", {celebrities : dbRes, title: "celebrities"});
})
.catch ( dbErr => console.log("no celebrities found", dbErr))
  //res.render("not-found"); 
})


router.get("/celebrities/:id", (req, res)=>{
  const celebrityFound = celebritiesModel.findOne({"_id" : req.params.id})
  .then (dbRes => {
    console.log("celebrity " + dbRes.name + " has been found")
    console.log(dbRes)
    res.render("celebrities/show", {celebrity : dbRes});
  })
  .catch (dbErr => console.log ("there have been an error", dbErr))
})

router.get("/celebrities/:id/delete", (req, res)=>{
  const celebrityFound = celebritiesModel.findByIdAndRemove({"_id" : req.params.id})
  .then (dbRes => {
    console.log("celebrity " + dbRes.name + " has been deleted")
    res.redirect("/celebrities")
  })
  .catch (dbErr => console.log ("there have been an error", dbErr))
})


router.get("/newCelebrity", (req, res) => {
  res.render("celebrities/new")
});


router.post("/celebrity", (req,res) =>{
  console.log("req.body");
  console.log(req.body);
  let celebrity = new celebritiesModel;
  if (req.body.name !==""){
    celebrity.name =req.body.name;
    celebrity.occupation= req.body.occupation;
    celebrity.catchPhrase = req.body.catchPhrase;
    celebrity.save()
    .then( () =>{
      res.redirect("/celebrities");
    })
  }else {
    console.log("the field name is mandatory, please fill it")
  }
});

router.get("/celebrities/:id/edit", (req, res)=>{
  const celebrityFound = celebritiesModel.findOne({"_id" : req.params.id})
  .then (dbRes => {
    console.log("celebrity " + dbRes.name + " has been found")
    res.render("celebrities/edit", {celebrity : dbRes, title: "Celebrities Edition"})
  })
.catch (dbErr => console.log ("there have been an error", dbErr))
});


router.post("/celebrity/:id", (req,res) =>{
  console.log("req parameters")
  console.log(req.params.id);
  console.log(req.body);
  const celebrity = { 
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase 
  }
  celebritiesModel.findOneAndUpdate({ _id: req.params.id }, celebrity) 
    .then(dbRes => {
     console.log("update ok", dbRes);
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.log("there have been an error", dbErr);
    });
});

module.exports = router; 