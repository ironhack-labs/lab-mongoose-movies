const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then(celebritiesFromDB=> {
        console.log(`The List of celebrities: ${celebritiesFromDB}`)
        res.render("celebrities/index", {celebrities: celebritiesFromDB})
    })
    .catch(err => console.log(`Error while retrieving celebrities: ${err}`))
})


router.get("/create", (req, res, next) => {
    const { id } = req.params;
    CelebrityModel.findById(id)
     .then(allCelebrityDetails => {
         console.log(allCelebrityDetails)
         res.render('celebrities/show', {celebrityDetails: allCelebrityDetails})
     })
     .catch(err=> {
         console.log(`Err While getting the Celebrity Details from the DB: ${err}`)
     })
 })

 router.get('/new', (req,res) =>{
    res.render('celebrities/new')
})

 router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;

     CelebrityModel.create({name, occupation, catchPhrase})
    .then(() => 
        res.redirect('/celebrities'))
    .catch(error => 
        res.redirect('/new') => {
            console.log (`Error while creating a new celebrity: ${error}`)
        })    
  });

// IT-5

 router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch((err) => {
        console.log(`Error while deleting a celebrity: ${err}`);
    });
});


// IT-6

router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
      .then(celebToEdit => {
        res.render('./celebrities/edit', celebToEdit);
      })
      .catch((err) => {
        console.log(`Error while editing a celebrity: ${err}`);
        next();
      });
  });
 
router.post('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(
      id,
      { name, occupation, catchPhrase },
      { new: true }
    )
    .then(() => res.redirect('/celebrities'))
    .catch((err) => {
      console.log(`Error while editing a celebrity: ${err}`);
      next();
    });
});
   



module.exports = router;
