const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

/* GET Celebrities page */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      //console.log("founded Celebrities: ", celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch((err) => console.error("Error getting the celebrities", err)); //next()
});

/* GET Celebrity New page */
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

/* POST / Create new Celebrity, rendirect celebrities or try again (rendirect celebrities/new) */
router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then((newCelebrity) => {
      //console.log("New Celebrity:", newCelebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("err creating new Celebrity:", err);
      res.redirect("/celebrities/new");
    });
});

/* GET Celebrities Details page by Id (!!!ORDER MATTERS!!!) */
router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrityDetails) => {
      //console.log("Celebrity Details: ", celebrityDetails);
      res.render("celebrities/show", { celebrityDetails });
    })
    .catch((err) =>
      console.error("Error getting the celebrities details page", err)
    );
});

/* POST delete Celebrity, redirect  */
router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then((removedCelebrity) => {
      console.log("Removed Celebrity: ", removedCelebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => console.error("Error deleting the celebrity", err)); //next()
});

module.exports = router;
