const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// R : Retrieve list of celebs
router.get("/index", async (req, res) => {
  const celebrity = await Celebrity.find();
  res.render("celebrities/index", { celebrity });
});

// R : Retrieve details of a particular celeb
router.get("/show/:id", async (req, res) => {
  const { id } = req.params;
  const celebrity = await Celebrity.findById(id);
  res.render("celebrities/show", { celebrity });
});

// C: Show add a celebrity form
router.get("/add", (req, res, next) => {
  res.render("celebrities/new");
});

// C: POST new celebrity
router.post("/add", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const obj = await Celebrity.create({
      name,
      occupation,
      catchPhrase
    });
    console.log(obj, "added to database");
    res.redirect("/celebrities/index");
  } catch (err) {
    console.log(err);
    res.redirect("/celebrities/add");
  }
});

// D: delete celeb in database
router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Celebrity.findByIdAndRemove(id);
    res.redirect("/celebrities/index");
  } catch (err) {
    console.log(err);
    res.redirect("/celebrities/index");
  }
});

// U: update celeb in database
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await Celebrity.findById(id);
  res.render("celebrities/edit", { obj });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  await Celebrity.findByIdAndUpdate(id, {
    name,
    occupation,
    catchPhrase
  });
  res.redirect("/celebrities/index");
});

module.exports = router;
