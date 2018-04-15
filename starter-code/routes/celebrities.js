require("dotenv").config();

const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/Celebrity")


//----------GET CELEBRITY INDEX------------

router.get("/index",(req, res, next) => {
  Celebrity.find().then(celebrities => {
    
    res.render("celebrities/index",{celebrities});
  })
  .catch(err => {
    console.log(err);
  });
});

//----------CELEBRITIES ADD------------

router.get("/new", (req, res, next) => {
  res.render("celebrities/new",)
});

router.post("/new", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celebrityNew = new Celebrity({name, occupation, catchPhrase});

  celebrityNew
  .save()
  .then(celebrityNew => {
    res.redirect("/celebrities/index");
  })
  .catch(err =>{
    res.render("celebrities/new")
  });
});


//-----------CELEBRITY DETAILS---------

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/show", {celebrity});
  })
  .catch(err => {
    console.log(err);
  });
});

//-----------DELETE CELEBRITY--------------

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/celebrities/index");
  })
  .catch(err => {
    res.render("error", err);
  });
});

//----------EDIT A CELEBRITY---------------

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch(err => {
    res.render("error", err);
  });
});

router.post("/:id/edit", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celebrityEdited = {name, occupation, catchPhrase};
  Celebrity.findByIdAndUpdate(req.params.id, celebrityEdited)
    .then(() => {
      res.redirect("/celebrities/index");
    })  
    .catch(err => {
      res.render("error", err);
    });

});


module.exports = router;