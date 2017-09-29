const express = require("express");
const Celebrity = require("../models/celebrities");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) return next(err);
    res.render("celebrities/index", {
      celebrities
    });
  });
});


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCeleb = new Celebrity(celebInfo);

  newCeleb.save(err => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});


router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrity) => {
    console.log(celebrity);
    res.render("celebrities/show", {
      celebrity
    });
  });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId, err => {
    if (err) {
      return next(err);
    }
    console.log("successfully removed:", celebId);
    res.redirect("/celebrities");
  });
});



router.post("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;
  const updatedCelebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  Celebrity.update({_id: celebId}, updatedCelebInfo, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/edit", {
      celebrity
    });
  });
});


module.exports = router;
