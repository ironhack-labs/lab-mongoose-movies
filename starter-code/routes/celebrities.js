const express = require("express");
const router = express.Router();
const Celebrity = require("./../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log("Retrieved celebrities from DB:", allTheCelebritiesFromDB);
      res.render("celebrities/index", { celebrity1: allTheCelebritiesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)

    .then(celebrity => {
            
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log('error', error2)
    });
});

module.exports = router;
