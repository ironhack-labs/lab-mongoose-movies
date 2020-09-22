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

router.get("/:id", (req, res, next) => {
  celebrityModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("celebrities/show", { celebrity: dbResult });
    })
    .catch(next);
});




module.exports = router;