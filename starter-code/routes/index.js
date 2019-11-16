const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Celebrity = require("./../models/Celebrity");
const Movie = require("../models/Movie");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Trial mode" });
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      console.log(celebs);
      res.render("celebrities", { celebs });
    })
    .catch(err =>
      console.log(err, "Hubo un error al intentar traer las celebridades")
    );
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities", { edit: false, create: true });
});

router.post("/celebrities/new", (req, res, next) => {
  let celeb = req.body;
  console.log(celeb);
  Celebrity.create(celeb)
    .then(anterior => {
      console.log(anterior, "Celebridad creada con éxito");
      Celebrity.find()
        .then(celebs => res.render("celebrities", { celebs }))
        .catch(err => {
          console.log(err, "Something went wrong.");
          res.render("index");
        });
    })
    .catch(error => {
      console.log(error, "Fallo al crear la celebridad");
      res.render("/celebrities/new");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  let { id } = req.params;
  Celebrity.findById(id)
    .then(celeb => {
      console.log(celeb);
      res.render("celebrities", { celeb, edit: false, create: false });
    })
    .catch(err => {
      let msg = "Unable to find celebrity!";
      console.log(err, msg);
      res.render("index", { msg });
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  console.log(req.params);
  Celebrity.deleteOne({ _id: req.params.id }).catch(err =>
    console.log(err, "Deletion Failed")
  );
  Celebrity.find()
    .then(celebs => res.render("celebrities", { celebs, title: "Trial Mode" }))
    .catch(err => console.log(err, "Can't find my way back home"));

  /*
  Celebrity.findById(req.params.id)
    .then(celeb => {
      console.log(celeb, "Assimilation succesful");
    })
    .catch(error => {
      let msg = "Something went horribly worng";
      console.log(error, msg);
      res.render("index", msg);
    });
    */
});
module.exports = router;
