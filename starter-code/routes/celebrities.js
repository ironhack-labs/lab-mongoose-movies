const express = require("express");
const router = express.Router();
const celebrity = require("../models/celebrity");

/*GET  Iteration 2*/
router.get("/", async (req, res, next) => {
  const celebrities = await celebrity.find();
  res.render("celebrities/index", { celebrities });
});

/*GET Iteration 4*/

router.get("/new", async (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const obj = await celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    res.render("/celebrities/new");
  }
});

/*GET Iteration 3*/

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = await celebrity.findById(id);
    res.render("celebrities/show", { obj });
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
});

/*GET Iteration 5*/

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrities = await celebrity.findByIdAndRemove(id);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

/*GET Iteration 6*/

router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrities = await celebrity.findById(id);
    res.render("celebrities/edit", { celebrities });
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    const celebrities = await celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    });
    res.redirect("/celebrities");
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

module.exports = router;
