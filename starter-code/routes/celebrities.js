
const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');


router.get('/celebrities', (req, res) => {

  //get books from Mongo and pass them to the view
    Celebrity.find()
      .then((allTheCelebritiesFromDB) => {
        res.render("celebrities/index", {celebrities: allTheCelebritiesFromDB});
      });
    })





/////iteration 4
    router.get('/celebrities/new', (req, res) => {
        Celebrity.find() 
        .then((allTheCelebritiesFromDB) => {
          res.render('celebrities/new', {celebrities: allTheCelebritiesFromDB});
        })
    });

    router.post('/celebrities/new', (req, res) => { 
        let {name, occupation, catchPhrase} = req.body 
        Celebrity.create({
          name,
          occupation,
          catchPhrase
        }).then(() => {
          res.redirect('/celebrities'); 
      });
    });
      

////////iteration5

router.post('/celebrities/:celebId/delete', (req, res) => {
    let celebId = req.params.celebId;
    Celebrity.findByIdAndDelete(celebId) 
    .then(() => {
      res.redirect('/celebrities');
    })
  
  });

///////bonus edit

router.get('/celebrities/:celebId/edit', (req, res) => {
    let celebId = req.params.celebId;
    Celebrity.findById(celebId)
      //.populate('author')
      .then((theCelebFound) => {
    //found the book
    //Author.find()
        //.then((authorsFromDB) => {
          res.render('celebrities/edit', {celebrities: theCelebFound}); 
        })
     });


router.post('/celebrities/:celebId', (req, res) => {
        let celebId = req.params.celebId;
        let {name, occupation, catchPhrase} = req.body;
        Celebrity.findByIdAndUpdate(celebId, { 
         name,
         occupation,
         catchPhrase
        }).then (() => {
          res.redirect('/celebrities');
        });
      
      });

    



    //NAO ESQUECER route com :id fica posicionado em ultimo lugar //:id

    router.get('/celebrities/:celebId', (req, res) => {
        let celebId = req.params.celebId;
        //get book using id that is on the route
        //find book on MongoDB using the book id
        Celebrity.findById(celebId)
            .then((theCelebFound) => {
                console.log(theCelebFound);
            res.render("celebrities/show", {celebrities: theCelebFound});
          })
          .catch((err) => {
            res.render('error', {err})
              })
      });




      module.exports= router //NAO ESQUECER!!!!!!!!
 
