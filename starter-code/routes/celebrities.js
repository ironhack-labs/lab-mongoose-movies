const express = require("express");
const router = new express.Router();
const CelebrityModel = require("../models/celebrity");

function CelebrityInfos(infos) {
  const { name, occupation, catchPhrase } = infos;
  return { name, occupation, catchPhrase };
}

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((dbResults) =>
      res.render("celebrities/index", { celebrities: dbResults })
    )
    .catch(next);
});

module.exports = router;

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res) => {
  const newCelebrity = CelebrityInfos(req.body);
  CelebrityModel.create(newCelebrity)
    .then(() => res.redirect("/celebrities"))
    .catch((dbErr) => res.send(dbErr));
});

router.get("/celebrities/:id", async (req, res) => {
  try {
    const celebrity = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", { celebrity });
  } catch (err) {
    res.json(err);
  }
});

router.get("/celebrities/delete/:id", async (req, res) => {
  try {
    await CelebrityModel.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    res.json(err);
  }
});

// the actual path here is /party/update/:id
router.get("/celebrities/edit/:id", async (req, res) => {
  const celebrity = await CelebrityModel.findById(req.params.id);
  console.log(celebrity);
  res.render("celebrities/edit.hbs", { celebrity });
});

router.post("/celebrities/edit/:id", async (req, res) => {
  try {
    await CelebrityModel.findByIdAndUpdate(
      req.params.id,
      CelebrityInfos(req.body)
    );

    res.redirect("/celebrities");
  } catch (err) {
    res.json(err);
  }
});