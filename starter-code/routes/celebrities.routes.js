const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model')


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebrity => res.render('celebrities/index', { celebrities: allTheCelebrity }))
    .catch(err => {
      console.log('error en consultando BBDD: ', err)
      res.render('index')
    })
})

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('celebrities/show', { celebrity: theCelebrity }))
    .catch(err => { console.log("Error al leer BBDD", err) })
})
router.get('/manage/new', (req, res, next) => res.render('celebrities/new'))
router.post('/manage/new', (req, res, next) => {
  const name = req.body.name
  const occupation = req.body.occupation.split(",")
  const catchPhrase = req.body.catchPhrase
  Celebrity.create({ name, occupation, catchPhrase })
    .then(x => res.redirect('/celebrities'))
    .catch(err => console.log("error al crear celebridad", err))
})
router.get('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(x => res.redirect('/celebrities'))
    .catch(err => console.log('error de mierda', err))
})

module.exports = router;