const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/celebrities', async function (req, res, next) {
   try {
        let celebrities = await Celebrity.find();
        res.status(200)
            .render("index", {
                celebrities: celebrities
            });

    } catch(err) {

       next(err);
   }

});

module.exports = router;