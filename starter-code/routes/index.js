const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(data => {
      //res.send(data);
      res.render("./celebrities/celebrities.hbs", { celebritiesList: data });
    })
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("./celebrities/new.hbs");
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(data => {
      res.render("./celebrities/edit.hbs", data);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(data => {
      //return res.send(data);
      res.render("./celebrities/show.hbs", data);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/add", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  })
    .then(created => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.redirect("/celebrities/new");
    });
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchphrase: req.body.catchphrase
    }
  )
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
