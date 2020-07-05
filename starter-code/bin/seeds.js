const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrities.model.js')

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

Celebrity.deleteMany({})
.then(() => Celebrity.insertMany(celebrities))
.then((celebrity) => {
    console.log('Celebrities added!')
    mongoose.connection.close()
})
.catch((er) => console.log(er))