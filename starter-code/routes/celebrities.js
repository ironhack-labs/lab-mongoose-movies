const express = require('express');
const router  = express.Router();
const celebrityModel = require("./../models/celebrity");
/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    celebrityModel.find()
      .then((dbRes) => {
        // console.log(dbRes);
        res.render("celebrities/index.hbs", { celebrities: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });


router.get('/celebrities/:id', (req, res, next) => {
  celebrityModel.findById(req.params.id)
    .then((dbRes) => {
       console.log(dbRes);
      //  console.log(req.params.id);
      res.render("celebrities/show.hbs", { dbRes });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
