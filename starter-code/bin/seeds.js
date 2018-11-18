const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

// Connect Mongo a create a database celebrities if doesn't exists
mongoose
	.connect('mongodb://localhost/celebrities', {
		useNewUrlParser: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});


// Data to insert in Mongo
const initialCelebrities = [{
		name: 'Woody Allen',
		occupation: 'Director',
		catchPhrase: `Eighty percent of success is showing up.`
	},
	{
		name: 'Queen',
		occupation: 'Musician',
		catchPhrase: `I'm just a musical prostitute, my dear.`
	},
	{
		name: 'Johnny depp',
		occupation: 'Actor',
		catchPhrase: `If you love two people at the same time, choose the second one. Because if you really loved the first one, you wouldn’t have fallen for the second.`
	}
]


Celebrity.collection.drop()
// .then(() => {
//   console.log(`Collection drop ok`)
// })
// .catch((error)=>{
//   console.log(`Error droping collection ${error}`)
// })


Celebrity.create(initialCelebrities)
	.then(() => {
		console.log(`Inserted in  BBDD MONGO ${initialCelebrities.length} Celebrities`)
	})
	.catch((error) => {
		console.log(`Error inserting data in mongo :${error}`)
	})