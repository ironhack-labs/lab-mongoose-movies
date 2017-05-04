const express = require('express');
const Celebrity = require('../models/celebrity-model');
const celebrityRoute  = express.Router();

celebrityRoute.get('/celebrities', (req, res, next) => {
    Celebrity.find( (err, celebrityList) => {
       if (err) {
         next(err);
         return;
       }

       res.render('celebrity/celebrity-list-view.ejs', {celebrity: celebrityList});
     });
});

module.exports = celebrityRoute;
