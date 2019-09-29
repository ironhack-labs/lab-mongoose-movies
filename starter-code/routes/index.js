const express = require('express');
const router  = express.Router();
const celebrity = require('../models/celebrity');
const bodyParser   = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/celebrities', (req, res, next) => {
  celebrity.find()
  .then(celebsArr=>{
    console.log({celebsArr})
   
  //  res.send(name )
res.render('celebrities/index',{celebsArr})
  })
  });

  router.get('/celebrities/:id', (req, res, next) => {
    
    let celebId= `${req.params.id}`;
   celebrity.findById(celebId)
    .then(celebPromisse=>{
    res.render(`celebrities/show`,celebPromisse)
    })

  });

  router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
  })

  router.post('/new', (req, res) => {
    let {name,ocupation,catchPhrase}=req.body;
  let addedCeleb = new celebrity({name,ocupation,catchPhrase})
 addedCeleb.save()
  .then((celeb) => {
  res.redirect('/celebrities')
  })
  .catch((celeb) => {
  res.redirect('/new')
  })
  });
  router.post('/:id/delete', (req, res) => {
   const { id }=req.params;
  let mod= id.split("").filter((item,idx) => idx !==0).join("")
   console.log(mod)
   

  celebrity.findByIdAndRemove(mod)
  .then((celeb) => {
    res.redirect('/celebrities')
    })
    .catch((celeb) => {
    //res.redirect('/new')
    })
  })
  
module.exports = router;
