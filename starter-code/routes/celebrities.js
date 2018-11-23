const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

//List Celebrities
router.get('/',(req, res, next)=>{
  Celebrity.find()
    .then(celebrities=>{
      res.render('celebrities/list',{celebrities})
    }).catch(e=>{
      next(e)
    })
})
module.exports = router