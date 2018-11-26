const express = require('express')
const router = express.Router()

const celebrity = require('../models/celebrity');


router.get('/', (req, res, next)=>{
  celebrity.find()
  .then(celebrities =>{
    res.render('celebrities/index', {celebrities})
  })
  .catch(err=>{
    next(err)
  })
})

router.get('/celebrities/id:', (req, res, next)=>{
  const {id} = req.params;
  celebrity.findById(id)
  .then(celebrity =>{
    res.render('/celebrities/show', celebrity)
  })
  .catch(err =>{
    next(err)
  })
})

// router.get('/celebrities/new', (req, res, next)=>{
//   const {id} = req.params;
//   celebrity.findById(id)
//   .then(celebrity =>{
//     res.render('/celebrities/new', celebrity)
//   })
//   .catch(err =>{
//     console.log(err)
//   })
// })

module.exports = router;