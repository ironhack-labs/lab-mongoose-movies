const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', async (req, res, next) => {
	const celebrities = await Celebrity.find();
	res.render('celebrities/index', { celebrity: celebrities });
});

module.exports = router;
