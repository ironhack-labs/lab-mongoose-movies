var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
Celebrity.find({})
    .then(celebrities => {
    res.render('celebrities', { celebrities: celebrities });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    }) 
});

router.get("/celebrities/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then(foundCeleb => {
      res.render("show", {foundCeleb: foundCeleb});
    })
    .catch(err => {
      console.log("err");
    });
});


module.exports = router;
