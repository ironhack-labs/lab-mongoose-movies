const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//gets celebrity data from db and renders on success
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);

      //grabbing index.hbs from celebrities folder in views
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      console.log("ERROR: Data could not be loaded", err);
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/celebrityForm");
});

router.post("/celebrities", (req, res, next) => {
  // const celebrityQuery = req.body;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase }).then(() => {
    console.log("Celebrity was added successfully.");
    res.redirect("/celebrities").catch(err => {
      // res.render("new", err);
      console.log(err);
      next(err);
    });
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;
  //   console.log(celebId);
  Celebrity.findById(celebId)
    .then(data => {
      console.log(data);
      res.render("celebrities/show", { data });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const celebId = req.params.id;
  //   console.log(celebId);
  Celebrity.findByIdAndRemove(celebId)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
