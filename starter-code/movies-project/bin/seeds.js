
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movies = require('../models/Movie');
const dbName = 'lab-express-celebrities';

mongoose.connect(`mongodb://localhost/${dbName}`);

 const celebrities = [{
		name: "ACTOR 1",
		occupation: "Actress",
		catchPhrase: "Stay afraid, but do it anyway. What’s important is the action. You don’t have to wait to be confident. Just do it and eventually the confidence will follow."
	}, 
	{
		name: "ACTOR 2",
		occupation: "Lawyer and Writer",
		catchPhrase: "There is no magic to achievement. It's really about hard work, choices, and persistence." 
	},
	{
		name: "ACTOR 3",
		occupation: "Mathematician",
		catchPhrase: "Know how to learn. Then, want to learn."
	},
	{
		name: "ACTOR 4",
		occupation: "Actress",
		catchPhrase: "Believe in yourself, and go for it"
	}
];
const movies = [
	{
		title: "Movie 1",
		genre: "Drama",
		plot: "average movie"
	}
];
 Celebrity.collection.drop();
 Celebrity.create(celebrities)
	.then(() => {
		console.log(`Created ${celebrities.length} celebrity`);
		mongoose.connection.close();
	})
	.catch((e)=>{
		console.log('Error on creating the database');
		throw (e);
	});
	Movies.collection.drop();
	Movies.create(movies)
	.then(() => {
		console.log(`Created ${movies.length} movies`);
		mongoose.connection.close();
	}) 