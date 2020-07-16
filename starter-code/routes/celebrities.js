const express = require('express');
const router = express.Router();
const Celebrities = require ('../models/celebrity.model');


router.get("/celebrities", (req, res, next) => {
  Celebrities.find({})
    .then((celebritiesData) =>
      res.render("celebrities/index", { celebritiesData })
    )
    .catch((error) => {
      console.error(error);
      res.redirect("/");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
    const celebrityId = req.params.id;
    Celebrities.findById(celebrityId)
      .then((celebrity) => {
        res.render("celebrities/show", { celebrity });
      })
      .catch((error) => {
        console.error(error);
        res.redirect("/celebrities");
      });
  });

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
  });

router.post("/celebrities", (req, res, next) => {
  const celebritiesData = req.body;
  Celebrities.create(celebritiesData)
    .then((celebrity) => {
      res.redirect('/celebrities')
      console.log(`${celebrity.name} add to database`);
    })
    .catch((error) => {
      res.redirect('/celebrities/new')
      console.error(error);
    });
});


router.post("/celebrities/:id/delete", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrities.findByIdAndRemove(celebrityId)
    .then(() => {
      console.log("Celebrity deleted");
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrities.findById(celebrityId)
    .then((celebrity) => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch((error) => {
      console.error(error);
    });
});


module.exports = router;
