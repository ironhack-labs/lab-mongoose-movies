const express = require("express");
const Celebrity = require("../models/Celebrity.model.js");
const router = express.Router();

//SHOW CELEBS INDEX
router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => console.error(error));
});


//ADDING CELEB
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() =>  {
      res.redirect("/celebrities")
    })
    .catch((error) => res.render("celebrities/new", { error }));
});

//DELETE CELEB
router.post("/:id/delete", (req, res, next) => {
  const {id} = req.params;
  Celebrity.findByIdAndRemove(id)
  .then (() => {
    res.redirect("/celebrities")
  })
  .catch(error => next(error))
})

//EDIT CELEB
router.get("/:id/edit", (req, res, next) => {
  const {id} = req.params;
  Celebrity. findById(id)
  .then((celebrity) => {
    res.render("celebrities/edit", celebrity);
  })
  .catch((error) => res.render("celebrities/edit",{error}));
})

router.post("/:id", (req, res, next) => {
  const {id} = req.params;
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
  .then(() => {
    res.redirect("/celebrities")
  })
  .catch((error) => console.error(error));
})


//SHOW CELEB DETAIL
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render("celebrities/show", celebrity);
    })
    .catch((error) => console.error(error));
});

module.exports = router;
