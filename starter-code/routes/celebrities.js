const express = require('express');
const router = express.Router();
const celebrities = require("../models/celebrity");

/* GET celebrities */
router.get('/', (req, res, next) => {
  celebrities.find()
    .then(allTheCelebrities => {
      console.log('Retrieved celebrities from DB:', allTheCelebrities);
      res.render("celebrities/index", {
        celebrities: allTheCelebrities
      });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })

});

router.get("/:id", (req, res, next) => {
  celebrities.findById(req.params.id)
    .then(theCelebrity => {
      res.render('celebrities/show', {
        celebrity: theCelebrity
      });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity ID: ', error);
    })
});

module.exports = router;