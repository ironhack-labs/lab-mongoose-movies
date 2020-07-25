var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', async (req, res, next) => {
    try {
        let celebrities = Celebrity.find();
        await celebrities.map(celebrity => {
            console.log('Our celebrities: ', celebrity)
            res.render('celebrities/index', { celebrity: celebrity });
        }) 
    } catch (error) {
        console.log('Error while getting celebrities from DB: ', error);
    }
});




module.exports = router;