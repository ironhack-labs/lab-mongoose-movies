const express = require("express");
const Celebrity = require("../models/celebrity");

const router = express.Router();
//INDEX
router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", {
      title: "All celebrities",
      celebrities: celebrities
    });
  });
});
//ADD
router.get("/new", (req, res, next) => {
  res.render("celebrities/new", {
    title: "Add new celebrity"
  });
});

router.post("/", (req, res, next) => {
  const celibrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelibrity = new Celebrity(celibrityInfo);
  newCelibrity.save(err => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});
//SHOW
router.get("/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", {
      title: "Celebrity show",
      celebrity: celebrity
    });
  });
});
//DELETE
router.post("/:id/delete", (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

//EDIT
router.get("/:id/edit", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/edit", {
      title: "Update celebrity",
      celebrity: celebrity
    });
  });
});

router.post("/:id", (req, res, next) => {
  const celebrityId = req.params.id;

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/celebrities");
  });
});

//IMPORTANT
module.exports = router;
