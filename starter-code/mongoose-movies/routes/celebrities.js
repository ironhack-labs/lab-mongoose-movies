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

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then( celebrities => {
      res.render("celebrities/index", {celebrities});
    })
    .catch( error => {
    })
});

// GET detail
router.get("/:id", (req, res, next) => {
  Celebrity.findById( req.params.id)
    .then( celebrity => {
      res.render("celebrities/show", {celebrity} );
    })
});



module.exports = router;
