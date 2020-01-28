const mongoose = require('mongoose');
const CelebrityModel = require('../models/Celebrity');

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
