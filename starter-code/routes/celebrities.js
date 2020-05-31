const express = require('express');
const Celebrity = require('../models/celebrity');
const route = express.Router();

route.get('/', (req, res, next) => {
	Celebrity.find()
		.then((celebrities) => res.render('celebrities/index', { celebrities }))
		.catch((err) => next);
});

module.exports = route;
