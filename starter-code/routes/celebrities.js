const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/celebrity");

/*GET Celebrities*/
router.get("/", (req, res, next) => {
  CelebrityModel.find()
    .then(celebrities => {
      res.render("celebrities/index", {
        celebrities: celebrities
      });
    })
    .catch(err => {
      next(err);
      // console.log("Something went wrong" + err);
    });
});

router.get("/new", (req, res, next) => {
  CelebrityModel.findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("celebrities/new", { celebrity: dbRes });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/new", (req, res, next) => {
  CelebrityModel.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(err => next());
});

router.get("/:id", (req, res, next) => {
  // console.log(req.params.id);
  CelebrityModel.findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("celebrities/show", { celebrity: dbRes });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  CelebrityModel.findByIdAndRemove({ _id: req.params.id })
    .then(dbRes => {
      console.log("Delete ok", dbRes);
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
