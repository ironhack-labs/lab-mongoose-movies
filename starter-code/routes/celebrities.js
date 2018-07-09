const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js')

/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find({}).then(
    celebrities => {
      res.render('celebrities/index', {title: 'Celebrities', celebrities})
    })
})


/* GET new celeb page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {title: 'Add a celebrity'})
})


/* POST new celeb */
router.post('/', (req, res, next) => {
  const {name, catchPhrase, occupation} = req.body;
  new Celebrity({name, catchPhrase, occupation})
  .save().then( () => {
    res.redirect('/celebrities');
  })
})


/* GET delete celeb */
router.get('/:id/delete',(req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

/* GET edit movie */
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrities/edit', {title: 'Edit celebrity', celebrity});;
  })
})

/* POST edit movie */
router.post('/:id/edit', (req, res, next) => {
  const {name, catchPhrase, occupation} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name, catchPhrase, occupation})
      .then( celebrty => {
        res.redirect('/celebrities')
      })
})

/*GET celebs detail */
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(
    celebrity => {
      res.render('celebrities/show', {title: 'Celebrity detail', celebrity})
    })
})

module.exports = router
