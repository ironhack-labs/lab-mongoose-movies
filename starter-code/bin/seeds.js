require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const celebrities = [
	{
		name: 'The Scarecrow',
		occupation: 'Zombie',
		catchPhrase: 'If only I had a brain...',
	},
	{
		name: 'Lord Percival Fredrickstein von Musel Klossowski de Rolo III',
		occupation: 'Tinkerer',
		catchPhrase: 'Your secret is safe with my indifference.',
	},
	{
		name: 'Appa',
		occupation: 'Mount summoned for fast travel',
		catchPhrase: 'BRRRRRRRrrrrr',
	},
];

const movies = [
	{
		title: 'There is someone in the tap',
		genre: 'Thriller',
		plot:
			'Plic, ploc, plic, ploc... Maooooow. Wow you imitate really well the cat. Thanks. No no I insist. Thanks a lot.',
	},
	{
		title: 'Panick in the coop',
		genre: 'Comedy',
		plot: 'Steven the chicken is under quarantine in the coop. How will he survive among these chicks!?',
	},
	{
		title: 'Evil cuddlies',
		genre: 'Horror',
		plot: `And what if... teddy bears weren't as lifeless as we expected when we don't see them ?`,
	},
];

async function insertData() {
	try {
		await Celebrity.insertMany(celebrities);
		await Movie.insertMany(movies);
		console.log('Database properly seeded with awesome characters & movies.');
	} catch (error) {
		console.log(error);
	}
}

mongoose
	.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((self) => {
		console.log(`Connection succeed on database : ${self.connection.name}`);
		return self.connection.dropDatabase();
	})
	.then(() => {
		insertData();
	})
	.catch((error) => console.log(error));
