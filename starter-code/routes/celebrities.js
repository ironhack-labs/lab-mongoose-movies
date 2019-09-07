const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

/* GET celebrities index page */
router.get("/", (req, res, next) => {
  Celebrities.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET celebrities new page */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

/* Get Edit Page*/
router.get("/:celebrity_id/edit", (req, res, next) => {
  Celebrities.findOne({ _id: req.params.celebrity_id })
    .then(celebrityDetailEdit => {
      res.render("celebrities/edit", celebrityDetailEdit);
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET celebrities details page */
router.get("/:celebrity_id", (req, res, next) => {
  Celebrities.findOne({ _id: req.params.celebrity_id })
    .then(celebrityDetail => {
      res.render("celebrities/show", celebrityDetail);
    })
    .catch(error => {
      console.log(error);
    });
});

/*Create new Celebrity*/
router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrities({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(celebritiy => {
      res.redirect("celebrities/");
    })
    .catch(error => {});
});

router.post("/:celebrity_id/delete", (req, res, next) => {
  Celebrities.findByIdAndRemove({ _id: req.params.celebrity_id })
    .then(celebritiy => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/:celebrity_id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.update(
    { _id: req.params.celebrity_id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
