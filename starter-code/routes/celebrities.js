const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

/* GET home page */
router.get(
  "/",
  (req, res, next) => {
    console.log("Reached Celebrity page");
    next();
  },
  (req, res, next) => {
    Celebrity.find()
      .then(celebrity => {
        res.render("celebrities/index", { celebrity });
      })
      .catch(e => next(e));
  }
);

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityEdit => {
      res.render("celebrities/edit", { celebrityEdit });
    })
    .catch(e => next(e));
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityId => {
      res.render("celebrities/show", { celebrityId });
    })
    .catch(e => next(e));
});

router.post("/add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(celeb => {
      console.log(`${celeb} created.`);
      res.redirect("/celebrities");
    })
    .catch(e => next(e));
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(e => next(e));
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  // Here the '_id' is necessary instead of 'id', otherwise it will not work..
  Celebrity.updateOne({_id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then(() => res.redirect("/celebrities"))
    .catch(e => next(e));
});

module.exports = router;
