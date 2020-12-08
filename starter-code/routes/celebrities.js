const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../model/Celebrity");

/* GET celebrities listing. */
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();

    res.render("celebrities", { celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/add", async (req, res, next) => {
  const newCeleb = { ...req.body };

  try {
    await CelebrityModel.create(newCeleb);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/new");
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const celebEdit = await CelebrityModel.findById(req.params.id);
    res.render("edit", celebEdit);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebrityId = await CelebrityModel.findById(req.params.id);
    console.log(celebrityId);

    res.render("show", { celebrityId });
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  const CelebToUpdate = { ...req.body };
  try {
    await CelebrityModel.findByIdAndUpdate(req.params.id, CelebToUpdate, {
      new: true,
    });
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
