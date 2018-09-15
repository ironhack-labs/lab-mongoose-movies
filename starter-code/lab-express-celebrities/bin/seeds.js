const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-express-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
		name: "Carrie Fisher",
		occupation: "Actress",
		catchPhrase: "Stay afraid, but do it anyway. What’s important is the action. You don’t have to wait to be confident. Just do it and eventually the confidence will follow."
	}, 
	{
		name: "Michelle Obama",
		occupation: "Lawyer and Writer",
		catchPhrase: "There is no magic to achievement. It's really about hard work, choices, and persistence." 
	},
	{
		name: "Katherine Johnson",
		occupation: "Mathematician",
		catchPhrase: "Know how to learn. Then, want to learn."
	},
	{
		name: "Emma Watson",
		occupation: "Actress",
		catchPhrase: "Believe in yourself, and go for it"
	},
	{
		name: "Fabiola Gianotti",
		occupation: "Scientist",
		catchPhrase: "Never abandon your dreams. You may regret it for the rest of your life."
	},
	{
		name: "Zaha Hadid",
		occupation: "Architect",
		catchPhrase: "You have to really believe not only in yourself; you have to believe that the world is actually worth your sacrifices."
	}
];

Celebrity.collection.drop();

// Celebrity.create(celebrities, (err) => {
// 	if (err) {throw (err)}
// 	console.log(`Created ${celebrities.length} celebrity`)
// 	mongoose.connection.close();
// });

Celebrity.create(celebrities)
	.then(() => {
		console.log(`Created ${celebrities.length} celebrity`);
		mongoose.connection.close();
	})
	.catch((e)=>{
		console.log('Error on creating the database');
		throw (e);
	});