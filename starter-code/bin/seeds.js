const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const dbName = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);

let celebrities = [
	{
		name: 'Emma Watson',
		occupation: 'Actriz',
		catchPhrase: 'Alguna Frase...'
	},
	{
		name: 'Daniel Radcliffe',
		occupation: 'Actor',
		catchPhrase: 'Alguna Frase1...'
	},
	{
		name: 'Rupert Grint',
		occupation: 'Actor',
		catchPhrase: 'Alguna Frase2...'
	}
];

let movies = [
	{
		title: 'Harry Potter y la piedra filosofal',
		genre: 'Fantasía',
		plot:
			'Harry Potter es un niño huérfano que vive con sus únicos parientes vivos, la familia Dursley, en un barrio residencial inglés. En su cumpleaños número 11, Harry es visitado por un misterioso individuo llamado Rubeus Hagrid, quien le revela que realmente él es un mago bastante popular en el mundo mágico por haber sobrevivido al ataque mortal de Lord Voldemort cuando sólo tenía un año de edad. '
	},
	{
		title: 'Harry Potter y la cámara secreta',
		genre: 'Fantasía',
		plot:
			'Preparándose para una visita de un cliente potencial del tío Vernon, los Dursley confinan a Harry Potter a su cuarto. Allí encuentra a Dobby, un elfo doméstico, que le advierte que no debe regresar a Hogwarts ya que es inseguro.'
	},
	{
		title: 'Harry Potter y el prisionero de Azkaban',
		genre: 'Fantasía',
		plot:
			'Tras un altercado en la casa de sus tíos, los Dursley, en el cual por accidente infla como un globo a su tía Marge, Harry huye rápidamente sabiendo que podría ser expulsado de Hogwarts por haber usado magia fuera del colegio.'
	}
];

Movie.create(movies, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Created ${movies.length} movies`);
	mongoose.connection.close();
});

Celebrity.create(celebrities, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Created ${celebrities.length} celebrities`);
	mongoose.connection.close();
});
