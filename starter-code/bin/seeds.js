const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const dbtitle = 'celebrity-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useNewUrlParser: true, useUnifiedTopology: true});
Celebrity.collection.drop();
Movie.collection.drop();


let celebrities = [
	{
		name: 'Paris Hilton',
		occupation: 'rich',
		catchPhrase: 'jklñ',
	},
	{
		name: 'Will Smith',
		occupation: 'actor',
		catchPhrase: 'asdf',
	},
	{
		name: 'Beyonce',
		occupation: 'singer',
		catchPhrase: 'blabla',
	}
];


let movies = [
	{
		title: 'Avatar',
		genre: 'science-finction',
		plot: 'jklñ',
	},
	{
		title: 'Inside out',
		genre: 'animation',
		plot: 'asdf',
	},
	{
		title: 'frozen2',
		genre: 'dfdfss',
		plot: 'blabla',
	}
];

Celebrity.create(celebrities)
	.then(data => console.log('celebrities created', data))
	.then(() => mongoose.disconnect())
	.catch(err => console.log('Error while creating the celebrity', err));

Movie.create(movies)
	.then(data => console.log('movies created', data))
	.then(() => mongoose.disconnect())
	.catch(err => console.log('Error while creating the movie', err));

