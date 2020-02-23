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
  .get('/new', (req, res, next) => {
    res.render('celebrities/new')
  })
  .post('/celebrities', async (req, res, next) => {

    const {name, occupation, catchPhrase} = req.body
    //console.log(name, occupation, catchPhrase)
    const newCelebrity = {
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase
    }
    await Celebrity.create(newCelebrity)
    res.redirect('/celebrities')

  })
  .get('/celebrities/:id/delete', async (req, res, next) => {
    const {id} = req.params
    await Celebrity.findByIdAndDelete(id)
    res.redirect('/celebrities')
  })

module.exports = router