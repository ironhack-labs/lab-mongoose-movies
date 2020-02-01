require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movies');
const { celebrities, movies } = require('./data');

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
	console.log(`Connected to database ${x.connections[0].name}`);
});

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
