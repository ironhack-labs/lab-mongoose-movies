const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
	Celebrity.find().then((celebrity) => {
		res.render('celebrities/index', celebrity);
	});
});

module.exports = router;