const express = require('express');
const router  = express.Router();



const Celebrity = require('../models/Celebrity')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//LIST ALL THE CELEBRITIES
router.get ('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities=>{
    res.render("celebrities", {celebrities})
  })
  .catch(e => {
    console.log(e);
  })
})

//RETRIEVE DETAILS OF AN SPECIFIC CELEBRITY WITH IT'S OWN ID
router.get('/celebrities/:id',(req,res,next)=>{
  let _id = req.params.id
    Celebrity.findById({_id})
   .then(celebrity=>{
     res.render("celebrity-detail", celebrity)
   })
})
//SHOW THE FORM TO CREATE A CELEBRITY
//router.get('/celebrities/new', (req, res, next)=>{
  //res.render('new-celebrity');
//})

module.exports = router;


/*router.get('/book/:id', (req, res)=>{
  //console.log (req.params)
  //res.send(req.params.perro)
 let _id = req.params.id
    Book.findById({_id})
    .then(book =>{
      res.render("book-detail", book)     
    })
})*/