const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log("Celebrities get success");
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      console.log("Error finding celebrities");
    });
});
router.get("/new", (req, res, next) => {
  console.log("New celebrity");
  res.render("celebrities/new");
});
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log("Celebrity get success");
      res.render("celebrities/detail", celebrity);
    })
    .catch(err => {
      console.log("Error finding celebrity");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      console.log("Celebrity remove success");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Error finding celebrity");
    });
});
router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then(data => {
    console.log("Celebrity updating");
    res.render("celebrities/edit", data);
  });
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  new Celebrity({
    name,
    occupation,
    catchPhrase
  })
    .save()
    .then(celebrity => {
      console.log("Celebrity added success");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Error saving celebrity");
    });
});
router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })

    .then(celebrity => {
      console.log("Celebrity update success");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Error saving celebrity");
    });
});

module.exports = router;
