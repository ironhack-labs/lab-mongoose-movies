const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET celebrities page */
router.get('/',(req, res)=>{
  Celebrity.find().then((celebs)=>{
    res.render('./celebrities/index',{celebs})
  })
  .catch(error=>{
    res.send(error)
  })
})

router.get('/new',(req,res)=>{
  res.render('./celebrities/new')
})

router.get('/:celebritieId',(req,res)=>{
  Celebrity.findOne({_id:req.params.celebritieId}).then((celeb)=>{
    res.render('./celebrities/show',{celeb})
  })
  .catch(error=>{
    res.send(error)
  })
})

router.post('/new',(req,res)=>{
  const {name,occupation,catchPhrase} = req.body;
  const newCelebrity = new Celebrity({
    name:name,
    occupation:occupation,
    catchPhrase:catchPhrase})

    newCelebrity.save()
    .then(()=>{
      res.redirect('./')
    })
    .catch((error) => {
      res.redirect('./new');
    })
})

router.post('/:id/delete',(req,res)=>{
    Celebrity.findOneAndRemove({_id:req.params.id}).then(()=>{
      res.redirect('/')
    })
})


module.exports = router;
