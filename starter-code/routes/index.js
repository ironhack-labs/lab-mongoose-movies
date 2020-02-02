const express = require('express');
const router  = express.Router();
const Celebrity = require('./../models/celebrity')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async(req,res) =>{

  const celebrities = await Celebrity.find()
  //console.log(celebrities)
  res.render('celebrities', {celebrities})
  

}) 

router.get('/celebrities/index', async(req , res) =>{


})



module.exports = router;
