const express = require('express');

// require the Drone model here
const Celebrity = require('../model/celebrity');

const router = express.Router();

router.get('/celebrity', (req, res, next) => {
  Celebrity.find({}, (err, celebrityPerson) => {
    if (err) {
      return next(err) //Si hay un error se lo paso al siguiente y mientras me muestra un error que viene definido en app.js y nunca se mostraría el render de index. Es un middleware que ponemos
    }

    res.render('celebrity/index', {
      //foo es el nombre de la colección
      celebrityList: celebrityPerson,
    });
  });
});

router.get('/', (req, res, next) => {
  res.render('/celebrity')

});


module.exports = router;
