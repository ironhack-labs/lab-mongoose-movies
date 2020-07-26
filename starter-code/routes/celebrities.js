



const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');




router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log("Retrieved celebrities from DB:", allTheCelebritiesFromDB);
      res.render('celebrities/index', {
        celebrities: allTheCelebritiesFromDB,
      });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB:", error);
    });
});
router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(theCelebrity => {
      res.render('celebrities/show', { celebrity: theCelebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase, } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });

  newCelebrity
    .save()
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      res.render('celebrities/new');
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params._id)
    .then((celebrity) => {
      res.redirect("/celebrities", { celebrity });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params._Id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});
router.post('/celebrities/:id',(req, res, next) => {
  const  {name, occupation, catchPhrase} = req.body;
  Celebrity.update({_id:req.query.celebrity_id},{new: true})
  .then((celebrity)=> {
    res.redirect("/celebrities", { celebrity });
  })
  .catch((error) => {
    console.log(error);
  });
});
module.exports = router;