const express = require("express");
const router = express.Router();

const Celeb = require("../models/celebrity");

// show all celebrities

router.get("/", (req, res, next) => {
  Celeb.find().then((celebs) => {
    let obj = { allCelebs: celebs };

    res.render("celebrities/index", obj);
    // .catch((err) => console.log("Error while doing something", error));
  });
});

router.get("/:identifier", (req, res, next) => {
  Celeb.findById(req.params.identifier).then((celeb) => {
    console.log("One celeb is " + celeb);

    res.render("celebrities/show", { oneCeleb: celeb });
  });
});

router.get("/new", (req, res) => {
  res.render("celebrities/new")
});


module.exports = router;


// router.post("/", (req, res, next) => {
  
//   let newCel = new Celeb({name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase})

//   newCel.save().then(() => {
//     res.redirect("celebrities/index")
//   })

// })

