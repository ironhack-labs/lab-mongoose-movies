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
      console.log(dbResult)
    res.render("celebrities/show.hbs", {
        celeb: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    })
  });
});

router.get('/celebrities/create', (req, res) => {
    res.render("celebrities/new.hbs", {
        css: ["form.css"],
    });
});

router.post("/celebrities", (req, res) => {
    Celebrity.create(req.body)
    .then((dbResult) => {
        Celebrity.find({})
        .then((dbResult) => {
            res.render("celebrities/allCelebrities.hbs", {
                celeb: dbResult,
                css: ["celebrities.css"],
            });
        })
        .catch((err) => {
            res.render("error.hbs");
        });
    })
    .catch((err) => {
        res.render("error.hbs");
    });
});

module.exports = router;
