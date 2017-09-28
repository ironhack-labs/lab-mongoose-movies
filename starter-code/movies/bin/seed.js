const Film = require('../models/movies');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hollywood');

const movData = [
{
	name : 'Kiss Kiss Bang Bang',
	genre : 'Comedy',
	plot : 'A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor.',
},
{
	name : 'Definitely, Maybe',
	genre : 'Romance',
	plot : 'A political consultant tries to explain his impending divorce and past relationships to his 11-year-old daughter.',
},
{
	name : 'Gladiator',
	genre : 'Action Adventure',
	plot : 'When a Roman General is betrayed, and his family murdered by an emperor\'s corrupt son, he comes to Rome as a gladiator to seek revenge. ',
},
]

Film.create(movData, (err,movies) => {
	if (err) throw err
	movies.forEach(console.log)
	mongoose.disconnect()
})