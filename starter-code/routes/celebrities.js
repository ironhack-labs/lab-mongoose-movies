  
const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

/*router.get('/celebrities', async (req, res, next) => {
    const celebrity= await Celebrity.find()
    next.catch(err => console.error('There was an error', err));
    res.render('/index', {celebrity})
  });*/

  router.get('/celebrities', async (req, res, next) => {
  const celebrity= await Celebrity.find()
 // next(catch(err => console.error('There was an error', err)));
  res.render('celebrities/index', {celebrity})
});

router.get('/celebrities/:id', async (req, res, next) => {
    const {id} = req.params
    const celeb= await Celebrity.findById(id)
   // next(catch(err => console.error('There was an error', err)));
    res.render('celebrities/show', celeb)
  });

  router.get('/celebrities/new', (req, res, next) => {
    
   // next(catch(err => console.error('There was an error', err)));
    res.render('celebrities/new')
  });

  router.post('/celebrities/new', async (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    /*const insertCeleb=*/ await Celebrity.create({name, occupation, catchPhrase})
    //insertCeleb.save()
   // next(catch(err => console.error('There was an error', err)));
    res.redirect('/celebrities')
  });

  //Edit pending

  router.post("/celebrities/:celebrityId/delete", async (req, res) => {
    const { celebrityId } = req.params
    await Celebrity.findByIdAndRemove(celebrityId)
    res.redirect("/celebrities")
  })

module.exports = router;