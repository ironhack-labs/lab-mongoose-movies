const express = require('express');
const router = express.Router();
const Celebrities = require("../models/celebrity");
/* GET home page */


router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

// router.get("/:id/edit", (req, res, next) => {
//   let celebrity = req.params.id;
//   Celebrities.find({ _id: celebrity })
//     .then(celebrity => {
//       res.render("celebrities/edit", celebrity[0]);
//     })
//     .catch(err => {
//       console.log(err);
//       next();
//     });
// });

