const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Show the list celebrity in celebrity/index
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/index", { celebrity });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list celebrity ID in celebrity/show
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render("celebrities/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

module.exports = router;
