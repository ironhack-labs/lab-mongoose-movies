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
	const username = req.body.username;
	const password = req.body.password;
	if (username === '' || password === '') {
		res.render('auth/signup', {
			message: 'Please fill username and password',
		});
	}

	User.findOne({ username })
		.then((user) => {
			if (user !== null) {
				return res.render('auth/signup', {
					message: 'Username already taken, please choose a different username',
				});
			}
			const salt = Number(bcrypt.genSalt(bcryptSalt));
			const hashPass = bcrypt.hashSync(password, salt);

			const newUser = new User({ username, password: hashPass });
			newUser.save((err) => {
				if (err) {
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
	if (req.session.errorCount <= 0) {
		req.session.errorMessage = null;
	}
	req.session.errorCount -= 1;
	// res.render('auth/login', { message: req.flash('error') });
	res.render('auth/login', { error: req.session.errorMessage });
});

router.post(
	'/login',
	// passport.authenticate('local', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/auth/login',
	// 	failureFlash: true,
	// 	passReqToCallback: true,
	// }),
	async (req, res, next) => {
		const { username, password } = req.body;
		// const username = req.body.username;
		// const password = req.body.password;
		try {
			const user = await User.findOne({ username });
			if (!user) {
				req.session.errorMessage = 'sorry, no one with that username found';
				req.session.errorCount = 1;
				res.redirect('/auth/login');
			}
			if (bcrypt.compareSync(password, user.password)) {
				req.session.currentUser = user;
				res.redirect('/');
			} else {
				req.session.errorMessage = 'wrong password';
				req.session.errorCount = 1;
				res.redirect('/auth/login');
			}
		} catch (error) {
			next(error);
		}
	},
);

router.get('/profile', (req, res, next) => {
	if (req.session.currentUser) {
		res.render('auth/profile', { user: req.session.currentUser });
	} else {
		req.session.errorCount = 1;
		req.session.errorMessage =
			'Sorry, you must be logged in to use that feature please log in';
		res.redirect('/auth/login');
	}
});

router.get('/logout', (req, res, next) => {
	// req.logout();
	req.session.destroy();
	res.redirect('/login');
});

router.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res) => {
	res.render('/auth/private', { user: req.user });
});

module.exports = router;
