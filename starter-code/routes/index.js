const express = require("express");
const router = express.Router();
const Celeb = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celeb.find({})
    .then(celebDocuments => {
      // res.send(celebDocuments);
      res.render("celebrities.hbs", { celebList: celebDocuments });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("addCeleb.hbs");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celebData => {
      res.render("show.hbs", celebData);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities", (req, res, next) => {
  Celeb.create({
    Name: req.body.Name,
    Occupation: req.body.Occupation,
    Catchphrase: req.body.Catchphrase
  })
    .then(createdCeleb => {
      res.redirect(`/celebrities/${createdCeleb._id}`);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  Celeb.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celebDocuments => {
      res.render("celebEdit.hbs", celebDocuments);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { Name, Occupation, Catchphrase } = req.body;
  Celeb.updateOne(
    { _id: req.params.id },
    {
      Name,
      Occupation,
      Catchphrase
    }
  )
    .then(() => {
      res.redirect(`/celebrities/${req.params.id}`);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
