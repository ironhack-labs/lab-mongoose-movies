const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity").Celebrity;

/* GET celebrities listing. */
router.get("/", function(req, res, next) {
  Celebrity.find({}, (err, result) => {
    if (err) {
      console.log("ERRRRROORR", err);
      return next(err);
    } else {
      const data = {
        celebrities: result
      };
      res.render("celebrity/index", data);
    }
  });
});

router.get("/new", function(req, res, next) {
  res.render("celebrity/new");
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  Celebrity.findById(id, (err, result) => {
    if (err) {
      console.log("ERRRRROORR", err);
      return next(err);
    } else {
      const data = {
        celebrities: result
      };
      res.render("celebrity/show", data);
      console.log(data);
    }
  });
});

router.post("/", (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save(err => {
    if (err) {
      return render("celebrity/new");
    }
    return res.redirect("../");
  });
});

router.post("/", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err, result) => {
    if (err) {
      console.log("could not remove", err);
      return next(err);
    } else {
      console.log(result);
      res.render("../");
    }
  });
});

module.exports = router;
