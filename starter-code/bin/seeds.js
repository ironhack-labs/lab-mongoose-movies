const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

const nameDb= 'ironhack-movies'

mongoose.connect(`mongodb://localhost/${nameDb}`, { useNewUrlParser: true, useUnifiedTopology: true })

Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [
    {
        name: 'Robert de Niro',
        occupation: 'Actor, producer and director',
        catchPhrase: 'The talent is in the choices.',
        photo: 'https://fotos01.laopinioncoruna.es/2019/08/17/328x206/actor-robert.jpg'
    },
    {
        name: 'Adele',
        occupation: 'Singer',
        catchPhrase: 'I have never been more normal than I am now.',
        photo: 'https://www.elgoldigital.com/wp-content/uploads/adele-when-we-were-young-900x600.jpg'
    },
    {
        name: 'Sigmund Freud',
        occupation: 'Psychoanalyst',
        catchPhrase: 'Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.',
        photo: 'https://www.biografiasyvidas.com/monografia/freud/fotos/freud_420a.jpg'
    },
    {
        name: 'Elon Musk',
        occupation: 'Entrepreneur, industrial designer and engineer',
        catchPhrase: 'When something is important enough, you do it even if the odds are not in your favor.',
        photo: 'https://static2.abc.es/media/summum/2019/11/22/elon-musk-congreso-afp-kcMB--620x349@abc.jpg'
    },
    {
        name: 'Sheldon Cooper',
        occupation: 'Theoretical physicist',
        catchPhrase: 'Bazinga!',
        photo: 'https://static1.laverdad.es/www/multimedia/201707/20/media/cortadas/sheldoncooper-kuVE-U403879672882iE-624x385@La%20Verdad.jpg'
    }
]

const movies = [
    {
        title:'Regreso al futuro',
        genre: 'Ciencia Ficción/Aventura',
        plot: 'La cinta transcurre en el año 1985, una época en la que el joven Marty McFly lleva una existencia anónima con su novia Jennifer. Amigo del excéntrico profesor Emmett Brown, una noche le acompaña a probar su nuevo experimento: viajar en el tiempo usando un DeLorean modificado. Sin duda alguna, se trata de una investigación realmente arriesgada pero que puede aportarles un enorme éxito en el futuro.'
    },
    {
        title:'Bohemian Rhapsody',
        genre: 'Biografía/Drama',
        plot: 'Una crónica del meteórico ascenso al Olimpo de la música de Queen, a través de sus icónicas canciones y su revolucionario sonido, desde que Mercury se uniera a Brian May y Roger Taylor, hasta el macroconcierto Live Aid de 1985 en el estadio de Wembley, seis años antes de que Mercury muriera de forma prematura.'
    },
    {
        title:'El Señor de los anillos: La Comunidad del anillo',
        genre: 'Fantasía/Aventura',
        plot: 'Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.'
    },
    {
        title:'El sexto sentido',
        genre: 'Suspenso/Drama',
        plot: 'El doctor Malcom Crowe es un conocido psicólogo infantil de Philadelphia que vive obsesionado por el doloroso recuerdo de un joven paciente desequilibrado al que fue incapaz de ayudar. Cuando conoce a Cole Sear, un aterrorizado y confuso niño de ocho años que necesita tratamiento, ve que se le presenta la oportunidad de redimirse haciendo todo lo posible por ayudarlo. Sin embargo, el doctor Crowe no está preparado para conocer la terrible verdad acerca del don sobrenatural de su paciente: recibe visitas no deseadas de espíritus atormentados.'
    },
    {
        title:'Forrest Gump',
        genre: 'Romántico/Drama',
        plot: 'Al tener el coeficiente intelectual de un niño, Forrest Gump siempre ha sido considerado el “tonto” de clase. Bajo las faldas de su madre se siente protegido y junto a su amiga Jenny es feliz, aunque en su propio mundo. Un problema en su columna vertebral no le impide convertirse en un ágil corredor. Ya más mayor, Forrest luchará en la guerra de Vietnam y conocerá al mismísimo presidente de los Estados Unidos. Llegará a ser muy rico, pero para Forrest hay algo que no cambia: el amor de su vida es y será Jenny.'
    },
]

Celebrity.create(celebrities)
    .then(allCelebrities => console.log(allCelebrities.length, 'celebrities have been created.'))
    .catch(err => console.log('ERROR: ', err))

Movie.create(movies)
    .then(allMovies => console.log(allMovies.length, 'movies have been created'))
    .catch(err => console.log('ERROR', err))