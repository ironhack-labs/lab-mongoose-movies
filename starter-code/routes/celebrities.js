const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity.js");

/* GET celebrity page */
router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find({})
    .then(dbRes => {
      res.render("celebrities/index.hbs", { celebrity: dbRes });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrity/:id", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then(dbRes => {
      res.render("celebrities/show.hbs", { celebrity: dbRes });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/add-celebrity", (req, res) => {
  // const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create(req.body)
    .then(addedCeleb => {
      console.log("successfully created and added a new celebrity", addedCeleb);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("error, creating new celebrity didn't work", err);
      res.redirect("/new");
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  // return console.log(req.params)
  CelebrityModel.findByIdAndRemove(req.params.id)
    .then(deletedCeleb => {
      console.log("successfully deleted celebrity", deletedCeleb);
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then(updatedInfos => {
      res.render("celebrities/edit.hbs", { celebrity: updatedInfos });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  CelebrityModel.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      console.log("successfully edited celebrity", dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
