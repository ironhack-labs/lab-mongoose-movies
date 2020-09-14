
const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity.model')

//Iteration #2: Listing Our Celebrities
router.get('/index',(req,res) => {

  Celebrity.find({}) 
  .then(celebrities => res.render('celebrities/index', { celebrities }))
  .catch(err => console.log('Error: ', err))

})

//Iteration #4: Adding New Celebrities
router.get('/create', (req, res) => res.render('celebrities/new'))
router.post('/create', (req, res) => {

  const { name,occupation,catchPhrase } = req.body

  Celebrity.create({ name,occupation,catchPhrase })
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err)) })

//Iteration #5: Deleting Celebrities
router.post('/delete/:id',(req,res) =>{

  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err))
  
})

//Iteration #6 (Bonus): Editing Celebrities
router.get('/edit/:id',(req,res) => {

  const id = req.params.id

  Celebrity.findById(id)
  .then(editCeleb => res.render('celebrities/edit',editCeleb))
  .catch(err => console.log('Error: ', err))
})

router.post('/edit/:id',(req, res) => {

  const { name,occupation,catchPhrase } = req.body
  const id = req.params.id

  Celebrity.findByIdAndUpdate(id, { name,occupation,catchPhrase })
  .then(() => res.redirect('/'))
  .catch(err => console.log('Error: ', err))
  })


//Iteration #3: The Celebrity Details Page
router.get('/:id',(req,res) =>{


  Celebrity.findById(req.params.id)
  .then(celebDetails => res.render('celebrities/show',celebDetails))
  .catch(err => console.log('Error: ', err))

})


  




module.exports = router