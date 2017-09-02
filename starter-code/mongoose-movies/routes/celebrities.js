const express = require('express');

const CelebrityModel = require('../models/celebrities.js');

const router = express.Router();


router.get('/celebrities',(req,res,next) => {

    CelebrityModel.find((err,celebrities) => {
        if (err) {
          next(err);
          return;
        }
        console.log(celebrities);
        res.locals.listOfCelebrities = celebrities;

        res.render('celebrities/index.ejs');
    });

});

// step one of adding new celebrities
router.get('/celebrities/new', (req,res,next) => {

    res.render('celebrities/new.ejs');

});

//step two of adding new celebrities
router.post('/celebrities', (req,res,next) => {

  // create new celebrity with the celebrity schema
  const celebrity = new CelebrityModel({
      name: req.body.celebName,
      occupation: req.body.celebOccupation,
      catchPhrase: req.body.celebPhrase
  });

  celebrity.save((err) => {

        if (err) {

            next(err);

            return;

        }

        // STEP #3 redirect
        // ALWAYS redirect after a successful to POST to avoid resubmitting
        res.redirect('/celebrities');
          // You can only redirect to a URL
    });


});

router.get('/celebrities/:id', (req,res,next) => {

    const id = req.params.id;

    CelebrityModel.findById(id, (err, info) => {

        if (err) {
          console.log("Error!");
          next(err);

        }
        console.log(info);

        res.locals.celebInfo = info;

        res.render('celebrities/show.ejs');

    });

});

router.post('/celebrities/:id2/delete', (req,res,next) => {

    const id = req.params.id2;

    CelebrityModel.findByIdAndRemove(id, (err,todo) => {

      if (err) {
        next(err);
      }

      res.redirect('/celebrities');

    });

});

module.exports = router;
