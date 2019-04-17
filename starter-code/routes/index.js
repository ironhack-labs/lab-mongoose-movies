const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// /celebrities

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrityFromDb => {
    console.log("error", celebrityFromDb)
    res.render('celebrities/celebrities', {
        celebrityFromDb: celebrityFromDb
      });
    })
    .catch(err => {
      console.log("error occurred", err)
    })
    
})

router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    Celebrity.find().then(celebrityFromDb => {
      console.log("error", celebrityFromDb);
      res.render("celebrities/celebrities", {
        celebrityFromDb: celebrityFromDb
      });
    });
  });
});


router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrityDetails => {
      res.render('celebrities/show', {
        celebrityDetails: celebrityDetails
      });
    })
})



//EDIT CELEB
router.get("/celebrities/:celebrityId/edit",(req, res, next) => {
res.render("celebrities/edit")
})
router.post("/celebrities/:celebrityId/edit",(req, res, next) => {
  Celebrity.updateOne(req.params.celebrityId, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    .then(() => {
      res.redirect('/celebrities')
    })
  })

  

  

   



module.exports = router;
