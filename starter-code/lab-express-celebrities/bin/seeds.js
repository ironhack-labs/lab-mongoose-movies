const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'lab-express-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [{
	title: "Harry Potter and the Order of the Phoenix ",
	genre: "Fantasy",
	plot: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts."
},
{
	title: "Star Wars: The Last Jedi",
	genre: "Fantasy",
	plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order."
},
{
	title: "Kill Bill",
	genre: "Action",
	plot: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
}];

Movie.collection.drop();

Movie.create(movies)
	.then(() => {
		console.log(`Created ${movies.length} movies`);
		mongoose.connection.close();
	})
	.catch((e)=>{
		console.log('Error on creating the database');
		throw (e);
	});