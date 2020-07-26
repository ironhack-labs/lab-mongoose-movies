const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');


router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      console.log (`Retrieved celebrities from DB:`, allTheCelebritiesFromDB );
      res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB   });
    })
    .catch(error => {
      console.log(`Error while getting the celebrities from the DB:`, error);
    })
    });
    


    router.get('/new', (req, res, next) => {
        res.render("celebrities/new");
      });


      router.post('/new', (req, res, next) => {
        const {name, occupation, catchPhrase} = req.body;
        const newCelebrity = new Celebrity({name, occupation, catchPhrase})
        newCelebrity.save()
        .then((celebrities) => {
          res.redirect('/celebrities');
        })
        .catch((error) => {
          console.log(error);
        })
  
    }); 

    router.get('/:id', (req, res, next) => {
        Celebrity.findById(req.params.id)
          .then(theCelebrity => {
            res.render('celebrities/show', { celebrities: theCelebrity });
          })
          .catch(error => {
            console.log('Error while retrieving celebrities details: ', error);
          })
      });



      router.post("/:id/delete", (req, res, next) => {
        Celebrity.findByIdAndRemove(req.params.id )
          .then((celebrities) => {
            res.redirect('/celebrities');
          })
          .catch((error) => {
            console.log(error);
          });
          
      });


      router.get("/:id/edit", (req, res, next) => {
        Celebrity.findById(req.params.id)
          .then((celebrities) => {
            res.render("celebrities/edit", {celebrities: celebrities});
          })
          .catch((error) => {
            console.log(error);
          });
      });

router.post("/:id", (req, res, next) => {
  const celebrityId = req.params.id
  const body = req.body
  const updatedCelebrity = {
        name: body.name,
        occupation: body.occupation,
        catchPhrase: body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(celebrityId, updatedCelebrity)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      next(error)
    });
});

    


    module.exports = router;    