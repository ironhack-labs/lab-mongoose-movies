const express = require('express');
const router  = express.Router();

// require Celebrity model in order to use it for CRUD
const Celebrity = require("../models/Celebrity");


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity
    .find() // ALWAYS RETURNS AN ARRAY
    .then(celebritiesFromDB => res.render("celebrities/celebrities", { celebrities: celebritiesFromDB}))
    .catch(err => console.log("Error while getting the authors from the DB: ", err()))
});

/* GET celebrity form */
router.get("/celebrities/add", (req, res, next) => {
  res.render("../views/celebrities/new-celebrity.hbs")
})

/* POST celebrity */
router.post("/celebrities/create", (req, res, next) => {
  // the "value" from option gets saved inside req.body object
  console.log("THE FORM:", req.body)
  Celebrity
    .create(req.body)
    .then( aNewCelebrity => console.log("new celebrity: ", aNewCelebrity,
    res.redirect('/celebrities'))) // redirect user to the celebrity/list 
    .catch(err => console.log("error creating author: ", err,
    res.render("../views/celebrities/new-celebrity.hbs")))
});

// in order to use routes anywhere else in this application, we have to export them
module.exports = router;
