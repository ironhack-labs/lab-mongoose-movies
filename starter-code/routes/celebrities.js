const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities", { celebrity });
  } catch (error) {
    next(error);
    return error;
  }
});

router.get("/news", async (req, res) => {
  res.render("celebrities/news");
});

router.post("/", (req, res) => {
  console.log(req.body);
  Celebrity.create(req.body)
    .then((result) => {
      res.redirect("/celebrities");
    })
    .catch((error) => console.error(error));
});

router.get("/:id/delete", async (req, res) => {
  try {
    const result = await Celebrity.findByIdAndRemove({ _id: req.params.id });
    console.log(result);
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const celebrityID = req.params.id;
    const dbResult = await Celebrity.findById(celebrityID);
    res.render("celebrities/show", { celebrity: dbResult });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
