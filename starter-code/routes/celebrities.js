const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  // allows the FE to get info from the BE so... Its an entry point to our App

  Celebrity.find()
    .then(celebritiesFromDb => {
      //backend requesting data from Mongo

      //   console.log("Retrieved all celebs from DB:", celebritiesFromDb);
      res.render("celebrities/index", { celebrities: celebritiesFromDb });
      // BE is responding to the FE with the data that was got from MongoDB
    })
    .catch(error => {
      console.log("Error while retrieving celebs:", error);
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCeleb = new Celebrity({ name, occupation, catchPhrase });

  newCeleb
    .save()
    .then(celebrity => {
      res.redirect("/celebrities");
      console.log(newCeleb);
    })
    .catch(error => {
      console.log(error);
      res.render("celebrities/new");
    });
});

router.get("/celebrities/:id", (req, res) => {
  let celebId = req.params.id;
  console.log("The ID from the URL is:", req.params.id);
  Celebrity.findById(celebId)
    .then(theCeleb => {
      console.log("The Celebrity:", theCeleb);
      //backend requesting data from Mongo
      // it's by inserting the name "celebrity" here that i know how what to call in the view -> show to the thing inside {{_____.xxxx}}
      res.render("celebrities/show", { celebrity: theCeleb });
      // BE is responding to the FE with the data that was got from MongoDB
    })
    .catch(error => {
      console.log("Error while retrieving celeb details:", error);
    });
});

router.post("/celebrities/:id/delete", (req,res) => {
    let celebId = req.params.id;
    Celebrity.findByIdAndRemove(celebId)
    .then(celebrity => {
        res.redirect('/celebrities');
    })
    .catch(error => {
        console.log(error);
    })
});

module.exports = router;
