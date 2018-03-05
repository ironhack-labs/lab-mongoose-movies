const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');

// link celebrity
// const Celebrity = require('../models/celebrity.js');

// const celebrities = [
// 	{
// 		name: "Adam Sandler",
// 		occupation: "Comedian",
// 		catchPhrase: "My name is Adam Sandler. I'm not particularly talented. I'm not particularly good-looking. And yet I'm a multi-millionaire."
// 	},

// 	{
// 		name: "Dave Chappelle",
// 		occupation: "Comedian",
// 		catchPhrase: "I love being famous - it's phenomenal."
// 	},

// 	{
// 		name: "Jay Leno",
// 		occupation: "Talk Show Host",
// 		catchPhrase: "You're not famous until my mother has heard of you."
// 	}
// ];


//  Celebrity.create(celebrities, (err, celebrities) => {
//     if (err) {
//         throw err;
//     }

//     celebrities.forEach((celebrity) => {
//         console.log(celebrity.name);
//     });
//     mongoose.connection.close();
//   });


const Movie = require('../models/movie.js');

const movies = [
	{
		title: "Happy Gilmore",
		genre: "comedy",
		plot: "Hockey player turned into a pro golfer"
	},

	{
		title: "the Nutty Professor",
		genre: "Comedy",
		plot: "Grossly overweight yet good-hearted professor Sherman Klump takes a special chemical that turns him into the slim but obnoxious Buddy Love."
	},

	{
		title: "Home Improvement",
		genre: "TV",
		plot: "Character actor Mickey Jones died at the age of 76 on Wednesday, according to Variety."
	}
];

Movie.create(movies, (err, movies) => {
	if (err) {
		throw err;
	}

	movies.forEach((movie) => {
		console.log(movie.title);
	});
	mongoose.connection.close();
});



