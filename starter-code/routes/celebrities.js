const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrityModel");


router.get("/", (req, res, next) => {
  
  celebrityModel.find({}) // --- ^
    .then((dbResult) => {
      console.log(dbResult)
      res.render("celebrities/index", { celebrity: dbResult });
    })
    .catch((error) => {
      next(error);
    });
});






module.exports = router;