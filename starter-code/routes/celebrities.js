const express = require('express');

const CelebrityModel = require('../models/celebrity.js');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {
// find the celebrities in the database
    CelebrityModel.find((err, allCelebrities)=> {
        if (err) {
            next(err);
            return;
        }

        res.locals.listOfCelebrities = allCelebrities;
        console.log(allCelebrities);
        res.render('celebrities/index.ejs');
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.ejs');

});

router.get('/celebrities/:id', (req, res, next) => {
  // "findById()" will get one result from the DB or (null)
    CelebrityModel.findById(
      req.params.id,
      (err,celebrityFromDb) => {
        if (err){
          next(err);
          return;
        }
        res.locals.celebrityInfo = celebrityFromDb;
        res.render('celebrities/show.ejs');
      }
    );
});

router.post('/celebrities', (req, res, next) => {

  const theCelebrity = new CelebrityModel ({
    name:         req.body.celebName,
    occupation:   req.body.occupation,
    catchPhrase:  req.body.catchPhrase
  });//   |                         |
  //      |                         |
  //  from SCHEMA               from FORM INPUT NAMES

    theCelebrity.save((err) => {
      if(err){
        next(err);
        return;

      }
      //Step 3 redirect after a succesful post to avoid resubmitting
      res.redirect('/celebrities');
    });
});



module.exports = router;
