const express = require('express');
const router  = express.Router();
const Locations = require("../models/locations.model");

/* GET list */
router.get("/locations", (req, res, next) => {
    // Iteration #2: List the locations
    Locations.find().then((result) => {
      console.log("results", result);
      res.render("locations/list.hbs", { listOflocations: result });
      // res.send(result)
    });
  });

  router.get("/locations/:theID/edit", (req, res, next) => {
    // Iteration #4: Update the Locations
    Locations.findById(req.params.theID).then(oneCeleb => {
      res.render("./locations/update-form.hbs", { oneCeleb: oneCeleb });
    });
  });
  
  router.post("/locations/:theID/edit", (req, res, next) => {
    // Iteration #4: Update the Locations
    console.log(req.body);
    Locations.findByIdAndUpdate(req.params.theID, { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
      res.redirect("/locations");
    });
  });

  
  router.get("/locations/create", (req, res, next) => {
    // Iteration #3: Add a new Locations
    res.render("./locations/create-form.hbs");
  });
  
  router.post("/locations/create", (req, res, next) => {
    // Iteration #3: Add a new Locations
    console.log(req.body);
    Locations.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
      res.redirect("/locations");
    });
  });


  router.get('/locations/:theID', (req, res) => {

    req.params.theID // ==> 61052265119dbf8593258766
  
    Locations.findById(req.params.theID)
      .then((oneCeleb) => {
        // console.log('Retrieved film from DB:', oneFilm)
        res.render('locations/show.hbs', { oneCeleb: oneCeleb });
        // res.send(oneFilm)
      })
  });

  

  router.post("/locations/:theID/delete", (req, res, next) => {
    // Iteration #5: Delete the Locations
    Locations.findByIdAndDelete(req.params.theID).then(() => {
      res.redirect("/locations");
    });
  });

module.exports = router;