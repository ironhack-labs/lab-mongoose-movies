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
const Celebrity = require("../models/Celebrity.model");
const mongoose = require("mongoose");
const DB_NAME = "celebrities-movies";

mongoose
	.connect(`mongodb://localhost/${DB_NAME}`)
	.then(() => {
		console.log("Connected to database. Creating the seed info.");

		Celebrity.insertMany(celebrities).then((celebrities) => {
			console.log(`${celebrities.length} inserted`);
		});
	})
	.catch((error) => console.error(error));
