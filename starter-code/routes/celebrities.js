const express = require('express');


const router  = express.Router();

//modelos
const Celebrity = require('../models/Celebrity.model.js')


/* GET celebrities */   

router.get('/celebrities/new-celeb', (req,res,next)=>{
    res.render('celebrities/newceleb')
})

router.post('/celebrities/new-celeb', (req,res,next)=>{
    const {name,occupation,catchPhrase} = req.body
    console.log(name)
    Celebrity.create(
    {name,occupation,catchPhrase}
    ).then((addedCeleb)=>{

        res.redirect("/celebrities")
    }).catch((err)=>console.log(err))
})

router.post('/celebrities/:id/delete', (req,res,next)=>{
    const id = req.params.id
    Celebrity.findByIdAndDelete(id)
    .then((celebToDelete) =>{
        res.redirect('/celebrities')
    }).catch((err)=>{
    console.log(err)
    next(error)})

})

//editar
router.get('/celebrities/:id/edit', (req, res, next)=>{
    const id = req.params.id
    Celebrity.findById(id)
    .then((celbToUpdate) =>{
        res.render('celebrities/edit',{celbToUpdate})
    }).catch((err)=>{
        console.log(`Check the error ${err}`)
        next(error)
    })
})

router.post('/celebrities/:id/edit', (req, res, next)=>{
    const id = req.params.id
    const {name, occupation, catchPhrase} = req.body

    Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, {next:true})
    .then((updatedCeleb)=>{
        console.log("The update was successul")
        res.redirect("/celebrities")
    }).catch((err)=>{
        console.log(`There was an error during the update: ${err} `)
        next(error)
    })
})
//////editar

router.get('/celebrities', (req, res, next) => {
    
  Celebrity.find({})
  .then((listedCelebrities) =>{
      res.render('celebrities/index', {listedCelebrities});
  })
  .catch(err => next(error))
  
});

router.get('/celebrities/:id', (req,res,next)=>{
    const id = req.params.id

    Celebrity.findById(id)
    .then((celebrityDetails) => {
        res.render('celebrities/show',{celebrityDetails})
    })
    .catch((err)=>next(err))
})






module.exports = router;
