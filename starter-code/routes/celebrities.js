
const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/Celebrity");

router.get("/all", (req, res) => {
 
    celebrityModel
    .find()
    .then(celebrities => {
      res.render("celebrities", {
        celebrities
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  celebrityModel
  .create({
    name,
    occupation,
    catchPhrase,
  })
  .then(dbRes => res.redirect("/celebrities/all"),
    console.log('Celebrity added to the db!')
  )
  .catch(dbErr => {
    console.log(dbErr);
    redirect("/celebrities/new");
  });
});

router.get("/:id", (req,res) => {
  celebrityModel
  .findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/show",{celebrity});
  })
  .catch(dbErr => console.error("Oh no, db err:", dbErr))
});

router.post("/:id/delete", (req, res) => {
  celebrityModel
  .findByIdAndDelete(req.params.id)
  .then(dbRes => {
    res.redirect("/celebrities/all");
  })
  .catch (dbErr => {
    console.error(dbErr);
  });
});

router.get("/:id/edit", (req,res) => {
  celebrityModel
  .findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/edit", {celebrity});
  })
  .catch(dbErr => console.error(dbErr));
});

router.post("/:id", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;

  celebrityModel
  .findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase,
  })
  .then(dbRes => {
    res.redirect("/celebrities/all")
  })
  .catch(dbErr => {
    console.log(dbErr);
    res.render("/celebrities/edit");
  });
});

module.exports = router;