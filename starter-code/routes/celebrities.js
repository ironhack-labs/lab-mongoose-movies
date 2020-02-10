const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrity.js");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render("celebrities/index", { celebrities: allTheCelebritiesFromDB });
    })
    .catch(error =>
      console.log("Error while getting the celebs from the DB", error)
    );
});



router.get("/celebrities/:id", (req, res, next) => {
  let { id } = req.params;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("/celebrities/show", { celebrity });
    })
    .catch(error =>
      console.log("Error while getting the celebrity from the DB", error)
    );
});



router.get("/celebrities/new", (req, res, next) => {
  res.render("/celebrities/new");
});

router.post("/celebrities/add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save().then(
    (celebrity => {
      res.redirect("/celebrities/index");
    }).catch(error => {
      console.log(error);
      res.render("/celebrities/new");
    })
  );
});



router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});



router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById({ _id: req.param.id }, req.body)
    .then(() => {
      res.render("/celebrities/edit");
    })

    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate({ id: req.param.id }, req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
