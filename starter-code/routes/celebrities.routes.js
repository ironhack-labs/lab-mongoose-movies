const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities)
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch(error => {
      next()
      return error
    })
});


router.get('/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/show', { celebrity })
    })
})

router.post('/:id', (req, res) => {
  const {
    name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase
  })
    .then(celebrity => {
      console.log('updated', celebrity)
      res.redirect('/celebrities')
    }).catch(error => {
      next()
      return error

    })
})

router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body

  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCelebrity.save()
    .then(
      celebrity => {
        res.redirect('/celebrities')
      }
    )
    .catch(error => {
      res.render('celebrities/new', { error: "Error" })
    })
})


router.get('/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log(error)
      next()
      return error
    })
})


router.get('/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity })
    })
})
module.exports = router;