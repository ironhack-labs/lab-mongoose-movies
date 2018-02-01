const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');




router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrities) => {
        
        res.render('celebrities/index', {celebrities});
        
        console.log({ celebrities });
       
       
    });
});
module.exports = router;