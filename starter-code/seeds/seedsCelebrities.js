require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movies');

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
	console.log(`Connected to database ${x.connections[0].name}`);
});

const celebrities = [
	{
		name: 'Taylor Swift',
		occupation: 'Singer',
		catchPhrase: 'People are going to judge you anyway, so you might as well do what you want.'
	},
	{
		name: 'Elisabeth Moss',
		occupation: 'Actress',
		catchPhrase: 'We are the story in print and we are writing the story ourselves.'
	},
	{
		name: 'Carrie Fisher',
		occupation: 'Actress',
		catchPhrase: 'Stay afraid, but do it anyway.'
	}
];

const movies = [
	{
		title: 'Les Misérables',
		genre: 'Musical',
		plot:
			"In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever."
	},
	{
		title: 'Silver Linings Playbook',
		genre: 'Romance',
		plot:
			'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.'
	},
	{
		title: 'Us',
		genre: 'Thriller',
		plot:
			"A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them."
	}
];

async function seedDB(collecName, data) {
	const count = await collecName.collection.countDocuments({});
	try {
		if (count !== 0) {
			await collecName.collection.drop();
			console.log('emptied database');
		}
		const celebCollection = await collecName.create(data);
		console.log(`Seed database with ${celebCollection}`);
	} catch (error) {
		console.log(`Something went wrong: ${error}`);
	} finally {
		mongoose.disconnect();
		console.log('Disconnected from database');
	}
}

seedDB(Celebrity, celebrities);
seedDB(Movie, movies);
