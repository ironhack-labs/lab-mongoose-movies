const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'movie-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
	{
		name: 'Tom Cruise',
		occupation: 'Actor',
		catchPhrase: 'Mission Impossible'
	},
	{
		name: 'Beyonce',
		occupation: 'Singer',
		catchPhrase: 'Single Ladies'
	},
	{
		name: 'Neymar',
		occupation: 'Soccer Player',
		catchPhrase: 'Copa do Mundo'
	}
];

const movies = [
	{
		title: 'Black Panther',
		genre: 'Action',
		plot:
			"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
	},
	{
		title: 'Creed',
		genre: 'Sport',
		plot:
			'The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.'
	},
	{
		title: 'The Fast and Furious',
		genre: 'Action',
		plot:
			"Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy."
	}
];

Celebrity.create(celebrities)
	.then((_) => {
		console.log(`created ${celebrities.length}`);
		Movie.create(movies).then((_) => {
			console.log(`created ${movies.length}`);
			mongoose.connection.close();
		});
	})
	.catch((err) => console.log(err));
