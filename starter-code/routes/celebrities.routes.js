const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')



router.get('/', (req, res, next) => res.render("celebs-index"))


// Listado de Celebrities
router.get('/list', (req, res, next) => {
  Celebrity.find()

    .then(allCelebs => res.render('celebs-list', { celebrities: allCelebs }))
    .catch(error => console.log(error))
})

//detalle de Celebrities
router.get('/view/:celebrity_id', (req, res) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => res.render('celebs-detail', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})



// Añadir nueva Celebrity
router.get('/add', (req, res) => res.render('celebs-add'))
router.post('/add', (req, res) => {
  console
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(theCelebrity => res.redirect('/celebrities/list'))
    .catch(error => console.log(error))
})



// Editar libro
/* router.get('/edit', (req, res) => {
  Book.findOne({ _id: req.query.book_id })
    .then(book => res.render("book-edit", { book }))
    .catch(error => console.log(error))
})

router.post('/edit', (req, res) => {
  const { title, author, description, rating } = req.body
  Book.update({ _id: req.query.book_id }, { $set: { title, author, description, rating } })
    .then(book => res.redirect('/books/list'))
    .catch(error => console.log(error))

}) */


module.exports = router