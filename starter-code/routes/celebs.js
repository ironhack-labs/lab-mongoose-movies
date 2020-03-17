const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")
const Celebrity = require("../models/celebrities")



module.exports = router;


router.get('/', async (req, res, next) => {
  try {
    celebrities = await Celebrity.find()
    res.render('celebrities/celebrities', {celebrities});
  } catch {
    (err)=> console.error("There was an error: ",err)}  
  }
);


router.get('/celebrity-details/:id', async (req, res, next) => {
  try {
    celebrities = await Celebrity.findById(req.params.id)
    res.render('celebrities/celebrity-details', celebrities);
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', async (req, res, next) => {
  try {
    const {name, occupation, catchPhrase, image} = req.body
    await Celebrity.create({name, occupation, catchPhrase, image})
    res.redirect('/celebrities/');
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/celebrity-delete/:id', async (req, res, next) => {
  try {
    celebrities = await Celebrity.findByIdAndRemove(req.params.id)
    res.redirect('/celebrities/');
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/celebrity-edit/:id', async (req, res, next) => {
  try {
    celebrity = await Celebrity.findById(req.params.id)
    res.render('celebrities/edit', celebrity);
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.post("/:id", async (req,res,next) =>{
 try {
  const {name, occupation, catchPhrase, image}= req.body
  await Celebrity.update({_id: req.params.id}, {$set: {name, occupation, catchPhrase, image}}, {new: true})
  res.redirect("/celebrities/")
  } catch {
  next();
  (err)=> console.error("There was an error: ",err)}  
}
);

