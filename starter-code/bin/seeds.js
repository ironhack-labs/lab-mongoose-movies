const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const celebrities = [{
	name: "Cameron Diaz",
	occupation: "actress",
	catchPhrase: "I dont know"
}, {
	name: "Melissa McCarthy",
	occupation: "actress",
	catchPhrase: "I dont know"
}, {
	name: "Johnny Depp",
	occupation: "actor",
	catchPhrase: "I dont know"
}];

Celebrity.create(celebrities)
	.then(celebritiesDB => {
		console.log(`Created ${celebritiesDB.length} celebreties in the database`);
		mongoose.connection.close();
	})
	.catch(error => {
		console.error(`Oh no. An error happened, check this out: ${error}`);
	});

const movies = [{
	title: "Harry Poter and the chamber of secrets",
	genre: "Fantasy",
	plot: "Something about magic"
}, {
	title: "Harry Potter and the philosophers stone",
	genre: "Fantasy",
	plot: "Something about magic"
}, {
	title: "Harry Potter and the prisoner of askaban",
	genre: "Magic",
	plot: "Some magic"
}];

Movie.create(movies)
	.then(moviesDB => {
		console.log(`Created ${moviesDB.length} movies in the database`);
		mongoose.connection.close();
	})
	.catch(error => {
		console.error(`Oh no. An error happened, check this out: ${error}`);
	});