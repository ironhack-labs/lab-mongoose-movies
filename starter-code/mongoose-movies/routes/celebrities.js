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


module.exports = router;
