const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(list => {
      console.log(list);
      res.render('celebrities', { list });
    })
    .catch(err => {
      res.redirect('/index')
    });

});

router.get('/celebrities/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render('celebrity', {celebrity});
    })
    .catch(err => {
      console.log('No encuentra el personaje buscado')
    })

});

module.exports = router;
