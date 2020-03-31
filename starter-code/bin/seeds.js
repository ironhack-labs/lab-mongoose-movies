const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';
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

Celebrity.create(celebrities)
	.then((_) => {
		console.log(`created ${celebrities.length}`);
		mongoose.connection.close();
	})
	.catch((err) => console.log(err));
