const express = require("express");
const router = express.Router();
const celebrityModel = require("./../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then(celebrities => {
      res.render("celebrities/index", {
        celebrities
      });
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/:id", (req, res) => {
  console.log(req.params.id);
  celebrityModel
    .findById(req.params.id)
    .then(celebrity =>
      res.render("show", {
        celebrity
      })
    )
    .catch(err => console.log(err));
});

router.get("/new-celebrity", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new-celebrity", (req, res) => {
  console.log(req.body);

  celebrityModel
    .create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => console.log(dbErr));
});

router.post("/celebrities/:id/delete", (req, res) => {
  console.log(req.body);
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => console.log(dbErr));
});

router.get("/celebrity/:id/edit", (req, res) => {
  celebrityModel.findById(req.params.id).then(dbRes => {
    res.render("celebrities/edit", { celebrity: dbRes });
  });
});

router.post("/celebrity/:id/edit", (req, res) => {
  celebrityModel
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
