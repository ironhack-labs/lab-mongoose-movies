const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

//Las rutas definidas en este router ya tienen incorporado el /celebrities
router.get('/', async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render('celebrities/index', {
      celebrities: allCelebrities
    })
  } catch (error) {
    console.log('Error al mostrar la base de Datos: ', error);
  }
})
// router.get('/', (req, res, next) => {
//   Celebrity.find()
//     .then(allCelebrities => {
//       res.render('celebrities/index', {
//         celebrities: allCelebrities
//       })
//     })
//     .catch(error => {
//       console.log('Error al mostrar la base de Datos: ', error);
//     })
// })

// Render Delete Celebity

router.post('/celebrities/:id/delete', (req, res, next) => {

})

//Render New celebritie
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});

// Post new Celebritie

router.post('/new', (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCelebrity.save()
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
      console.log(`An error has occurred while adding a new celebrity: ${err}`)
      res.redirect('celebrities/new')
    })
});


// Render de detalles de la celebritie

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebritiesDetails => {
      res.render('celebrities/show', {
        celebrities: celebritiesDetails
      })
    })
    .catch(error => {
      console.log('Error al acceder a los detalles de la celebridad', error);
    })
});


module.exports = router;