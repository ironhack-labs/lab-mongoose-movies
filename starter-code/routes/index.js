const express = require("express");
const router = express.Router();
const Book = require("../models/Celebrity.model");
/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities =>
      res.render("index", { celebrities: allTheCelebrities })
    )
    .catch(err => console.log("Hubo un error:", err));
});

module.exports = router;
