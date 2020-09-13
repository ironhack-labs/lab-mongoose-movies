const mongoose = require('mongoose');
const Movie = require('../models/movie.models');

const bdName = 'labmad-movies'
mongoose.connect(`mongodb://localhost/${bdName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const movies = [
    {
        title: 'El padrino',
        genre: 'Crimen',
        plot: 'En el verano de 1945, se celebra la boda de Connie (Talia Shire) y Carlo Rizzi (Gianni Russo). Connie es la única hija de Don Vito Corleone (Marlon Brando), jefe de una de las familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York. Don Vito además tiene otros tres hijos: su primogénito Sonny (James Caan), el endeble Fredo (John Cazale) y el más joven se todos, Michael (Al Pacino), un marine condecorado por su lucha en la Segunda Guerra Mundial que acaba de regresar a su hogar en Nueva York. Por designios de la fortuna, Michael terminará llevando la vida que no deseaba, tomando las riendas del negocio familiar, cambiando su moral y sus valores, para defender a toda costa a su familia.'
    },

    {
        title: 'Tu mejor amigo',
        genre: 'Comedia',
        plot: '¿Cuál es el sentido de la vida… si eres un perro? Este filme nos acerca, desde el punto de vista de un cachorrito, a la divertida y conmovedora historia de Bailey, un perro que tendrá la oportunidad de vivir varias vidas perrunas distintas, como Bailey, Buddy, Tino y Ellie, y así descubrir el propósito de su existencia al lado de los humanos.'
    },

    {
        title: 'Siempre a tu lado',
        genre: 'Drama',
        plot: 'Parker Wilson es un profesor de universidad que trabaja lejos de su casa. Todos los días se acerca a la estación de tren para trasladarse a su oficio. No obstante, un día en el que regresa del trabajo, encuentra en la estación de tren un perro, aún cachorro, de la raza akita. Sin saber con quién dejar al animal, decide llevárselo a su casa aun sabiendo que su esposa no quiere tener animales en casa. Con el paso del tiempo, Parker y "Hachi", su nueva mascota, se terminan haciendo inseparables, acompañando el perro a su dueño en todas las tareas de casa. Tanto es el grado en el que se quieren que Hachi, al crecer, termina yendo a buscar a su dueño cada día a la estación de tren, ya que le echa de menos. Sin embargo, un inesperado acontecimiento, termina cambiando de nuevo sus vidas'

    }
];

Movie.create(movies)
    .then(() => console.log('Se han creado'))
    .catch(err => console.log('ERROR:', err))




//const Celebrity = require('../models/celebrity.models');

//const bdName = 'labmad-celebrity'
//mongoose.connect(`mongodb://localhost/${bdName}`, { useNewUrlParser: true, useUnifiedTopology: true })

/*const celebrities = [
    {
        name: 'Leonardo DiCaprio',
        occupation: 'Actor',
        catchPhrase: 'I´m the king of the world'
    },

    {
        name: 'Paris Hilton',
        occupation: 'Socialite',
        catchPhrase: 'That´s Hot'
    },

    {
        name: 'Kendall Jenner',
        occupation: 'model',
        catchPhrase: 'for bible'

    }
];

Celebrity.create(celebrities)
    .then(() => console.log('Se han creado'))
    .catch(err => console.log('ERROR:', err))*/

