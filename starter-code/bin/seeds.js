const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrity-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const cels = [
	{
		name       : 'J Lo',
		ocupation  : 'singer',
		catchPhrase: 'Lo Lo'
	},
	{
		name       : 'Daddy Yankee',
		ocupation  : 'singer',
		catchPhrase: 'auuuu!!'
	},
	{
		name       : 'Kardashian',
		ocupation  : 'unknown',
		catchPhrase: '-'
	},
]


Celebrity.create(cels, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Created ${Celebrity.length} cels`);
	mongoose.connection.close();
});


