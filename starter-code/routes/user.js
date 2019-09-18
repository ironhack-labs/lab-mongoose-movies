const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.get('/signup', (req, res, next) => {
	res.render('user/signup');
});

router.get('/profile', (req, res, next) => {
	if (req.session.currentUser) {
		res.render('user/profile');
	} else {
		res.redirect('/login');
	}
});

router.post('/signup', (req, res, next) => {
	const username = req.body.theUsername;
	const password = req.body.thePassword;

	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	User.create({
		username: username,
		password: hash
	})
		.then(() => {
			res.redirect('/profile');
		})
		.catch((err) => {
			next(err);
		});
});

router.get('/login', (req, res, next) => {
	res.render('user/login');
});

router.post('/login', (req, res, next) => {
	const theUsername = req.body.theUsername;
	const thePassword = req.body.thePassword;

	User.findOne({ username: theUsername })
		.then((user) => {
			if (!user) {
				res.send('username does not exist');
			}
			if (bcrypt.compareSync(thePassword, user.password)) {
				// Save the login in the session!
				req.session.currentUser = user;
				res.redirect('/profile');
			} else {
				res.redirect('/');
			}
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/logout', (req, res, next) => {
	req.session.destroy((err) => {
		// can't access session here
		res.redirect('/login');
	});
});

module.exports = router;
