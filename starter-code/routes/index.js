const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});




module.exports = router;
