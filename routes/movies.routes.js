const express = require('express')
const Movie = require('../models/movies.model')
const router = express.Router()



//Listar Películas
router.get('/',(req,res)=>
{
    Movie.find({})
.then(movies=>res.render('./movies/index',{movies}))
.catch(err=>console.log('Error: ', err))
})



//Añadir Películas

router.get('/new',(req,res)=>res.render('./movies/new'))


router.post('/new',(req,res)=>{

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
    .then(()=>res.redirect('./'))
    .catch(err=>console.log('Error: ', err))
})


//Borrar película
router.get('/:id/delete', (req,res)=>{
const id = req.params.id

    Movie.findByIdAndDelete(id)
    .then(()=>res.redirect('/movies')
    .catch(err=>console.log('Error: ', err)))
})


//Editar Película
router.get('/:id/edit',(req,res)=>{

    const id = req.params.id
    Movie.findById(id)
    .then(moviesToEdit=>res.render('./movies/edit',moviesToEdit))
    .catch(err=>console.log('Error: ', err))
})

router.post('/:id/',(req,res)=>{
    const id = req.params.id

    const {title,genre,plot} = req.body
    Movie.findByIdAndUpdate(id,{title,genre,plot})
    .then(()=>res.redirect('/movies'))
    .catch(err=>console.log('Error: ', err))
})



//Ver detalles de la película
router.get('/:id',(req,res)=>{
    const id=req.params.id
    console.log(id)
    Movie.findById(id)
    .then(movies=>res.render('./movies/show',movies))
    .catch(err=>console.log('Error: ', err))
    
})




module.exports = router