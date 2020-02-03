const router = require('express').Router()
const Celebrity = require('../models/Celebrity')



router.get('/celebrities', async (req, res, next) => {

  const todaslasCelebridades = await Celebrity.find()
  console.log(todaslasCelebridades)
  res.render('celebrities/index', {todaslasCelebridades})


})

// router.get('/views/celebrities/index.hbs', async(req , res) =>{

//     const celebritiesInfo = await Celebrity.find()
//     res.render('celebrities', {celebrities})

// })


router.get('/celebrities/:id', async (req, res,next) => {
  const {id} = req.params
  const celebrity = await Celebrity.findById(id)
  res.render('celebrities/show', celebrity)
})


module.exports = router;