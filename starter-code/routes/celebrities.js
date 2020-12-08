const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../model/celebrity");

// GET - all celebrities
router.get("/celebrities", async (req, res, next) => {
  try {
    res.render("celebrities", { celebrities: await CelebrityModel.find() });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/:id", (req, res, next) => {
    CelebrityModel.findById(req.params.id)
      .then((celebrityInfo) => {
        res.render("celebrities/show", celebrityInfo);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });


module.exports = router;