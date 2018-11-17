const express = require('express');
const router = express.Router();

const Celebrity = require("../models/Celebrity")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities", { celebrities })
    })
    .catch((err) => {
      console.log("The error is with rendering the celebrities")
    })
})

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrities) => {
      res.render("./celebrities/show", { celebrities })
    })
    .catch((err) => {
      console.log("The error is in finding each celebrity by its id" + err)
    })
})

router.get("/celebrities/new", (req, res, next) => {
  res.render("./celebrities/new")
})

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase})
  console.log(newCelebrity)
  newCelebrity.save()
    .then(() => {
      res.redirect("/celebrities")
    })
    .catch((error) => {
      console.log("Error while creating new celebrities" + error)
    })
})

module.exports = router;
