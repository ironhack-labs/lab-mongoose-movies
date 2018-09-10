const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


router.get ('/celebrities/index', (req, res, next)=>
{
  Celebrity.find()
  .then((ret) => {
    console.log(ret)
    res.render('celebrities/index', {listOfCelebs: ret})
  })
  .catch(next)
  
})


router.get ('/celebrities/new', (req, res, next)=>
{
  res.render('celebrities/new')
  .then((ret) => {
    console.log(ret);
  })
  .catch(next)
})



router.post('/celebrities/update/:id', (req, res, next)=> {

  let theName = req.body.celebName;
 let  theOccupation = req.body.celebOccupation;
  let theCatch = req.body.celebCatchphrase;

  Celebrity.findByIdAndUpdate(req.params.id, {

    name: theName,

    occupation: theOccupation,

    catchphrase: theCatch,


  })
  .then((ret)=> {
    res.redirect('/celebrities/index')
  })
  .catch((err)=>{
    console.log(err);
    next();
  })
})


router.get ('/celebrities/edit/:id', (req, res, next)=> {
    Celebrity.findById(req.params.id)
    .then((ret)=> {
      res.render('celebrities/edit', {Celebrity: ret})
    })
})


router.get ('/celebrities/:id', (req, res, next)=> 
{
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
  .then((ret) => {
    console.log(ret)
    res.render('celebrities/show', {celeb: ret})
  })
  .catch(next)
})

router.post('/celebrities/create', (req, res, net)=> {
 let newName = req.body.celebName;
 let newOcc = req.body.celebOccupation;
 let newCatch = req.body.celebCatchphrase;

 Celebrity.create({
   name: newName,
   occupation: newOcc,
   catchphrase: newCatch,

 })
 .then((ret)=> {
   res.redirect('/celebrities/index')
 })
 .catch((err)=> {
   next(err)
 })
})

router.post('/celebrities/:id/delete', (req, res, next)=> {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((ret)=> {
    res.redirect('/celebrities/index')
  })
  .catch(next)
  })

module.exports = router;