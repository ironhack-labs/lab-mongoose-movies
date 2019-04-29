const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebrity => {
    res.render("celebrities", { celebrity });
  });
});

router.post("/celebrities", (req, res, next) => {
  let newCelebrity = new Celebrity(req.body);
  newCelebrity
    .save()
    .then(celebrity => {
      console.log("New Celebrity Added", celebrity);
    })
    .catch(err => {
      console.error(err);
    });
  res.redirect("/celebrities");
});
router.get("/celebrities/new", (req, res, next) => {
  // res.json({ status: true });
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  // res.json(req.params.id);
  Celebrity.findById(req.params.id).then(celeb => {
    res.render("celebrities/edit", { celeb });
  });
});

router.post("/celebrities/:id", (req, res, next) => {
  // res.json(req.body);
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(celeb => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error(err);
    });
});
module.exports = router;
