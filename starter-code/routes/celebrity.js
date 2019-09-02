const express = require("express");
const router  = express.Router();
const CelebrityModel = require("./../models/celebrity");

router.get("/", (req, res, next)=> {
  CelebrityModel.find().then(dbRes =>res.render("celebrities/index", {celebrities : dbRes})).catch(err => {next(err)});
})

router.get("/new", (req, res)=> {
  res.render("celebrities/new");
});

router.get("/:id", (req, res, next) =>{
  CelebrityModel.findOne({_id: req.params.id}).then(dbRes => {
    res.render("celebrities/show", {celebrity: dbRes});
    
  }).catch(err=>console.log(err))}
);

router.get("/:id/edit", (req, res, next) =>{
  CelebrityModel.findOne({_id:req.params.id}).then(dbRes=> {
    res.render("celebrities/edit", {celebrity: dbRes})
  })
  .catch(err => console.log(err))
});

router.post("/", (req, res)=> {
  var infos = req.body
  const celebrity = new CelebrityModel(infos);
  celebrity.save().then(dbRes => {
   res.redirect("/celebrities")
  })
  .catch(err =>
    res.render("celebrities/new")
  )
});

router.post("/:id/delete", (req, res)=>{
  console.log("coucou", req.params.id);
  
  CelebrityModel.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrities")
  })
  .catch(err => console.log(err))
})

router.post("/:id", (req, res)=> {
  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    cachPhrase: req.body.cachPhrase
  }
  CelebrityModel.findOneAndUpdate({_id: req.params.id}, newCelebrity)
  .then(dbRes => res.redirect("/celebrities"))
  .catch(err => console.log(err))
})

module.exports = router;