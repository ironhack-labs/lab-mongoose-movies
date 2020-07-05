const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrities.model.js');
const Movie = require('../models/Movies.model.js');

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
  
const celebrities = [
    {
    name: 'Jim Carrey',
    occupation: 'Actor',
    catchPhrase: 'Buenos días, y por si no nos vemos luego, buenos dias buenas tardes y buenas noches',
    },
    {
    name: 'Tom Hanks',
    occupation: 'Actor',
    catchPhrase: 'Tal vez no sea muy listo pero si se lo que es el amor',
    },
    {
    name: 'Meryl Streep',
    occupation: 'Actress',
    catchPhrase: 'Cuando los dioses quieren castigarnos atienden nuestras plegarias',
    },
    {
    name: 'Jaime Fox',
    occupation: 'Actor',
    catchPhrase: 'Yo sólo le he disparado, las balas y la caída le han matado',
    },
    {
    name: 'Emma Stone',
    occupation: 'Actress',
    catchPhrase: 'Soy la Annie saludable ahora, y la gente saludable lee libros. Y viaje, y se ejercita. Y cuida sus mentes',
    }
]

const movies = [
    {
    title: 'The Thruman Show',
    genre: 'Comedy',
    plot: 'The film stars Jim Carrey as Truman Burbank who grew up living an ordinary life that unbeknown to him, takes place on a large set populated by actors for a television show about him, until he discovers the truth and decides to escape.',
    },
    {
    title: 'Forrest gump',
    genre: 'Comedy',
    plot: 'Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His mama teaches him the ways of life and leaves him to choose his destiny.',
    },
    {
    title: 'Out of Africa',
    genre: 'Drama',
    plot: 'Karen Blixen recalls her life in Africa where in 1913 she, as an unmarried wealthy Danish woman, is spurned by her Swedish nobleman lover and accepts a marriage proposal from his brother Baron Bror Blixen, who moves to the vicinity of Nairobi, British East Africa.',
    },
    {
    title: 'Django',
    genre: 'Western',
    plot: 'In 1858, a bounty hunter named Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Broomhilda, who along with him were sold separately by his former owner for trying to escape.',
    },
    {
    title: 'Maniac',
    genre: 'Science Fiction',
    plot: 'Maniac follows two strangers, Annie Landsberg and Owen Milgrim, who connect during a mind-bending pharmaceutical trial conducted by Neberdine Pharmaceutical Biotech and overseen by their scientists Dr. James K. Mantleray and Dr. Azumi Fujita.',
    }
]

Celebrity.deleteMany({})
    .then(() => Celebrity.insertMany(celebrities))
    .then(() => console.log('Celebrities added!'))
    .catch((er) => console.log(er))

Movie.deleteMany({})
    then(() => Movie.insertMany(movies))
    .then(() => {
        console.log('Movies added!')
        mongoose.connection.close()
    })
    .catch((er) => console.log(er))