const express = require('express');
const Celebrity = require("../models/celebrity");
const router = express.Router();
// const Movie =require('..models/Movie');


router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
  .then((allTheCelebs)=>{
    res.render('celebrities/index', {celebrities: allTheCelebs});
    //above - in {}, celebrities is the array being passed to the function, and allTheCelebs is arbitrary and just has to match the argument inside the .then callback.
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/:id', (req, res, next) => {
    let celebrityId = req.params.id;
      Celebrity.findOne({'_id': celebrityId})
          .then(celebrity => {
            res.render("celebrity-info", { celebrity })
          })
          .catch(err =>{
            next(err)
          })
});





















module.exports = router;