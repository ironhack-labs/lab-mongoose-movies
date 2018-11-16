const express = require("express");
const router = express.Router();
const celebrities = require("../models/celebrity");


router.get("/celebrities", (req, res, next) => {
  celebrities.find()
    .then(celeb => {
      res.render("celebrities/index", { celeb });
    })
    .catch(e => {
      console.log("Error on router get celebrities", e);
      next();
    });
});


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});


router.get("/celebrities/:id", (req, res, next) => {
  celebrities.findById(req.params.id).then(celeb => {
    res.render("celebrities/show", { celeb } );
  })
});


router.get("/celebrities/:id/delete", (req, res, next) => {
  celebrities.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(e => {
      console.log("Error deleting celeb", e);
      next();
    });
});



router.get("/celebrities/:id/edit", (req, res, next) => {
  celebrities.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
    .catch(e => {
      console.log("Error editing celeb", e);
      next();
    });
});


router.post("/celebrities", (req, res, next) => {
  const celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrities.create(celeb)
    .then(() => res.redirect("/celebrities"))
    .catch(e => {
      console.log("Error creatin celeb", e);
      res.redirect("/celebrities/new")
    });
});


router.post("/celebrities/:id", (req, res, next) => {
  const celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrities.findByIdAndUpdate(req.params.id, celeb)
    .then(() => res.redirect("/celebrities/"))
    .catch(e => console.log("Error updating celeb", e));
});



module.exports = router;