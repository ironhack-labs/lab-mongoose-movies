const express = require("express");
const router = express.Router();
const celebrity = require("../models/celebrity");

/*GET  Iteration 2*/
router.get("/", async (req, res, next) => {
  const celebrities = await celebrity.find();
  res.render("celebrities/index", { celebrities });
});

/*GET Iteration 3*/

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const obj = await celebrity.findById(id);
  res.render("celebrities/show", {obj})
});


/*GET Iteration 4*/

router.get("/new", async (req, res, next) => {
  res.render("celebrities/new")
});

router.post("/new", async (req, res, next) => {
  try {
    const {name, occupation, catchPhrase} = req.body;
    const obj = await celebrity.create({ name, occupation, catchPhrase});
    res.redirect("/celebrities");
  } catch (error) {
    res.render("/celebrities/new");
  }
});



module.exports = router;
