const express = require('express');
const routerCelebrities  = express.Router();

const Celebrity = require('../models/Celebrity');


/* GET Celebrities list  */


routerCelebrities.get('/', (req,res,next) => {
    Celebrity.find()
     .then(celebrities => {
        res.render('celebrities/index', {celebrities});
     })
     .catch(next)
 
 })
 
 
 
 /* GET form new celebrity */
 
 routerCelebrities.get('/new',(req,res,next) =>{
   res.render('celebrities/new');
 })
 
 /* GET specicy celebritie */
 
 routerCelebrities.get('/:id', (req,res,next) =>{
   let celebritieId = req.params.id;
 
   Celebrity.findOne({'_id':celebritieId})
     .then(celebrity =>{
         res.render('celebrities/show', celebrity);
     })
     .catch(next)
 })
 
 
 
 /* POST create new Celebrity */
 
 routerCelebrities.post('/', (req,res,next) => {
   
    var objCelebrity = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
 
    console.log(objCelebrity);
 
    const newCelebrity = new Celebrity();
 
    newCelebrity.name = objCelebrity.name;
    newCelebrity.occupation = objCelebrity.occupation;
    newCelebrity.catchPhrase = objCelebrity.catchPhrase;
 
    newCelebrity.save()
     .then(()=>{
       res.redirect('/celebrities');
     })
     .catch(()=>{
       req.redirect('/celebrities');
     })
 })
 
 /* POST Delete celebrity*/
 
 routerCelebrities.post('/:id/delete', (req,res,next)=>{
   let celebritieId = req.params.id;
 
   Celebrity.findByIdAndRemove({'_id':celebritieId})
     .then(()=>{
        res.redirect('/celebrities');
     })
     .catch(next)
 
 })
 
 /* GET EDIT Celebrity */
 
 routerCelebrities.get('/:id/edit', (req,res,next)=>{
    let celebritieId = req.params.id;
 
    Celebrity.findOne({'_id': celebritieId})
     .then(celebrity=>{
         res.render('celebrities/edit', celebrity);
     })
     .catch(next)
 })
 
 
 
 /* POST EDIT Celebrity */
 
 routerCelebrities.post('/:id',(req,res,next)=>{
 
   let celebritieId = req.params.id;
 
   var objCelebrity = {
     name: req.body.name,
     occupation: req.body.occupation,
     catchPhrase: req.body.catchPhrase
   }
 
   Celebrity.findByIdAndUpdate(celebritieId, {$set: objCelebrity}, {new:true} )
     .then(()=>{
       res.redirect('/celebrities');
     })
     .catch(next)
 })
 

 module.exports = routerCelebrities;