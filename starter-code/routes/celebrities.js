const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', async(req, res, next) => {
    try {
        const celebList = await Celebrity.find();
        console.log(celebList, "celeblist");
        res.render('celebrities/index', {celebrity : celebList});
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;