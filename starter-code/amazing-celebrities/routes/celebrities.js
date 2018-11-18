const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const celebritySchema = require('../models/Celebrity');
const Celebrity = mongoose.model('Celebrity', celebritySchema);



/* GET celebrities page. */
router.get('/', function(req, res, next) {

  Celebrity.find()
  .then(result => {
    res.render('celebrities/index', { result });
  })
  .catch(err => {
    console.error('Se ha producido un error', err);
    next(err);
  });

});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
  });

router.post('/', (req, res, next) => {
  const celebrity = req.body;

  Celebrity.create(celebrity)
  .then((result) => {
    console.log('Se han guardado los datos correctamente!')
    res.redirect('/celebrities/');
  })
  .catch((error) => {
    console.error('Se ha producido un error', error);
    res.render('/celebrities/new');
  });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  Celebrity.findById(id)
  .then(result => {
    res.render('celebrities/show', { result });
  })
  .catch(err => {
    console.error('Se ha producido un error', err);
    next(err);
  });

});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log(error);
    next(err);
  });
});

router.get('/:id/edit', (req, res, next) => {
  const celebrity = req.body;
  const id = req.params.id;

  Celebrity.findById(id)
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity});
  })
  .catch(error => {
    console.log(error);
    next(err);
  })

})

router.post('/:id', (req, res, next) => {
  const celebrity = req.body;
  const id = req.params.id;

  console.log('Jag har hittat rätt!')

  Celebrity.findByIdAndUpdate(id, celebrity)
  .then((result) => {
    res.redirect(`/celebrities/${id}`);
  })
  .catch(error => {
    console.log(error);
    next(err);
  })

})

module.exports = router;

// router.post('/:id/delete', (req, res, next) => {
//   const celebrity = req.body;
//   const id = req.params.id;

//   Celebrity.findByIdAndRemove(celebrity, id)
//   .then(() => {
//     res.redirect(`/celebrities/${id}`);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// });