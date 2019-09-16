const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities.js");

/* GET home page */

router.get("/", (req, res, next) => {
  res.redirect("/celebrities/index");
});

router.get("/index", (req, res, next) => {
  if (req.query.error) {
    Celebrities.find()
      .select({ name: 1 })
      .then(allCelebrities => {
        res.render("celebrities/index", {
          allCelebrities,
          error: "Something went wrong, please, try again"
        });
      })
      .catch(error => {
        res.json({ error: "Error while getting the celebrities from the DB" });
      });
  } else {
    Celebrities.find()
      .select({ name: 1 })
      .then(allCelebrities => {
        res.render("celebrities/index", { allCelebrities });
      })
      .catch(error => {
        res.json({ error: "Error while getting the celebrities from the DB" });
      });
  }
});
router.get("/celebrity/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      res.json({ error: "This celebrity was not found" });
    });
});

router.get("/new", (req, res, next) => {
  if (req.query.error) {
    res.render("celebrities/new", {
      error: "Something went wrong, please, try again"
    });
  } else {
    res.render("celebrities/new");
  }
});

router.post("/new", (req, res) => {
  Celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCeleb => {
      res.redirect("/celebrities/index");
    })
    .catch(error => {
      res.redirect("/celebrities/new?error=please-try-again");
    });
});

router.post("/delete", (req, res) => {
  Celebrities.findByIdAndDelete(req.body.id)
    .then(deletedCeleb => {
      res.redirect("/celebrities/index");
    })
    .catch(error => {
      res.redirect("/celebrities/index?error=please-try-again");
    });
});

//Edit bonus. Not finished

// router.get("/celebrity/:id/edit", (req, res) => {
//   if (req.query.error) {
//     Celebrities.findById(req.query.id)
//   .then(foundCeleb => {
//     res.render("/celebrities/edit", {foundCeleb, error: "Something went wrong, please, try again"});
//   })
//   }
//   else {
//     Celebrities.findById(req.params.id)
//   .then(foundCeleb => {
//     res.render("/celebrities/edit", {foundCeleb});
//   })
//   .catch(error => {
//     res.redirect("/celebrities/:id/edit?error=please-try-again");
//   });
//   }
// });

// router.post("/:id", (req, res) => {});

module.exports = router;
