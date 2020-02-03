const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res) => {
  const celebrity = await Celebrity.find();
  res.render("celebrities/index", { celebrity });
});

//Iteration 3

router.get("/show/:id", async (req, res) => {
  const { id } = req.params;
  const foundObject = await Celebrity.findById(id);
  return res.render("celebrities/show", { foundObject });
});

//Iteration 4

router.get("/new", async (req, res, next) => {
  try {
    return res.render("celebrities/new");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

router.post("/", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  try {
    await newCelebrity.save();
    res.redirect("/celebrities/");
  } catch (err) {
    res.render("celebrities/new");
    next();
  }
});

router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundObject = await Celebrity.findById(id);
    await Celebrity.findByIdAndRemove(foundObject);
    res.redirect("/celebrities/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObject = await Celebrity.findById(id);
    res.render("celebrities/edit", { foundObject });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    });
    res.redirect("/celebrities");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;
