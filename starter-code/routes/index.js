const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrities.find()
    .then(celebrity => res.render("celebrities/index", { celebrity }))
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/show/:id", (req, res) => {
  let celebrity = req.params.id;

  Celebrities.find({ _id: celebrity })

    .then(celebrity => {
      console.log(celebrity)

      res.render("celebrities/show",  celebrity[0] );
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
