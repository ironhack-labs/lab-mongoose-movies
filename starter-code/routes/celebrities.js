const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrityModel");


router.get("/", (req, res, next) => {
  celebrityModel.find({}) // --- ^
    .then((dbResult) => {
      console.log(dbResult)
      res.render("celebrities", { celebrity: dbResult });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/createCeleb", (req, res, next) => {
  celebrityModel.create(req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((dbErr) => {
      next(err);
    });
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await celebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const dbResult = await celebrityModel.findById(req.params.id);
    res.render("celebrities/edit", { celebrity: dbResult });
  } catch (error) {
    next(error);
  }
});

router.post("/celebEdit/:id", async (req, res, next) => {
  try {
    console.log("toto");
    const modifiedCeleb = req.body;
    await celebrityModel.findByIdAndUpdate(req.params.id, modifiedCeleb);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});


router.get("/:id", (req, res, next) => {
  celebrityModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", { celebrity: dbResult });
    })
    .catch(next);
});

module.exports = router;