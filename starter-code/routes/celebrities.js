const express = require('express');
const Celeb = require('../models/Celebrity');
const router = express.Router();


router.get("/celebrities", (req, res, next) => {
    Celeb.find()
        .then((celebrities) => {
            //console.log(celebrities)
            res.render("celebrities/index", {celebrities})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
    
    Celeb.findById(req.params.celebrityId)
        .then((celebDetails) => {

            res.render("celebrities/show", {celebDetails})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
            next()
        });
});
//to add a new celebrtiy
router.get("/celebrities/new", (req, res, next) => {
    
    Celeb.findById(req.params.celebrityId)
        .then((newCeleb) => {

            res.render("celebrities/new", {newCeleb})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
            next()
        });
});

router.post("/celebrities/new", (req, res, next) => {
    Celeb.create(req.body)
        
      .then((celebDetails) => {
        console.log("your celebrity is saved in the DB!")
        res.redirect("/celebrities");
      }) 
      .catch(err => {console.log(`Error: ${err}`)});
  });

//to delete a celebrity  

router.post('/celebrities/:celebrityId/delete', (req, res, next) => {
    Celeb.findByIdAndDelete(req.params.celebrityId)
    .then( () => {
      res.redirect("/celebrities")
    })
    .catch(err => {console.log(`Error: ${err}`)
    next()
    });
});

//to edit a celebrity
router.get('/celebrities/:celebrityId/celebrity-edit', (req, res, next) => {
    Celeb.findById(req.params.celebrityId)
      .then(celebrity => {
        res.render("celebrities/celebrity-edit", celebrity);
      })
      .catch(err => {console.log(`Error: ${err}`)});
  });


router.post('/celebrities/:celebrityId/celebrity-edit', (req, res, next) => {
    Celeb.findByIdAndUpdate(req.params.celebrityId, req.body, { new: true })
      .then(celebDetails => {
        res.redirect(`/celebrities/${celebDetails._id}`);
      })
      .catch(err => {console.log(`Error: ${err}`)});
  });

  
module.exports = router;