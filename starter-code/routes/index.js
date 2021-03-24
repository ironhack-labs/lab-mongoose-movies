const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render("celebrities", { celebrities });
  } catch (error) {
    next(error);
    return error;
  }
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("create-celebrity");
});

router.get("/celebrities/:celebId", async (req, res, next) => {
  try {
    const { celebId } = req.params;
    const celebrity = await Celebrity.findById(celebId);

    res.render("celebrities-detail", celebrity);
  } catch (error) {
    next(error);
    return error;
  }
});

router.post("/celebrities", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;

    const newCeleb = new Celebrity({
      name,
      occupation,
      catchPhrase,
    });

    await newCeleb.save();

    res.redirect("/celebrities");
  } catch (error) {
    res.render("create-celebrity", {
      errorMessage: "Ocorreu algum erro, tente novamente",
    });
  }
});

router.post("/celebrities/:celebId/delete", async (req, res, next) => {
  try {
    const { celebId } = req.params;
    await Celebrity.findByIdAndDelete(celebId);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
    return error;
  }
});

router.get("/celebrities/:celebId/edit", async (req, res, next) => {
  try {
    const { celebId } = req.params;
    const celebrity = await Celebrity.findById(celebId);
    res.render("celebrities-edit", celebrity);
  } catch (error) {
    next(error);
    return error;
  }
});

router.post("/celebrities/:celebId", async (req, res) => {
  try {
    const { celebId } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.findByIdAndUpdate(celebId, {
      $set: { name, occupation, catchPhrase },
    });
    res.redirect("/celebrities");
  } catch (error) {
    res.render("create-celebrity", {
      errorMessage: "Ocorreu algum erro. Tente novamente",
    });
  }
});

module.exports = router;
