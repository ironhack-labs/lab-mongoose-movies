var express = require("express");
var router = express.Router();
const Celebrity = require("./../models/celebrity");

// GET     /celebrity
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        allCelebrities: allCelebrities,
      };
      console.log("celebrities", data);
      res.render("celebrities/index", data);
    })
    .catch((err) => next(err));
});

// GET     /celebrities/:id
router.get("/:id/get", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      console.log("celebrity data -->>>", celebrity);
      res.render("celebrities/show", celebrity);
    })
    .catch((err) => next(err));
});

// POST     /celebrities/:id/delete
router.post("/:id/delete", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then((celebrity) => {
      console.log("deleted!", celebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => next(err));
});

// GET /celebrities/add
router.get("/add", (req, res, next) => {
  res.render("celebrities/add");
});

// POST     /celebrities/write
router.post("/write", (req, res, next) => {
  const data = req.body;
  console.log(data);
  Celebrity.create(data)
    .then((celebrity) => {
      console.log("added: ", celebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => next(err));
});

module.exports = router;
