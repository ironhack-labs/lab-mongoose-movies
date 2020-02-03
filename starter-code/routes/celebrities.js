const router = require('express').Router()

const Celebrity = require('../models/Celebrity')

router
  .get('/celebrities', async (req, res, next) => {

    const allCelebrities = await Celebrity.find() /* --- DUDA --- */
    // console.log(allCelebrities)
    res.render('celebrities/index', {allCelebrities})

  })
  .get('/celebrities/:id', async (req, res, next) => {
    const {id} = req.params
    const celebrity = await Celebrity.findById(id)
    // console.log(celebrity)
    res.render('celebrities/show', celebrity)

  })

module.exports = router