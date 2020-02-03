const express = require('express')
const router = express.Router()
 
const Celebrity = require('../models/celebrity')

router.get('/celebrities', async (req, res, next)=>{
  const data = await Celebrity.find()
  console.log(data)
  res.render('celebrities/index', {data})
})


module.exports = router