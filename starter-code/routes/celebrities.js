const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities/index", { celebrities });
  });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render("celebrities/show", celebrity))
    .catch(() => next());
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => res.redirect("/celebrities"))
    .catch(() => res.redirect("/celebrities/new"));
});

router.post('/:id/delete', (req,res,next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities'))
  .catch((err) => {
    console.log(err);
    next();
  })
})

module.exports = router;
