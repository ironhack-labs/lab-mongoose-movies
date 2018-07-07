const express = require("express");
const url = require("url");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      next();
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  new Celebrity({ name, occupation, catchPhrase })
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      const errors = [];
      for (field in err.errors) {
        errors.push(err.errors[field].message);

        res.cookie(field + "Class" , "error", {maxAge: 3000});
      }

      res.cookie('errorFields' , errors.join(), {maxAge: 3000});

      res.redirect("/celebrities/new");
    });
});

router.get("/celebrities/new", (req, res, next) => {
  console.log("Cookies :  ", req.cookies);
  const { nameClass, occupationClass, catchPhraseClass } = req.cookies;
  let errorFields = [];
  if (req.cookies.errorFields) {
    errorFields = req.cookies.errorFields.split(",");
  }

  res.render("celebrities/new", { nameClass, occupationClass, catchPhraseClass, errorFields });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      next();
    });
});

module.exports = router;
