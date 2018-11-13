const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req,res,next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebArray = celebrityResults;
      res.render("celebrities/celebrity-list.hbs")
    })
    .catch(err => {
      console.log("FAILURE",err);
    });
})

router.get("/celebrities/:id", (req,res,next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebDoc => {
    res.locals.celebItem = celebDoc;
    res.render("celebrities/celebrity-view.hbs");
  })
  .catch(err => next(err));
})

module.exports = router;
