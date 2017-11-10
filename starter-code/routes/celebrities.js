const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


//todo empieza a partir de /celebrities

router.get('/', (req, res) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/index', {
      celebritiesArray: celebrities
    })
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById (id, (err, celebrity) => {
    res.render('celebrities/show', {celebrity: celebrity})
  })
});
//NUNCA PONGAS DOS PETICIONES A LA MISMA RUTA, CUENTAN COMO LA MISMA RUTA TAMBIEN SI UNO ES :ID Y OTRO RUTA NORMAL
router.get('/create/new', (req, res, next) => {
  res.render('celebrities/form', { celebrity: new Celebrity()
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  // Create a new Product with the params
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/form', {
        celebrity: newCelebrity
      })
    }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
