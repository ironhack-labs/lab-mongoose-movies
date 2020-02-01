const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

// Show all #2 Interation

router.get("/", async (req, res) => {
  try {
    const celebrities = await Celebrities.find();
    console.log(celebrities);
    return res.render("celebrities/index", { celebrities }); // FALTA ALGO
  } catch (err) {
    next();
  }
});

// Adding New ... #4 Interation

router.get("/new", async (req, res, next) => {
  console.log("hola");
  return res.render("celebrities/new");
});

// Post!

router.post("/new", async (req, res, next) => {
  const { name, ocuppation, catchPhrase } = req.body;
  const newCeleb = await Celebrities.create({
    name,
    ocuppation,
    catchPhrase
  });
  try {
    res.redirect("/celebrities");
  } catch {
    return res.render("celebrities/new");
  }
});

// Remove Celebrities #5 Interation

router.get("/:id/delete", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Celebrities.findByIdAndRemove(id);
    return res.redirect("/celebrities");
  } catch {
    next();
  }
});

// Edit Celebrities #6 Interation

router.get("/:id/edit", async (req, res, next) => {
  const id = req.params.id;
  try {
    const celebrity = await Celebrities.findById(id);
    return res.render("celebrities/edit", { celebrity });
  } catch {
    next();
  }
});

router.post("/:id/edit", async (req, res, next) => {
  const { name, ocuppation, catchPhrase } = req.body;
  console.log("hola");
  await Celebrities.update({
    name,
    ocuppation,
    catchPhrase
  });
  try {
    res.redirect("/celebrities");
  } catch {
    next();
  }
});

// Show for ID #3 Interation

router.get("/:id", async (req, res) => {
  try {
    const celebrity = await Celebrities.findById(req.params.id);

    return res.render("celebrities/show", {
      celebrity
    });
  } catch {
    console.log("hola");
    next();
  }
});

module.exports = router;
