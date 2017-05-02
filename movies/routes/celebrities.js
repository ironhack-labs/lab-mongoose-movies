const express = require('express');
const router = express.Router();

// require the Celebrity model here
const Celebrity = require('../models/modelForCelebrity.js');

// ===   Render a list of Celebrities and sends ================
//====   the list with celebList variable ================
//====    to the view =====================================
router.get('/celebrities', (req, res, next) => {
  
  Celebrity.find((err, celebList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/index.ejs', {
      celebList: celebList
    });
  });
});
//========Add new celebrity========
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/newCelebrity.ejs',{});
});

//=== Post the the form and save the data   =======
//======== in the data base   =====================
router.post('/celebrities/new', (req, res, next) => {

      // Iteration #3
      const newCelebrityInfo = {
        nameCelebrity: req.body.nameCelebrity,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
        // description: req.body.description,
        // imageUrl: req.body.imageUrl,
      }
    const newCelebrity = new Celebrity(newCelebrityInfo);
    newCelebrity.save( (err) => {
        if (err) { 
          res.render('celebrities/new.ejs', {
              errors:newCelebrity.errors
          });
        return}
        // redirect to the list of celebs if it saves
        return res.redirect('/celebrities');
      });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    const celebId = req.params.id;
    Celebrity.findByIdAndRemove(celebId,(err, theCeleb) =>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/celebrities');
    });
});










//========celebrity Details =============
router.get('/celebrities/:id',(req,res,next) => {

    const celebId=req.params.id;

    Celebrity.findById(celebId,(err,theCeleb) => {
      if(err){
        next(err);
        return;
      }
      if (!theCeleb){
        next();
        return;
      }
      res.render('celebrities/celebrityDetails.ejs', {
        theCeleb:theCeleb
      });
    });

});

//========celebrity Edit =============
router.get('/celebrities/:id/edit',(req,res,next) => {  //-----------
    const celebId = req.params.id;                 //           |
    Celebrity.findById(celebId,(err,theCeleb) => {     //           |
      if(err){
        next(err);
        return;
      }
    res.render('celebrities/editCeleb.ejs', {
      theCeleb:theCeleb
    });
    }); 
});                                                // .        |
                                                    //         |
router.post('/celebrities/:id', (req, res, next) => {    //----------
    const celebId = req.params.id;
        
      const celebChanges = {
        nameCelebrity: req.body.nameCelebrity,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
        // description: req.body.description,
        // imageUrl: req.body.imageUrl,
      };
      Celebrity.findByIdAndUpdate( celebId,celebChanges, (err,theCeleb) =>{
        if(err){
          next(err);
          return;
        }
        res.redirect('/celebrities');
    });
});




module.exports = router;