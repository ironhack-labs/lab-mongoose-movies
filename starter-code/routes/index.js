var express = require('express');
var router  = express.Router();

const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(allTheCelebritiesFromDB => {
    //console.log('Retrieved celebrities from DB: ', allTheCelebritiesFromDB);
    res.render('celebrities', { celebrities: allTheCelebritiesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});

//creamos la ruta para que obtenga la id de la url:
router.get('/celebrity/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
  .then(theCelebrity => {
    res.render('show', {celebrity: theCelebrity});
  })
  .catch(error => {
    console.log('Error while retreiving celebrity details: ', error);
  })
});


module.exports = router;
