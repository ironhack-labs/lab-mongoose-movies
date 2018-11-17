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
    .then((id) => {
      res.render("celebrities/show",{id})
    })
    .catch((err) => {
      console.log("The error is in finding each celebrity by its id" + err)
    })
})
module.exports = router;
