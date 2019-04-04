const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// /* GET profile page */
// router.get("/celebrities", (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       res.render("celebrities/index", { celebrities: celebrities });
//     })
//     .catch(error => {
//       res.render("next", error);
//       console.log("Error while retrieving celebrities details: ", error);
//     });
// });

module.exports = router;
