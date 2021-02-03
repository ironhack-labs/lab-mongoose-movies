const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((allCelebritesFromDB) => {
      res.render("celebrities/index.hbs", { celebrities: allCelebritesFromDB });
    })
    .catch((err) => console.error(err));
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
      console.log(`Sucessfully created new celeb`);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      res.render("/celebrities/new");
    });
});

router.get("/celebrities/:id/edit", (req, res, nxt) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((celeb) => {
      res.render("celebrities/edit", celeb);
    })
    .catch((err) => {
      nxt();
      return err;
    });
});

router.get("/celebrities/:id", (req, res) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((celebrity) => {
      //(celebrity);
      res.render("celebrities/show.hbs", celebrity);
    })
    .catch((err) => console.error(err));
});

router.post("/celebrities/:id/delete", (req, res, nxt) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      nxt();
      return err;
    });
});

router.post("/celebrities/:id", (req, res, nxt) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  console.log(req.body);

  Celebrity.findOneAndUpdate(
    id,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then((result) => {
      console.log(result);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      nxt();
      return err;
    });
});

module.exports = router;
