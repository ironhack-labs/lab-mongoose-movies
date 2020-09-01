const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  try{
    const celebrities = await Celebrity.find()
    res.render('celebrities/index', { celebrities })
  }catch(error){
    console.log(`THE ERROR IS ${error}`)
    next()
  }

})

router.get('/celebrities/:id', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id)
    res.render('celebrities/show', celebrity)
  }catch(error){
    console.log(`THIS IS THE ERROR: ${error}`)
    next()
  }
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', async (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  try{
   const newCelebrity = Celebrity.create({
     name,
     occupation,
     catchPhrase
   }) 
   res.redirect('/celebrities')
  }catch(error){
    res.redirect('/celebrities/new')
    console.log(`ERROR IN CREATION IS ${error}`)
  }
})

router.post('/celebrities/:id/delete', async (req, res, next) => {
  try{
    const celebrityToDelete = await Celebrity.findByIdAndRemove(req.params.id)
    res.redirect('/celebrities')
  }catch(error){
    console.log(`THIS IS THE DELETE ERROR ${error}`)
    next()
  }
})

router.get('/celebrities/:id/edit', async (req, res, next) => {
  try{
    const celebrityToEdit = await Celebrity.findById(req.params.id)
    res.render('celebrities/edit', celebrityToEdit)
  }catch(error){
    console.log(`THIS IS THE ERROR FROM EDIT ERROR: ${error}`)
    next()
  }
})

router.post('/celebrities/:id/edit', async (req, res, next) => {
  try{
    const id = req.params.id
    const {name, occupation, catchPhrase} = req.body
    await Celebrity.findOneAndUpdate(id, {name, occupation, catchPhrase})
    res.redirect('/celebrities')
  }catch(error){
    console.log(`THIS IS THE ERROR FROM UPDATE ERROR ${error}`)
    next()
  }
})
module.exports = router;
