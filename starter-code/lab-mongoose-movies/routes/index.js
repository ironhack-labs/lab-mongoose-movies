const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrities')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities',(req,res) => {
  Celebrity.find()
  .then(celebrities => {
  res.render('celebrities', {header: "Celebrities", celebrities})
})
})


router.get('/celebrities/new', (req,res) => {
  res.render('new')
})

router.post("/celebrities/new", (req, res) => {
  Celebrity.create(req.body)
      .then(() => {
          res.redirect("/celebrities");
      })
});

router.get('/celebrities/:id', (req,res) => {  
  Celebrity.findById(req.params.id)
   .populate()
    .then(celebrity => {
      res.render("show", {header: celebrity.name, celebrity})
    })
  })

router.get('/celebrities/:id/delete', (req,res) => {
  res.render('delete')
})

router.post('/celebrities/:id/delete', (req, res,next) => {
  Celebrity.findByIdAndRemove(req.params.id,(err)=>{
     if(err){return next(err)}
     res.redirect("/celebrities")
    })
})
  


module.exports = router;
