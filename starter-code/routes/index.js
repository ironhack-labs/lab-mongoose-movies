const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next)=> {
  CelebrityModel.find().then(dbRes =>res.render("celebrities/index", {celebrities : dbRes})).catch(err => {next(err)});
})

router.get("/celebrities/new", (req, res)=> {
  console.log("qq chose")
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) =>{
  CelebrityModel.findOne({_id: req.params.id}).then(dbRes => {
    res.render("celebrities/show", {celebrity: dbRes});
    
  }).catch(err=>console.log(err))}
);



router.post("/celebrity", (req, res)=> {
  var msg;
  var newCelebrity ={name:req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase}
  if(req.body.name !== "" && req.body.occupation !== "" && req.body.catchPhrase !== ""){
  CelebrityModel.create(newCelebrity)
  .save().then(dbres =>
    msg = "Celebrity created !"
    res.render("celebrities/new", {msg})
  )
  .catch(err =>
    console.log(err)
  )
}
else{
  msg = "Fill all the fields";
  res.render("celebrities/new", {msg})
})

module.exports = router;
