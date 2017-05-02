const express        = require('express');
const Celebrity      = require('../models/celebrity-model.js');
const router         = express.Router();

///celebrities
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
