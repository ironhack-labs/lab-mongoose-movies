const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");

// get the /celebrities page
router.get("/", async (req, res, next) => {
  try {
    res.render("./../views/celebrities/index.hbs", {
      celebrities: await CelebrityModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

// create a new celebrity (get and post form)
router.get("/new", async (req, res, next) => {
  try {
    res.render("./../views/celebrities/new.hbs");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    res.render("./../views/celebrities/new.hbs");
  }
});

//get the detailed page for one celebrity
router.get("/:id", async (req, res, next) => {
  try {
    res.render(
      "./../views/celebrities/show.hbs",
      await CelebrityModel.findById(req.params.id)
    );
  } catch (err) {
    next(err);
  }
});

// delete a celebrity
router.post("/:id/delete", async (req, res, next) => {
  try {
    const deletedCelebrity = await CelebrityModel.findByIdAndRemove(
      req.params.id
    );
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// edit a celebrity
router.get("/:id/edit", async (req, res, next) => {
  try {
    res.render(
      "./../views/celebrities/edit.hbs",
      await CelebrityModel.findById(req.params.id)
    );
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const updatedCelebrity = await CelebrityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
