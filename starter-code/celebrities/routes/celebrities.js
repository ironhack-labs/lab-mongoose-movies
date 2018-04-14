const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities", { celebrities });
  });
  // console.log("LA NAVE DEL MISTERIO VA")
});

//Show the form to  a new celebrity
router.get("/new", (req, res, next) => {
  res.render("new");
});

//add the new celebrity
router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });

  celebrity.save().then(celebrity => {
    // console.log(`SE HA AÑADIDO LA CELEBRITY ${{celebrity}}`)
    res.redirect("/celebrities");
  });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("edit", celebrity);
  });
});

router.post("/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates =  { name, occupation, catchPhrase } 
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(celebrity => {
    console.log(req.body.params);
    res.redirect("/detail")
  });
});

router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id).then((err, celebrity) => {
    console.log(celebrity);
    console.log(`SE HA BORRADO LA CELEBRITY ${celebrity.name}`);
    res.redirect("/celebrities");
  });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("detail", celebrity);
  });
  // console.log("LA NAVE DEL MISTERIO VA")
});

module.exports = router;
