const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [
    { name: 'Cardi B', occupation: "Singer", catchPhrase: "Okuuuuuuurt" },
    { name: 'DJ Khaled', occupation: "Media Personality", catchPhrase: "Major key alert" },
    { name: 'Bart Simpson', occupation: "Student", catchPhrase: "¡Ay, Caramba!"}
];
mongoose
	.connect("mongodb://localhost/starter-code", {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((x) => {
		console.log(
			`Connected to Mongo! Database name: "${x.connections[0].name}"`
		);
		Celebrity.collection.drop();

		Celebrity.create(celebrities)
			.then((celebritiesFromDB) => {
				console.log(`created ${celebritiesFromDB.length} celebrities`);
			})
			.catch((err) => console.log(`Error inserting records in the DB: ${err}`));
		setTimeout(() => {
			mongoose.disconnect();
		}, 10000);
	})
	.catch((err) => console.error("Error connecting to mongo", err));