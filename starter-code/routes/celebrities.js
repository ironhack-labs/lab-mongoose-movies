const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  res.render('celebrities');


  Celebrity.find().then((celebs) => {
    console.log("All celebs: " + celebs);
    let obj = { allCelebs: celebs };
    res.render("celebrities/index", obj)
      // .catch((err) => console.log("Error while doing something", error));
  });
});

module.exports = router;
