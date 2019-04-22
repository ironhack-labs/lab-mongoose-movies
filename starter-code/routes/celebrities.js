const router = require('express').Router()
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => { //por que la ruta es '/', no entiendo.
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', { celebrities })
  })
  .catch(err => {c
    res.send(err) //Checar esto, hay que llamar a next segun learning
  })
})

router.get('/:_id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity )
    console.log(celebrity)
  })
  .catch(err => {
    res.send(err)
  })
})

// router.get('/:id', (req, res, next) => {
//   const { id } = req.params
//   Celebrity.findById(id)
//   .then(celebrity => res.render('celebrities/show', celebrity))
//   .catch(err => console.log(err))
// })

module.exports = router