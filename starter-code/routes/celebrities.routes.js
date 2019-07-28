const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model"); // require the celebrity model

//! LIST OF CELEBRITIES
router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities =>
      //console.log(allTheCelebrities)
      res.render("celebrities", { allTheCelebrities })
    )
    .catch(err => console.log("There was an error:", err));
});

//! CELEBRITY DETAILS
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(fullCelebrity => res.render("show", { fullCelebrity }))

    .catch(err => {
      console.log("There was an error", err);
      next();
    });
});

// // Creación de nuevo libro
// router.get('/create', (req, res, next) => res.render('books-add'))
// router.post('/create', (req, res, next) => {

//   //console.log(req.body)

//   /*const theBookData = {
//     author: req.body.author,
//     description: req.body.description,
//     rating: req.body.rating,
//     title: req.body.title
//   }*/

//   const { author, description, rating, title } = req.body

//   Book.create({ author, description, rating, title })
//     .then(() => res.redirect('/books/list'))
//     .catch(err => console.log('Hubo un error:', err))
// })

// // Edición de libro
// router.get('/edit', (req, res, next) => {
//   //console.log(req.query)
//   Book.findById(req.query.bookId)
//     .then(theBook => res.render('book-edit', { theBook }))
//     .catch(err => console.log('Hubo un error:', err))
// })
// router.post('/edit', (req, res, next) => {

//   const { author, description, rating, title } = req.body

//   // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
//   Book.findByIdAndUpdate(req.query.bookId, { $set: { title, author, description, rating } }, { new: true })
//     .then(theNewBook => {
//       console.log(theNewBook)
//       res.redirect('/books/list')
//     })
//     .catch(err => console.log('Hubo un error:', err))
// })

module.exports = router;
