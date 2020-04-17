const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/celebrity");

// Read all
router.get("/celebrities/index", (req, res) => {
  Celebrity.find({})
    .then((dbResult) => {
      res.render("celebrities/index", {
        celebrities: dbResult,
        // css: ["celebrities.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new.hbs");
});

// Read by id
router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", {
        celebrities: dbResult,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create celebrity
router.post("/celebrities", (req, res) => {
  Celebrity.create(req.body)
    .then((dbResult) => {
      Celebrity.find({})
        .then((dbResult) => {
          res.render("celebrities/index", {
            celebrities: dbResult,
            // css: ["foods.css"],
          });
        })
        .catch((err) => {
          console.log(err);
        });
      // res.redirect("/foods");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete celebrity

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/celebrities/index");
    })
    .catch((err) => {
      console.log(err);
    });
});

// update celebrity

router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/edit.hbs", {
        celebrities: dbResult,
        error: "",
        css: ["form.css"],
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.post("/celebrities/:id", (req, res) => {
  console.log(req.body);
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchPhrase === ""
  ) {
    req.flash("error", "You need to fill all the fields..");
    res.redirect("/");
    // Celebrity.findById(req.params.id)
    //   .then((dbResult) => {
    //     res.render("celebrities/edit.hbs", {
    //       celebrity: dbResult,
    //       error: "You have to enter all the fields...",
    //       // css: ["form.css"],
    //     });
    //   })
    //   .catch((dbErr) => {
    //     console.log(dbErr);
    //   });
  } else {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/celebrities/index");
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }
});

module.exports = router;
