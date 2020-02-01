const express = require('express');
const router  = express.Router();
const celebrityModel = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get("/celebrities", (req, res) => {
  celebrityModel
    .find()
    .then(dbRes => {
      res.render("celebrities", {
        celebrities: dbRes
      });
    })
    .catch(dbErr => {
      console.error("Can't display the celebrities", dbErr);
    })

})

module.exports = router;
