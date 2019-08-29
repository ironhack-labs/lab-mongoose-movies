const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/api/celebs/details/:id', (req,res,next)=>{
    let id = req.params.id;
    Celebrity
            .findById(id)
            .then(celebrity=>{
              res.json(celebrity);
            })
            .catch(err=>next(err))  
})

router.post('/api/celebs/edit/:id', (req,res,next)=>{
  let id =  req.params.id;
  Celebrity
          .findByIdAndUpdate(id,{
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase,
          })
          .then(response=>{
            res.json({msg: 'Grate job!'});
          })
          .catch(err=>{
            console.log(err);
          })
})

module.exports = router;