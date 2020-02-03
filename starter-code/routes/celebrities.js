const router = require('express').Router()
const Celebrity = require('../models/Celebrity')


//DSe mandara con el render a las celebridades a todas las celebridades
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



router.get ('/new', (req,res,next) =>{
  res.render('celebrities/new')
})


router.post('/celebrities/', async (req, res, next) =>{
    //const celebrityNew = await Celebrity.find()
    const celebrityNew = {
      name : name,
      occupation : occupation,
      catchPhrase: catchPhrase
    }
    await Celebrity.create(celebrityNew)
    res.redirect('/celebrities')


})

router.get('/celebrities/:id/delete', async (req,res, next) =>{
  const {id} = req.params
  await Celebrity.findByIdAndDelete(id)
  res.redirect('/celebrities')
})



module.exports = router;