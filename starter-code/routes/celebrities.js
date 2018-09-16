const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new")
});


router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", {celebrities});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById({_id : req.params.id})
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;
  new Celebrity({ name, occupation, catchPhrase})
  .save().then(celebrities => {
    res.redirect("/celebrities")
  })
  .catch(err => {
    console.log(err)
  })
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrities => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", celebrity);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name,occupation,catchPhrase})
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});




module.exports = router;