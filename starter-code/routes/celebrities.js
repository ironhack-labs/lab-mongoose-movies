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

// Render de detalles del libro

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