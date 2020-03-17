const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity')


router.get('/', (req, res, next) => {
  Celebrities.find()
    .then(respuesta => {
      res.render('celebrities/index', { respuesta });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});

router.get("/new", (req, res, next) => {
  res.render(('celebrities/newcelebritie'))
})

router.get("/:id/edit", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(respuesta => {
      res.render('celebrities/edit', respuesta)
    })
})

router.get("/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(respuesta => {
      res.render('celebrities/show', respuesta)
    })
})


router.post('/new', (req, res, next) => {
  Celebrities.create(req.body)
  .then(data =>{
    res.redirect("/celebrities")
  } )
  .catch(err=>res.render("/new",{errorMessage:"errorrrr!!!"}))
});


router.post("/:id/delete", (req,res,next)=>{
  Celebrities.findByIdAndDelete({_id:req.params.id})
  .then((res.redirect("/celebrities")))
  .catch((err)=>next(err))  
})
router.post("/:id",(req,res,next)=>{
  Celebrities.findByIdAndUpdate({_id:req.params.id},req.body)
  .then(res.redirect("/celebrities"))
})





module.exports = router;



