//Iteration 2 -- I am not doing the part of the iteration where I should call the error with next
// As i have a /celebrities/: I cant create a /celebrities/new. I had to create a /new
// Iteration 4 -- I am not checking if the field are complete while creating a celebrity to throw an error
// Iteration 4 -- Save method?

const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebritiesFromDB => {
    // console.log(celebritiesFromDB)
    res.render("celebrities/index", {
      celebrities: celebritiesFromDB
    });
  });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  let details = req.params.celebrityId;
  console.log("DEBUG-The id for this celebrity is:" + details);
  Celebrity.findById(details).then(detailsfromDb => {
    res.render("celebrities/show", {
      details: detailsfromDb
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
  .then(celebrityCreated => {
    console.log("The name of the created celebrity is", celebrityCreated.name);
    res.redirect("/celebrities");
  })
  .catch(err => {
    console.log("An error happened", err);
    res.redirect("/celebrities"); // Not perfect: it redirects the user to the form again without any feedback
  });
});

router.post("/:id/delete",(req,res,next)=>{
  let celebrityId= req.params.id
  Celebrity.findByIdAndRemove(celebrityId).then(()=>{
    res.redirect("/celebrities")
  })
})

module.exports = router;
