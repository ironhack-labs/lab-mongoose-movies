const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res) => {
  Celebrity.find({})
    .then(documents => {
      res.render("celebrities/index", { celebrities: documents });
    })
    .catch(err => {
      console.log(err);
      //next();
    });
});

router.get("/:celebrityId", (req, res) => {
  //res.send(req.params.celebrityId);
  Celebrity.findById(req.params.celebrityId)
    .then(celebs => {
      res.render("celebrities/show", { celebs: celebs });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);

  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/new");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/:celebrityId/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(celebs => {
      res.render("/celebrities", { celebs: celebs });
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
