const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.model");

/* GET list */
router.get("/celebrities", (req, res, next) => {
    // Iteration #2: List the celebrities
    Celebrity.find().then((result) => {
      console.log("results", result);
      res.render("celebrities/list.hbs", { listOfCelebrities: result });
      // res.send(result)
    });
  });

  router.get("/celebrities/:theID/edit", (req, res, next) => {
    // Iteration #4: Update the Celebrity
    Celebrity.findById(req.params.theID).then(oneCeleb => {
      res.render("./celebrities/update-form.hbs", { oneCeleb: oneCeleb });
    });
  });
  
  router.post("/celebrities/:theID/edit", (req, res, next) => {
    // Iteration #4: Update the Celebrity
    console.log(req.body);
    Celebrity.findByIdAndUpdate(req.params.theID, { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
      res.redirect("/celebrities");
    });
  });

  
  router.get("/celebrities/create", (req, res, next) => {
    // Iteration #3: Add a new Celebrity
    res.render("./celebrities/create-form.hbs");
  });
  
  router.post("/celebrities/create", (req, res, next) => {
    // Iteration #3: Add a new Celebrity
    console.log(req.body);
    Celebrity.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
      res.redirect("/celebrities");
    });
  });


  router.get('/celebrities/:theID', (req, res) => {

    req.params.theID // ==> 61052265119dbf8593258766
  
    Celebrity.findById(req.params.theID)
      .then((oneCeleb) => {
        // console.log('Retrieved film from DB:', oneFilm)
        res.render('celebrities/show.hbs', { oneCeleb: oneCeleb });
        // res.send(oneFilm)
      })
  });

  

  router.post("/celebrities/:theID/delete", (req, res, next) => {
    // Iteration #5: Delete the celebrity
    Celebrity.findByIdAndDelete(req.params.theID).then(() => {
      res.redirect("/celebrities");
    });
  });

module.exports = router;