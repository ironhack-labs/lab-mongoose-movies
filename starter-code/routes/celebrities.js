const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");
const bodyParser = require("body-parser");

// router.get('/celebrities', (req, res, next) => {
//   res.render('celebrities/index');
// });
router.get("/", (req, res, next) => {
  res.render("index");
});
//----FIND----
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityDB => {
      console.log(celebrityDB);
      res.render("celebrities/index", {
        celebrityDB
      });
    })
    .catch(error => {
      next();
      console.log(error);
    });
});

//----SHOW DETAILS----

module.exports = router;
