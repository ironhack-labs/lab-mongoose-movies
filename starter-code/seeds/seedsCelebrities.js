require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
	console.log('Connected to database', x.connections[0].name);
});

const celebrities = [
	{
		name: 'Matthew McConaughey',
		occupation: 'Actor',
		catchPhrase: 'All right, all right, all right.'
	},
	{
		name: 'Taylor Swift',
		occupation: 'Singer',
		catchPhrase: 'People are going to judge you anyway, so you might as well do what you want.'
	},
	{
		name: 'Elisabeth Moss',
		occupation: 'Actress',
		catchPhrase: 'We are the story in print and we are writing the story ourselves.'
	}
];

async function seedDB() {
	try {
		await Celebrity.collection.drop().then(x => console.log('emptied database'));
		await Celebrity.create(celebrities).then(data => console.log(`Seed database with ${data}`));
	} catch (error) {
		console.log(`Something went wrong: ${error}`);
	} finally {
		mongoose.disconnect();
		console.log('Disconnected from database');
	}
}

seedDB();
