const express = require('express');
const router  = express.Router();
const celebrityModel = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



// router.get("/celebrity/new", (req, res) => {
//   // console.log(req.params.id);
//   celebrityModel
//     .find()
//     .then(celebrity => {
//       res.render("form-celebrity", { celebrity });
//     })
//     .catch(dbErr => console.error("OH no, db err :", dbErr));
// });

module.exports = router;
