const Celebrity = require("../models/Celebrity");
const express = require("express");
const router = express.Router();

//list of celebrities
router.get("/", async (req, res, next) => {
  try {
    const seed = await Celebrity.find();
    res.render("celebrities/index", { seed });
  } catch (error) {
    console.log(error);
    //check if this works
    next();
  }
});

// see one celebrity
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    console.log(error);
    next();
  }
});

//create a new celebrity
router.get("/new", async (req, res, next) => {
  res.render("celebrities/new");
});

//create the celebrity and send to the database
router.post("/new", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const obj = await Celebrity.create({
    name,
    occupation,
    catchPhrase
  });
  res.redirect("/celebrities/new");
});

//delete the celebrity

router.get("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  const obj = await Celebrity.findByIdAndRemove(id);
  res.redirect("/celebrities");
});

module.exports = router;
