const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/index");
});

// router.get("/celebrities/:id", (req, res, next) => {
//   const celebId = req.params.id;
//   //   console.log(celebId);
//   Celebrity.findById(celebId).then(data => {
//     res.render("celebrityDetails", data);
//   });
// });

module.exports = router;
