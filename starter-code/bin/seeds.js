const celebrities = [
	{
		name: "Pepe Viyuela",
		occupation: "Comedian",
		catchPhrase: "La vida puede ser hermosa también cuando carece de sentido",
	},
	{
		name: "Rihanna",
		occupation: "Singer",
		catchPhrase: "Shine bright like a diamond",
	},
	{
		name: "Ernesto Sevilla",
		occupation: "Actor",
		catchPhrase: "Vamos a partirnos el culo",
	},
];
const movies = [
	{
		title: "El padrino",
		genre: "Action",
		plot:
			"Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York.",
	},
	{
		title: "Breaking Bad",
		genre: "Adventure",
		plot:
			"Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque",
	},
	{
		title: "La lista de Schindler",
		genre: "Fantasy",
		plot:
			"Un empresario alemán de gran talento para las relaciones públicas, busca ganarse la simpatía de los nazis",
	},
];
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
const mongoose = require("mongoose");
const DB_NAME = "celebrities-movies";

mongoose
	.connect(`mongodb://localhost/${DB_NAME}`)
	.then(() => {
		console.log("Connected to database. Creating the seed info.");

		// Celebrity.insertMany(celebrities).then((celebrities) => {
		// 	console.log(`${celebrities.length} inserted`);
		// });

		Movie.insertMany(movies).then((movies) => {
			console.log(`${movies.length} inserted`);
		});
	})
	.catch((error) => console.error(error));
