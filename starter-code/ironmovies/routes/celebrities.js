var express = require('express');
var router = express.Router();
var Celebrity = require("../models/Celebrity.js");


/* GET users listing. */
router.get("/", (req,res)=>{
  Celebrity.find({}, (err, docs)=>{
    console.log(docs);
    //if(err) res.status(500).send(err);
    res.render("celebrities/index", {celebArray:docs});
  });
});



//
router.get('/new', (req, res, next) => {
    res.render("celebrities/new");

   });
   router.post('/', (req, res, next) => {
    console.log(req.body)
   })
   router.post('/', (req, res, next) => {
    // Iteration #3
    
    console.log(req.body)
    const celeb = new Celebrity({
        name:req.body.name,
        occupation:req.body.occupation,
        catchPhrase:req.body.catchPhrase,
    });
    celeb.save((err)=>{
        if (err) {
          res.render("celebrities/new")    
        } else{
          res.redirect("/celebrities")
        }
        });
    // celeb.save();
    // res.render("celebrities/new");
    });

   router.get("/:id", (req,res)=>{
    const id = req.params.id;
    Celebrity.findById(id, (err,doc) => {
        console.log(doc)
      res.render("celebrities/show", {celebs:doc});
    });
   });

module.exports = router;