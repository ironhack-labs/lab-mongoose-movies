// const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model.js')

// const dbName = 'cinema'
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

// const celebrities = [
// 	{
// 		name: 'Alex',
// 		occupation: 'Parado',
// 		catchPhrase: 'Teo ayudameeee'
// 	},

// 	{
// 		name: 'Germán',
// 		occupation: 'Docente',
// 		catchPhrase: 'YAY!'
// 	},

// 	{
// 		name: 'Ralu',
// 		occupation: 'Jefa',
// 		catchPhrase: 'Que caloooor!'
// 	}
// ]

// Celebrity.create(celebrities)
// 	.then(() => console.log(`Created ${celebrities.length} celebrities`))
// 	.catch(err => console.log('Ha habido un error', err))

const mongoose = require('mongoose')
const Movie = require('../models/movie.model.js')

const dbName = 'cinema'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const movies = [
	{
		title: 'El tiburon',
		genre: 'Terror',
		plot: 'Al ataquerr'
	},

	{
		title: 'Ironhack',
		genre: 'Drama',
		plot: 'Gente sufre para buscar curro'
	},

	{
		title: 'NBA',
		genre: 'Comedia',
		plot: 'Gente ala juega al basket'
	}
]

Movie.create(movies)
	.then(() => console.log(`Created ${movies.length} movies`))
	.catch(err => console.log('Ha habido un error', err))
