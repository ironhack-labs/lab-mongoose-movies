const express = require('express')
const Celebrity = require('../models/celebrity.model')
const router = express.Router()

//Endpoints

//Listar celebrities


router.get('/',(req,res)=>{
    
    Celebrity.find({})
    .then(celebrities=>res.render('./celebrities/index',{celebrities}))
    .catch(err=>console.log('Error: ', err))
})

//Crear nuevas celebrtities

router.get('/new',(req,res)=>res.render('./celebrities/new'))

router.post('/new',(req,res)=>{
    

    const nameL=req.body.name.toLowerCase()
    const { name, nameLow, ocupation, catchPhrase } = req.body
       
    Celebrity.create({ name, nameLower:nameL, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log("ERROR", err))
    

})


//Eliminar celebrities

router.get('/:_id/delete',(req,res)=>{
const id=req.params._id
Celebrity.findByIdAndRemove(id)
.then(() => res.redirect('/celebrities'))
.catch(err=>console.log('Error: ', err))

})

//mostrar detalles

router.get('/:_id',(req,res)=>{

    const id=req.params._id    
    Celebrity.findById(id)
    .then(celebrities=>res.render('./celebrities/show',celebrities))
    .catch(err=>console.log('Error: ', err))
})


//editar celebrities


router.get('/:id/edit', (req,res)=>{ 
    const id= req.params.id

    Celebrity.findById(id)
    .then(celebrityEdit=>res.render('./celebrities/edit',celebrityEdit))
    .catch(err=>console.log('Error: ', err))     
    
    })



router.post('/:id', (req,res)=>{

const id = req.params.id    
const {name,ocupation,catchPhrase} = req.body
   
    Celebrity.findByIdAndUpdate(id,{name,ocupation,catchPhrase})
    .then(()=>res.redirect('/celebrities'))
    .catch(err=>console.log('Error: ', err))

   
    })






module.exports = router