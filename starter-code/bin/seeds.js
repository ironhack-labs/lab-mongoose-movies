//What we require?
require('dotenv').config();
const mongoose = require('mongoose');

/////////////////////////////////////////////////////////////////////////////////

//Require models
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/////////////////////////////////////////////////////////////////////////////////
//START CELEBRITIES

//Connect DB
//const dbtitle = 'Celebrities&Movies'; //DB title of celebrities and movies (dbtitle2 not create another db)
mongoose.connect('mongodb://localhost/celebrity', {useNewUrlParser: true, useUnifiedTopology: true});

//Avoid duplicate to DB
Celebrity.collection.drop();

//Initial array for DB
const celebrities = [{
		name: "Dani",
		occupation: "LT",
		catchPhrase: "Luego vemos..."
	},
	{
		name: "Javi",
		occupation: "TA",
		catchPhrase: "¡A ver, chicos!"
	},
	{
		name: "Pablo",
		occupation: "TA",
		catchPhrase: "¿Cómo vais?¿Bien?Genial"
	},
	{
		name: "Júlia",
		occupation: "TA",
		catchPhrase: "Del segundo módulo ni me acuerdo..."
	}
];

//Call model and create method to save to DB .create(array, (feedback))
Celebrity.create(celebrities, (err) => {
	if (err) {throw (err);}
	console.log(`Created ${celebrities.length} celebrities`);
	mongoose.connection.close();
});

//END CELEBRITIES
/////////////////////////////////////////////////////////////////////////////////
//START MOVIES

//Connect DB
// doesn't work to save nameDB because in app.js only find the first dbtitle

mongoose.connect('mongodb://localhost/movie', {useNewUrlParser: true, useUnifiedTopology: true});

//Avoid duplicate to DB
Movie.collection.drop();

//Initial array for DB
const movies = [{
		title: "Jurassic Park",
		genre: "Thriller",
		plot: "Dinosaurios y parque de atracciones"
	},
	{
		title: "Avatar",
		genre: "Ciencia ficción",
		plot: "Pocahontas con extraterres"
	},
	{
		title: "El rey León",
		genre: "Animación",
		plot: "Shackespire y sus movidas con leones"
	},
	{
		title: "Venganza",
		genre: "Acción",
		plot: "<< Buena suerte >>"
	}
];

//Call model and create method to save to DB .create(array, (feedback))
Movie.create(movies, (err) => {
	if (err) {
		throw (err);
	}
	console.log(`Created ${movies.length} movies`);
	mongoose.connection.close();
});