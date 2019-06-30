const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(allcelebrities => {
      res.render("./celebrities/index.hbs", { celebrities: allcelebrities });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("./celebrities/show.hbs", { celebrity });
    })
    .catch(err => {
      console.log(err);
    });
});

// ==============CREATE=============

router.get("/celebrities/create/new", (req, res, next) => {
  res.render("./celebrities/new.hbs");
});

router.post("/celebrities/create-add", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

    .then(celebrity => {
      Celebrity.save;
      // .then(celebrity => {
      res.redirect("/celebrities");
      // })
    })
    .catch(err => {
      console.log(err);
      res.render("./celebrities/create/new", { celebrity });
    });
});
// ==============DELETE=============
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
     });
});

module.exports = router;
