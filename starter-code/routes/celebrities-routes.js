const express = require('express');
const celebRouter  = express.Router();
const Celebrity = require('../models/celebrity')

// Show celebrities
celebRouter.get('/',(req,res,next) =>{
  Celebrity.find()
.then(celebrities => res.render('./celebrities/celebrities',{celebrities: celebrities}))  
.catch(err => console.log(err))})


// Route with page with form add new celebrities
celebRouter.get('/new',(req,res,next) =>  {
  res.render('./celebrities/new-celebrity')
         })
    
// Add new celebrities to the database
celebRouter.post('/create',(req,res,next) => {
const {name,occupation,catchPhrase} = req.body;
Celebrity.create({name: name,occupation:occupation,catchPhrase:catchPhrase})
.then(celebrity => {
    console.log('A new celebrity was added',celebrity)
res.redirect('/celebrities')
})
.catch(err => console.log(err))
})         

// Route to show celebrity detail page
celebRouter.get('/:id',(req,res,next) =>  {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/celebrity-details',{celebrity}))
  .catch(err => console.log(err))
  })

// Route to page to delete celebrities
celebRouter.post('/:id/delete',(req,res,next) =>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities'))
  .catch(err => console.log(err))})

// Rout to page to edit a celebrity
celebRouter.get('/:id/edit',(req,res,next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('./celebrities/edit-celebrity',{celebrity}))
  .catch(err => console.log(err))
  })

// Rout to post the editing of a movie
celebRouter.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase} = req.body;    
  Celebrity.updateOne({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
  .then(() => res.redirect("/celebrities"))
  .catch(err => next(err));
    });
  
module.exports = celebRouter;