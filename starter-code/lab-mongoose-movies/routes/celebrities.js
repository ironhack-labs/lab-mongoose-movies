const express = require('express');
const Celebrity = require('../models/celebrity-model');
const router  = express.Router();

// get all celibrities from DB
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then( data => {
        res.render('celebrities/index', { celebrity : data});
    })
    .catch(err =>{
      next(err) ;
    });
});

//****************** Iteration4: Adding New Celebrities *******************
router.get("/celebrities/new", (req,res,next) =>{
  res.render("celebrities/new");
})
// Add new celebrity in DB when click on the Save Button
router.post("/createCelebrity", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
      .then(() => {
        res.redirect("/celebrities");
      })
      .catch( err =>{
        next(err);
      }); 
})
//****************** /Iteration4: Adding New Celebrities *******************

//****************** Iteration5: Delete Celebrities ************************
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() =>{
    res.redirect("/celebrities");
  })
  .catch(err => {
    next(err);
  });
});
//****************** /Iteration5: Delete Celebrities ************************

//****************** Iteration6: Update Celebrities ************************
router.get("/celebrities/:id/edit", (req,res,next) =>{
  Celebrity.findById(req.params.id)
    .then( data => {
        res.render('celebrities/edit', {celebId: data._id, celeb: data})
    })
    .catch(err => {
      next(err);
    }) ;
});

router.post("/celebrities/:celebId", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(
                          req.params.celebId,                   
                          {name, occupation, catchPhrase},      
                          {runValidators: true}                 
                        )
                        .find(() => {
                            res.redirect(`/celebrities/${req.params.celebId}`)

                        })
                        .catch (err => {
                          next(err)
                        });
});


//****************** /Iteration6: Update Celebrities ************************


//*************************************** */
// get celebrity detail from DB when click on the name of the celebrity!
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then( data => {
        res.render('celebrities/show', { celebrity : data});
    })
    .catch(err =>{
      next(err) ;
    });
})

module.exports = router;

