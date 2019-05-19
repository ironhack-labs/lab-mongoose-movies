const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')



/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities)
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch(err=>{
    next()
    return err
  })
});


router.get('/:id', (req,res)=>{
  Celebrity.findById(req.params.id)
  .then(celebrity=>{
    console.log(celebrity)
    res.render('celebrities/show', {celebrity})
  })
})

router.post('/:id', (req,res)=>{
  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  Celebrity.findByIdAndUpdate(req.params.id, {
      name,
      occupation,
      catchPhrase
    })
    .then(celebrity => {
    console.log('celebrity actualizado', celebrity)
    res.redirect('/celebrities')
  }).catch(err=>{
     next()
     return err
    
  })
})

router.get('/add/new', (req,res)=>res.render('celebrities/new'))
router.post('/add/new', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  //console.log(req.body)
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCelebrity.save()
  .then(
    celebrity => {
      res.redirect('/celebrities')
    }
  )
  .catch(err=> {
    res.render('celebrities/new', {errmsg: "There was an error, try again"})
  })
})


router.get('/:id/delete', (req,res)=>{
  Celebrity.findByIdAndDelete(req.params.id)
  .then(celebrity=>{
    console.log(celebrity)
    res.redirect('/celebrities')
  })
  .catch(err=>{
    console.log(err)
    next()
    return err
   })
})


router.get('/:id/edit', (req, res)=>{
  Celebrity.findById(req.params.id)
  .then(celebrity=>{
    res.render('celebrities/edit', {celebrity})
  })
})
module.exports = router;
