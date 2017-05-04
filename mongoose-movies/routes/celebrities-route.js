const express        = require('express');
const Celebrity      = require('../models/celebrity-model.js');
const router         = express.Router();

///celebrities get
router.get('/celebrities',(req, res, next)=>{
  Celebrity.find((err, celebrityList)=>{
      if(err){
        next(err);
        return;
        }
    res.render('celebrities/celebrities-list-view.ejs',{
      celebrities: celebrityList
      });
    });
  });

//celebrity/new get
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-celebrities-view.ejs');
  });
//celebrity/new post
router.post('/celebrities/new', (req, res, next)=>{
    const theCelebrity= new Celebrity({
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase
    });
    theCelebrity.save((err)=>{
      if(err){
        res.render('celebrities/new-celebrities-view.ejs', {
          validationErrors: theCelebrity.errors
        });
        return;
      }
      res.redirect('/celebrities');
    });
  });

///celebrities/:id
router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, theCelebrity) => {
      if (err) {
      next(err);
      return;
      }
      //404 if no product was found
      if (!theCelebrity) {
        next();
        return;
      }
    res.render('celebrities/celebrities-details-view.ejs', {
      celebrities: theCelebrity
      });
    });
  });






module.exports = router;
