const express = require('express');
const router = express.Router();
const celebritiesModel = require('../models/Celebrities'); // create this variable to call our db


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => { // url adress
  celebritiesModel
    .find() // no parameter to call all our celebrities in the db
    .then(dbRes => {
      res.render('celebrities/index', { // render the index.hbs file in the celebrities views folder
        celebritiesDisplay: dbRes // celebritiesDisplay could be named "toto"
      });
    })
    .catch(error => {
      next(); // not sure about that
      console.log("error while retrieving celebrities view", error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
    celebritiesModel
      .findOne({
        "_id": req.params.id // id = property of params which is property of req
      })
      .then(celebrity => {
        res.render('celebrities/show', { // render the show.hbs file
          celebrityShow: celebrity // celebrityShow is an object and will let us to access its data in the show.hbs file
        });
      })
      .catch(error => {
        next();
        console.log("error while retrieving show of a celebrity", error);
      });
  }

);

console.log("in the celebrities.js file");
// enter in the celebrities.js file thanks to the route declare in the app.js file (celebrities route)

module.exports = router;