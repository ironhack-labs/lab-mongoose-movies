const express = require('express');
const app = express()
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities=>{
    res.render('./celebrities/index',{celebrities})
  })
  .catch(err=>{
    console.log(err);
  })
});

router.get('/new', (req, res) => {
  res.render('./celebrities/new')
})

router.post('/new', (req, res) => {
  let newCelebrity = new Celebrity(req.body)
  newCelebrity.save()
  .then(()=>res.redirect('/celebrities'))
  .catch((err)=>{
    console.log(err);
    res.render('./celebrities/new')
  })
})

router.get('/:id',(req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity=>{
    res.render('./celebrities/show', celebrity)
  })
  .catch(err=>{
    console.log(err);
  })
});

router.post('/:id/delete',(req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>res.redirect('/celebrities'))
    .catch((err)=>console.log(err)) 
});

router.get('/:id/edit',(req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrity)=>res.render('./celebrities/edit',celebrity))
  .catch((err)=>console.log(err))
})

router.post('/:id',(req, res, next)=>{
  let objUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(req.params.id, objUpdate)
  .then(()=>res.redirect('/celebrities'))
  .catch((err)=>console.log(err))
})


module.exports = router;