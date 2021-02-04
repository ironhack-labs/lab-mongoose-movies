const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

//Mostrar nombres:

router.get('/celebrities',(req,res)=>{
  Celebrity.find()
  .then(celebritiesFromDB => res.render('celebrities/index',{celebrities: celebritiesFromDB}))
  
  .catch(err=> console.log(`Error while displaying celebrities: ${err}`))
})


// Añadir celbrities:*/

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')

})

router.post('/celebrities/new', (req, res, ) => {
  const celebrity = new Celebrity (req.body)
  celebrity.save()
  .then(c => res.redirect("/celebrities"))
  .catch(e => res.redirect("/celebrities/new"))
})

//Borrar celebrities

router.post('/celebrities/:id/delete',(req,res,next)=>{
  Celebrity.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect('/celebrities'))
  .catch((e)=> next(e))

})

//Mostrar detalles:

router.get('/celebrities/:id',(req,res,next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
    res.render('celebrities/show',celebrity)

  })
  .catch((e)=> next(e))
  
})





module.exports = router