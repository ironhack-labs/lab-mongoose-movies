const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity')

//http://localhost:3000/celebrities

  router.get('/celebrities', (req,res,next) =>{  //triggered when going to Celebritiess page 
    Celebrities.find().then( CelebritiesFromDb =>{  //find all Celebritiess in the database 
      res.render('celebrities/index', { CelebritiesInHBS : CelebritiesFromDb }) //send all the books to the books.hbs file 
    })
  })

  router.get('/celebrity/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({ _id: celebrityId })
      .then(celebrity => {
        if (!celebrity) {
          return res.status(404).render('not-found');
        }
        res.render('celebrities/show', { celebrity });
      })
      .catch(next);
   });

   router.post('/celebrities/new', (req, res, next)=>{
    const { name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity({  name, occupation, catchPhrase})
    const { name, occupation, catchphrase} = req.body;
    const newCeleb = new Celebrity({  name, occupation, catchphrase})
    newCeleb.save()
    .then((data) => {
        res.redirect('/celebrities');
    })
    .catch((error) => {
        console.log(error);
        res.redirect('/celebrities/new')
    })
});

  module.exports = router;