const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")
const dotenv = require("dotenv")
dotenv.config()

/* GET home page */

//Iteration 2

router.get('/celebrity', (req, res, next) => {
    console.log("Hello")
    Celebrity.find()
    .then((celebrity)=>{
        console.log(celebrity)
        res.render('celebrities/index.hbs',{celebrity})
        //next()
    })
    .catch((err)=>{
        res.render('index.hbs')
        next()
    })

});

//Iteration 3

router.get('/celibrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celibrity)=> {
        res.render('celebrities/show.hbs',{celibrity})
    })
    .catch((err)=>{
console.log(err)
    })
})

//Iteration 4

router.get('/celebrities/new', (req, res, next) => {
    
    res.render('celebrities/new.hbs')
    }) 

router.post('/celebrities', (req, res, next) => {
   
    let{name,occupation, catchPhrase}= req.body
    Celebrity.create({name,occupation, catchPhrase})
    .then(()=>{
        res.redirect('/celebrity')
    })
    .catch(()=>{
            res.render('celebrities/new.hbs')
        })    
    })

 //Iteration 5   

    router.post('/celebrities/:id/delete', (req, res, next) => {
        Celebrity.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.redirect('/celebrity')
        })
        .catch(()=>{
            next()
        })
       }) 



module.exports = router;