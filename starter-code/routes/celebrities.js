const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")


router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then((dbResult) => {
    res.render('celebrities.hbs', {
      celebrities: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs")
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((dbResult) => {
    res.render("/celebrities/show.hbs", {
        show: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    })
  });
});

module.exports = router;
