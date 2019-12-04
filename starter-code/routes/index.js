const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(allCelebs => {
      res.render("allcelebrities", { theCelebs: allCelebs });
    })
    .catch(err => {
      next(err);
    });
});
router.get("/celebrities/new", (req, res, next) => {
  res.render("new");
});
router.post("/celebrities", (req, res, next) => {
  let varr = { ...req.body };
  Celebrity.create(varr)
    .then(rrr => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/celebrities/new");
      next(err);
    });
});

module.exports = router;
