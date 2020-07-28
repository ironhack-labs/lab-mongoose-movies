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

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then((celebrities) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((celebrities) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrities) => {
      res.render("celebrities/edit", { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { name: body.name },
    { occupation: body.occupation}, 
    { catchPhrase: body.catchPhrase})

    .then((celebrities) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      next(error)
    });
});


router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)

    .then((celebrity) => {
      res.render("celebrities/show", { celebrity });
    })
    .catch((error) => {
      console.log("Error while retrieving celebrities details: ", error);
    });
});

module.exports = router;
