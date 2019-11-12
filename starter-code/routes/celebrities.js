const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(documents => {
      // res.send(documents);
      res.render("celebrities/index", {
        foundCelebrity: documents
      });
    })
    .catch(err => {
      next();
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.get("/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(documents => {
      res.render("celebrities/show.hbs", {
        foundCelebrity: documents
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/:celebrityId", (req, res, next) => {
  Celebrity.updateOne(
    {
      _id: req.params.celebrityId
    },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })

    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      res.render("celebrities/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(documents => {
      res.render("celebrities/edit.hbs", {
        foundCelebrity: documents
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
