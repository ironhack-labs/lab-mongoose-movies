const express = require('express');
const router = express.Router();

const Celeb = require('../model/celebrity-model');

//Get all celebs
router.get('/', (req, res, next) => {
  Celeb.find()
    .then((celebFind) => res.render('celebrities/index', { celebFind }))
    .catch((err) => console.log(err))
});
//Show celeb by ID
router.get('/show/:id', (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celebId => res.render('celebrities/show', celebId))
    .catch(err => console.log(err))
})
//Add new
router.get('/new', (req, res, next) => res.render('celebrities/add'))
router.post('/', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body
  Celeb.create({ name, occupation, catchPhrase })
    .then(createdCeleb => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})
//Delete
router.post('/:id/delete', (req, res, next) => {
  Celeb.findByIdAndDelete(req.params.id)
    .then(data => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

//Edit
router.get('/:id/edit', (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(editCeleb => res.render('celebrities/edit', editCeleb))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body

  Celeb.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, {new: true})
    .then(res.redirect('/celebrities'))
    .catch(err => console.log(err))
})





module.exports = router;
