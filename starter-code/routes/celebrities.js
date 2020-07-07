const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
    celebrityModel
        .find()
        .then(dbResults =>
            res.render("celebrities/index", {
                celebrity: dbResults
            })
        )
        .catch(next);
});
router.get("/celebrities/new", (req, res, next) => {

    res.render("celebrities/new")
});

router.get("/celebrities/:id", (req, res, next) => {
    celebrityModel
        .findById(req.params.id)
        .then(celebrity =>
            res.render("celebrities/details", {
                celebrity
            }))
        .catch(next);
});

router.get("/celebrities/delete/:id", async (req, res, next) => {
    try {
      await celebrityModel.findByIdAndRemove(req.params.id);
      res.redirect("/celebrities")
    } catch(err) {
      next(err);
    }
  });
  router.get("/celebrities/update/:id", async (req, res, next) => {
    try {
      const celebriti = await celebrityModel.findById(req.params.id);
      res.render("celebrities/update", {celebriti});
    } catch(err) {
      next(err)};
    })

router.post("/celebrities/new", async (req, res) => {    
    try {
        await celebrityModel.create(req.body);
        res.redirect("/celebrities")
    } catch (err) {
        next(err);
    }
});
router.post("/celebrities/update/:id", async (req, res) => {
    console.log(req.params.id, req.body)
    try {
      await celebrityModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/celebrities");
    } catch(err) {
      next(err);
    }
  });



module.exports = router;