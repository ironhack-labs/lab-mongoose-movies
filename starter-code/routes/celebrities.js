const express = require("express");
const router = express.Router();

const celebrityModel = require("../models/celebrity");

// router.get("/celebrities", (req, res, next) => {
//   celebrityModel
//     .find()
//     .then((celebrity) => {
//       console.log('something', celebrity)
//       res.render("celebrities/index", { celebrity: celebrity });
//     })
//     .catch((error) => {
//       console.log("Error while getting the celebrities from the DB: ", error);
//       next();
//     });
// });

module.exports = router;
