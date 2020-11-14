const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');



// GET ALL CELEBRITIES LIST
router.get('/', (req, res, next) => {
    Celebrity.find({}, {name: 1})
    .then((celebrity) => {
      console.log(celebrity)
      res.render('./celebrities/index', {celebrity});
      
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
    
  })

router.get('/new', (req, res, next)=>{
  res.render('./celebrities/new');
});
  
router.post('/', (req, res, next)=>{
  const {name, ocupation, catchPhrase} = req.body
  Celebrity.create({name: name, ocupation: ocupation, catchPhrase: catchPhrase})
      .then((result)=>{
        console.log(result);
        res.redirect('/celebrities');
      })
      .catch((err)=> {
        console.log(err)
        res.render('error');
      })
});



router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    Celebrity.findById(id)
    .then((result)=>{
      res.render('./celebrities/show', result);
    })

    .catch((err)=> {
      console.log(err)
      res.render('error')
  })
})


router.post('/:id/delete', (req, res, next) =>{
  const id = req.params.id
  Celebrity.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch((err)=> {
      console.log(err)
      res.render('error')
  })
})


router.get('/:id/edit', (req, res, next)=>{
  const id = req.params.id
  Celebrity.findById(id)
  .then((result)=>{
      res.render('./celebrities/edit', result)
  })
  .catch((err)=>{
      console.log(err)
      res.render('error')
  })
  
})


router.post('/:id/edit', (req, res, next)=>{
  const id = req.params.id
  const editedCelebrity = req.body
  Celebrity.findByIdAndUpdate(id,  editedCelebrity)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    console.log(err)
    res.render('error')
  })

})


  
module.exports = router;
