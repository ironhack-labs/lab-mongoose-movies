const router = require('express').Router()

const Celebrity = require('../models/Celebrity')

router.get('/celebrities', async (req, res, next) => {

  const allCelebrities = await Celebrity.find() /* --- DUDA --- */
  console.log(allCelebrities)
  res.render('celebrities/index', {allCelebrities})

})

module.exports = router