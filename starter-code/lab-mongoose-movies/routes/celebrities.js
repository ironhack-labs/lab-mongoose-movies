const express = require("express");
const router  = express.Router();
const Celebrity = require("../models/celebrity");

// router.get("/celebrities", (req, res, next) => {
//   console.log("herejndfsnjdfsnjfnjdfsnjdfsnjdfsnjdfsnjdfs")
//   Celebrity.find()
//     .then(celebrities => {
//       console.log("blah")
//       // res.locals.celebritiesList = celebrities;
//       // res.render("index");
//     })
//     .catch(err => {
//       console.log("error")
//       next(err);
//     });
// });

module.exports = router;