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

module.exports = router;
