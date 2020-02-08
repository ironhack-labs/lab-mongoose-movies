const mongoose = require('mongoose');
const Movies = require('../models/movie.models');

const dbName = 'dbCelebrity';
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const arrayMovie = [{
    title: "Rinoceronte en el bosque",
    genre: "Gore",
    plot: "Un rinoceronte muere en un bosque y los ratoncitos que hay por hay lo devoran lentamente",
  },
  {
    title: "Crisantino",
    genre: "Comedia",
    plot: "Van dos y se cae el de en medio",
  },
  {
    title: "Azul marino en primavera",
    genre: "Drama",
    plot: "Una familia acude a la boda de su tio abuelo, ese dia sus dos hijos mueren en un accidente de coche y la familia insiste en que coman tarta de la boda",
  }
]

Movies.insertMany(arrayMovie)
  .then(object => console.log(`crear ${object}`))
  .then(() => mongoose.connection.close())