require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const celebrityData = [
	{
		name: 'qwerty',
		occupation: 'qwerty',
		catchPhrase: 'qwerty qwer qwe qwertyui qwer qw'
	},
	{
		name: 'asdf',
		occupation: 'asdf',
		catchPhrase: 'asdf asd as asdfghj asdf'
	},
	{
		name: 'zxcv',
		occupation: 'zxcv',
		catchPhrase: 'zxcvzxc zxc zxc zx cx'
	}
];

const movieData = [
	{
		title: 'geqgeq  465',
		genre: 'fewq',
		plot: 'qwerty qfeq htrek et'
	},
	{
		title: 'asdf',
		genre: 'asdf',
		plot: 'jtreh whtrg ege'
	},
	{
		title: 'zxcv',
		genre: 'zxcv',
		plot: 'qeeqhtw ewq  qew etqt'
	}
];

// mongoose
// 	.connect('mongodb://localhost/celebrities', { useUnifiedTopology: true, useNewUrlParser: true })
// 	.then(async () => {
// 		const celebrities = await Celebrity.create(celebrityData);
// 		console.log(`${celebrities.length} celebritie created successfully`);
// 		mongoose.connection.close();
// 	})
// 	.catch((err) => console.log(err));

mongoose
	.connect('mongodb://localhost/movies', { useUnifiedTopology: true, useNewUrlParser: true })
	.then(async () => {
		const movies = await Movie.create(movieData);
		console.log(`${movies.length} movies created successfully`);
		mongoose.connection.close();
	})
	.catch((err) => console.log(err));
