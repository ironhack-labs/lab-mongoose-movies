const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', { success: req.flash('success'), failure: req.flash('failure') });
});

module.exports = router;