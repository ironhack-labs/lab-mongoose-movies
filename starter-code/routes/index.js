const express = require("express");
const router = express.Router();
// Require model in my main .js file
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//  GET /celebrities

router.get("/celebrities", (req, res, next) => {
  // Access ALL celebrities in my database
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/celebrities", {
        celebrities
      });
    })
    .catch(next);
});
// ---------------- ADDING CELEBRITIES INTO THE DATABASE -------------
router.post("/celebrities", (req, res, next) => {
    // add a new celebrity with information from the form on celebrities.hbs

  Celebrity.create({
    // Name, occupation and catchPhrase are referenced in the input tag inside the form
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect("/celebrities"); // Redirect to GET /celebrities once the celeritie is added to the database
  });
});

// ---------------- DISPLAY CELEBRITIES DETAILS -------------

router.get("/celebrities/:celebrityId", (req, res, next) => {
  // Access the Id through the form and access with "params", because it is on my URL
  Celebrity.findById(req.params.celebrityId).then(celebrityDetails => {
    const data = {
      celebrityDetails: celebrityDetails
    }
    res.render("celebrities/show", data);
  });
});

//------------------------ EDIT CELEB ----------------
router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  // grab the celeb id with params, and use it as an argument to my findById, then display it on my edit page, so the user can change it
  let celebrityId = req.params.celebrityId
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
});

router.post("/celebrities/:celebrityId/edit", (req, res, next) => {
  let celebrityId = req.params.celebrityId
  //again, use the id from req.params as an argument, but now with the new information received in the POST form, to update the selected celeb object on the database
  Celebrity.findByIdAndUpdate(celebrityId, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect("/celebrities/"+ celebrityId);
  });
});

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  let celebrityId = req.params.celebrityId
// grab the ID aand use it as an argument for deleting
  Celebrity.findByIdAndDelete(celebrityId)
    .then(() => {
      res.redirect("/celebrities");
    })
});

module.exports = router;
