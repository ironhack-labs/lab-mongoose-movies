const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')






router.get('/', (req, res, next) => res.render('celebs-index'))


//Listado de celebs

router.get('/list', (req, res, next) => {                            
  Celebrity.find()                                                         
    .then(allCelebs =>{
      console.log("pp",allCelebs)
       res.render('celebs-list', { celebs: allCelebs }) 
      })  
    .catch(error => console.log(error))
})


//Detalle de las celebs

router.get('/detail/:celeb_id', (req, res) => {
  Celebrity.findById(req.params.celeb_id)
    .then(theCeleb => res.render('celebs-detail', { celeb: theCeleb }))
    .catch(error => console.log(error))
})


//Añadir celebs

router.get('/add', (req, res) => res.render('celebs-add'))
router.post('/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(theCelebrity => res.redirect('/celebs/list'))
    .catch(error => console.log(error))
})


//Eliminar celebs

router.post('/delete/:celeb_id', (req, res, next) => {
  const id= req.params.celeb_id
  Celebrity.findByIdAndDelete(id)
    .then(theCeleb => res.redirect('/celebs/list'))
    .catch(error => console.log(error))
})


//Editar celebrities. Para poder usar el nombre hay q hacer GET así

router.get('/edit', (req, res) => {
  Celebrity.findOne({_id:req.query.celebrity_id})
    .then(celebrity=>res.render('celebs-edit', { celebrity }))
    .catch(error=>console.log(err))
})    

router.post('/edit', (req, res)=>{
  const {name, occupation, catchPhrase}=req.body
  Celebrity.updateOne({_id: req.query.celebrity_id}, {$set: {name, occupation, catchPhrase}})
    .then(celebrity=>res.redirect('/celebs/list'))
    .catch(error=>console.log(err))
})


module.exports = router