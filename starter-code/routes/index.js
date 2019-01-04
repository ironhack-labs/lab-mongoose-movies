const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      res.render("celebrities/index", { celebrity });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/books/add", (req, res) => {
  const { name, occupation, catchPhrase  } = req.body;

  const newCelebrity = new Celebrity({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  });
  newCelebrity.save().then(() => {
    res.redirect("/");
  });
  //this is received from the form we definded at celebrities/new
});

r

router.get("/celebrities/:celebritiesId", (req, res) => {
  Celebrity.findOne({ _id: req.params.celebritiesId }).then(document => {
    console.log(document);
    res.render("celebrities/show", { celebrities: document });
  });
});

module.exports = router;
