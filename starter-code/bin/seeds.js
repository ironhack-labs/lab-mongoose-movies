const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose
	.connect('mongodb://localhost/the-library-example', { useNewUrlParser: true })
	.then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
	.catch((err) => console.error('Error connecting to mongo', err));

Celebrity.create(
	{
		name: 'Tom Cruise',
		occupation: 'actor',
		catchPhrase: 'Show ME the MONEY!!!!'
	},
	{
		name: 'Heath Ledger',
		occupation: 'actor',
		catchPhrase: 'Why so serious?'
	},
	{
		name: 'Robert DeNiro',
		occupation: 'actor',
		catchPhrase: "You talkin' to me?"
	}
);

Movie.create(
	{
		title: 'Jaws',
		genre: 'Suspense',
		plot: 'Shark attacks',
		actors: 'Tom Cruise'
	},
	{
		title: 'The Dark-Knight',
		genre: 'Action',
		plot: 'Superhero',
		actors: 'Heath Ledger'
	},
	{
		title: 'Sunshine Cleaning',
		genre: 'Drama',
		plot: 'Best is yet to come',
		actors: 'Robert DeNiro'
	}
);
