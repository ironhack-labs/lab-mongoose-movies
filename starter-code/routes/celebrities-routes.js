const express = require('express');
const router  = express.Router();

const Celebrity = require ('../models/Celebrity.model.js');


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celebrity');
});

router.post('/celebrities/create', (req, res, next) =>{
const {name, occupation, catchPhrase} = req.body;

    Celebrity.create({name, occupation, catchPhrase})
    .then(newCelebrity => {
        console.log(newCelebrity);
        res.redirect('/celebrities')
    })
    .catch(err => {
        console.log(`Error while adding new celebrity in to the DB:  ${err}`);
        res.render('celebrities/new-celebrity')
    })
});

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(allCelebsFromDB => {
        console.log(allCelebsFromDB);
        res.render('celebrities/celebrities', { allCelebsFromDB })
    })
    .catch(err => console.log(`Something went wrong with finding celebities from database: ${err}`))

  });

  router.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=> {
        res.redirect('/celebrities')
    })
    .catch(err=>console.log(`Error while removing celebrity from DB: ${err}`))
});

router.get('/celebrities/:id/edit', (req, res, next) => {

    Celebrity.findById(req.params.id)
    .then(foundCelebrity => {
      res.render('celebrities/edit-celebrity', {foundCelebrity})
    })
    .catch()
   });


router.post('/celebrities/:id/edit', (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body;

Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {new: true})
.then(updatedCelebrity => {
  console.log(`updared Celebrity:---->`, {updatedCelebrity});
  res.redirect('/celebrities')
})
.catch(err => `Something went wrong with editing this celebrity: : ${err}`)
});



router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(oneCelebrity => {
        console.log(oneCelebrity);
        res.render('celebrities/celebrity-details', { oneCelebrity })
    })
    .catch(err => console.log(`Something went wrong with finding celebities from database: ${err}`))

  });


module.exports = router;