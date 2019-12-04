const express = require("express");
const router = express.Router();
const Character = require("../models/MovieCharacters");

router.get("/characters/edit/:placeHolderID", async (req, res, next) => {
  try {
    const theChar = await Character.findById(req.params.placeHolderID);
    res.render("character-views/Edit", { theChar });
  } catch (err) {
    next(err);
  }
});

router.post("/characters/update/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let update = { ...req.body };
    const response = await Character.findByIdAndUpdate(id, update, {
      new: true
    });
    res.redirect("/characters/" + id);
  } catch (err) {
    next(err);
  }
});

router.get("/characters", async (_, res, next) => {
  try {
    const characters = await Character.find();
    console.log(characters);
    res.render("character-views/AllCharacters", { characters });
  } catch (err) {
    next(err);
  }
});

router.get("/characters/new", async (req, res, next) => {
  await res.render("character-views/New");
});

router.post("/create-the-char", async (req, res, next) => {
  try {
    const name = req.body.theNewCharacterName;
    const movie = req.body.theNewCharacterMovie;
    const quote = req.body.theNewCharacterQuote;
    Character.create({
      name: name,
      movie: movie,
      quote: quote
    });
    await res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/characters/:idOfChar", async (req, res, next) => {
  try {
    const id = req.params.idOfChar;
    const theChar = await Character.findById(id);
    res.render("character-views/SingleChar", { theChar });
  } catch (err) {
    next(err);
  }
});

router.post("/characters/delete/:idOfChar", async (req, res, next) => {
  try {
    await Character.findByIdAndRemove(req.params.idOfChar);
    res.redirect("/characters");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
