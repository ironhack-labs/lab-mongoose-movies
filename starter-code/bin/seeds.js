///////////////////////////7


    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/lab-mongoose-movies');
    const Celebrity = require('./models/Celebrities');
    const Movie = require('./models/Movies');

  Movie.create([
    {
      title: 'Zombieland',
      genre: 'Comedy',
      plot: 'Cuatro amigos tratan de sobrevivir a un apocalipsis zombie',
    },
    {
      title: 'El Quinto Elemento',
      genre: 'Accion, Comedia',
      plot: 'Co co co corven y Lillu salvan al mundo',
    },
    {
      title: 'El Resplandor',
      genre: 'Terror',
      plot: 'Una familia cuidad un hotel lleno de fantasmas',
    }
    ]).then(() => console.log('Everything went well!')).catch(err => console.log(err)); 