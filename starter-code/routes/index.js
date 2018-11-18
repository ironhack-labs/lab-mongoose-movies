const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const genericCeleb = new Celebrity();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebs => {
      console.log(celebs);
      res.render("celebrities", { celebs: celebs });
    })
    .catch(err => {});
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      console.log(celeb);
      res.render("celebrity", { celeb: celeb });
    })
    .catch(err => {});
});

router.get("/new", (req, res, next) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  genericCeleb.name = req.body.name;
  genericCeleb.occupation = req.body.occupation;
  genericCeleb.catchPhrase = req.body.catchPhrase;
  genericCeleb
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {});
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celeb => {
      console.log(celeb);
      res.redirect("/celebrities");
    })
    .catch(err => {});
});

router.get("/edit/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celeb => {
    console.log(celeb);
    res.render("edit", { celeb: celeb });
  });
});

router.post("edit/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.query.celebs_id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(book => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});



module.exports = router;
