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

// Render Delete Celebity

router.post('/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch((err) => {
      console.log(`Error deleting a celebrity: ${err}`);
      next();
    });
});

// Edit

router.get('/edit/:id', (req, res, next) => {

  Celebrity.findOne({
      _id: req.query.id
    })
    .then((celeb) => {
      res.render("celebrities/edit", {
        celebrity: celeb
      });
    })
    .catch((error) => {
      console.log("Error al editar", error);
    })
});

// Edit post

router.post('/:id', (req, res, next) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  Celebrity.update({
      _id: req.params.id
    }, {
      $set: {
        name,
        occupation,
        catchPhrase
      }
    })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('Error editing the celebrity:', err))
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