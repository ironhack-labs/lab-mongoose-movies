const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((dbResult) => {
      res.render("celebrities/index", {
        celebrities: dbResult,
        celebrity: true,
      });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new", { celebrity: true });
});

router.get("/edit/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then((dbResult) => {
    res.render("celebrities/edit", { celebrity: dbResult }).catch((error) => {
      res.render("error", { error: error });
    });
  });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", { celebrity: dbResult });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.post("/", (req, res, next) => {
  Celebrity.create(req.body)
    .then((x) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("error", { error: error });
    });
});

router.post("/delete/:id", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.post("/edit/:id", (req, res, next) => {
  console.log(req.params.id);
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchphrase === ""
  ) {
    Celebrity.findById(req.params.id)
      .then((dbResult) => {
        res.render("celebrities/edit", {
          celebrity: dbResult,
          error: "Fill all fields",
        });
      })
      .catch((error) => {
        res.render("error", { error: error });
      });
  } else {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/celebrities");
      })
      .catch((error) => {
        res.render("error", { error: error });
      });
  }
});

module.exports = router;
