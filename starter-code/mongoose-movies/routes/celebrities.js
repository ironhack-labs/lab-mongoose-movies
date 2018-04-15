const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

// GET new celebrity
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

// POST new celebrity
router.post("/", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celebrity = new Celebrity({name, occupation, catchPhrase});

  celebrity.save()
    .then( celebrity => {
      console.log(celebrity);
      res.redirect("/celebrities");
    })
    .catch( () => {
      res.render("celebrities/new");
    })
});

// POST delete
router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove( req.params.id )
    .then( () => {
      res.redirect("/celebrities");
    })
    .catch( err => {
      next();
      return err;
    })
});

// GET edit
router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById( req.params.id )
    .then( (celebrity) => {
      res.render("celebrities/edit", {celebrity});
    })
    .catch( err => {
      next();
      return err;
    })
});

// POST edit
router.post("/:id", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const updates = {name, occupation, catchPhrase};
  Celebrity.findByIdAndUpdate(req.params.id, updates)
    .then( () => {
      res.redirect("/celebrities");
    })
    .catch( err => {
      next();
      return err;
    })
});

// GET detail
router.get("/:id", (req, res, next) => {
  Celebrity.findById( req.params.id)
    .then( celebrity => {
      res.render("celebrities/show", {celebrity} );
    })
    .catch( err => {
      next();
      return err;
    })
});

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then( celebrities => {
      res.render("celebrities/index", {celebrities});
    })
    .catch( err => {
      next();
      return err;
    })
});


module.exports = router;
