const express = require("express");
const router = express.Router();
const celebritiesModel = require("../models/celebrities.model");

/* GET home page */
router.get("/celebrities", async (req, res) => {
  try {
    const dbResult = await celebritiesModel.find();
    console.log(dbResult);
    res.render("celebrities/index", { celebrities: dbResult });
  } catch (error) {
    console.log(error);
  }
});

router.get("/celebrities/:id", async function (req, res, next) {
  try {
    console.log("test");
    const celebrity = await celebritiesModel.findById(req.params.id);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    next();
    console.error(error);
  }
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", async function (req, res, next) {
  try {
    console.log("before");
    const celebrity = await celebritiesModel.create(req.body);
    res.redirect("/celebrities");
    console.log("after");
  } catch (error) {
    next();
    console.error(error);
  }
});

module.exports = router;
