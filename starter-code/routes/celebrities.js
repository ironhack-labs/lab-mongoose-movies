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

router.get('/edit', (req, res, next) => {

  console.log(req.query.book_id)
  Book.findOne({
      _id: req.query.book_id
    })
    .then((book) => {
      res.render("book-edit", {
        book
      });
    })
    .catch((error) => {
      console.log("Error al editar", error);
    })
});

module.exports = router;