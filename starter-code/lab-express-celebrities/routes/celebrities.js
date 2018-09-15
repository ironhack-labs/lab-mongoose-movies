"use strict";
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
	Celebrity.find()
		.then(celebrities => {
			console.log(celebrities);
			res.render('celebrities/index', {celebrities, title: 'Celebrities'});
		})
		.catch( e => {
			console.log('Error on retrieving the list of celebrities');
			res.next(e);
		})
});

module.exports = router;