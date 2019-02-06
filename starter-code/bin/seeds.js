const mongoose = require('mongoose');
const Celeb = require('../models/celebrity.js');

mongoose
	.connect('mongodb://localhost/celebritiesBBDD')
	.then(() => {
		Celeb.insertMany(celebrities);
	})
	.catch(() => {
		console.error('Error connecting to mongo', err);
	});

// const celebrities = [
// 	{
// 		name: 'Nombre1',
// 		occupation: 'Actor',
// 		catchPhrase: 'Siempre soy el malo'
// 	},
// 	{
// 		name: 'Nombre2',
// 		occupation: 'Director',
// 		catchPhrase: 'Youtube es mi reino'
// 	},
// 	{
// 		name: 'Nombre3',
// 		occupation: 'Sinverguenza',
// 		catchPhrase: 'A mucha honra'
// 	}
// ];
