require('dotenv').config();
const mongoose = require('mongoose');
const celebrity = require('../models/celebrity');

const celebrities = [
	{
		name: 'Kim Kardashian',
		occupation: 'Being Kim Kardashian',
		catchPhrase: `I'm kind of shocked I'm getting a fashion award when I'm naked most of the time`
	},
	{
		name: 'Madonna',
		occupation: 'Singer',
		catchPhrase: 'Express Yourself'
	},
	{
		name: 'Gillian Anderson',
		occupation: 'Actor',
		catchPhrase: `I don't have time for your convenient ignorance`
	}
];

mongoose
	.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
	.then((self) => {
		console.log(`Connected to ${self.connection.name}`);

		celebrity
			.create(celebrities)
			.then((celebrities) => {
				celebrities.forEach((celebrity) => {
					console.log(celebrity.name);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(`Error occured while connecting to the Database ${err}`);
	});
