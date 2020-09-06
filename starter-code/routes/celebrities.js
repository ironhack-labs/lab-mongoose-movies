const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


/* GET celebrity page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then( celebrityList => {
        res.render('celebrities',{celebrityList})
    })
    .catch(err => {
        next(err)
      })
  });

router.get('/celebrity/:id',(req, res, next) => {
    const {id} = req.params
    Celebrity.findById(id)
    .then( one => {
        res.render('celebrities/show', one)
    })
    .catch(err => {
        next(err)
      })
});

router.get('/new',(req, res, next) => {
    res.render('celebrities/new')
})

router.post('/new', (req, res, next) => {
    const {name,occupation,catchPhrase} = req.body
    Celebrity
    .create ({name,occupation,catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        next(err)
      })
})

router.post('/:id/delete',(req, res, next) => {
    const {id} = req.params
    Celebrity
    .findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        next(err)
        })
})


module.exports = router;
  