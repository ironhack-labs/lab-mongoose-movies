const express = require('express');
const celebrityRouter = express.Router();

const Celebrity = require('../models/celebrity-model');

celebrityRouter.get('/celebrities', (req, res, next)=>{
    Celebrity.find()
    .then(responseFromDB => {
        console.log('Celebrities:', responseFromDB);
        res.render('celebrities/celebrity-list', {blah: responseFromDB});
    })
    .catch(err => console.log('Error while getting the movies from DB: ', err));
});




module.exports=celebrityRouter;