const express = require('express');
const router  = express.Router();
const celebrities = require("../models/Celebrity");

/* GET home page */


router.get('/', (req, res, next) => {
  celebrities.find()
    .then((celebritiesAll) => {
      res.render('celebrities/index', { celebritiesAll });
    })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});



router.get('/:id', (req, res, next) => {
let {id} =req.params
  celebrities.findById(id)
    .then((oneCelebrity) => {
      res.render('celebrities/show', { oneCelebrity });
    })
});

router.post(`/`,(req, res, next)=> {
  celebrities.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,   
  })
  .then(()=> {
    res.redirect(`celebrities`)
  })
})



router.post(`/:id/delete`, (req, res, next)=>{
  let {id} =req.params
celebrities.findByIdAndRemove(id)
.then(()=>{
  res.redirect(`/celebrities`)
})

})




module.exports = router;