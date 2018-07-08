const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/Celebrity');
//const mongoose = require('mongoose');


//GET home page 
router.get('/', (req, res, next) => {
  res.render('index');
});

//C(R)UD: Retrieve -> List all celebrities

router.get('/celebrities', (req, res, next) => {
    Celebrities.find({})
        .then( celebrities => {
        console.log(celebrities)
      res.render('celebrities/index', {celebrities});
    })
   
});
  
//(C)RUD: -> Add a celebrity 

router.get('/celebrities/new',(req, res, next) => {
    res.render('celebrities/new');
    
  });

//ADD bbdd

router.post('/celebrities', (req, res,next) => {
    const {name,occupation,catchPhrase} =req.body;
    new Celebrities({ name, occupation, catchPhrase })
    .save()
    .then(celebrity => {
        console.log("New celebrity!!!");
        res.redirect('/celebrities');
    })
    .catch(err => {
     console.error("ERROR", err);
    });
});

//Delete celebrity

router.get('/celebrities/delete/:id',(req,res ) =>{
    Celebrities.findByIdAndRemove(req.params.id)
    console.log("voy a borrar")
    .then(celebrity =>{
        res.redirect("/celebrities")
    })
    
})
//* CR(U)D: -> Show to edit a celebrity 
router.get("/celebrities/edit/:id", (req, res) => {
    Celebrities.findById(req.params.id)
      .then(celebrities => {
        res.render("celebrities/edit", { celebrities });
      })
      .catch(error => {
        console.log(error);
      });
  });

//* CR(U)D: Update an specific celebrity 

router.post("/celebrities/edit/:id", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrities.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
      .then(celebrities => {
        res.redirect("/celebrities");
      })
      .catch(error => {
        console.log(error);
      });
  });
  
//C(R)UD: Retrieve -> List one celebrity

router.get('/celebrities/:id', (req, res, next) => {
    
    Celebrities.findById(req.params.id)
    .then( celebrities => {
        res.render('celebrities/show', {celebrities});
      })
      .catch(err => {
       console.error("ERROR", err);
      });  

});


module.exports = router;