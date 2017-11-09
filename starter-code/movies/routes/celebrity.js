const express = require('express');

// require the Drone model here
const Celebrity = require('../model/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
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

// router.get('/', (req, res, next) => {
//   res.render('/celebrity')
// });

// router.get('/bio', (req, res, next) => {
//   res.render('celebrity/bio')
// });

router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, detail) => {
    res.render('celebrity/bio', {
      Bio: detail
    })
  })
});

module.exports = router;
