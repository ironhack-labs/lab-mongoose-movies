const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

// Index celebrities
router.get("/", (req, res) => {
  Celebrity.find()
    .then((allCelebrities) =>
      res.render("celebrities/index", { allCelebrities })
    )
    .catch((err) => console.log(`An error has ocurred: ${err}`));
});

// Celebrity details
router.get("/detail/:id", (req, res) => {
  const id = req.params.id;

  Celebrity.findById(id)
    .then((celebrityDetails) =>
      res.render("celebrity-details", celebrityDetails)
    )
    .catch((err) => console.log(`An error has ocurred: ${err}`));
});

// Add new celebrity
router.get("/new", (req, res) => res.render("celebrities/new"));

router.post("/new", (req, res) => {
  const { name, ocupation, catchPhrase } = req.body;

  Celebrity.create({ name, ocupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((err) => console.log(`An error has ocurred: ${err}`));
});

//router. post() refers to POST requests and router. get() referes to GET request.
//The difference is that a GET request, is requesting data from a specified source
//and a POST request submits data to a specified resource to be processed.

// Delete a celebrity
router.post("/:celebrity_id/delete", (req, res) => {
  const celebrityId = req.params.celebrity_id;

  Celebrity.findByIdAndDelete(celebrityId)
    .then(() => res.redirect("/celebrities"))
    .catch((err) => console.log(`An error has ocurred: ${err}`));
});
