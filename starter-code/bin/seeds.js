const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
	.connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
	.then((x) => {
		console.log(
			`Connected to Mongo! Database name: "${x.connections[0].name}"`
		);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});

const arrSeed = [
	{
		name: 'Clint Eastwood',
		occupation: 'Actor',
		catchPhrase:
			'El mundo se divide en dos categorías: los que tienen el revólver cargado y los que cavan.',
	},
	{
		name: 'Bono',
		occupation: 'Cantante',
		catchPhrase:
			'Los únicos ideales que vale la pena tener son los que puedes aplicar a la vida diaria. Y al mundo.',
	},
	{
		name: 'Mafalda',
		occupation: 'Comic',
		catchPhrase: 'A veces me siento como Noé, rodeada de animales!!',
	},
];

Celebrity.create(arrSeed)
	.then((celebrities) => {
		console.log('Celebrities created');
		mongoose.connection.close();
	})
	.catch((err) => console.log(`Error creating celebrities: ${err}`));
