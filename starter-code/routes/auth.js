const express = require('express');
const ensureLogin = require('connect-ensure-login');
const bcrypt = require('bcryptjs');
const router = express.Router();

const passport = require('passport');

const bcryptSalt = 10;
const User = require('../models/User');

router.get('/signup', (req, res, next) => {
	res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
	const { username, password } = req.body;
	if (username === '' || password === '') {
		res.render('auth/signup', {
			message: 'Please fill username and password',
		});
	}
	User.findOne({ username })
		.then((user) => {
			if (user !== null) {
				req.flash(
					'error',
					'Username already taken, please choose a different username',
				);

				res.redirect('/auth/signup');
				return;
			}
			const salt = Number(bcrypt.genSalt(bcryptSalt));
			const hashPass = bcrypt.hashSync(password, salt);

			const newUser = new User({ username, password: hashPass });
			newUser.save((err) => {
				if (err) {
					req.flash('error', 'Something went wrong saving the user');
					return res.render('auth/signup', {
						mesage: 'Something went wrong saving the user',
					});
				} else {
					return res.redirect('/');
				}
			});
		})
		.catch((err) => {
			next(err);
		});
});

router.get('/login', (req, res, next) => {
	res.render('auth/login');
});

router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/auth/login',
		failureFlash: true,
		passReqToCallback: true,
	}),
);

router.get(
	'/profile',
	ensureLogin.ensureLoggedIn('/auth/login'),
	(req, res, next) => {
		res.render('auth/profile', { user: req.user });
	},
);

router.get('/logout', (req, res, next) => {
	req.logout();
	res.redirect('/login');
});

router.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res) => {
	res.render('auth/private', { user: req.user });
});

router.get(
	'/google',
	passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/plus.login',
			// 'https://www.googleapis.com/auth/plus.profile.emails.read',
			// 'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email',
		],
	}),
);

router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/',
		successRedirect: '/auth/private-page',
	}),
);

module.exports = router;
