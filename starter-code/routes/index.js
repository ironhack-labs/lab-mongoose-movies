const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebsFromDb => {
    res.render("celebrities/index", { celebsInHBS: celebsFromDb });
  });
});

router.get("/celebrities/show", (req, res, next) => {
  Celebrity.findById(`${req.query.celeb_id}`).then(singleCeleb => {
    console.log(singleCeleb);
    res.render("celebrities/show", singleCeleb);
  });
});

router.get("/celebrities/add", (req, res, next) => {
  console.log("new cewleb");
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb
    .save()
    .then(celeb => {
      console.log("saved");
      res.redirect("/celebrities");
    })
    .catch(error => {});
});

router.get("/celebrities/delete", (req, res, next) => {
  console.log(req.query);
  Celebrity.findByIdAndDelete(req.query.celeb_id)
    .then(deleted => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celeb_id })
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/edit", (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  console.log(name, occupation, catchPhrase);
  Celebrity.findByIdAndUpdate(`${req.query.celeb_id}`, {
    name,
    occupation,
    catchPhrase
  }).then(updatedCeleb => {
    res.redirect("/celebrities");
  });
});

module.exports = router;
